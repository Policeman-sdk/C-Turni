// firebase-messaging-sw.js — C-Turni v3.5.1
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

var ICON = '/C-Turni/icon-192.png';
var APP_URL = 'https://policeman-sdk.github.io/C-Turni/';

// Notifiche in background — mostra immediatamente senza delay
messaging.onBackgroundMessage(function(payload) {
  var title = (payload.notification && payload.notification.title) || 'C-Turni';
  var body  = (payload.notification && payload.notification.body)  || '';

  // Forza visualizzazione immediata
  return self.registration.showNotification(title, {
    body:             body,
    icon:             ICON,
    badge:            ICON,
    tag:              'c-turni-' + Date.now(),
    renotify:         true,
    requireInteraction: false,
    vibrate:          [200, 100, 200],
    data:             { url: APP_URL }
  });
});

// Click sulla notifica → apre/focalizza l'app
self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || APP_URL;
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(cs) {
      for (var i = 0; i < cs.length; i++) {
        if (cs[i].url.indexOf('policeman-sdk.github.io') !== -1 && cs[i].focus) {
          return cs[i].focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});

// Forza attivazione immediata del SW senza aspettare reload
self.addEventListener('install',  function(e) { e.waitUntil(self.skipWaiting()); });
self.addEventListener('activate', function(e) { e.waitUntil(clients.claim()); });
