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

    if (data.scheduleAt) {
      const scheduleAt = new Date(data.scheduleAt);
      if (scheduleAt > now) {
        saltate++;
        continue;
      }
    }

    if (!uid || !title) {
      console.warn("Doc malformato, elimino:", docSnap.id);
      await docSnap.ref.delete();
      continue;
    }

    const userDoc = await db.collection("utenti").doc(uid).get();
    if (!userDoc.exists) {
      console.warn("Utente non trovato:", uid);
      await docSnap.ref.delete();
      continue;
    }

    const token = userDoc.data()?.fcmToken;
    if (!token) {
      console.warn("fcmToken vuoto per:", uid);
      await docSnap.ref.delete();
      continue;
    }

    try {
      await fcm.send({
        token,
        notification: { title, body },
        webpush: {
          notification: {
            icon:    "https://policeman-sdk.github.io/C-Turni/favicon.ico",
            vibrate: [200, 100, 200]
          },
          fcmOptions: {
            link: "https://policeman-sdk.github.io/C-Turni/"
          }
        }
      });
      console.log("Push inviata a:", uid, "| titolo:", title);
      inviate++;
    } catch (err) {
      console.error("Errore per", uid, ":", err.message);
    }

    await docSnap.ref.delete();
  }

  console.log(`Fine: ${inviate} inviate, ${saltate} in attesa.`);
}

run().catch(console.error);
