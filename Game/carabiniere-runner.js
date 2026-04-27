/**
 * CARABINIERE RUNNER v3.0 — Riscritto da zero, pulito
 */
(function(global) {
'use strict';

/* ── ASSETS ─────────────────────────────────────────────────── */
var A = {
  _c: {},
  _base: (function(){
    var s = document.querySelector('script[src*="carabiniere-runner"]');
    return s ? s.src.replace(/carabiniere-runner\.js.*$/, '') : 'Game/';
  })(),
  manifest: [
    {id:'hero_run1', f:'sprites/hero_run1.png'},
    {id:'hero_run2', f:'sprites/hero_run2.png'},
    {id:'hero_run3', f:'sprites/hero_run3.png'},
    {id:'hero_run4', f:'sprites/hero_run4.png'},
    {id:'hero_run5', f:'sprites/hero_run5.png'},
    {id:'hero_run6', f:'sprites/hero_run6.png'},
    {id:'hero_run7', f:'sprites/hero_run7.png'},
    {id:'hero_run8', f:'sprites/hero_run8.png'},
    {id:'hero_jump', f:'sprites/hero_jump.png'},
    {id:'hero_air',  f:'sprites/hero_air.png'},
    {id:'hero_land', f:'sprites/hero_land.png'},
    {id:'hero_dead', f:'sprites/hero_dead.png'},
    {id:'cone',      f:'sprites/cone.png'},
    {id:'barrier',   f:'sprites/barrier.png'},
    {id:'sign',      f:'sprites/sign.png'},
    {id:'car_off1',  f:'sprites/car_off1.png'},
    {id:'car_off2',  f:'sprites/car_off2.png'},
    {id:'car_on',    f:'sprites/car_on.png'},
    {id:'heli_still',f:'sprites/heli_still.png'},
    {id:'heli_spin', f:'sprites/heli_spin.png'},
    {id:'bg_city',   f:'backgrounds/bg_city.png'},
    {id:'bg_ground', f:'backgrounds/bg_ground.png'}
  ],
  load: function(cb) {
    var self = this, total = this.manifest.length, done = 0;
    if (!total) { cb(); return; }
    this.manifest.forEach(function(m) {
      var img = new Image();
      img.onload  = function() { self._c[m.id] = img; if (++done >= total) cb(); };
      img.onerror = function() { console.warn('[Game] mancante:', m.f); if (++done >= total) cb(); };
      img.src = self._base + m.f;
    });
  },
  get: function(id) { return this._c[id] || null; }
};

/* ── CONFIG ──────────────────────────────────────────────────── */
var C = {
  GRAVITY:    0.65,
  JUMP_VY:   -13,
  BASE_SPD:   4,
  MAX_SPD:    14,
  ACCEL:      0.0015,
  RUN_FRAMES: 8,
  RUN_SPD:    6
};

// Dimensioni calcolate dinamicamente in base all'altezza del canvas
// Chiamato da resetState ogni volta che il canvas viene inizializzato
var D = {};
function calcDimensions(ch) {
  // Scala base: canvas di riferimento = 180px di altezza
  var s = ch / 180;
  D.HERO_W  = Math.round(36 * s);
  D.HERO_H  = Math.round(52 * s);
  D.CONE_W  = Math.round(20 * s);
  D.CONE_H  = Math.round(26 * s);
  D.SIGN_W  = Math.round(22 * s);
  D.SIGN_H  = Math.round(40 * s);
  D.BAR_W   = Math.round(34 * s);
  D.BAR_H   = Math.round(22 * s);
  D.CAR_W   = Math.round(52 * s);
  D.CAR_H   = Math.round(32 * s);
  D.HELI_W  = Math.round(64 * s);
  D.HELI_H  = Math.round(36 * s);
}

/* ── STATO ───────────────────────────────────────────────────── */
var S = {};
var _skyline = [], _skyOff = 0;

function _buildSkyline(cw, ch, gy) {
  _skyline = [];
  var x = 0;
  var cols = ['#1a2a4a','#162038','#1e2e52','#0f1a30','#243050'];
  while (x < cw + 80) {
    var w = 18 + Math.floor(Math.random()*28);
    var h = 20 + Math.floor(Math.random()*55);
    var wins = [];
    for (var wy = 6; wy < h-6; wy += 9)
      for (var wx = 4; wx < w-4; wx += 8)
        wins.push({x:wx, y:wy, on:Math.random()>0.45});
    _skyline.push({x:x, w:w, h:h, col:cols[Math.floor(Math.random()*cols.length)], wins:wins});
    x += w + 2 + Math.floor(Math.random()*8);
  }
  _skyOff = 0;
}

function resetState(cw, ch) {
  calcDimensions(ch);
  // Strada fissa: 18% dell'altezza del canvas
  var roadH = Math.round(ch * 0.18);
  var gy = ch - roadH;
  _buildSkyline(cw, ch, gy);
  // ground più in basso di gy per posizionare hero/ostacoli sulla superficie della strada
  var ground = gy + Math.round(roadH * 0.35);
  S = {
    score:0, speed:C.BASE_SPD, over:false, started:false,
    ground: ground,
    dx:Math.floor(cw*0.12), dy: ground,
    vy:0, onGround:true, jumpsLeft:2, frame:0,
    obstacles:[], nextObs:90,
    siren:false, sirenPhase:0
  };
}

/* ── DISEGNO SFONDO ─────────────────────────────────────────── */
function drawBg(ctx, cw, ch) {
  var gy = S.ground;

  // ── 1. Sfondo città: copre TUTTO il canvas (cover, allineato in basso) ──
  var bgCity = A.get('bg_city');
  if (bgCity) {
    var iw = bgCity.naturalWidth  || cw;
    var ih = bgCity.naturalHeight || ch;
    // Cover: scala per coprire tutto il canvas mantenendo proporzioni
    var scale = Math.max(cw / iw, ch / ih);
    var dw = Math.ceil(iw * scale);
    var dh = Math.ceil(ih * scale);
    // Allinea in basso (la base dello sfondo tocca il fondo del canvas)
    var dy = ch - dh;
    // Tiling orizzontale con parallasse
    var x0 = -(_skyOff % dw);
    while (x0 < cw) {
      ctx.drawImage(bgCity, x0, dy, dw, dh);
      x0 += dw;
    }
  } else {
    // Fallback pixel art
    var g = ctx.createLinearGradient(0, 0, 0, gy);
    g.addColorStop(0, '#050d1a'); g.addColorStop(0.7, '#0a1428'); g.addColorStop(1, '#0f1e3a');
    ctx.fillStyle = g; ctx.fillRect(0, 0, cw, gy);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    [[cw*.08,ch*.06],[cw*.22,ch*.04],[cw*.38,ch*.09],[cw*.52,ch*.03],
     [cw*.65,ch*.07],[cw*.78,ch*.05],[cw*.88,ch*.10],[cw*.95,ch*.04]].forEach(function(p){
      ctx.fillRect(p[0], p[1], 1.5, 1.5);
    });
    _skyline.forEach(function(b) {
      var bx = (b.x - _skyOff * 0.3 % (cw+100) + cw+100) % (cw+100) - 50;
      var by = gy - b.h;
      ctx.fillStyle = b.col; ctx.fillRect(bx, by, b.w, b.h);
      b.wins.forEach(function(w) {
        ctx.fillStyle = w.on ? 'rgba(255,240,150,0.7)' : 'rgba(20,30,60,0.8)';
        ctx.fillRect(bx+w.x, by+w.y, 4, 5);
      });
    });
    // Zona strada fallback
    ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, gy, cw, ch - gy);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(cw, gy); ctx.stroke();
  }

  // ── 2. Strada: sovrapposta in basso, altezza fissa con clip ──
  var bgGround = A.get('bg_ground');
  if (bgGround) {
    var gw = bgGround.naturalWidth  || cw;
    var gh = bgGround.naturalHeight || (ch - gy);
    var roadH = ch - gy;
    // Scala SOLO per larghezza — non toccare l'altezza
    var gScale = cw / gw;
    var gdW = cw;
    var gdH = Math.round(gh * gScale);
    // Clip: mostra solo la parte superiore dell'immagine (la superficie della strada)
    // allineata al top della zona strada
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, gy, cw, roadH);
    ctx.clip();
    // Tiling orizzontale
    var gx = -(_skyOff * 0.5 % gdW);
    while (gx < cw) {
      ctx.drawImage(bgGround, gx, gy, gdW, gdH);
      gx += gdW;
    }
    ctx.restore();
  }

  // ── 3. Sirena overlay (sopra tutto) ─────────────────────────
  if (S.siren && S.started && !S.over) {
    var sa = 0.05 + 0.04 * Math.sin(S.sirenPhase * Math.PI / 10);
    ctx.fillStyle = S.sirenPhase < 10 ? 'rgba(0,80,255,'+sa+')' : 'rgba(255,20,20,'+sa+')';
    ctx.fillRect(0, 0, cw, ch);
  }
}

/* ── DISEGNO SPRITE (con fallback pixel art) ─────────────────── */
function drawImg(ctx, id, x, y, w, h) {
  var img = A.get(id);
  if (!img) return false;
  var sw = img.naturalWidth || w;
  var sh = img.naturalHeight || h;
  var dh = h;
  var dw = Math.round(sw * (dh / sh));
  ctx.drawImage(img, x - dw/2, y - dh, dw, dh);
  return true;
}

function drawHero(ctx) {
  var x = S.dx, y = S.dy, f = S.frame;
  var up   = !S.onGround && S.vy < -2;
  var air  = !S.onGround && S.vy >= -2 && S.vy <= 2;
  var down = !S.onGround && S.vy > 2;
  var id;
  if (S.over)    id = 'hero_dead';
  else if (up)   id = 'hero_jump';
  else if (air)  id = 'hero_air';
  else if (down) id = 'hero_land';
  else {
    var ri = (Math.floor(f / C.RUN_SPD) % C.RUN_FRAMES) + 1;
    id = 'hero_run' + ri;
  }
  if (!drawImg(ctx, id, x, y, D.HERO_W, D.HERO_H)) {
    // Fallback pixel art
    ctx.save();
    var rf = Math.floor(f / C.RUN_SPD) % 2;
    ctx.fillStyle = '#f5c518'; ctx.fillRect(x-10, y-28, 20, 16);
    ctx.fillStyle = '#fff';    ctx.fillRect(x-10, y-22, 20, 3); ctx.fillRect(x-10, y-16, 20, 3);
    ctx.fillStyle = '#c8a882'; ctx.fillRect(x-7, y-38, 14, 12);
    ctx.fillStyle = '#1a2a6c'; ctx.fillRect(x-9, y-44, 18, 8);
    ctx.fillStyle = '#0d1a4a'; ctx.fillRect(x-11, y-37, 22, 3);
    ctx.fillStyle = '#ffd700'; ctx.fillRect(x-2, y-42, 4, 4);
    ctx.fillStyle = '#1a2a6c';
    if (!S.onGround) {
      ctx.fillRect(x-7, y-12, 6, 10); ctx.fillRect(x+1, y-12, 6, 10);
    } else if (rf === 0) {
      ctx.fillRect(x-7, y-12, 6, 14); ctx.fillRect(x+1, y-12, 6, 10);
    } else {
      ctx.fillRect(x-7, y-12, 6, 10); ctx.fillRect(x+1, y-12, 6, 14);
    }
    ctx.fillStyle = '#111';
    ctx.fillRect(x-8, y+1, 8, 4); ctx.fillRect(x, y+1, 8, 4);
    ctx.restore();
  }
}

function drawObs(ctx, o) {
  var gy = S.ground, f = S.frame;
  if (o.type === 'heli') {
    var heliId = Math.floor(f/4) % 2 === 0 ? 'heli_still' : 'heli_spin';
    if (!drawImg(ctx, heliId, o.x, o.y, D.HELI_W, D.HELI_H)) {
      ctx.save();
      ctx.fillStyle = '#1a3a8f'; ctx.fillRect(o.x-D.HELI_W/2, o.y-D.HELI_H/2, D.HELI_W, D.HELI_H/2);
      ctx.fillStyle = 'rgba(200,200,200,0.7)'; ctx.fillRect(o.x-D.HELI_W*0.7, o.y-D.HELI_H/2+2, D.HELI_W*0.6, 3);
      ctx.restore();
    }
  } else if (o.type === 'car') {
    var ph = Math.floor(f/8) % 4;
    var carId = ph === 3 ? 'car_on' : (ph === 1 ? 'car_off2' : 'car_off1');
    if (!drawImg(ctx, carId, o.x, gy, D.CAR_W, D.CAR_H)) {
      ctx.save();
      ctx.fillStyle = '#1a3a8f'; ctx.fillRect(o.x-D.CAR_W/2, gy-D.CAR_H, D.CAR_W, D.CAR_H);
      ctx.fillStyle = '#0d2060'; ctx.fillRect(o.x-D.CAR_W/3, gy-D.CAR_H-D.CAR_H*0.4, D.CAR_W*0.66, D.CAR_H*0.4);
      ctx.fillStyle = '#222';
      ctx.beginPath(); ctx.arc(o.x-D.CAR_W/2+8, gy, 5, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(o.x+D.CAR_W/2-8, gy, 5, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }
  } else if (o.type === 'cone') {
    if (!drawImg(ctx, 'cone', o.x, gy, D.CONE_W, D.CONE_H)) {
      ctx.save();
      ctx.fillStyle = '#ff6600';
      ctx.beginPath();
      ctx.moveTo(o.x, gy - D.CONE_H + 2);
      ctx.lineTo(o.x - D.CONE_W/2 + 2, gy);
      ctx.lineTo(o.x + D.CONE_W/2 - 2, gy);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillRect(o.x-D.CONE_W/3, gy-D.CONE_H/2, D.CONE_W*0.66, 2);
      ctx.restore();
    }
  } else if (o.type === 'barrier') {
    if (!drawImg(ctx, 'barrier', o.x, gy, D.BAR_W, D.BAR_H)) {
      ctx.save();
      ctx.fillStyle = '#cc0000';
      ctx.fillRect(o.x-D.BAR_W/2, gy-D.BAR_H, 4, D.BAR_H);
      ctx.fillRect(o.x+D.BAR_W/2-4, gy-D.BAR_H, 4, D.BAR_H);
      for (var i = 0; i < 5; i++) {
        ctx.fillStyle = i%2===0 ? '#cc0000' : '#fff';
        ctx.fillRect(o.x-D.BAR_W/2 + i*(D.BAR_W/5), gy-D.BAR_H*0.65, D.BAR_W/5, D.BAR_H*0.35);
      }
      ctx.restore();
    }
  } else if (o.type === 'sign') {
    if (!drawImg(ctx, 'sign', o.x, gy, D.SIGN_W, D.SIGN_H)) {
      ctx.save();
      ctx.fillStyle = '#888'; ctx.fillRect(o.x-2, gy-D.SIGN_H, 4, D.SIGN_H);
      ctx.fillStyle = '#ffcc00'; ctx.fillRect(o.x-D.SIGN_W/2, gy-D.SIGN_H, D.SIGN_W, D.SIGN_H*0.55);
      ctx.fillStyle = '#cc0000';
      ctx.font = 'bold ' + Math.max(7, Math.round(D.SIGN_W*0.35)) + 'px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('STOP', o.x, gy-D.SIGN_H*0.6);
      ctx.textAlign = 'left';
      ctx.restore();
    }
  }
}

/* ── RENDER FRAME ───────────────────────────────────────────── */
function draw(ctx, cw, ch) {
  ctx.clearRect(0, 0, cw, ch);
  drawBg(ctx, cw, ch);
  // Score
  ctx.font = 'bold 13px monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.textAlign = 'right';
  ctx.fillText(Math.floor(S.score).toString().padStart(5,'0'), cw-10, 18);
  ctx.textAlign = 'left';
  // Barra velocita
  if (S.started && !S.over) {
    var pct = (S.speed - C.BASE_SPD) / (C.MAX_SPD - C.BASE_SPD);
    ctx.fillStyle = S.siren ? 'rgba(255,60,60,0.5)' : 'rgba(91,159,255,0.4)';
    ctx.fillRect(0, 0, cw * pct, 3);
  }
  // Ostacoli
  S.obstacles.forEach(function(o) { drawObs(ctx, o); });
  // Personaggio
  drawHero(ctx);
  // Schermata start
  if (!S.started && !S.over) {
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(cw/2-120, ch/2-34, 240, 56);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 15px -apple-system,sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Tocca per iniziare', cw/2, ch/2-8);
    ctx.font = '11px -apple-system,sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.fillText('Tap / Spazio  |  Doppio tap = doppio salto', cw/2, ch/2+12);
    ctx.textAlign = 'left';
  }
  // Game over
  if (S.over) {
    ctx.fillStyle = (S.frame%20<10) ? 'rgba(0,50,200,0.35)' : 'rgba(200,0,0,0.35)';
    ctx.fillRect(0, 0, cw, ch);
    var bw=220, bh=90, bx=(cw-bw)/2, by=(ch-bh)/2;
    ctx.fillStyle = 'rgba(10,10,30,0.96)';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 16);
    else ctx.rect(bx, by, bw, bh);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,50,50,0.7)'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#ff3333';
    ctx.font = 'bold 22px -apple-system,sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ARRESTATO!', cw/2, by+32);
    ctx.font = '12px -apple-system,sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText('Punteggio: ' + Math.floor(S.score), cw/2, by+54);
    ctx.fillText('Tocca per riprovare', cw/2, by+74);
    ctx.textAlign = 'left';
  }
}

/* ── FISICA & LOGICA ────────────────────────────────────────── */
function update(cw) {
  if (!S.started || S.over) return;
  S.frame++;
  S.score += S.speed * 0.04;
  S.speed = Math.min(C.MAX_SPD, C.BASE_SPD + S.frame * C.ACCEL);
  S.siren = S.score >= 300;
  if (S.siren) S.sirenPhase = (S.sirenPhase + 1) % 20;
  // Fisica
  S.vy += C.GRAVITY;
  S.dy += S.vy;
  if (S.dy >= S.ground) {
    S.dy = S.ground; S.vy = 0; S.onGround = true; S.jumpsLeft = 2;
  }
  // Parallasse
  _skyOff += S.speed;
  // Spawn ostacoli
  S.nextObs--;
  if (S.nextObs <= 0) {
    var r = Math.random();
    if (S.score > 200 && r < 0.22) {
      S.obstacles.push({x:cw+D.HELI_W, type:'heli', flying:true, y:S.ground - D.HERO_H * (r < 0.11 ? 1.8 : 3.0)});
    } else if (S.score > 100 && r < 0.50) {
      S.obstacles.push({x:cw+D.CAR_W, type:'car', flying:false});
    } else if (S.score > 50 && r < 0.65) {
      S.obstacles.push({x:cw+D.SIGN_W, type:'sign', flying:false});
    } else if (S.score > 200 && r < 0.80) {
      S.obstacles.push({x:cw+D.BAR_W, type:'barrier', flying:false});
    } else {
      S.obstacles.push({x:cw+D.CONE_W, type:'cone', flying:false});
    }
    S.nextObs = Math.max(28, Math.floor(50 + Math.random()*60 - S.speed*1.5));
  }
  S.obstacles = S.obstacles.filter(function(o) { o.x -= S.speed; return o.x > -80; });
  // Collisioni AABB
  var mg = 0.28;
  var dL = S.dx - D.HERO_W*(0.5-mg), dR = S.dx + D.HERO_W*(0.5-mg);
  var dT = S.dy - D.HERO_H*(1-mg*0.5), dB = S.dy + 4;
  for (var i = 0; i < S.obstacles.length; i++) {
    var o = S.obstacles[i];
    var ow = o.type==='car'   ? D.CAR_W  :
             o.type==='heli'  ? D.HELI_W :
             o.type==='sign'  ? D.SIGN_W :
             o.type==='barrier'? D.BAR_W : D.CONE_W;
    var oh = o.type==='car'   ? D.CAR_H  :
             o.type==='heli'  ? D.HELI_H :
             o.type==='sign'  ? D.SIGN_H :
             o.type==='barrier'? D.BAR_H : D.CONE_H;
    var oL = o.x - ow*(0.5-mg), oR = o.x + ow*(0.5-mg);
    var oT, oB;
    if (o.flying)              { oT = o.y - oh*(1-mg);    oB = o.y + 6; }
    else if (o.type==='car')   { oT = S.ground - oh;      oB = S.ground + 4; }
    else                       { oT = S.ground - oh;      oB = S.ground + 4; }
    if (dR > oL && dL < oR && dB > oT && dT < oB) { gameOver(); return; }
  }
}

function gameOver() {
  S.over = true;
  if (_raf) { cancelAnimationFrame(_raf); _raf = null; }
  var hi = parseInt(localStorage.getItem('ct_dino_hi')||'0', 10);
  var sc = Math.floor(S.score);
  if (sc > hi) { localStorage.setItem('ct_dino_hi', sc); hi = sc; }
  var recEl = document.getElementById('dino-record');
  if (recEl) recEl.textContent = hi;
  // Salva su Firebase
  try {
    var sess = (typeof lsG === 'function') ? lsG('ct_session', null) : null;
    var me   = (typeof lsG === 'function') ? lsG('ct_me', null) : null;
    if (sess && sess.userId && window.FirebaseModule && me && me.reparto && !me.reparto.startsWith('privato_')) {
      var nome = ((me.nome||'') + ' ' + (me.cognome||'')).trim() || 'Anonimo';
      window.FirebaseModule.saveDinoScore(sess.userId, nome, sc, me.reparto)
        .then(function() { return window.FirebaseModule.getDinoLeaderboard(me.reparto); })
        .then(function(top5) { if (top5 && top5.length) showLeaderboard(top5, sc); })
        .catch(function(){});
    }
  } catch(e) {}
  // Flash game over per 60 frame
  var flash = 0;
  function fl() {
    S.frame++;
    draw(_ctx, _cw, _ch);
    if (++flash < 60) _raf = requestAnimationFrame(fl);
  }
  fl();
}

function showLeaderboard(top5, myScore) {
  var old = document.getElementById('dino-lb-popup');
  if (old) old.remove();
  var html = '<div id="dino-lb-popup" style="position:fixed;bottom:90px;left:50%;transform:translateX(-50%);'
    + 'background:rgba(10,15,35,.97);border:1px solid rgba(255,50,50,.4);border-radius:16px;'
    + 'padding:14px 18px;z-index:99999;min-width:220px;max-width:300px;box-shadow:0 8px 32px rgba(0,0,0,.7)">'
    + '<div style="font-size:13px;font-weight:800;color:#ffd700;margin-bottom:10px;text-align:center">Top Reparto</div>';
  top5.forEach(function(s, i) {
    var isMe = s.score === myScore;
    var col = isMe ? 'color:#5b9fff;font-weight:800' : 'color:rgba(255,255,255,.8)';
    var medal = i===0 ? '1' : i===1 ? '2' : i===2 ? '3' : (i+1)+'.';
    html += '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;' + col + '">'
      + '<span style="font-size:12px;width:18px;text-align:center">' + medal + '</span>'
      + '<span style="flex:1;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + s.nome + '</span>'
      + '<span style="font-size:13px;font-weight:900">' + s.score + '</span></div>';
  });
  html += '<button onclick="document.getElementById(\'dino-lb-popup\').remove()" '
    + 'style="width:100%;margin-top:10px;background:rgba(255,255,255,.1);border:none;'
    + 'border-radius:8px;padding:6px;font-size:11px;color:rgba(255,255,255,.7);cursor:pointer;'
    + 'appearance:none;-webkit-appearance:none">Chiudi</button></div>';
  document.body.insertAdjacentHTML('beforeend', html);
  setTimeout(function() {
    var lb = document.getElementById('dino-lb-popup');
    if (lb) lb.remove();
  }, 7000);
}

/* ── LOOP & INPUT ───────────────────────────────────────────── */
var _ctx = null, _cw = 0, _ch = 0, _raf = null, _inited = false, _listenerAdded = false;

function loop() {
  update(_cw);
  draw(_ctx, _cw, _ch);
  if (!S.over) _raf = requestAnimationFrame(loop);
}

function jump() {
  if (S.over) {
    resetState(_cw, _ch);
    S.started = true;
    if (_raf) { cancelAnimationFrame(_raf); _raf = null; }
    loop();
    return;
  }
  if (!S.started) S.started = true;
  if (S.jumpsLeft > 0) {
    S.vy = C.JUMP_VY;
    S.onGround = false;
    S.jumpsLeft--;
  }
  if (!_raf) loop();
}

function onInput(e) {
  if (e && e.preventDefault) e.preventDefault();
  jump();
}

/* ── API PUBBLICA ───────────────────────────────────────────── */
global.initDinoGame = function() {
  var canvas = document.getElementById('dino-canvas');
  if (!canvas) return;
  var rect = canvas.getBoundingClientRect();
  if (rect.width < 10 || rect.height < 10) {
    _inited = false;
    setTimeout(global.initDinoGame, 200);
    return;
  }
  if (_inited) return;
  _inited = true;
  if (_raf) { cancelAnimationFrame(_raf); _raf = null; }
  var dpr = window.devicePixelRatio || 1;
  _cw = rect.width; _ch = rect.height;
  canvas.width  = Math.round(_cw * dpr);
  canvas.height = Math.round(_ch * dpr);
  _ctx = canvas.getContext('2d');
  _ctx.scale(dpr, dpr);
  A.load(function() {
    resetState(_cw, _ch);
    draw(_ctx, _cw, _ch);
    var hi = parseInt(localStorage.getItem('ct_dino_hi')||'0', 10);
    var recEl = document.getElementById('dino-record');
    if (recEl) recEl.textContent = hi;
    var bgCity = A.get('bg_city');
    var bgGround = A.get('bg_ground');
    console.log('[Game] canvas:', _cw, 'x', _ch,
      '| ground:', S.ground,
      '| bg_city:', bgCity ? bgCity.naturalWidth+'x'+bgCity.naturalHeight : 'NO',
      '| bg_ground:', bgGround ? bgGround.naturalWidth+'x'+bgGround.naturalHeight : 'NO',
      '| sprites:', Object.keys(A._c).length);
  });
  canvas.onclick = onInput;
  canvas.ontouchstart = onInput;
  if (!_listenerAdded) {
    _listenerAdded = true;
    document.addEventListener('keydown', function(e) {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        var w = document.getElementById('widget-dino-dash');
        if (w && w.style.display !== 'none') onInput(e);
      }
    });
  }
};

global._updateDinoVisibility = function() {
  var prefs  = (typeof lsG === 'function') ? lsG('ct_prefs', {}) : {};
  var widget = document.getElementById('widget-dino-dash');
  if (!widget) return;
  var pg = (typeof _pgCurrent !== 'undefined') ? _pgCurrent
    : ((typeof lsG === 'function') ? lsG('ct_pg', 'dash') : 'dash');
  var show = prefs.dino === true && pg === 'dash';
  widget.style.display = show ? '' : 'none';
  if (show) {
    _inited = false;
    if (_raf) { cancelAnimationFrame(_raf); _raf = null; }
    requestAnimationFrame(function() {
      requestAnimationFrame(global.initDinoGame);
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  var prefs = (typeof lsG === 'function') ? lsG('ct_prefs', {}) : {};
  var tog = document.getElementById('tog-dino');
  if (tog) tog.checked = prefs.dino === true;
  global._updateDinoVisibility();
  if (tog) {
    tog.onchange = function() {
      var v = this.checked;
      var s = (typeof lsG === 'function') ? lsG('ct_prefs', {}) : {};
      s.dino = v;
      if (typeof lsS === 'function') lsS('ct_prefs', s);
      var c = (typeof lsG === 'function') ? lsG('ct_dash_widgets', {}) : {};
      c.dino = v;
      if (typeof lsS === 'function') lsS('ct_dash_widgets', c);
      global._updateDinoVisibility();
      if (typeof renderDopList === 'function') renderDopList();
    };
  }
  if (prefs.dino === true) setTimeout(global.initDinoGame, 300);
});

})(window);
