/**
 * state.js — C-Turni Pub/Sub State Manager
 *
 * Pattern publish/subscribe leggero per ridurre i re-render inutili.
 * Quando un dato cambia, emette un evento e tutti i widget registrati
 * si aggiornano da soli.
 *
 * API pubblica (window.AppState):
 *   AppState.on(event, handler)          → unsubscribe fn
 *   AppState.off(event, handler)
 *   AppState.emit(event, data)
 *   AppState.set(key, value)             → aggiorna CDB + emette 'change:<key>'
 *   AppState.get(key, defaultVal)        → lettura sincrona dalla cache CDB
 *
 * Eventi predefiniti:
 *   'change:ct_t'       → turni aggiornati
 *   'change:ct_p'       → persone aggiornate
 *   'change:ct_me'      → profilo utente aggiornato
 *   'change:ct_ag'      → agenda aggiornata
 *   'sync:complete'     → Firebase sync completata
 *   'auth:login'        → utente loggato
 *   'auth:logout'       → utente sloggato
 */

(function(global) {
  'use strict';

  var _listeners = {};

  var AppState = {

    /**
     * Registra un handler per un evento.
     * @returns {Function} funzione per de-registrarsi
     */
    on: function(event, handler) {
      if(!_listeners[event]) _listeners[event] = [];
      _listeners[event].push(handler);
      return function() { AppState.off(event, handler); };
    },

    /** Rimuove un handler. */
    off: function(event, handler) {
      if(!_listeners[event]) return;
      _listeners[event] = _listeners[event].filter(function(h){ return h !== handler; });
    },

    /**
     * Emette un evento con dati opzionali.
     * Gli handler vengono chiamati in modo asincrono (setTimeout 0)
     * per evitare stack overflow in catene di aggiornamenti.
     */
    emit: function(event, data) {
      var handlers = (_listeners[event] || []).slice();
      if(!handlers.length) return;
      setTimeout(function() {
        handlers.forEach(function(h) {
          try { h(data); } catch(e) { console.warn('[AppState] handler error for', event, e); }
        });
      }, 0);
    },

    /**
     * Scrive un valore tramite CDB e notifica i subscriber.
     * Retrocompatibile: funziona anche se CDB non è ancora pronto
     * (usa lsS come fallback temporaneo).
     */
    set: function(key, value) {
      if(global.CDB) {
        CDB.set(key, value).then(function() {
          AppState.emit('change:' + key, value);
        });
      } else {
        // fallback sincrono
        try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
        AppState.emit('change:' + key, value);
      }
    },

    /**
     * Lettura sincrona dalla cache CDB.
     * Equivalente a lsG() ma usa IndexedDB per le chiavi pesanti.
     */
    get: function(key, defaultVal) {
      if(global.CDB) return CDB.getSync(key, defaultVal);
      try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : defaultVal; }
      catch(e) { return defaultVal; }
    },

    /**
     * Notifica tutti i widget di ri-renderizzarsi.
     * Chiamato dopo sync Firebase.
     */
    refresh: function() {
      AppState.emit('sync:complete');
    }
  };

  global.AppState = AppState;

})(window);
