// firebase-messaging-sw.js — C-Turni v4.3: offline app shell + notifiche FCM
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js');

const CACHE_NAME = 'c-turni-v4.3.0';
const APP_SHELL = [
  './', './index.html', './style.css?v=4.3.0', './db.js?v=1.0.0',
  './state.js?v=1.0.0', './biometric.js?v=1.0.0', './app.js?v=4.3.0',
  './manifest.json', './icon-192.png', './icon-512.png',
  './Game/carabiniere-runner.js?v=2.0.0'
];

self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return Promise.allSettled(APP_SHELL.map(function(url){ return cache.add(url); }));
  }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(event) {
  event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k){ return k.indexOf('c-turni-')===0 && k!==CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  if(req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if(req.mode === 'navigate') {
    event.respondWith(fetch(req).then(function(res){
      var copy=res.clone(); caches.open(CACHE_NAME).then(function(c){c.put('./index.html',copy);}); return res;
    }).catch(function(){ return caches.match('./index.html').then(function(r){return r||caches.match('./');}); }));
    return;
  }
  event.respondWith(caches.match(req).then(function(cached){
    var fresh=fetch(req).then(function(res){ if(res&&res.ok){var copy=res.clone();caches.open(CACHE_NAME).then(function(c){c.put(req,copy);});} return res; });
    return cached || fresh;
  }));
});

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
  var url = (e.notification.data && e.notification.data.url) || new URL('./', self.registration.scope).href;
  
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(cs) {
      for (var i = 0; i < cs.length; i++) {
        if (cs[i].url.indexOf(self.registration.scope) === 0 && 'focus' in cs[i]) {
          return cs[i].focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
