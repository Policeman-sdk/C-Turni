const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore }        = require("firebase-admin/firestore");
const { getMessaging }        = require("firebase-admin/messaging");

// Inizializzazione sicura con le variabili d'ambiente di GitHub Actions
initializeApp({
  credential: cert({
    projectId:   process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey:  process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
  })
});

const db  = getFirestore();
const fcm = getMessaging();

// Determina tipo e icona dalla notifica
function getTipoNotifica(title) {
  if (title.includes('\u2705')) return { tipo: 'todo',    ico: '\u2705' };
  if (title.includes('\uD83D\uDCC5')) return { tipo: 'agenda',  ico: '\uD83D\uDCC5' };
  if (title.includes('\u23F0')) return { tipo: 'turni',   ico: '\u23F0' };
  if (title.includes('Buongiorno')) return { tipo: 'turni',   ico: '\uD83C\uDF05' };
  return { tipo: 'sistema', ico: '\uD83D\uDD14' };
}

// ==========================================
// FUNZIONE DI INVIO (FIXATA PER ANDROID E DOPPIONI)
// ==========================================
async function sendToTokens(tokens, title, body) {
  let ok = 0;
  for (const token of tokens) {
    try {
      await fcm.send({
        token: token,
        notification: { 
          title: title, 
          body: body 
        },
        data: { 
          url: "https://policeman-sdk.github.io/C-Turni/" 
        },
        // CONFIGURAZIONE ANDROID: Priorità massima e Tag anti-doppione
        android: {
          priority: "high",
          notification: {
            tag: "c-turni-alert",
            sound: "default"
          }
        },
        // CONFIGURAZIONE BROWSER/PWA: Urgenza alta
        webpush: {
          headers: { Urgency: "high" },
          notification: {
            icon: "/C-Turni/icon-192.png",
            tag: "c-turni-alert",
            vibrate: [200, 100, 200]
          }
        }
      });
      ok++;
    } catch (e) {
      console.warn("Errore token:", token, e.message);
      // Se il token è stato disinstallato dal telefono
      if (e.code === 'messaging/invalid-registration-token' || 
          e.code === 'messaging/registration-token-not-registered') {
        console.log("Token obsoleto o revocato dall'utente.");
      }
    }
  }
  return ok;
}

// ==========================================
// MOTORE PRINCIPALE DI ELABORAZIONE
// ==========================================
async function processPushNotifications() {
  const now = new Date();
  const snap = await db.collection("notifiche_push").get();

  if (snap.empty) {
    console.log("Nessuna notifica da inviare.");
    return;
  }

  let inviate = 0;
  let saltate = 0;

  for (const docSnap of snap.docs) {
    const data  = docSnap.data();
    const uid   = data.uid;
    const title = data.title;
    const body  = data.body || "";

    // Salta se scheduleAt non è ancora arrivato (Notifiche programmate)
    if (data.scheduleAt) {
      const scheduleAt = new Date(data.scheduleAt);
      if (scheduleAt > now) { saltate++; continue; }
    }

    // Se mancano dati critici, elimina la notifica guasta
    if (!uid || !title) {
      await docSnap.ref.delete();
      continue;
    }

    const userDoc = await db.collection("utenti").doc(uid).get();
    if (!userDoc.exists) {
      console.warn("Utente non trovato nel DB:", uid);
      await docSnap.ref.delete();
      continue;
    }

    const userData = userDoc.data();
    // Recupera i token (supporta array 'fcmTokens' o stringa singola 'fcmToken')
    const tokens = userData.fcmTokens
      ? [...new Set(userData.fcmTokens)]
      : (userData.fcmToken ? [userData.fcmToken] : []);

    if (!tokens.length) {
      console.warn("Nessun token registrato per l'utente:", uid);
      await docSnap.ref.delete();
      continue;
    }

    // Invia fisicamente la push
    const sent = await sendToTokens(tokens, title, body);
    console.log(`Push inviata a: ${uid} | ${sent} token raggiunti con successo`);

    // Una volta inviata (o se i token erano tutti falliti), cancella il documento
    await docSnap.ref.delete();
    inviate++;
  }

  console.log(`\n=== RIEPILOGO ===\nInviate: ${inviate}\nProgrammate (in attesa): ${saltate}`);
}

// Avvia lo script e gestisce eventuali errori globali
processPushNotifications()
  .then(() => {
    console.log("Script terminato correttamente.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Errore critico durante l'esecuzione:", error);
    process.exit(1);
  });
