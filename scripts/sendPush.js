const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore }        = require("firebase-admin/firestore");
const { getMessaging }        = require("firebase-admin/messaging");

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

async function sendToTokens(tokens, title, body) {
  let ok = 0;
  for (const token of tokens) {
    try {
      await fcm.send({
        token,
        notification: { title, body },
        webpush: {
          notification: { vibrate: [200, 100, 200] },
          fcmOptions: { link: "https://policeman-sdk.github.io/C-Turni/" }
        }
      });
      ok++;
    } catch (err) {
      console.warn("Token fallito:", token.substring(0, 20) + "...", err.message);
    }
  }
  return ok;
}

async function salvaInCentroNotifiche(uid, title, body) {
  try {
    const { tipo, ico } = getTipoNotifica(title);
    const id = Date.now() + Math.random();
    await db.collection('utenti').doc(uid).collection('notifiche').doc(String(id)).set({
      id:     id,
      tipo:   tipo,
      titolo: title,
      sub:    body || '',
      ico:    ico,
      ts:     new Date().toISOString(),
      letta:  false
    });
  } catch(e) {
    console.warn('salvaInCentroNotifiche:', e.message);
  }
}

async function run() {
  const now  = new Date();
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

    // Salta se scheduleAt non è ancora arrivato
    if (data.scheduleAt) {
      const scheduleAt = new Date(data.scheduleAt);
      if (scheduleAt > now) { saltate++; continue; }
    }

    if (!uid || !title) {
      await docSnap.ref.delete();
      continue;
    }

    const userDoc = await db.collection("utenti").doc(uid).get();
    if (!userDoc.exists) {
      console.warn("Utente non trovato:", uid);
      await docSnap.ref.delete();
      continue;
    }

    const userData = userDoc.data();
    const tokens = userData.fcmTokens
      ? [...new Set(userData.fcmTokens)]
      : (userData.fcmToken ? [userData.fcmToken] : []);

    if (!tokens.length) {
      console.warn("Nessun token per:", uid);
      await docSnap.ref.delete();
      continue;
    }

    const sent = await sendToTokens(tokens, title, body);
    console.log(`Push inviata a: ${uid} | ${sent}/${tokens.length} device | ${title}`);
    inviate += sent;

    // Salva anche nel centro notifiche in-app
    await salvaInCentroNotifiche(uid, title, body);

    await docSnap.ref.delete();
  }

  console.log(`Fine: ${inviate} push inviate, ${saltate} in attesa.`);
}

run().catch(console.error);
