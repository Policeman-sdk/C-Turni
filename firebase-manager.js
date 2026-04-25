import { initializeApp }          from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
         signOut, onAuthStateChanged, deleteUser }
                                  from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, doc, collection, setDoc, getDoc, getDocs, deleteDoc,
         onSnapshot, query, where, orderBy, limit, serverTimestamp, arrayUnion, updateDoc, writeBatch }
                                  from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getMessaging, getToken, onMessage }
                                  from "https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging.js";
import { getStorage, ref as storageRef, uploadString, getDownloadURL, deleteObject }
                                  from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";

// ── Configurazione ──────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyCKwzJACHHoWqqsqA9s_fGsajIdVJgZ5n4",
  authDomain:        "c-turni.firebaseapp.com",
  databaseURL:       "https://c-turni-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "c-turni",
  storageBucket:     "c-turni.firebasestorage.app",
  messagingSenderId: "1085494457115",
  appId:             "1:1085494457115:web:bff6e0174afa4d7c3d99be",
  measurementId:     "G-3H53Z47TX9"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);
const storage = getStorage(app);

// FCM — solo se il browser supporta service worker
let messaging = null;
try { messaging = getMessaging(app); } catch(e) { console.warn('FCM non supportato:', e.message); }

// VAPID key pubblica — SOSTITUISCI con la tua dalla Firebase Console
// Project Settings → Cloud Messaging → Web Push certificates → Genera coppia di chiavi
const VAPID_KEY = 'BKgPA4D4Bt32xzKutxhNG_r2jv7eR-Ad6hw_7GXAbEdm3KQFbRTZRXuazshlVt2MqAMS_61dUzek_RyD6FBdbAY';


// ── Esponi funzioni Firebase Auth su window (accessibili da script non-module) ──

window._fbAuth       = auth;

window._fbSignIn     = signInWithEmailAndPassword;

window._fbCreateUser = createUserWithEmailAndPassword;

window._fbSignOut    = signOut;

window._fbDeleteUser = deleteUser;

window._fbDoc        = doc;

window._fbCollection = collection;

window._fbSetDoc     = setDoc;

window._fbGetDoc     = getDoc;

window._fbDeleteDoc  = deleteDoc;

window._fbGetDocs    = getDocs;

window._fbDb         = db;

// ── Splash screen: definita subito così funziona anche senza sessione ──
window._hideSplash = function() {
  var s = document.getElementById('splash-screen');
  if(!s) return;
  var bar = document.getElementById('splash-bar');
  if(bar) bar.style.width = '100%';
  setTimeout(function(){
    s.style.opacity = '0';
    s.style.visibility = 'hidden';
    setTimeout(function(){ if(s.parentNode) s.parentNode.removeChild(s); }, 500);
  }, 300);
};
window._splashProgress = function(pct) {
  var bar = document.getElementById('splash-bar');
  if(bar) bar.style.width = pct + '%';
};

// ── Listener onSnapshot attivi (per cleanup) ─────────────────────
const _unsubscribers = [];
// Listener notifiche separato per evitare duplicati
var _unsubNotifiche = null;

// ── Helper: reparto corrente dalla sessione ──────────────────────
function _reparto() {
  try {
    var s = JSON.parse(localStorage.getItem('ct_session') || 'null');
    return s && s.reparto ? s.reparto.toLowerCase().replace(/\s+/g,'_') : null;
  } catch(e) { return null; }
}

// ── Helper: toast (usa quello dell'app se disponibile) ───────────
function _toast(msg, type) {
  if(typeof window.toast === 'function') window.toast(msg, type || 'ok');
  else console.log('[Firebase]', msg);
}

// ── Ferma tutti gli onSnapshot attivi ───────────────────────────
function _stopListeners() {
  _unsubscribers.forEach(function(u){ try{ u(); }catch(e){} });
  _unsubscribers.length = 0;
  // Ferma anche il listener notifiche separato
  if(_unsubNotifiche){ try{ _unsubNotifiche(); }catch(e){} _unsubNotifiche = null; }
}

// ── Avvia onSnapshot per turni, todo, personale, utenti ─────────
function _startListeners(reparto) {
  _stopListeners();
  if(!reparto) return;
  console.log('[Firebase] Avvio listener real-time per reparto:', reparto);

  // Turni — sovrascrittura diretta come v3.5.0 (Firestore è la fonte di verità)
  var turniRef = collection(db, 'reparti', reparto, 'turni');
  _unsubscribers.push(onSnapshot(turniRef, function(snap) {
    var arr = [];
    snap.forEach(function(d){ arr.push(d.data()); });
    localStorage.setItem('ct_t', JSON.stringify(arr));
    if(typeof window.renderTurni === 'function') window.renderTurni();
    if(typeof window.renderOggi  === 'function') window.renderOggi();
    if(typeof window.stats       === 'function') window.stats();
    if(typeof window.aggiornaWidget === 'function') window.aggiornaWidget();
    if(typeof window.renderDash  === 'function') window.renderDash();
    var calPag = document.getElementById('pag-cal');
    if(calPag && calPag.classList.contains('on') && typeof window.renderCal === 'function') window.renderCal();
  }, function(e){ console.warn('onSnapshot turni:', e.message); }));

  // Todo e Agenda (personali per utente, non per reparto)
  var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
  if(session && session.userId) {
    var _uid = session.userId;
    var todoRef = collection(db, 'utenti', _uid, 'todo');
    _unsubscribers.push(onSnapshot(todoRef, function(snap) {
      var arr = [];
      snap.forEach(function(d){ arr.push(d.data()); });
      // Merge intelligente: non sovrascrivere todo locali recenti (ultimi 10s)
      var localTd = [];
      try { localTd = JSON.parse(localStorage.getItem('ct_td') || '[]'); } catch(e) {}
      var now10s2 = Date.now() - 10000;
      var tdRecenti = localTd.filter(function(t){
        return t.id > now10s2 && !arr.some(function(fb){ return String(fb.id) === String(t.id); });
      });
      var mergedTd = arr.concat(tdRecenti);
      localStorage.setItem('ct_td', JSON.stringify(mergedTd));
      if(typeof window.renderTodo === 'function') window.renderTodo();
      if(typeof window.renderWidgetTodo === 'function') window.renderWidgetTodo();
    }, function(e){ console.warn('onSnapshot todo:', e.message); }));

    var agendaRef = collection(db, 'utenti', _uid, 'agenda');
    _unsubscribers.push(onSnapshot(agendaRef, function(snap) {
      var arr = [];
      snap.forEach(function(d){ arr.push(d.data()); });
      // Merge intelligente: non sovrascrivere appuntamenti locali recenti (ultimi 10s)
      var localAg = [];
      try { localAg = JSON.parse(localStorage.getItem('ct_ag') || '[]'); } catch(e) {}
      var now10s = Date.now() - 10000;
      var agRecenti = localAg.filter(function(a){
        return a.id > now10s && !arr.some(function(fb){ return String(fb.id) === String(a.id); });
      });
      var merged = arr.concat(agRecenti);
      merged.sort(function(a,b){ return a.data > b.data ? 1 : -1; });
      localStorage.setItem('ct_ag', JSON.stringify(merged));
      if(typeof window.renderAgenda === 'function') window.renderAgenda();
      if(typeof window.renderWidgetAgenda === 'function') window.renderWidgetAgenda();
      if(typeof window.renderAgendaPg === 'function') {
        var pagAg = document.getElementById('pag-ag');
        if(pagAg && pagAg.classList.contains('on')) window.renderAgendaPg();
      }
    }, function(e){ console.warn('onSnapshot agenda:', e.message); }));
  }

  // Profilo utente corrente — ascolta su /utenti/{uid} (aggiornato da admin e da saveUserProfile)
  if(session && session.userId) {
    var meRef = doc(db, 'utenti', session.userId);
    _unsubscribers.push(onSnapshot(meRef, function(snap) {
      if(snap.exists()) {
        var prof = snap.data();
        var oldMe = JSON.parse(localStorage.getItem('ct_me') || 'null');
        // Preserva ava locale
        var firestoreAva = prof.ava || '';
        var localAva = (oldMe && oldMe.ava) ? oldMe.ava : '';
        if(!firestoreAva && localAva) {
          prof.ava = localAva;
        }
        // ── Preserva SEMPRE privacy locale — è l'utente che la controlla, non Firestore
        // Il listener onSnapshot può arrivare prima che Firestore abbia propagato l'aggiornamento
        if(oldMe && oldMe.privacy) {
          // Mantieni sempre il valore locale di condividiTurni (più aggiornato)
          if(!prof.privacy) {
            prof.privacy = oldMe.privacy;
          } else {
            // Sovrascrivi condividiTurni con il valore locale — è la fonte di verità
            prof.privacy.condividiTurni = oldMe.privacy.condividiTurni;
            // Preserva tosAccepted locale se Firestore non ce l'ha
            if(!prof.privacy.tosAccepted && oldMe.privacy.tosAccepted) {
              prof.privacy.tosAccepted = oldMe.privacy.tosAccepted;
            }
          }
        }
        localStorage.setItem('ct_me', JSON.stringify(prof));
        // Aggiorna ct_p con il nuovo ava
        if(prof.ava) {
          try {
            var P = JSON.parse(localStorage.getItem('ct_p') || '[]');
            var uid2 = prof.uid || (JSON.parse(localStorage.getItem('ct_session')||'null')||{}).userId;
            var aggiornato = false;
            for(var pi=0; pi<P.length; pi++){
              if(P[pi].uid === uid2 || P[pi].id === prof.id){
                P[pi].ava = prof.ava;
                aggiornato = true;
                break;
              }
            }
            if(aggiornato) localStorage.setItem('ct_p', JSON.stringify(P));
          } catch(e3) {}
        }
        // Aggiorna ct_session con il nuovo ava
        try {
          var sess2 = JSON.parse(localStorage.getItem('ct_session') || 'null');
          if(sess2 && prof.ava && prof.ava.startsWith('https')) {
            sess2.ava = prof.ava;
            sess2.fotoURL = prof.ava;
            localStorage.setItem('ct_session', JSON.stringify(sess2));
          }
        } catch(e4) {}
        // Aggiorna ct_session e ct_me se ruolo/stato cambiato
        try {
          var sess = JSON.parse(localStorage.getItem('ct_session') || 'null');
          if(sess) {
            var changed = (prof.ruolo && prof.ruolo !== sess.ruolo) || (prof.stato && prof.stato !== sess.stato);
            if(changed) {
              sess.ruolo = prof.ruolo || sess.ruolo;
              sess.stato = prof.stato || sess.stato;
              localStorage.setItem('ct_session', JSON.stringify(sess));
              var ruoloLabel = prof.ruolo === 'comandante' ? 'Comandante' : prof.ruolo === 'vice' ? 'Vice Comandante' : 'Addetto';
              _toast('Ruolo aggiornato: ' + ruoloLabel, 'ok');
            }
          }
        } catch(e2) {}
        if(typeof window.aggUI === 'function') window.aggUI();
      }
    }, function(e){ console.warn('onSnapshot profilo:', e.message); }));
  }

  // Utenti del reparto (per Gestione Membri)
  var usersRef = collection(db, 'reparti', reparto, 'utenti');
  _unsubscribers.push(onSnapshot(usersRef, function(snap) {
    var arr = [];
    snap.forEach(function(d){ arr.push(d.data()); });
    localStorage.setItem('ct_users', JSON.stringify(arr));

    // Auto-ripristino: se l'utente corrente non è più nella lista del reparto, ri-salvalo
    try {
      var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
      var me = JSON.parse(localStorage.getItem('ct_me') || 'null');
      if(session && session.userId && me && me.reparto) {
        var uid = session.userId;
        var meInLista = arr.some(function(u){ return u.uid === uid || u.email === session.email; });
        var meReparto = (me.reparto||'').toLowerCase().replace(/\s+/g,'_');
        var repartoCorrente = reparto.toLowerCase().replace(/\s+/g,'_');
        // Ripristina solo se il reparto del listener corrisponde al reparto corrente dell'utente
        if(!meInLista && meReparto === repartoCorrente && me.stato !== 'pending' && me.stato !== 'rejected') {
          console.log('[C-Turni] Auto-ripristino profilo nel reparto:', reparto);
          window.FirebaseModule.saveUserProfile(uid, me, reparto).catch(function(e){
            console.warn('auto-ripristino profilo:', e.message);
          });
        }
      }
    } catch(e2) { console.warn('auto-ripristino check:', e2.message); }

    // Aggiorna ct_session e ct_me se il ruolo dell'utente corrente è cambiato
    try {
      var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
      if(session && session.userId) {
        var myProfile = arr.find(function(u){
          return u.uid === session.userId || u.email === session.email || u.email === session.userId;
        });
        if(myProfile && myProfile.ruolo) {
          var oldMe = JSON.parse(localStorage.getItem('ct_me') || 'null');
          // Preserva ava da ct_me locale se myProfile non ce l'ha
          if(oldMe && oldMe.ava && oldMe.ava.startsWith('https') && (!myProfile.ava || !myProfile.ava.startsWith('https'))) {
            myProfile.ava = oldMe.ava;
            myProfile.fotoURL = oldMe.ava;
          }
          // Aggiorna ct_me con il profilo aggiornato — preserva privacy locale se Firestore non ce l'ha
          var _oldMePrivacy = oldMe && oldMe.privacy ? oldMe.privacy : null;
          if(_oldMePrivacy && (!myProfile.privacy || !myProfile.privacy.tosAccepted)) {
            myProfile.privacy = _oldMePrivacy;
          }
          localStorage.setItem('ct_me', JSON.stringify(myProfile));
          if(myProfile.ruolo !== session.ruolo || myProfile.stato !== session.stato) {
            session.ruolo = myProfile.ruolo;
            session.stato = myProfile.stato || session.stato;
            localStorage.setItem('ct_session', JSON.stringify(session));
            if(typeof window.aggUI === 'function') window.aggUI();
            _toast('Ruolo aggiornato: ' + (myProfile.ruolo === 'comandante' ? 'Comandante' : myProfile.ruolo === 'vice' ? 'Vice Comandante' : 'Addetto'), 'ok');
          }
        }
      }
    } catch(e) { console.warn('onSnapshot ruolo sync:', e.message); }

    // Collega uid Firebase ai profili ct_p per nome (aggiorna foto/grado in calendario)
    try {
      var _P = lsG('ct_p', []);
      var _chg = false;
      arr.forEach(function(u) {
        if(!u.uid || !u.nome) return;
        var uN = ((u.nome||'')+' '+(u.cognome||'')).toLowerCase().trim();
        var uNi = ((u.cognome||'')+' '+(u.nome||'')).toLowerCase().trim();
        _P.forEach(function(p) {
          if(p.uid) return;
          var pn = (p.nome||'').toLowerCase().trim();
          if(pn===uN||pn===uNi||uN.indexOf(pn)!==-1||pn.indexOf(uN)!==-1||uNi.indexOf(pn)!==-1){
            p.uid=u.uid; if(u.grado&&!p.grado)p.grado=u.grado;
            // Aggiorna sempre ava se l'utente Firebase ha un URL https più recente
            if(u.ava && u.ava.startsWith('https')) p.ava=u.ava;
            else if(u.ava&&!p.ava) p.ava=u.ava;
            _chg=true;
          }
        });
      });
      if(_chg) lsS('ct_p', _P);
    } catch(e2) {}

    if(typeof window.AuthModule !== 'undefined') window.AuthModule.renderGestioneMemebri();
    if(typeof window._renderStatoComando === 'function') window._renderStatoComando();
    if(typeof window.renderPers === 'function') window.renderPers();
  }, function(e){ console.warn('onSnapshot utenti:', e.message); }));

  // Persone (ct_p) — sincronizzazione real-time del personale del reparto
  var personeRef = collection(db, 'reparti', reparto, 'persone');
  _unsubscribers.push(onSnapshot(personeRef, function(snap) {
    var arr = []; snap.forEach(function(d){ arr.push(d.data()); });
    if(arr.length > 0) {
      // Merge: mantieni voci locali non ancora su Firebase
      var localP = [];
      try { localP = JSON.parse(localStorage.getItem('ct_p') || '[]'); } catch(e) {}
      var fbIds = arr.map(function(p){ return String(p.id); });
      var soloLocali = localP.filter(function(p){ return p.id && fbIds.indexOf(String(p.id)) === -1; });
      lsS('ct_p', arr.concat(soloLocali));
      if(typeof window.renderPers === 'function') window.renderPers();
    }
  }, function(e){ console.warn('onSnapshot persone:', e.message); }));

  // Todo condivisi del reparto
  var todoCondRef = collection(db, 'reparti', reparto, 'todo_condivisi');
  _unsubscribers.push(onSnapshot(todoCondRef, function(snap) {
    var arr = []; snap.forEach(function(d){ arr.push(d.data()); });
    localStorage.setItem('ct_td_condivisi', JSON.stringify(arr));
    if(typeof window.renderTodoCondivisi === 'function') window.renderTodoCondivisi();
  }, function(e){ console.warn('onSnapshot todo_condivisi:', e.message); }));

  // Agenda condivisa del reparto
  var agCondRef = collection(db, 'reparti', reparto, 'agenda_condivisa');
  _unsubscribers.push(onSnapshot(agCondRef, function(snap) {
    var arr = []; snap.forEach(function(d){ arr.push(d.data()); });
    arr.sort(function(a,b){ return a.data>b.data?1:-1; });
    localStorage.setItem('ct_ag_condivisa', JSON.stringify(arr));
    if(typeof window.renderAgendaCondivisa === 'function') window.renderAgendaCondivisa();
  }, function(e){ console.warn('onSnapshot agenda_condivisa:', e.message); }));

  // Orari preset del reparto (sync per tutti i membri)
  var orariRef = doc(db, 'reparti', reparto, 'config', 'orari');
  _unsubscribers.push(onSnapshot(orariRef, function(snap) {
    if(snap.exists()) {
      var orari = snap.data();
      localStorage.setItem('ct_orari', JSON.stringify(orari));
      if(typeof window.renderOrariPreset === 'function') window.renderOrariPreset();
    }
  }, function(e){ console.warn('onSnapshot orari:', e.message); }));

  // Notifiche personali da Firebase (per utente corrente)
  if(session && session.userId) {
    // Distruggi listener precedente per evitare duplicati
    if(_unsubNotifiche) { try { _unsubNotifiche(); } catch(e){} _unsubNotifiche = null; }
    var notifRef = query(
      collection(db, 'utenti', session.userId, 'notifiche'),
      orderBy('ts', 'desc'),
      limit(30)
    );
    _unsubNotifiche = onSnapshot(notifRef, function(snap) {
      var arr = [];
      snap.forEach(function(d){ arr.push(Object.assign({id: d.id}, d.data())); });
      arr.sort(function(a,b){ return new Date(b.ts||0)-new Date(a.ts||0); });
      localStorage.setItem('ct_notif_fb', JSON.stringify(arr));
      // Aggiorna badge
      var nonLette = arr.filter(function(n){ return !n.letta; }).length;
      var localNL = JSON.parse(localStorage.getItem('ct_notifiche')||'[]');
      var totNonLette = nonLette + localNL.filter(function(n){ return !n.letta; }).length;
      var b = document.getElementById('notif-badge');
      if(b){ b.style.display = totNonLette>0?'flex':'none'; b.textContent = totNonLette>9?'9+':String(totNonLette); }
      // Se il drawer è aperto, aggiorna la lista
      var dr = document.getElementById('notif-drawer');
      if(dr && dr.classList.contains('open')) renderNotifCenter();
    }, function(e){ console.warn('onSnapshot notifiche:', e.message); });
  }
}

// ════════════════════════════════════════════════════════════════
// FirebaseModule  API pubblica esposta su window
// ════════════════════════════════════════════════════════════════
window.FirebaseModule = {

  // ── Chiamato da AuthModule.login() dopo _saveSession ────────
  onLogin: async function(session) {
    if(!session) return;
    var rep = (session.reparto||'').toLowerCase().replace(/\s+/g,'_');
    try {
      var uid = session.userId;
      var profSnap = await getDoc(doc(db, 'utenti', uid));
      if(profSnap.exists()) {
        var prof = profSnap.data();
        if(!prof.id) prof.id = prof.uid || uid;
        prof.uid = uid;
        // Preserva ava locale se Firestore non ce l'ha
        var localMe = JSON.parse(localStorage.getItem('ct_me') || 'null');
        if(!prof.ava && localMe && localMe.ava) prof.ava = localMe.ava;
        // Preserva privacy locale
        if(localMe && localMe.privacy) {
          if(!prof.privacy) prof.privacy = localMe.privacy;
          else if(localMe.privacy.condividiTurni !== undefined) prof.privacy.condividiTurni = localMe.privacy.condividiTurni;
        }
        localStorage.setItem('ct_me', JSON.stringify(prof));
        // Verifica TOS
        await window.FirebaseModule.verificaEForzaPrivacy(uid, prof);
        if(typeof aggUI === 'function') aggUI();
      }
      // Carica turni (logica v3.5.0 — sovrascrittura diretta)
      if(rep && !rep.startsWith('privato_')) {
        var turniSnap = await getDocs(collection(db, 'reparti', rep, 'turni'));
        var turni = []; turniSnap.forEach(function(d){ turni.push(d.data()); });
        if(turni.length > 0) localStorage.setItem('ct_t', JSON.stringify(turni));
      }
      await this.syncUsers();
      _toast('Dati sincronizzati dal cloud', 'ok');
    } catch(e) {
      console.warn('FirebaseModule.onLogin:', e.message);
    }
    if(rep) _startListeners(rep);
    setTimeout(function(){ window.FirebaseModule.initFCM().catch(function(e){ console.warn('initFCM:', e.message); }); }, 2000);
  },

  // ── Chiamato da AuthModule.init() quando sessione gia' presente ─
  onSessionRestore: async function(session) {
    if(!session || session.isDebug) return;
    var repartoRaw = session.reparto || ('privato_' + session.userId);
    var rep = repartoRaw.toLowerCase().replace(/\s+/g,'_');
    var isPrivato = !repartoRaw || repartoRaw.startsWith('privato_');
    // Mostra banner "Sincronizzazione in corso..."
    var _showSyncBanner = function(msg) {
      var b = document.getElementById('sync-banner');
      if(!b) {
        b = document.createElement('div');
        b.id = 'sync-banner';
        b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99998;background:rgba(91,159,255,.95);color:#fff;font-size:12px;font-weight:700;text-align:center;padding:8px;letter-spacing:.5px;transition:opacity .3s';
        document.body.appendChild(b);
      }
      b.textContent = msg; b.style.opacity = '1'; b.style.display = 'block';
    };
    var _hideSyncBanner = function() {
      var b = document.getElementById('sync-banner');
      if(b){ b.style.opacity='0'; setTimeout(function(){ b.style.display='none'; }, 400); }
    };
    _showSyncBanner('⟳ Sincronizzazione dati...');
    window._widgetSyncPending = true;
    _startListeners(rep);
    try {
      // ── Logica v3.5.0: sovrascrittura diretta, Firestore è la fonte di verità ──

      // Turni
      if(!isPrivato) {
        var turniSnap = await getDocs(collection(db, 'reparti', rep, 'turni'));
        var turni = []; turniSnap.forEach(function(d){ turni.push(d.data()); });
        if(turni.length > 0) localStorage.setItem('ct_t', JSON.stringify(turni));
      }

      var uid = session.userId;

      // Todo personali
      var todoSnap = await getDocs(collection(db, 'utenti', uid, 'todo'));
      var todo = []; todoSnap.forEach(function(d){ todo.push(d.data()); });
      if(todo.length > 0) localStorage.setItem('ct_td', JSON.stringify(todo));

      // Agenda personale
      var agendaSnap = await getDocs(collection(db, 'utenti', uid, 'agenda'));
      var agenda = []; agendaSnap.forEach(function(d){ agenda.push(d.data()); });
      if(agenda.length > 0) localStorage.setItem('ct_ag', JSON.stringify(agenda));

      // Profilo utente
      var profSnap = await getDoc(doc(db, 'utenti', uid));
      if(profSnap.exists()) {
        var prof = profSnap.data();
        // Preserva ava locale se Firestore non ce l'ha
        var _lm = JSON.parse(localStorage.getItem('ct_me') || 'null');
        if(!prof.ava && _lm && _lm.ava) prof.ava = _lm.ava;
        // Preserva privacy locale (condividiTurni è controllato dall'utente)
        if(_lm && _lm.privacy) {
          if(!prof.privacy) prof.privacy = _lm.privacy;
          else if(_lm.privacy.condividiTurni !== undefined) prof.privacy.condividiTurni = _lm.privacy.condividiTurni;
        }
        localStorage.setItem('ct_me', JSON.stringify(prof));
        // Verifica TOS
        await window.FirebaseModule.verificaEForzaPrivacy(uid, prof);
        // Ripristina preferenze
        if(prof.myPid) localStorage.setItem('ct_my_pid', String(prof.myPid));
        if(typeof window._straordLoadFirebase === 'function') window._straordLoadFirebase(prof);
        if(prof.meteoCitta) lsS('ct_meteo_citta', prof.meteoCitta);
        if(prof.tema !== undefined) {
          lsS('ct_tema', prof.tema);
          if(typeof window.caricaTema === 'function') window.caricaTema();
        } else {
          // Firestore non ha tema — usa il valore locale (l'utente lo ha impostato manualmente)
          if(typeof window.caricaTema === 'function') window.caricaTema();
        }
        if(prof.licenzePool && prof.licenzePool.length) {
          var _U2 = lsG('ct_u', []); var _found2 = false;
          for(var _i2=0; _i2<_U2.length; _i2++){
            if(_U2[_i2].id===prof.id || _U2[_i2].uid===prof.uid){ _U2[_i2].licenzePool=prof.licenzePool; _U2[_i2].ferieRes=prof.ferieRes||30; _found2=true; break; }
          }
          if(!_found2 && prof.id) _U2.push(prof);
          lsS('ct_u', _U2);
        } else {
          // Firestore non ha licenzePool — preserva le licenze locali
          var _U2loc = lsG('ct_u', []);
          var _meLocal = JSON.parse(localStorage.getItem('ct_me') || 'null');
          if(_meLocal && _meLocal.licenzePool && _meLocal.licenzePool.length) {
            prof.licenzePool = _meLocal.licenzePool;
            prof.ferieRes = _meLocal.ferieRes || 30;
            // Salva su Firebase per non perderle di nuovo
            if(window.FirebaseModule && prof.uid) {
              window.FirebaseModule.saveUserProfile(prof.uid, prof, prof.reparto).catch(function(){});
            }
          }
        }
        if(prof.ct_recuperi) lsS('ct_recuperi', prof.ct_recuperi);
        if(prof.notif_prefs) lsS('ct_notif_prefs', prof.notif_prefs);
        if(prof.notif_pre !== undefined) lsS('ct_notif_pre', prof.notif_pre);
      }

      await this.syncUsers();

      // Carica personale (ct_p) da Firestore — necessario su nuovo dispositivo
      try {
        if(!isPrivato) {
          var personeSnap = await getDocs(collection(db, 'reparti', rep, 'persone'));
          var persone = []; personeSnap.forEach(function(d){ persone.push(d.data()); });
          if(persone.length > 0) {
            var localP = lsG('ct_p', []);
            var fbIds = persone.map(function(p){ return String(p.id); });
            var soloLocali = localP.filter(function(p){ return p.id && fbIds.indexOf(String(p.id)) === -1; });
            lsS('ct_p', persone.concat(soloLocali));
          }
        }
      } catch(e) { console.warn('carica persone:', e.message); }

      // Orari preset
      try {
        var orariSnap = await getDoc(doc(db, 'reparti', rep, 'config', 'orari'));
        if(orariSnap.exists()) localStorage.setItem('ct_orari', JSON.stringify(orariSnap.data()));
      } catch(e) {}

      // Todo/agenda condivisi
      try {
        var tdCondSnap = await getDocs(collection(db, 'reparti', rep, 'todo_condivisi'));
        var tdCond = []; tdCondSnap.forEach(function(d){ tdCond.push(d.data()); });
        localStorage.setItem('ct_td_condivisi', JSON.stringify(tdCond));
        var agCondSnap = await getDocs(collection(db, 'reparti', rep, 'agenda_condivisa'));
        var agCond = []; agCondSnap.forEach(function(d){ agCond.push(d.data()); });
        agCond.sort(function(a,b){ return a.data>b.data?1:-1; });
        localStorage.setItem('ct_ag_condivisa', JSON.stringify(agCond));
      } catch(e) {}

      // Ri-renderizza tutto
      var me = lsG('ct_me', null);
      if(typeof window.aggUI          === 'function') window.aggUI();
      if(typeof window.renderTurni    === 'function') window.renderTurni();
      if(typeof window.renderOggi     === 'function') window.renderOggi();
      if(typeof window.stats          === 'function') window.stats();
      if(typeof window.aggiornaWidget === 'function') window.aggiornaWidget();
      if(me && typeof window.renderWidgetProssimo === 'function') window.renderWidgetProssimo(me);
      if(me && typeof window.renderWidgetMeteo    === 'function') window.renderWidgetMeteo(me);
      if(typeof window.renderTodoAg   === 'function') window.renderTodoAg();
      if(typeof window.renderAgendaPg === 'function') window.renderAgendaPg();
      if(typeof window.renderOrariPreset === 'function') window.renderOrariPreset();
      if(typeof window.renderRecuperi === 'function') window.renderRecuperi();
      if(typeof window.aggNotifStatus === 'function') window.aggNotifStatus();
      window._widgetSyncPending = false;
      _hideSyncBanner();
      if(typeof window._hideSplash === 'function') window._hideSplash();
    } catch(e) {
      console.warn('onSessionRestore load:', e.message);
      window._widgetSyncPending = false;
      _hideSyncBanner();
      if(typeof window._hideSplash === 'function') window._hideSplash();
    }
    setTimeout(function(){ if(typeof window._ripristinaPagina === 'function') window._ripristinaPagina(); }, 400);
    setTimeout(function(){ window.FirebaseModule.initFCM().catch(function(e){ console.warn('initFCM restore:', e.message); }); }, 2500);
    setTimeout(function(){
      if(typeof window.scheduleAllTodoNotif === 'function') window.scheduleAllTodoNotif();
      if(typeof window.scheduleNotifMattutina === 'function') window.scheduleNotifMattutina();
      if(typeof window.controllaNotifiche === 'function') window.controllaNotifiche();
      if(typeof window.schedulaPreTurniFirebase === 'function') window.schedulaPreTurniFirebase();
    }, 1500);
  },

  // ── Sincronizza ct_users da Firestore ───────────────────────
  syncUsers: async function() {
    var rep = _reparto();
    if(!rep) return;
    try {
      var snap = await getDocs(collection(db, 'reparti', rep, 'utenti'));
      var arr = [];
      snap.forEach(function(d){ arr.push(d.data()); });
      if(arr.length > 0) {
        localStorage.setItem('ct_users', JSON.stringify(arr));
        // Collega automaticamente uid Firebase ai profili ct_p per nome
        var P = lsG('ct_p', []);
        var changed = false;
        arr.forEach(function(u) {
          if(!u.uid || !u.nome) return;
          var uNome = ((u.nome||'')+' '+(u.cognome||'')).toLowerCase().trim();
          var uNomeInv = ((u.cognome||'')+' '+(u.nome||'')).toLowerCase().trim();
          P.forEach(function(p) {
            if(p.uid) return; // già collegato
            var pn = (p.nome||'').toLowerCase().trim();
            if(pn === uNome || pn === uNomeInv ||
               uNome.indexOf(pn) !== -1 || pn.indexOf(uNome) !== -1 ||
               uNomeInv.indexOf(pn) !== -1) {
              p.uid = u.uid;
              if(u.grado && !p.grado) p.grado = u.grado;
              if(u.ava && !p.ava) p.ava = u.ava;
              changed = true;
            }
          });
        });
        if(changed) {
          lsS('ct_p', P);
          if(typeof window.FirebaseModule !== 'undefined')
            window.FirebaseModule.savePersona().catch(function(){});
        }
      }
    } catch(e) { console.warn('syncUsers:', e.message); }
  },

  // ── Salva array turni su Firestore ──────────────────────────
  saveTurni: async function(turniArr) {
    var rep = _reparto();
    if(!rep || !turniArr) { console.warn('[saveTurni] rep o turniArr mancante'); return; }
    try {
      var arr = typeof turniArr === 'string' ? JSON.parse(turniArr) : turniArr;
      if(!arr.length) return;

      // Raggruppa per anno-mese — aggiorna solo i mesi presenti, non tocca gli altri
      var mesiPresenti = {};
      arr.forEach(function(t){
        if(!t.id || !t.data) return;
        var ym = t.data.substring(0,7); // "2026-03"
        if(!mesiPresenti[ym]) mesiPresenti[ym] = [];
        mesiPresenti[ym].push(t);
      });

      var writes = [];
      Object.keys(mesiPresenti).forEach(function(ym){
        var turniMese = mesiPresenti[ym];
        var localIds = turniMese.map(function(t){ return String(t.id); });
        // Scrivi/aggiorna tutti i turni del mese
        turniMese.forEach(function(t){
          writes.push(setDoc(doc(db, 'reparti', rep, 'turni', String(t.id)), t));
        });
        // Cancella da Firestore solo i turni di QUESTO mese non più presenti in locale
        writes.push(
          getDocs(query(collection(db, 'reparti', rep, 'turni'), where('data', '>=', ym+'-01'), where('data', '<=', ym+'-31')))
          .then(function(snap){
            var del = [];
            snap.forEach(function(d){
              if(localIds.indexOf(d.id) === -1) del.push(deleteDoc(doc(db, 'reparti', rep, 'turni', d.id)));
            });
            return Promise.all(del);
          })
        );
      });

      await Promise.all(writes);
      console.log('[saveTurni] OK —', arr.length, 'turni su', rep);
    } catch(e) {
      console.warn('saveTurni:', e.message);
      _toast('Errore sync turni: ' + (e.code || e.message), 'err');
    }
  },

  // ── Riavvia i listener sul nuovo reparto dopo trasferimento ──
  loadReparto: async function(reparto) {
    if(!reparto) return;
    var rep = reparto.toLowerCase().replace(/\s+/g,'_');
    // Aggiorna ct_session con il nuovo reparto
    try {
      var sess = JSON.parse(localStorage.getItem('ct_session') || 'null');
      if(sess) { sess.reparto = rep; localStorage.setItem('ct_session', JSON.stringify(sess)); }
    } catch(e) {}
    // Riavvia i listener sul nuovo reparto
    _startListeners(rep);
    // Carica turni iniziali del nuovo reparto
    try {
      var turniSnap = await getDocs(collection(db, 'reparti', rep, 'turni'));
      var turni = []; turniSnap.forEach(function(d){ turni.push(d.data()); });
      localStorage.setItem('ct_t', JSON.stringify(turni));
      if(typeof window.renderTurni === 'function') window.renderTurni();
      if(typeof window.renderOggi  === 'function') window.renderOggi();
      if(typeof window.stats       === 'function') window.stats();
    } catch(e) { console.warn('loadReparto turni:', e.message); }
    // Carica utenti del nuovo reparto
    try { await this.syncUsers(); } catch(e) {}
  },

  deleteTurno: async function(tid) {
    var rep = _reparto();
    if(!rep || !tid) return;    try {
      await deleteDoc(doc(db, 'reparti', rep, 'turni', String(tid)));
    } catch(e) { console.warn('deleteTurno:', e.message); _toast('Errore eliminazione turno', 'err'); }
  },

  // ── Salva array todo su Firestore (personale, per utente) ───
  saveTodo: async function(todoArr) {
    var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
    var uid = session && session.userId;
    if(!uid || !todoArr) return;
    try {
      var arr = typeof todoArr === 'string' ? JSON.parse(todoArr) : todoArr;
      var writes = arr.map(function(t){
        if(!t.id) return Promise.resolve();
        return setDoc(doc(db, 'utenti', uid, 'todo', String(t.id)), t);
      });
      await Promise.all(writes);
    } catch(e) { console.warn('saveTodo:', e.message); }
  },

  // ── Salva array agenda su Firestore (personale, per utente) ─
  saveAgenda: async function(agArr) {
    var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
    var uid = session && session.userId;
    if(!uid || !agArr) return;
    try {
      var arr = typeof agArr === 'string' ? JSON.parse(agArr) : agArr;
      var writes = arr.map(function(a){
        if(!a.id) return Promise.resolve();
        return setDoc(doc(db, 'utenti', uid, 'agenda', String(a.id)), a);
      });
      await Promise.all(writes);
    } catch(e) { console.warn('saveAgenda:', e.message); }
  },

  // ── Elimina documento todo da Firestore ─────────────────────
  deleteTodo: async function(id) {
    var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
    var uid = session && session.userId;
    if(!uid) return;
    try { await deleteDoc(doc(db, 'utenti', uid, 'todo', String(id))); } catch(e) { console.warn('deleteTodo:', e.message); }
    // Cancella notifiche_push pendenti con titolo corrispondente
    try {
      var TD = JSON.parse(localStorage.getItem('ct_td')||'[]');
      // Il doc è già stato rimosso da ct_td prima di chiamare deleteTodo — non possiamo recuperare il titolo
      // Puliamo tutti i pending dell'utente con scheduleAt futuro che non hanno più un todo corrispondente
      var snap = await getDocs(collection(db, 'notifiche_push'));
      var tdIds = (JSON.parse(localStorage.getItem('ct_td')||'[]')).map(function(t){return "\u2705 C-Turni \u2014 "+t.tit;});
      snap.forEach(async function(d){
        var data=d.data();
        if(data.uid===uid && data.title && data.title.startsWith('\u2705 C-Turni') && !data.inviata){
          if(tdIds.indexOf(data.title)===-1) await deleteDoc(d.ref);
        }
      });
    } catch(e){}
  },

  // ── Elimina documento agenda da Firestore ───────────────────
  deleteAgenda: async function(id) {
    var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
    var uid = session && session.userId;
    if(!uid) return;
    try { await deleteDoc(doc(db, 'utenti', uid, 'agenda', String(id))); } catch(e) { console.warn('deleteAgenda:', e.message); }
    // Cancella notifiche_push pendenti per appuntamenti eliminati
    try {
      var snap = await getDocs(collection(db, 'notifiche_push'));
      var agTitoli = (JSON.parse(localStorage.getItem('ct_ag')||'[]')).map(function(a){return '\uD83D\uDCC5 C-Turni \u2014 '+a.tit;});
      snap.forEach(async function(d){
        var data=d.data();
        if(data.uid===uid && data.title && data.title.startsWith('\uD83D\uDCC5 C-Turni') && !data.inviata){
          if(agTitoli.indexOf(data.title)===-1) await deleteDoc(d.ref);
        }
      });
    } catch(e){}
  },

  // ── Todo condivisi con il reparto ───────────────────────────
  saveTodoCondiviso: async function(item) {
    var rep = _reparto();
    if(!rep || rep.startsWith('privato_')) {
      _toast('Devi essere in un reparto per condividere', 'err');
      return;
    }
    if(!item || !item.id) return;
    try {
      await setDoc(doc(db, 'reparti', rep, 'todo_condivisi', String(item.id)), item);
    } catch(e) {
      console.warn('saveTodoCondiviso:', e.message);
      _toast('Errore salvataggio todo condiviso: ' + e.message, 'err');
    }
  },
  deleteTodoCondiviso: async function(id) {
    var rep = _reparto();
    if(!rep) return;
    try { await deleteDoc(doc(db, 'reparti', rep, 'todo_condivisi', String(id))); } catch(e) { console.warn('deleteTodoCondiviso:', e.message); }
  },

  // ── Agenda condivisa con il reparto ─────────────────────────
  saveAgendaCondivisa: async function(item) {
    var rep = _reparto();
    if(!rep || rep.startsWith('privato_')) {
      _toast('Devi essere in un reparto per condividere', 'err');
      return;
    }
    if(!item || !item.id) return;
    try {
      await setDoc(doc(db, 'reparti', rep, 'agenda_condivisa', String(item.id)), item);
    } catch(e) {
      console.warn('saveAgendaCondivisa:', e.message);
      _toast('Errore salvataggio agenda condivisa: ' + e.message, 'err');
    }
  },
  deleteAgendaCondivisa: async function(id) {
    var rep = _reparto();
    if(!rep) return;
    try { await deleteDoc(doc(db, 'reparti', rep, 'agenda_condivisa', String(id))); } catch(e) { console.warn('deleteAgendaCondivisa:', e.message); }
  },

  // ── Orari preset reparto ─────────────────────────────────────
  saveOrariPreset: async function(orari) {
    var rep = _reparto();
    if(!rep || !orari) return;
    try { await setDoc(doc(db, 'reparti', rep, 'config', 'orari'), orari); } catch(e) { console.warn('saveOrariPreset:', e.message); }
  },

  // ── Aggiorna preferenza condivisione turni (privacy) ─────────
  aggiornaPrivacyTurni: async function(uid, condividiTurni) {
    if(!uid) return;
    try {
      // Usa updateDoc con dot notation per aggiornare solo condividiTurni senza toccare tosAccepted
      await updateDoc(doc(db, 'utenti', uid), { 'privacy.condividiTurni': condividiTurni });
      // Aggiorna anche nel reparto
      var rep = _reparto();
      if(rep) {
        try {
          await updateDoc(doc(db, 'reparti', rep, 'utenti', uid), { 'privacy.condividiTurni': condividiTurni });
        } catch(e2) {
          // Se il documento non esiste nel reparto, usa setDoc con merge
          await setDoc(doc(db, 'reparti', rep, 'utenti', uid), { privacy: { condividiTurni: condividiTurni } }, { merge: true });
        }
      }
    } catch(e) {
      // Fallback: se updateDoc fallisce (documento non esiste), usa setDoc con merge
      try {
        await setDoc(doc(db, 'utenti', uid), { privacy: { condividiTurni: condividiTurni } }, { merge: true });
      } catch(e2) { console.warn('aggiornaPrivacyTurni:', e2.message); }
    }
  },

  // ── Verifica TOS e forza accettazione per utenti vecchi ──────
  verificaEForzaPrivacy: async function(uid, userDocData) {
    // Se TOS già accettato, tutto ok
    if (userDocData && userDocData.privacy && userDocData.privacy.tosAccepted === true) {
      return true;
    }

    // Mostra il modal bloccante
    var modal = document.getElementById('modal-force-privacy');
    if (modal) {
      modal.style.display = 'flex';
      // Reset checkbox
      var fpTos = document.getElementById('fp-tos');
      var fpCond = document.getElementById('fp-condividi');
      if (fpTos) fpTos.checked = false;
      if (fpCond) fpCond.checked = true;
      if (typeof window.aggiornaFpBtn === 'function') window.aggiornaFpBtn();
    }

    // Attende che l'utente clicchi "Accetta e Continua"
    var condividiTurni = await new Promise(function(resolve) {
      window._fpResolve = resolve;
    });

    // Nascondi modal
    if (modal) modal.style.display = 'none';

    // Salva su Firestore
    var privacyObj = { tosAccepted: true, condividiTurni: condividiTurni };
    try {
      await setDoc(doc(db, 'utenti', uid), { privacy: privacyObj }, { merge: true });
      // Aggiorna anche nel reparto se presente
      var reparto = userDocData && userDocData.reparto ? userDocData.reparto.toLowerCase().replace(/\s+/g,'_') : null;
      if (reparto && !reparto.startsWith('privato_')) {
        await updateDoc(doc(db, 'reparti', reparto, 'utenti', uid), { 'privacy.condividiTurni': condividiTurni });
      }
    } catch(e) { console.warn('verificaEForzaPrivacy save:', e.message); }

    // Aggiorna ct_me locale
    try {
      var meLocale = JSON.parse(localStorage.getItem('ct_me') || 'null');
      if (meLocale) { meLocale.privacy = privacyObj; localStorage.setItem('ct_me', JSON.stringify(meLocale)); }
    } catch(e2) {}

    return true;
  },

  // ── Salva profilo personale (ct_me) su Firestore ────────────
  savePersonale: async function() {
    var rep = _reparto();
    if(!rep) return;
    try {
      var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
      var me = JSON.parse(localStorage.getItem('ct_me') || 'null');
      if(!me || !session) return;
      var docId = session.userId.replace(/[@.]/g,'_');
      await setDoc(doc(db, 'reparti', rep, 'personale', docId), me);
    } catch(e) { console.warn('savePersonale:', e.message); }
  },

  // ── Salva persona aggiuntiva (ct_p) su Firestore ────────────
  savePersona: async function() {
    var rep = _reparto();
    if(!rep) return;
    try {
      var arr = JSON.parse(localStorage.getItem('ct_p') || '[]');
      for(var i=0; i<arr.length; i++) {
        var p = arr[i];
        if(!p.id) continue;
        await setDoc(doc(db, 'reparti', rep, 'persone', String(p.id)), p);
      }
    } catch(e) { console.warn('savePersona:', e.message); }
  },

  // ── Salva array utenti (ct_users) su Firestore ──────────────
  saveUsers: async function(usersArr) {
    var rep = _reparto();
    if(!rep || !usersArr) return;
    try {
      var arr = typeof usersArr === 'string' ? JSON.parse(usersArr) : usersArr;
      for(var i=0; i<arr.length; i++) {
        var u = arr[i];
        if(!u.email) continue;
        var docId = u.uid || u.email.replace(/[@.]/g,'_');
        await setDoc(doc(db, 'reparti', rep, 'utenti', docId), u);
      }
    } catch(e) { console.warn('saveUsers:', e.message); _toast('Errore sync utenti', 'err'); }
  },

  // ── Aggiorna stato singolo utente su Firestore ───────────────
  aggiornaStatoUtente: async function(uid, stato) {
    var rep = _reparto();
    if(!rep || !uid) return;
    try {
      // Trova il docId corretto (uid o email_sanitized)
      var U = JSON.parse(localStorage.getItem('ct_users') || '[]');
      var u = U.find(function(x){ return x.uid === uid || String(x.id) === String(uid); });
      var docId = (u && u.uid) ? u.uid : (u && u.email ? u.email.replace(/[@.]/g,'_') : uid);
      await setDoc(doc(db, 'reparti', rep, 'utenti', docId), { stato: stato }, { merge: true });
      // Aggiorna anche il profilo globale utente
      if(u && u.uid) {
        await setDoc(doc(db, 'utenti', u.uid), { stato: stato }, { merge: true });
      }
    } catch(e) { console.warn('aggiornaStatoUtente:', e.message); throw e; }
  },

  // ── Elimina turni di mesi specifici da Firebase (usato da import Excel Sostituisci) ──
  deleteTurniMesi: async function(mesiArr) {
    try {
      var rep = _reparto();
      if(!rep) return;
      var snap = await getDocs(collection(db, 'reparti', rep, 'turni'));
      var batch = [];
      snap.forEach(function(d){
        var t = d.data();
        if(t.data && mesiArr.indexOf(t.data.substring(0,7)) !== -1) {
          batch.push(deleteDoc(doc(db, 'reparti', rep, 'turni', d.id)));
        }
      });
      await Promise.all(batch);
    } catch(e){ console.warn('deleteTurniMesi:', e.message); }
  },

  // ── Migra turni personali (ferie/licenze) al nuovo reparto ──
  migraTurniPersonali: async function(vecchioReparto, nuovoReparto, uid) {
    try {
      var oggi = (function(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);})();
      var T = JSON.parse(localStorage.getItem('ct_t') || '[]');
      var nuovoRep = (nuovoReparto||'').toLowerCase().replace(/\s+/g,'_');
      var _tipiPers = ['riposo','ferie','recupero','licenza','permesso','937','104','ls','fest'];
      var personali = T.filter(function(t){
        // Fallback per turni vecchi senza categoria_evento: usa il tipo
        var isPersonale = t.categoria_evento === 'personale' ||
          (!t.categoria_evento && _tipiPers.indexOf(t.tipo) !== -1);
        return isPersonale && t.data >= oggi &&
               (!uid || String(t.pid) === String(uid) || t.uid === uid);
      });
      for(var i=0; i<personali.length; i++){
        var t = personali[i];
        t.reparto_id = nuovoReparto;
        if(nuovoRep && !nuovoRep.startsWith('privato_')) {
          await setDoc(doc(db, 'reparti', nuovoRep, 'turni', String(t.id)), t);
        }
      }
      // Aggiorna localStorage
      T.forEach(function(t){
        if(t.categoria_evento==='personale'&&t.data>=oggi&&(!uid||String(t.pid)===String(uid)||t.uid===uid))
          t.reparto_id=nuovoReparto;
      });
      localStorage.setItem('ct_t', JSON.stringify(T));
    } catch(e){ console.warn('migraTurniPersonali:', e.message); }
  },

  // ── Elimina turni di servizio di un utente da un reparto ────
  eliminaTurniServizioReparto: async function(reparto, uid) {
    try {
      var oggi = (function(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);})();
      var rep = (reparto||'').toLowerCase().replace(/\s+/g,'_');
      var _tipiPers = ['riposo','ferie','recupero','licenza','permesso','937','104','ls','fest'];
      var _isServizio = function(t){ return t.categoria_evento === 'servizio' || (!t.categoria_evento && _tipiPers.indexOf(t.tipo) === -1); };
      if(rep && !rep.startsWith('privato_')) {
        var snap = await getDocs(collection(db, 'reparti', rep, 'turni'));
        var batch = [];
        snap.forEach(function(d){
          var t = d.data();
          if(_isServizio(t) && t.data >= oggi) {
            if(!uid || String(t.pid) === String(uid) || t.uid === uid) {
              batch.push(deleteDoc(doc(db, 'reparti', rep, 'turni', d.id)));
            }
          }
        });
        await Promise.all(batch);
      }
      // Aggiorna localStorage
      var T = JSON.parse(localStorage.getItem('ct_t') || '[]');
      T = T.filter(function(t){
        if(_isServizio(t) && t.data >= oggi) {
          if(!uid || String(t.pid) === String(uid) || t.uid === uid) return false;
        }
        return true;
      });
      localStorage.setItem('ct_t', JSON.stringify(T));
    } catch(e){ console.warn('eliminaTurniServizioReparto:', e.message); }
  },

  // ── Chiamato da AuthModule.logout ───────────────────────────

  // ── Cancella tutti i dati di un utente da Firestore ─────────
  // Usato da resetAll('all') e da cancellazione account
  deleteUserData: async function(uid, rep) {
    var ops = [];
    try {
      // 1. Documento utente principale
      ops.push(deleteDoc(doc(db, 'utenti', uid)));
      // 2. Sub-collections personali (todo, agenda)
      var todoSnap = await getDocs(collection(db, 'utenti', uid, 'todo'));
      todoSnap.forEach(function(d){ ops.push(deleteDoc(doc(db, 'utenti', uid, 'todo', d.id))); });
      var agSnap = await getDocs(collection(db, 'utenti', uid, 'agenda'));
      agSnap.forEach(function(d){ ops.push(deleteDoc(doc(db, 'utenti', uid, 'agenda', d.id))); });
      // 3. Profilo nel reparto
      if(rep) {
        ops.push(deleteDoc(doc(db, 'reparti', rep, 'utenti', uid)));
        ops.push(deleteDoc(doc(db, 'reparti', rep, 'personale', uid)));
        // 4. Turni dell'utente nel reparto
        var turniSnap = await getDocs(collection(db, 'reparti', rep, 'turni'));
        turniSnap.forEach(function(d){
          var t = d.data();
          if(t.uid === uid || t.userId === uid) ops.push(deleteDoc(doc(db, 'reparti', rep, 'turni', d.id)));
        });
      }
      await Promise.all(ops);
      console.log('[C-Turni] deleteUserData completato per uid:', uid);
    } catch(e) { console.warn('deleteUserData:', e.message); }
  },

  // ── Carica profilo utente da Firestore ──────────────────────

  getUserProfile: async function(uid) {
    try {
      var _to = function() { return new Promise(function(_,r){ setTimeout(function(){ r(new Error('timeout')); }, 5000); }); };
      var snap = await Promise.race([ window._fbGetDoc(window._fbDoc(db, 'utenti', uid)), _to() ]);
      if(snap.exists()) return snap.data();
      var rep = _reparto();
      if(rep) {
        var snap2 = await Promise.race([ window._fbGetDoc(window._fbDoc(db, 'reparti', rep, 'utenti', uid)), _to() ]);
        if(snap2.exists()) return snap2.data();
      }
      return null;
    } catch(e) { console.warn('getUserProfile:', e.message); return null; }
  },



  // ── Salva profilo utente su Firestore ───────────────────────

  saveUserProfile: async function(uid, profile, reparto) {
    try {
      var profileClean = Object.assign({}, profile);

      // Se ava è base64, prova upload su Storage per ottenere URL https
      if(profileClean.ava && profileClean.ava.startsWith('data:')) {
        try {
          var fotoUrl = await window.FirebaseModule.uploadFotoProfilo(uid, profileClean.ava);
          if(fotoUrl) {
            profileClean.ava = fotoUrl;
            profileClean.fotoURL = fotoUrl;
            try {
              var _meUp = JSON.parse(localStorage.getItem('ct_me') || 'null');
              if(_meUp) { _meUp.ava = fotoUrl; _meUp.fotoURL = fotoUrl; localStorage.setItem('ct_me', JSON.stringify(_meUp)); }
              var _sessUp = JSON.parse(localStorage.getItem('ct_session') || 'null');
              if(_sessUp) { _sessUp.ava = fotoUrl; _sessUp.fotoURL = fotoUrl; localStorage.setItem('ct_session', JSON.stringify(_sessUp)); }
            } catch(e3) {}
          } else {
            // Upload fallito — non salvare base64 su Firestore (troppo grande)
            delete profileClean.ava;
          }
        } catch(e2) {
          console.warn('uploadFoto in saveUserProfile:', e2.message);
          delete profileClean.ava; // non salvare base64
        }
      }

      // Salva profilo completo in /utenti/{uid}
      await window._fbSetDoc(window._fbDoc(db, 'utenti', uid), profileClean);

      // Nel reparto salva solo i campi necessari — NO avatar (evita documenti enormi)
      if(reparto) {
        var rep = reparto.toLowerCase().replace(/\s+/g,'_');
        var profileReparto = {
          uid:          profileClean.uid || uid,
          email:        profileClean.email || '',
          nome:         profileClean.nome || '',
          cognome:      profileClean.cognome || '',
          grado:        profileClean.grado || '',
          ruolo:        profileClean.ruolo || 'addetto',
          stato:        profileClean.stato || 'pending',
          reparto:      profileClean.reparto || reparto,
          tipo:         profileClean.tipo || '',
          registratoIl: profileClean.registratoIl || '',
          privacy:      profileClean.privacy || null
        };
        // Aggiungi ava solo se è un URL https (non base64)
        if(profileClean.ava && profileClean.ava.startsWith('https')) {
          profileReparto.ava = profileClean.ava;
        }
        await window._fbSetDoc(window._fbDoc(db, 'reparti', rep, 'utenti', uid), profileReparto);
      }

    } catch(e) { console.warn('saveUserProfile:', e.message); }
  },

  // ── Upload foto profilo su Firebase Storage + salva URL su Firestore ────────
  uploadFotoProfilo: async function(uid, dataUrl) {
    try {
      // Elimina foto precedente se esiste
      try {
        var oldRef = storageRef(storage, 'foto_profilo/' + uid + '.jpg');
        await deleteObject(oldRef);
      } catch(e) { /* non esiste ancora, ok */ }
      // Carica nuova foto su Storage
      var newRef = storageRef(storage, 'foto_profilo/' + uid + '.jpg');
      await uploadString(newRef, dataUrl, 'data_url');
      // Ottieni URL reale permanente
      var url = await getDownloadURL(newRef);
      // Salva fotoURL nel documento utente su Firestore (updateDoc per non sovrascrivere altri campi)
      await updateDoc(doc(db, 'utenti', uid), { ava: url, fotoURL: url });
      return url;
    } catch(e) {
      console.warn('uploadFotoProfilo:', e.message);
      return null;
    }
  },

  // ── Elimina tutti i turni di un utente (writeBatch) ─────────
  deleteTurniUtente: async function(uid, myPid) {
    var rep = _reparto();
    if(!rep) return;
    try {
      var snap = await getDocs(collection(db, 'reparti', rep, 'turni'));
      var batch = writeBatch(db);
      var count = 0;
      snap.forEach(function(d){
        var t = d.data();
        if(t.uid === uid || String(t.pid) === String(myPid) || String(t.pid) === String(uid)){
          batch.delete(d.ref);
          count++;
          // Firestore batch limit = 500
          if(count % 499 === 0){ batch.commit(); batch = writeBatch(db); }
        }
      });
      if(count > 0) await batch.commit();
    } catch(e) { console.warn('deleteTurniUtente:', e.message); throw e; }
  },

  // ── Dino leaderboard ─────────────────────────────────────────
  saveDinoScore: async function(uid, nome, score, reparto) {
    if(!reparto || reparto.startsWith('privato_')) return;
    try {
      var rep = reparto.toLowerCase().replace(/\s+/g,'_');
      var existing = null;
      try {
        var snap = await getDoc(doc(db, 'reparti', rep, 'dino_scores', uid));
        if(snap.exists()) existing = snap.data();
      } catch(e){}
      // Salva solo se è un nuovo record
      if(!existing || score > (existing.score||0)){
        await setDoc(doc(db, 'reparti', rep, 'dino_scores', uid), {
          uid: uid, nome: nome, score: score, ts: new Date().toISOString()
        });
      }
    } catch(e) { console.warn('saveDinoScore:', e.message); }
  },
  getDinoLeaderboard: async function(reparto) {
    if(!reparto || reparto.startsWith('privato_')) return [];
    try {
      var rep = reparto.toLowerCase().replace(/\s+/g,'_');
      var snap = await getDocs(collection(db, 'reparti', rep, 'dino_scores'));
      var arr = [];
      snap.forEach(function(d){ arr.push(d.data()); });
      arr.sort(function(a,b){ return b.score - a.score; });
      return arr.slice(0,5);
    } catch(e) { return []; }
  },

  // ── Elimina utente da reparto (usato da Comandante in Gestione Membri) ──
  deleteUserFromReparto: async function(uid, repId) {
    try {
      if(repId) {
        var rep = repId.toLowerCase().replace(/\s+/g,'_');
        await window._fbDeleteDoc(window._fbDoc(db, 'reparti', rep, 'utenti', uid));
      }
      // Aggiorna stato su /utenti/{uid} senza eliminare l'account
      try { await window._fbSetDoc(window._fbDoc(db, 'utenti', uid), { stato:'rejected', reparto:'' }, { merge:true }); } catch(e2){}
    } catch(e) { console.warn('deleteUserFromReparto:', e.message); }
  },



  // ── Carica utenti di un reparto ─────────────────────────────

  getUsersByReparto: async function(reparto) {

    try {

      var rep = reparto.toLowerCase().replace(/\s+/g,'_');

      var snap = await window._fbGetDocs(window._fbCollection(db, 'reparti', rep, 'utenti'));

      var arr = [];

      snap.forEach(function(d){ arr.push(d.data()); });

      return arr;

    } catch(e) { console.warn('getUsersByReparto:', e.message); return []; }

  },



  // ── Collega persona Excel all'utente Firebase ────────────────

  linkPersonaToUser: async function(uid, personaId, personaNome) {

    try {

      var session = JSON.parse(localStorage.getItem('ct_session')||'null');

      if(!session) return;

      var rep = session.reparto.toLowerCase().replace(/\s+/g,'_');

      await window._fbSetDoc(window._fbDoc(db, 'reparti', rep, 'link_utenti', uid),

        { uid: uid, personaId: String(personaId), personaNome: personaNome,

          aggiornatoIl: new Date().toISOString() });

    } catch(e) { console.warn('linkPersonaToUser:', e.message); }

  },


  // ── FCM: richiedi permesso e salva token ───────────────────
  initFCM: async function() {
    if(!messaging) { console.warn('[FCM] messaging non inizializzato'); return; }
    try {
      var perm = Notification.permission;
      console.log('[FCM] Permesso notifiche:', perm);
      if(perm === 'denied') { console.warn('[FCM] Permesso negato dall\'utente'); return; }
      if(perm !== 'granted') {
        perm = await Notification.requestPermission();
        if(perm !== 'granted') { console.warn('[FCM] Permesso non concesso:', perm); return; }
      }
      // Usa il SW FCM esterno
      var swReg = await navigator.serviceWorker.getRegistration('/C-Turni/');
      if(!swReg) {
        console.log('[FCM] SW non trovato, registro...');
        swReg = await navigator.serviceWorker.register('/C-Turni/firebase-messaging-sw.js', { scope: '/C-Turni/' });
        await navigator.serviceWorker.ready;
      }
      console.log('[FCM] SW registrato:', swReg.scope);
      var token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: swReg });
      if(!token) { console.warn('[FCM] Token non ottenuto — verifica VAPID_KEY e SW'); return; }
      console.log('[FCM] Token ottenuto:', token.substring(0,20)+'...');
      // Salva token su Firestore
      var session = JSON.parse(localStorage.getItem('ct_session') || 'null');
      if(session && session.userId) {
        var uid = session.userId;
        // Salva token in array (multi-device) — usa arrayUnion per non duplicare
        await setDoc(doc(db, 'utenti', uid), {
          fcmToken: token,
          fcmTokens: arrayUnion(token),
          fcmAggiornato: new Date().toISOString()
        }, { merge: true });
        var rep = _reparto();
        if(rep) {
          await setDoc(doc(db, 'reparti', rep, 'utenti', uid), {
            fcmToken: token,
            fcmTokens: arrayUnion(token),
            fcmAggiornato: new Date().toISOString()
          }, { merge: true });
        }
        localStorage.setItem('ct_fcm_token', token);
        console.log('[FCM] Token salvato su Firestore per uid:', uid);
      } else {
        console.warn('[FCM] Nessuna sessione attiva — token non salvato');
      }
      // Messaggi in foreground → toast + notifica nativa
      onMessage(messaging, function(payload) {
        var title = (payload.notification && payload.notification.title) || 'C-Turni';
        var body  = (payload.notification && payload.notification.body)  || '';
        if(typeof window.toast === 'function') window.toast('\uD83D\uDD14 ' + title + (body ? ': ' + body : ''), 'ok');
        if(Notification.permission === 'granted') new Notification(title, { body: body, icon: _NOTIF_ICON });
      });
    } catch(e) { console.error('[FCM] Errore initFCM:', e.message, e); }
  },

  // ── FCM: schedula push scrivendo su Firestore (letta da Cloud Function/Extension) ──
  schedulePush: async function(uid, title, body, scheduleISO) {
    try {
      // ID deterministico: evita duplicati per stesso utente+titolo+giorno
      var dayKey = (scheduleISO || new Date().toISOString()).slice(0, 10);
      var docId = uid + '_' + btoa(encodeURIComponent(title)).replace(/[^a-zA-Z0-9]/g,'').slice(0,20) + '_' + dayKey;
      await setDoc(doc(db, 'notifiche_push', docId), {
        uid: uid, title: title, body: body,
        scheduleAt: scheduleISO || new Date().toISOString(),
        inviata: false, creatoIl: new Date().toISOString()
      });
    } catch(e) { console.warn('schedulePush:', e.message); }
  },

  // ── Salva notifica nel profilo utente su Firestore ───────────
  saveNotifica: async function(uid, notif) {
    if(!uid || !notif) return;
    try {
      await setDoc(doc(db, 'utenti', uid, 'notifiche', String(notif.id)), notif);
    } catch(e) { console.warn('saveNotifica:', e.message); }
  },

  // ── Elimina notifica da Firestore ────────────────────────────
  deleteNotifica: async function(nid) {
    try {
      var session = JSON.parse(localStorage.getItem('ct_session')||'null');
      if(!session || !session.userId) return;
      var uid = session.userId;
      var sidStr = String(nid);
      // Prova prima con l'id diretto
      try { await deleteDoc(doc(db, 'utenti', uid, 'notifiche', sidStr)); } catch(e){}
      // Cerca anche per campo id numerico (notifiche salvate con id float)
      var snap = await getDocs(collection(db, 'utenti', uid, 'notifiche'));
      snap.forEach(async function(d){
        if(String(d.data().id) === sidStr) {
          try { await deleteDoc(d.ref); } catch(e){}
        }
      });
    } catch(e) { console.warn('deleteNotifica:', e.message); }
  },

  // ── Segna notifica come letta su Firestore ───────────────────
  segnaNotificaLetta: async function(nid) {
    try {
      var session = JSON.parse(localStorage.getItem('ct_session')||'null');
      if(!session || !session.userId) return;
      var uid = session.userId;
      var sidStr = String(nid);
      // Prova con id diretto
      try { await setDoc(doc(db, 'utenti', uid, 'notifiche', sidStr), {letta:true}, {merge:true}); } catch(e){}
      // Cerca anche per campo id
      var snap = await getDocs(collection(db, 'utenti', uid, 'notifiche'));
      snap.forEach(async function(d){
        if(String(d.data().id) === sidStr) {
          try { await setDoc(d.ref, {letta:true}, {merge:true}); } catch(e){}
        }
      });
    } catch(e) { console.warn('segnaNotificaLetta:', e.message); }
  },

  signOut: function() {
    _stopListeners();
    signOut(auth).catch(function(e){ console.warn('signOut:', e.message); });
  }

};

// ── Notifica app che FirebaseModule e' pronto ────────────────────
window.dispatchEvent(new CustomEvent('firebase-ready'));
console.log('[Firebase] FirebaseModule pronto.');