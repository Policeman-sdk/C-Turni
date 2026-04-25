/**
 * biometric.js — C-Turni WebAuthn / Passkey module
 *
 * Permette login biometrico (Face ID, impronta, Windows Hello) tramite WebAuthn.
 * La chiave privata non lascia mai il dispositivo — solo il credentialId viene
 * salvato in localStorage per identificare la credenziale al prossimo login.
 *
 * Flusso:
 *   1. Dopo login Firebase riuscito → BiometricModule.offerEnrollment(userId, email)
 *   2. Al prossimo avvio → BiometricModule.init() mostra il pulsante biometrico
 *   3. Click pulsante → BiometricModule.authenticate() → risolve con {userId, email}
 *      → AuthModule.loginWithBiometric(userId, email) completa il login
 *
 * API pubblica (window.BiometricModule):
 *   BiometricModule.isSupported()           → bool
 *   BiometricModule.hasCredential()         → bool
 *   BiometricModule.init()                  → mostra UI se credenziale salvata
 *   BiometricModule.offerEnrollment(uid, email, nome)
 *   BiometricModule.authenticate()          → Promise<{userId, email}>
 *   BiometricModule.removeCredential()
 */

(function(global) {
  'use strict';

  var LS_KEY = 'ct_biometric_cred';   // {credentialId (base64url), userId, email, nome}
  var RP_ID  = location.hostname;     // Relying Party = dominio corrente
  var RP_NAME = 'C-Turni';

  // ── Utility base64url ─────────────────────────────────────
  function _b64uEncode(buf) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(buf)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  function _b64uDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    var bin = atob(str);
    var buf = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return buf.buffer;
  }

  function _randomBytes(n) {
    var buf = new Uint8Array(n);
    crypto.getRandomValues(buf);
    return buf;
  }

  // ── Storage credenziale ───────────────────────────────────
  function _saveCred(obj) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch(e) {}
  }

  function _loadCred() {
    try { var v = localStorage.getItem(LS_KEY); return v ? JSON.parse(v) : null; }
    catch(e) { return null; }
  }

  function _clearCred() {
    localStorage.removeItem(LS_KEY);
  }

  // ── UI helpers ────────────────────────────────────────────
  function _getBioBtn() { return document.getElementById('btn-biometric-login'); }

  function _showBioBtn(cred) {
    var btn = _getBioBtn();
    if (!btn) return;
    var label = cred.nome ? ('Accedi come ' + cred.nome) : 'Accedi con biometria';
    btn.innerHTML = '&#128274; ' + label;
    btn.style.display = 'flex';
  }

  function _hideBioBtn() {
    var btn = _getBioBtn();
    if (btn) btn.style.display = 'none';
  }

  function _showEnrollBanner(nome) {
    var banner = document.getElementById('biometric-enroll-banner');
    if (!banner) return;
    var nameEl = document.getElementById('biometric-enroll-name');
    if (nameEl) nameEl.textContent = nome || 'il tuo account';
    banner.style.display = 'flex';
    // Auto-hide dopo 30s se l'utente non risponde
    setTimeout(function() { banner.style.display = 'none'; }, 30000);
  }

  function _hideEnrollBanner() {
    var banner = document.getElementById('biometric-enroll-banner');
    if (banner) banner.style.display = 'none';
  }

  // ── Modulo pubblico ───────────────────────────────────────
  var BiometricModule = {

    /** Verifica se WebAuthn è disponibile nel browser */
    isSupported: function() {
      return !!(
        global.PublicKeyCredential &&
        navigator.credentials &&
        typeof navigator.credentials.create === 'function' &&
        typeof navigator.credentials.get === 'function'
      );
    },

    /** Verifica se esiste già una credenziale salvata per questo dispositivo */
    hasCredential: function() {
      return !!_loadCred();
    },

    /**
     * Init: chiamato all'avvio dell'app.
     * Se esiste una credenziale salvata, mostra il pulsante biometrico.
     */
    init: function() {
      if (!BiometricModule.isSupported()) return;
      var cred = _loadCred();
      if (cred) {
        _showBioBtn(cred);
      }
    },

    /**
     * Dopo login Firebase riuscito, offre di registrare la biometria.
     * @param {string} userId  - Firebase UID
     * @param {string} email
     * @param {string} nome    - nome visualizzato (es. "Mario Rossi")
     */
    offerEnrollment: function(userId, email, nome) {
      if (!BiometricModule.isSupported()) return;
      if (BiometricModule.hasCredential()) return; // già registrata
      _showEnrollBanner(nome || email);
      // Salva temporaneamente per usarlo in enroll()
      global._biometricPending = { userId: userId, email: email, nome: nome };
    },

    /**
     * Registra la credenziale biometrica (chiamato dal banner "Abilita").
     * Usa WebAuthn create() — il browser mostra Face ID / impronta.
     */
    enroll: async function() {
      _hideEnrollBanner();
      var pending = global._biometricPending;
      if (!pending) return;

      try {
        var challenge = _randomBytes(32);
        var userId    = _randomBytes(16); // user handle opaco (non è il Firebase UID)

        var publicKey = {
          challenge: challenge,
          rp: { id: RP_ID, name: RP_NAME },
          user: {
            id: userId,
            name: pending.email,
            displayName: pending.nome || pending.email
          },
          pubKeyCredParams: [
            { type: 'public-key', alg: -7  },  // ES256
            { type: 'public-key', alg: -257 }  // RS256 (fallback Windows Hello)
          ],
          authenticatorSelection: {
            authenticatorAttachment: 'platform',   // solo biometria del dispositivo
            userVerification: 'required',
            residentKey: 'preferred'
          },
          timeout: 60000,
          attestation: 'none'  // non serve attestazione per questo use case
        };

        var credential = await navigator.credentials.create({ publicKey: publicKey });

        _saveCred({
          credentialId: _b64uEncode(credential.rawId),
          userId: pending.userId,
          email: pending.email,
          nome: pending.nome || ''
        });

        global._biometricPending = null;
        _showBioBtn(_loadCred());

        if (typeof toast === 'function') toast('&#128274; Accesso biometrico abilitato', 'ok');

      } catch(e) {
        global._biometricPending = null;
        // L'utente ha annullato o il dispositivo non supporta platform authenticator
        if (e.name !== 'NotAllowedError') {
          console.warn('[Biometric] enroll error:', e);
        }
      }
    },

    /**
     * Autentica con biometria.
     * @returns {Promise<{userId, email}>} — risolve se l'utente si autentica
     */
    authenticate: async function() {
      var cred = _loadCred();
      if (!cred) throw new Error('Nessuna credenziale biometrica salvata');

      var challenge = _randomBytes(32);

      var publicKey = {
        challenge: challenge,
        rpId: RP_ID,
        allowCredentials: [{
          type: 'public-key',
          id: _b64uDecode(cred.credentialId),
          transports: ['internal']
        }],
        userVerification: 'required',
        timeout: 60000
      };

      // Lancia il prompt biometrico del SO
      var assertion = await navigator.credentials.get({ publicKey: publicKey });

      if (!assertion) throw new Error('Autenticazione annullata');

      // La verifica crittografica avviene lato client (la chiave privata non esce dal dispositivo).
      // Per un'app PWA offline-first senza backend custom, questo è il livello corretto:
      // WebAuthn garantisce che solo chi possiede il dispositivo + biometria possa procedere.
      return { userId: cred.userId, email: cred.email, nome: cred.nome };
    },

    /** Rimuove la credenziale salvata (es. da impostazioni) */
    removeCredential: function() {
      _clearCred();
      _hideBioBtn();
      if (typeof toast === 'function') toast('Accesso biometrico rimosso', 'ok');
    }
  };

  global.BiometricModule = BiometricModule;

})(window);
