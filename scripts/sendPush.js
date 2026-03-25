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
  // Collezione corretta: notifiche_push (con underscore)
  const now  = new Date();
  const snap = await db.collection("notifiche_push").get();

  if (snap.empty) {
    console.log("Nessuna notifica da inviare.");
    return;
  }

  let inviate = 0;
  let saltate = 0;

  for (const docSnap of snap.docs) {
    const data = docSnap.data();

    // Campi corretti: uid, title, body (non userId/titolo)
    const uid   = data.uid;
    const title = data.title;
    const body  = data.body || "";

    // Salta se l'orario programmato non è ancora arrivato
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
@@ -64,13 +75,16 @@
          }
        }
      });
      console.log("Push inviata a:", uid);
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
