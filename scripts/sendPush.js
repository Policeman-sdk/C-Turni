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
  const snap = await db.collection("notifichepush").get();
  if (snap.empty) {
    console.log("Nessuna notifica da inviare.");
    return;
  }

  for (const docSnap of snap.docs) {
    const { userId, titolo, body } = docSnap.data();

    // Legge il token FCM direttamente dal documento utente
    const userDoc = await db.collection("utenti").doc(userId).get();
    if (!userDoc.exists) {
      console.warn("Utente non trovato:", userId);
      await docSnap.ref.delete();
      continue;
    }

    const token = userDoc.data()?.fcmToken;
    if (!token) {
      console.warn("fcmToken vuoto per:", userId);
      await docSnap.ref.delete();
      continue;
    }

    try {
      await fcm.send({
        token,
        notification: {
          title: titolo || "C-Turni",
          body:  body   || ""
        },
        webpush: {
          notification: {
            icon:    "/C-Turni/icon-192.png",
            badge:   "/C-Turni/icon-192.png",
            vibrate: [200, 100, 200]
          }
        }
      });
      console.log("Push inviata a:", userId);
    } catch (err) {
      console.error("Errore per", userId, ":", err.message);
    }

    await docSnap.ref.delete();
  }
}

run().catch(console.error);
