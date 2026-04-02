// firebase-messaging-sw.js — C-Turni v4.0 FIX DEFINITIVO
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyCKwzJACHHoWqqsqA9s_fGsajIdVJgZ5n4",
  authDomain:        "c-turni.firebaseapp.com",
  projectId:         "c-turni",
  storageBucket:     "c-turni.firebasestorage.app",
  messagingSenderId: "1085494457115",
  appId:             "1:1085494457115:web:bff6e0174afa4d7c3d99be"
});

const messaging = firebase.messaging();

// NOTA BENE: Nessun 'onBackgroundMessage' con 'showNotification' 
// per evitare conflitti e notifiche doppie. Firebase ci pensa da solo!

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || 'https://policeman-sdk.github.io/C-Turni/';
  
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(cs) {
      for (var i = 0; i < cs.length; i++) {
        if (cs[i].url.includes('policeman-sdk') && 'focus' in cs[i]) {
          return cs[i].focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
