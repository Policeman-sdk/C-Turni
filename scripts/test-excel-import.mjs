// Regression test del parser Excel (importXL/parseSheet) — nessuna dipendenza esterna.
// Verifica il layout reale dei fogli (grado/nome non in A/B, giorni D..AH come seriali Excel),
// il fallback "numeri 1..31", i fogli senza riga giorni, le sigle custom e le sigle OBB*.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const src = readFileSync('app.js', 'utf8');

function extractFn(name) {
  const m = new RegExp('(?:^|\\n)function ' + name + '\\s*\\(').exec(src);
  assert.ok(m, 'funzione non trovata in app.js: ' + name);
  let d = 0;
  for (let j = src.indexOf('{', m.index); j < src.length; j++) {
    if (src[j] === '{') d++;
    else if (src[j] === '}') { d--; if (d === 0) return src.slice(m.index, j + 1); }
  }
  throw new Error('graffe non bilanciate: ' + name);
}
function extractVar(name) {
  const m = new RegExp('(?:^|\\n)var ' + name + '\\s*=').exec(src);
  assert.ok(m, 'var non trovata in app.js: ' + name);
  let d = 0;
  for (let j = m.index + m[0].length; j < src.length; j++) {
    const c = src[j];
    if (c === '{' || c === '[') d++;
    else if (c === '}' || c === ']') d--;
    else if (c === ';' && d === 0) return src.slice(m.index, j + 1);
  }
  throw new Error('var non chiusa: ' + name);
}

let prelude = 'var _xlsNuovePersone=0;\n';
for (const f of ['_xlsDayFromCell', '_xlsRilevaMeseAnno', '_xlsMatchPersona', '_tcFindByCodice', 'normG', 'parseGradoNome', 'pad']) prelude += extractFn(f) + '\n';
for (const v of ['_TIPI_PERSONALE', '_CODICE_TO_TIPO']) prelude += extractVar(v) + '\n';
prelude += `
var _STORE = {};
function lsG(k,d){ return _STORE[k]!==undefined ? JSON.parse(JSON.stringify(_STORE[k])) : d; }
function lsS(k,v){ _STORE[k]=JSON.parse(JSON.stringify(v)); }
var localStorage = { getItem:function(){return null;}, setItem:function(){}, removeItem:function(){} };
function _studioIsMyPid(){return false;} function getPermessoStudioSummary(){return {monte:0,eccedenza:0};}
function applicaMovimentiTurno(){} function checkFestivoTurno(){}
`;

function makeRun() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(prelude, ctx);
  vm.runInContext('var parseSheet = ' + extractFn('parseSheet') + ';', ctx);
  return { ctx, parseSheet: ctx.parseSheet };
}
// Matrice equivalente a XLSX.utils.sheet_to_json(ws,{header:1,defval:""})
function mkSheet(rows) {
  let maxc = 0;
  for (const r of rows) for (let c = 0; c < (r || []).length; c++) if (r[c] !== undefined && r[c] !== '' && c > maxc) maxc = c;
  return rows.map(r => { const a = []; for (let c = 0; c <= maxc; c++) a.push((r || [])[c] === undefined ? '' : r[c]); return a; });
}
const XL_EPOCH = Date.UTC(1899, 11, 30);
function serial(y, m, d) { return Math.round((Date.UTC(y, m - 1, d) - XL_EPOCH) / 86400000); }

// --- 1) Foglio mensile reale: grado in B, nome in C, giorni D..AH come seriali Excel ---
{
  const { ctx, parseSheet } = makeRun();
  ctx._STORE['ct_turni_custom'] = [{ codice: 'X1', nome: 'Reperibilita', colore: 'teal', icona: 'X', oraIn: '18:00', oraFi: '06:00' }];
  const rows = [];
  for (let i = 0; i < 9; i++) rows.push([]);
  rows[1][1] = 'TURNI - GENNAIO 2026';
  rows[8][1] = 'Grado'; rows[8][2] = 'Cognome e Nome'; rows[8][36] = 'LEGENDA TURNI';
  rows[9] = [];
  for (let d = 1; d <= 31; d++) rows[9][2 + d] = serial(2026, 1, d);   // D(3)..AH(33)
  rows[9][36] = 'M'; rows[9][37] = 'Mattina';
  rows[10] = []; rows[10][1] = 'Car. Sc.'; rows[10][2] = 'Di Leo Emanuele';
  rows[10][3] = 'M'; rows[10][4] = 'P'; rows[10][5] = 'N'; rows[10][6] = 'R'; rows[10][7] = 'X1'; rows[10][8] = 'ZZZ';
  rows[11] = []; rows[11][1] = 'Car.'; rows[11][2] = 'Bellizzi Alessandro';
  rows[11][3] = 'ML'; rows[11][4] = 'L';
  const tot = parseSheet(mkSheet(rows), '01-Gennaio');
  const T = ctx._STORE.ct_t, P = ctx._STORE.ct_p;
  assert.equal(P.length, 2, 'persone rilevate');
  assert.equal(T.length, 7, 'turni importati (sigla sconosciuta ZZZ scartata)');
  assert.equal(tot, 7);
  assert.equal(P.map(p => p.nome).join('|'), 'Di Leo Emanuele|Bellizzi Alessandro');
  assert.equal(P[0].grado, 'Car.Sc.', 'grado normalizzato');
  const g = (n, c) => T.find(t => t.pnome === n && t.codice === c);
  assert.equal(g('Di Leo Emanuele', 'M').data, '2026-01-01');
  assert.equal(g('Di Leo Emanuele', 'M').tipo, 'mattina');
  assert.equal(g('Di Leo Emanuele', 'M').orario, '06:00-14:00');
  assert.equal(g('Di Leo Emanuele', 'N').orario, '22:00-06:00');
  assert.equal(g('Di Leo Emanuele', 'P').orario, '14:00-22:00');
  assert.equal(g('Di Leo Emanuele', 'R').tipo, 'riposo');
  assert.equal(g('Di Leo Emanuele', 'R').orario, 'Riposo');
  assert.equal(g('Di Leo Emanuele', 'R').categoria_evento, 'personale');
  assert.equal(g('Di Leo Emanuele', 'M').categoria_evento, 'servizio');
  const x1 = g('Di Leo Emanuele', 'X1');
  assert.equal(x1.data, '2026-01-05', 'custom: data da seriale Excel');
  assert.equal(x1.tipo, 'custom', 'sigla custom risolta da ct_turni_custom');
  assert.equal(x1.orario, '18:00-06:00');
  assert.equal(g('Bellizzi Alessandro', 'ML').tipo, 'ml');
  assert.equal(g('Bellizzi Alessandro', 'L').orario, 'Ferie');
  assert.equal(T.find(t => t.codice === 'ZZZ'), undefined, 'sigla sconosciuta ignorata');
}

// --- 2) Sigle OBB* e PERM (prodotte dall'app) ---
{
  const { ctx, parseSheet } = makeRun();
  const rows = [];
  for (let i = 0; i < 9; i++) rows.push([]);
  rows[1][1] = 'TURNI - OTTOBRE 2026';
  rows[8][1] = 'Grado'; rows[8][2] = 'Cognome e Nome';
  rows[9] = [];
  for (let d = 1; d <= 31; d++) rows[9][2 + d] = serial(2026, 10, d);
  rows[10] = []; rows[10][1] = 'Mar. Ca.'; rows[10][2] = 'Leggio Emanuele';
  rows[10][3] = 'OBBM'; rows[10][4] = 'MOBB'; rows[10][5] = 'OBBP'; rows[10][6] = 'POBB'; rows[10][7] = 'PERM';
  parseSheet(mkSheet(rows), '10-Ottobre');
  const T = ctx._STORE.ct_t;
  assert.equal(T.length, 5, 'OBBM/MOBB/OBBP/POBB/PERM importati');
  assert.equal(T.find(t => t.codice === 'OBBM').tipo, 'obbm');
  assert.equal(T.find(t => t.codice === 'OBBM').orario, '07:00-13:00');
  assert.equal(T.find(t => t.codice === 'MOBB').tipo, 'obbm');
  assert.equal(T.find(t => t.codice === 'OBBP').tipo, 'obbp');
  assert.equal(T.find(t => t.codice === 'OBBP').orario, '13:00-19:00');
  assert.equal(T.find(t => t.codice === 'POBB').tipo, 'obbp');
  assert.equal(T.find(t => t.codice === 'PERM').tipo, 'permesso');
  assert.equal(ctx._STORE.ct_p[0].grado, 'Mar.Cap.', 'grado "Mar. Ca." normalizzato');
  assert.equal(T[0].data, '2026-10-01');
}

// --- 3) Anagrafica senza riga giorni: la prima riga utile non deve essere saltata ---
{
  const { ctx, parseSheet } = makeRun();
  const rows = [];
  for (let i = 0; i < 9; i++) rows.push([]);
  rows[1][1] = 'ANAGRAFICA PERSONALE';
  rows[8] = []; rows[8][1] = 'N.'; rows[8][2] = 'Grado'; rows[8][3] = 'Cognome e Nome';
  rows[9] = []; rows[9][1] = 1; rows[9][2] = 'Mar. Ca.'; rows[9][3] = 'Leggio Emanuele';
  rows[10] = []; rows[10][1] = 2; rows[10][2] = 'V. Brig.'; rows[10][3] = 'Antocicco Giorgio';
  rows[11] = []; rows[11][1] = 3;
  parseSheet(mkSheet(rows), 'Anagrafica');
  assert.equal(ctx._STORE.ct_p.length, 2, 'tutte le persone lette (nessuna riga saltata)');
  assert.equal(ctx._STORE.ct_p.map(p => p.nome + ' ' + p.grado).join('|'), 'Leggio Emanuele Mar.Cap.|Antocicco Giorgio V.Brig.');
  assert.equal(ctx._STORE.ct_t.length, 0);
}

// --- 4) Template classico con giorni numerici 1..N ---
{
  const { ctx, parseSheet } = makeRun();
  const rows = [];
  for (let i = 0; i < 9; i++) rows.push([]);
  rows[2][1] = 'TURNI - FEBBRAIO 2026';
  rows[8][1] = 'Grado'; rows[8][2] = 'Cognome e Nome';
  rows[9] = []; for (let d = 1; d <= 28; d++) rows[9][2 + d] = d;
  rows[10] = []; rows[10][1] = 'Car.'; rows[10][2] = 'Rossi Mario'; rows[10][5] = 'P';
  parseSheet(mkSheet(rows), '02-Febbraio');
  assert.equal(ctx._STORE.ct_t.length, 1);
  assert.equal(ctx._STORE.ct_t[0].data, '2026-02-03', 'giorno 3 della riga giorni numerica');
  assert.equal(ctx._STORE.ct_t[0].tipo, 'pomeriggio');
}

// --- 5) Idempotenza: reimportare lo stesso foglio non duplica i turni ---
{
  const { ctx, parseSheet } = makeRun();
  const rows = [];
  for (let i = 0; i < 9; i++) rows.push([]);
  rows[1][1] = 'TURNI - GENNAIO 2026';
  rows[8][1] = 'Grado'; rows[8][2] = 'Cognome e Nome';
  rows[9] = []; for (let d = 1; d <= 31; d++) rows[9][2 + d] = serial(2026, 1, d);
  rows[10] = []; rows[10][1] = 'Car.'; rows[10][2] = 'Di Leo Emanuele'; rows[10][3] = 'M'; rows[10][4] = 'P';
  const s = mkSheet(rows);
  parseSheet(s, '01-Gennaio');
  parseSheet(s, '01-Gennaio');
  assert.equal(ctx._STORE.ct_p.length, 1, 'persona non duplicata');
  assert.equal(ctx._STORE.ct_t.length, 2, 'turni non duplicati');
}

// --- 6) Foglio senza nominativi/turni: nessuna eccezione, nessun dato ---
{
  const { ctx, parseSheet } = makeRun();
  const rows = []; for (let i = 0; i < 16; i++) rows.push([]);
  rows[10][1] = 'ELENCO GRADI DELL ARMA'; rows[10][2] = 'SIGLE';
  assert.equal(parseSheet(mkSheet(rows), 'Pannello_di_Controllo'), 0);
  assert.equal((ctx._STORE.ct_p || []).length, 0);
  assert.equal((ctx._STORE.ct_t || []).length, 0);
}

// --- 7) Rilevamento mese/anno dal nome foglio e dall'intestazione ---
{
  const { ctx } = makeRun();
  const r1 = ctx._xlsRilevaMeseAnno('07-Luglio', [[], [], ['TURNI - LUGLIO 2026']]);
  assert.equal(r1.mese, 6, 'mese dal nome foglio');
  assert.equal(r1.anno, 2026, "anno dall'intestazione");
  const r2 = ctx._xlsRilevaMeseAnno('02-Febbraio', [[], ['TURNI_FEBBRAIO_2025']]);
  assert.equal(r2.mese, 1);
  assert.equal(r2.anno, 2025);
  const r3 = ctx._xlsRilevaMeseAnno('Anagrafica', []);
  assert.equal(r3.mese, null, 'nessun mese per fogli non mensili');
}

console.log('Test import Excel (parseSheet): OK');
