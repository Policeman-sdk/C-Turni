// firebase-messaging-sw.js — C-Turni v5.5.0 · offline app shell + notifiche FCM
// §41 — ANTI-STALE: skipWaiting in install, clients.claim in activate,
// network-first con `cache: 'no-cache'` per HTML/JS/CSS/manifest, mai caching
// di Firestore/Auth/API esterne. Nessun dato utente viene toccato.
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js');

const CACHE_NAME = 'c-turni-v5.5.0';
const APP_SHELL = [
  './', './index.html', './style.css?v=5.5.0', './db.js?v=1.0.0',
  './state.js?v=1.0.0', './biometric.js?v=1.0.0', './app.js?v=5.5.0',
  './firebase-manager.js?v=5.5.0',
  './manifest.json', './icon-192.png', './icon-512.png',
  './Game/carabiniere-runner.js?v=2.0.0'
];

// Asset che devono essere sempre presi dalla rete (con fallback cache offline)
function _isFreshAsset(url) {
  var p = url.pathname;
  return /\.(js|css|json|webmanifest)$/i.test(p) || p.charAt(p.length - 1) === '/';
}

self.addEventListener('install', function(event) {
  // Attivazione immediata: il nuovo SW non resta "in attesa".
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return Promise.allSettled(APP_SHELL.map(function(url){ return cache.add(url); }));
  }));
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      // Elimina TUTTE le cache vecchie: nessuna versione precedente resta servita.
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; })
        .map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// Rete-prima con fallback offline: la copia in cache viene aggiornata a ogni hit.
function _netFirst(req, fallbackUrl) {
  return fetch(req, { cache: 'no-cache' }).then(function(res) {
    if (res && res.ok) {
      var copy = res.clone();
      caches.open(CACHE_NAME).then(function(c){ c.put(req, copy).catch(function(){}); });
    }
    return res;
  }).catch(function() {
    return caches.match(req).then(function(r) {
      if (r) return r;
      return fallbackUrl ? caches.match(fallbackUrl) : null;
    }).then(function(r) {
      if (r) return r;
      return new Response('Offline', { status: 503, statusText: 'Offline', headers: { 'Content-Type': 'text/plain' } });
    });
  });
}

self.addEventListener('fetch', function(event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (e) { return; }
  // Solo same-origin: Firestore, Auth, meteo e API esterne NON vengono toccate.
  if (url.origin !== self.location.origin) return;
  if (/firestore|identitytoolkit|googleapis|securetoken/i.test(url.href)) return;
  if (url.pathname.indexOf('/__/') === 0) return;

  // 1 · Documenti HTML (navigazione) → network-first
  if (req.mode === 'navigate' || /\.html?$/i.test(url.pathname)) {
    event.respondWith(_netFirst(req, './index.html'));
    return;
  }
  // 2 · Script, CSS, manifest → network-first (anti-stale)
  if (_isFreshAsset(url)) {
    event.respondWith(_netFirst(req, null));
    return;
  }
  // 3 · Immagini/font/altri asset statici → cache-first + revalidate in background
  event.respondWith(caches.match(req).then(function(cached) {
    var net = fetch(req).then(function(res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(c){ c.put(req, copy).catch(function(){}); });
      }
      return res;
    }).catch(function(){ return cached; });
    return cached || net;
  }));
});

// Ulteriore sicurezza: il client può chiedere l'attivazione immediata.
self.addEventListener('message', function(event) {
  var data = event.data || {};
  if (data && data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
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
