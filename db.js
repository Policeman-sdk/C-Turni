/**
 * db.js — C-Turni IndexedDB wrapper
 * Sostituisce localStorage per i dati pesanti (ct_t, ct_p, ct_u, ct_users, ct_ag, ct_td_condivisi, ct_ag_condivisa)
 * I dati leggeri (ct_font, ct_tema, ct_me, ct_my_pid, ecc.) restano in localStorage per accesso sincrono.
 *
 * API pubblica (window.CDB):
 *   CDB.get(key, defaultVal)  → Promise<value>
 *   CDB.set(key, value)       → Promise<boolean>
 *   CDB.remove(key)           → Promise<void>
 *   CDB.ready                 → Promise<void>  (si risolve quando IDB è aperto)
 *
 * Retrocompatibilità:
 *   - lsG / lsS continuano a funzionare per le chiavi leggere
 *   - Per le chiavi pesanti lsG/lsS delegano a CDB con cache sincrona in memoria
 */

(function(global) {
  'use strict';

  var DB_NAME    = 'ct_idb';
  var DB_VERSION = 1;
  var STORE_NAME = 'kv';

  // Chiavi che vanno su IndexedDB (dati potenzialmente grandi)
  var IDB_KEYS = ['ct_t','ct_p','ct_u','ct_users','ct_ag','ct_td_condivisi','ct_ag_condivisa','ct_turni_custom','ct_push_scheduled'];

  // Cache in memoria per accesso sincrono (usata da lsG/lsS bridge)
  var _cache = {};
  var _cacheReady = false;

  var _db = null;
  var _readyResolve, _readyReject;
  var _ready = new Promise(function(res, rej){ _readyResolve = res; _readyReject = rej; });

  // ── Apri DB ──────────────────────────────────────────────
  function _open() {
    if(!global.indexedDB) { _readyResolve(); return; } // fallback graceful
    var req = global.indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = function(e) {
      var db = e.target.result;
      if(!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = function(e) {
      _db = e.target.result;
      _migrateFromLS().then(function() {
        _cacheReady = true;
        _readyResolve();
      });
    };
    req.onerror = function(e) {
      console.warn('[CDB] IDB open error, fallback to localStorage', e);
      _readyResolve(); // non bloccare l'app
    };
  }

  // ── Migrazione da localStorage ────────────────────────────
  function _migrateFromLS() {
    var promises = IDB_KEYS.map(function(key) {
      var raw = localStorage.getItem(key);
      if(raw === null) return Promise.resolve();
      try {
        var val = JSON.parse(raw);
        return _idbSet(key, val).then(function() {
          _cache[key] = val;
          localStorage.removeItem(key); // libera spazio LS
        });
      } catch(e) { return Promise.resolve(); }
    });
    return Promise.all(promises);
  }

  // ── Operazioni IDB low-level ──────────────────────────────
  function _idbGet(key) {
    return new Promise(function(resolve) {
      if(!_db) { resolve(undefined); return; }
      try {
        var tx  = _db.transaction(STORE_NAME, 'readonly');
        var req = tx.objectStore(STORE_NAME).get(key);
        req.onsuccess = function() { resolve(req.result); };
        req.onerror   = function() { resolve(undefined); };
      } catch(e) { resolve(undefined); }
    });
  }

  function _idbSet(key, value) {
    return new Promise(function(resolve) {
      if(!_db) { resolve(false); return; }
      try {
        var tx  = _db.transaction(STORE_NAME, 'readwrite');
        var req = tx.objectStore(STORE_NAME).put(value, key);
        req.onsuccess = function() { resolve(true); };
        req.onerror   = function() { resolve(false); };
      } catch(e) { resolve(false); }
    });
  }

  function _idbRemove(key) {
    return new Promise(function(resolve) {
      if(!_db) { resolve(); return; }
      try {
        var tx  = _db.transaction(STORE_NAME, 'readwrite');
        var req = tx.objectStore(STORE_NAME).delete(key);
        req.onsuccess = function() { resolve(); };
        req.onerror   = function() { resolve(); };
      } catch(e) { resolve(); }
    });
  }

  // ── API pubblica ──────────────────────────────────────────
  var CDB = {
    ready: _ready,

    isIdbKey: function(key) {
      return IDB_KEYS.indexOf(key) !== -1;
    },

    /** Legge un valore. Se IDB non è pronto usa la cache. */
    get: function(key, defaultVal) {
      if(!CDB.isIdbKey(key)) {
        // chiave leggera → localStorage
        try { var v = localStorage.getItem(key); return Promise.resolve(v ? JSON.parse(v) : defaultVal); }
        catch(e) { return Promise.resolve(defaultVal); }
      }
      if(_cacheReady) {
        return Promise.resolve(_cache.hasOwnProperty(key) ? _cache[key] : defaultVal);
      }
      return _ready.then(function() {
        return _idbGet(key).then(function(v) {
          return v !== undefined ? v : defaultVal;
        });
      });
    },

    /** Scrive un valore. Aggiorna anche la cache sincrona. */
    set: function(key, value) {
      if(!CDB.isIdbKey(key)) {
        try { localStorage.setItem(key, JSON.stringify(value)); return Promise.resolve(true); }
        catch(e) { return Promise.resolve(false); }
      }
      _cache[key] = value;
      return _idbSet(key, value);
    },

    /** Rimuove un valore. */
    remove: function(key) {
      if(!CDB.isIdbKey(key)) {
        localStorage.removeItem(key);
        return Promise.resolve();
      }
      delete _cache[key];
      return _idbRemove(key);
    },

    /**
     * Lettura sincrona dalla cache (solo dopo CDB.ready).
     * Usata dal bridge lsG per retrocompatibilità.
     */
    getSync: function(key, defaultVal) {
      if(!CDB.isIdbKey(key)) {
        try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : defaultVal; }
        catch(e) { return defaultVal; }
      }
      return _cache.hasOwnProperty(key) ? _cache[key] : defaultVal;
    },

    /** Aggiorna la cache interna (usato da FirebaseModule dopo sync) */
    updateCache: function(key, value) {
      if(CDB.isIdbKey(key)) _cache[key] = value;
    }
  };

  global.CDB = CDB;
  _open();

})(window);
