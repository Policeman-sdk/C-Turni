importScripts("https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:            "AIzaSyCKwzJACHHoWqqsqA9sfGsajIdVJgZ5n4",
  authDomain:        "c-turni.firebaseapp.com",
  projectId:         "c-turni",
  storageBucket:     "c-turni.firebasestorage.app",
  messagingSenderId: "1085494457115",
  appId:             "1:1085494457115:web:bff6e0174afa4d7c3d99be"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "C-Turni";
  const body  = payload.notification?.body  || "";
  self.registration.showNotification(title, {
    body:    body,
    icon:    "/icon-192.png",
    badge:   "/icon-192.png",
    vibrate: [200, 100, 200]
  });
});
