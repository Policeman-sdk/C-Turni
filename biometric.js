/**
 * biometric.js — C-Turni WebAuthn / Passkey module v2
 *
 * Fix v2:
 * - challenge e userId passati come Uint8Array (non ArrayBuffer) — richiesto da WebAuthn spec
 * - rpId robusto: usa location.hostname, fallback a '' per localhost (alcuni browser lo richiedono vuoto)
 * - Gestione errori più granulare con messaggi utente
 * - enroll() restituisce Promise per permettere .then() dall'HTML
 */

(function(global) {
  'use strict';

  var LS_KEY  = 'ct_biometric_cred';
  var RP_NAME = 'C-Turni';

  // rpId: su localhost alcuni browser rifiutano il dominio — usiamo location.hostname
  // che su localhost è 'localhost' (valido per WebAuthn in dev)
  function _rpId() {
    return location.hostname || 'localhost';
  }

  // ── Utility base64url ─────────────────────────────────────
  function _b64uEncode(buf) {
    var bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  function _b64uDecode(str) {
    str = (str + '===').slice(0, str.length + (4 - str.length % 4) % 4);
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    var bin = atob(str);
    var buf = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return buf; // restituisce Uint8Array (WebAuthn accetta sia Uint8Array che ArrayBuffer)
  }

  function _randomBytes(n) {
    var buf = new Uint8Array(n);
    crypto.getRandomValues(buf);
    return buf; // Uint8Array — WebAuthn lo accetta direttamente come challenge
  }

  // ── Storage ───────────────────────────────────────────────
  function _saveCred(obj) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch(e) {}
  }
  function _loadCred() {
    try { var v = localStorage.getItem(LS_KEY); return v ? JSON.parse(v) : null; }
    catch(e) { return null; }
  }
  function _clearCred() { localStorage.removeItem(LS_KEY); }

  // ── UI helpers ────────────────────────────────────────────
  function _getBioBtn()    { return document.getElementById('btn-biometric-login'); }
  function _getRemoveBtn() { return document.getElementById('btn-remove-biometric'); }

  function _showBioBtn(cred) {
    var btn = _getBioBtn();
    if (!btn) return;
    var nome = cred.nome ? cred.nome.split(' ')[0] : '';
    btn.innerHTML = '&#129535; ' + (nome ? 'Accedi come ' + nome : 'Accedi con biometria');
    btn.style.display = 'flex';
    var rem = _getRemoveBtn();
    if (rem) rem.style.display = 'block';
  }

  function _hideBioBtn() {
    var btn = _getBioBtn();
    if (btn) btn.style.display = 'none';
    var rem = _getRemoveBtn();
    if (rem) rem.style.display = 'none';
  }

  function _showEnrollBanner(nome) {
    var banner = document.getElementById('biometric-enroll-banner');
    if (!banner) return;
    var nameEl = document.getElementById('biometric-enroll-name');
    if (nameEl) nameEl.textContent = nome || 'il tuo account';
    banner.style.display = 'block';
    setTimeout(function() { banner.style.display = 'none'; }, 30000);
  }

  function _hideEnrollBanner() {
    var banner = document.getElementById('biometric-enroll-banner');
    if (banner) banner.style.display = 'none';
  }

  function _toast(msg, type) {
    if (typeof toast === 'function') toast(msg, type || 'ok');
  }

  // ── Modulo pubblico ───────────────────────────────────────
  var BiometricModule = {

    isSupported: function() {
      return !!(
        global.PublicKeyCredential &&
        navigator.credentials &&
        typeof navigator.credentials.create === 'function' &&
        typeof navigator.credentials.get    === 'function'
      );
    },

    hasCredential: function() { return !!_loadCred(); },

    init: function() {
      if (!BiometricModule.isSupported()) return;
      var cred = _loadCred();
      if (cred) _showBioBtn(cred);
    },

    offerEnrollment: function(userId, email, nome) {
      if (!BiometricModule.isSupported()) return;
      if (BiometricModule.hasCredential()) return;
      _showEnrollBanner(nome || email);
      global._biometricPending = { userId: userId, email: email, nome: nome };
    },

    /**
     * Registra la credenziale biometrica.
     * @returns {Promise<void>}
     */
    enroll: async function() {
      _hideEnrollBanner();
      var pending = global._biometricPending;
      if (!pending) {
        // Fallback: prova a leggere da ct_me se _biometricPending non è impostato
        var me = (typeof lsG === 'function') ? lsG('ct_me', null) : null;
        var sess = null;
        try { sess = JSON.parse(localStorage.getItem('ct_session') || 'null'); } catch(e) {}
        if (me || sess) {
          pending = {
            userId: (sess && sess.userId) || (me && (me.uid || me.id)) || 'unknown',
            email:  (sess && sess.email)  || (me && me.email) || '',
            nome:   (me && ((me.nome || '') + ' ' + (me.cognome || '')).trim()) || ''
          };
        } else {
          _toast('Effettua prima il login per abilitare la biometria', 'err');
          return;
        }
      }

      try {
        var publicKey = {
          challenge: _randomBytes(32),
          rp: { id: _rpId(), name: RP_NAME },
          user: {
            id: _randomBytes(16),          // handle opaco — non è il Firebase UID
            name: pending.email || 'utente',
            displayName: pending.nome || pending.email || 'Utente C-Turni'
          },
          pubKeyCredParams: [
            { type: 'public-key', alg: -7   }, // ES256  (Android, iOS)
            { type: 'public-key', alg: -257  }  // RS256  (Windows Hello)
          ],
          authenticatorSelection: {
            authenticatorAttachment: 'platform',
            userVerification: 'required',
            residentKey: 'preferred'
          },
          timeout: 60000,
          attestation: 'none'
        };

        var credential = await navigator.credentials.create({ publicKey: publicKey });
        if (!credential) throw new Error('Credenziale non creata');

        _saveCred({
          credentialId: _b64uEncode(credential.rawId),
          userId: pending.userId,
          email:  pending.email,
          nome:   pending.nome || ''
        });

        global._biometricPending = null;
        _showBioBtn(_loadCred());
        _toast('&#129535; Accesso biometrico abilitato', 'ok');
        // Aggiorna UI impostazioni
        if (typeof _updateBioSettingsUI === 'function') _updateBioSettingsUI();

      } catch(e) {
        global._biometricPending = null;
        console.warn('[Biometric] enroll:', e.name, e.message);
        if (e.name === 'NotAllowedError') {
          _toast('Biometria annullata', 'err');
        } else if (e.name === 'NotSupportedError') {
          _toast('Dispositivo non supporta la biometria', 'err');
        } else if (e.name === 'InvalidStateError') {
          _toast('Credenziale già registrata su questo dispositivo', 'err');
        } else {
          _toast('Errore biometria: ' + (e.message || e.name), 'err');
        }
      }
    },

    /**
     * Autentica con biometria.
     * @returns {Promise<{userId, email, nome}>}
     */
    authenticate: async function() {
      var cred = _loadCred();
      if (!cred) throw new Error('Nessuna credenziale biometrica salvata');

      var publicKey = {
        challenge: _randomBytes(32),
        rpId: _rpId(),
        allowCredentials: [{
          type: 'public-key',
          id: _b64uDecode(cred.credentialId),
          transports: ['internal', 'hybrid']
        }],
        userVerification: 'required',
        timeout: 60000
      };

      var assertion = await navigator.credentials.get({ publicKey: publicKey });
      if (!assertion) throw new Error('Autenticazione annullata');

      return { userId: cred.userId, email: cred.email, nome: cred.nome };
    },

    removeCredential: function() {
      _clearCred();
      _hideBioBtn();
      _toast('Accesso biometrico rimosso', 'ok');
      if (typeof _updateBioSettingsUI === 'function') _updateBioSettingsUI();
    }
  };

  global.BiometricModule = BiometricModule;

})(window);
