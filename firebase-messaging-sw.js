// firebase-messaging-sw.js — C-Turni v4.0
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

var ICON    = '/C-Turni/icon-192.png';
var APP_URL = 'https://policeman-sdk.github.io/C-Turni/';

messaging.onBackgroundMessage(function(payload) {
  var title = (payload.notification && payload.notification.title) || 'C-Turni';
  var body  = (payload.notification && payload.notification.body)  || '';

  // FIX: tag fisso per tipo — aggiorna la notifica invece di impilarne una nuova
  var tag = (payload.data && payload.data.tag) ||
            (payload.notification && payload.notification.tag) ||
            'c-turni-alert';

  return self.registration.showNotification(title, {
    body:             body,
    icon:             ICON,
    badge:            ICON,
    tag:              tag,
    renotify:         true,
    requireInteraction: false,
    vibrate:          [200, 100, 200],
    data:             { url: APP_URL }
  });
});

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

self.addEventListener('install',  function(e) { e.waitUntil(self.skipWaiting()); });
self.addEventListener('activate', function(e) { e.waitUntil(clients.claim()); });

