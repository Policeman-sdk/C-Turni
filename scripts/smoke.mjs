import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const [app, html, manifestText, worker, db, firebase] = await Promise.all([
  readFile('app.js', 'utf8'), readFile('index.html', 'utf8'), readFile('manifest.json', 'utf8'),
  readFile('firebase-messaging-sw.js', 'utf8'), readFile('db.js', 'utf8'), readFile('firebase-manager.js', 'utf8')
]);
const manifest = JSON.parse(manifestText);

assert.equal(manifest.start_url, './');
assert.equal(manifest.scope, './');
assert.match(worker, /addEventListener\('fetch'/);
assert.match(html, /PSTUDIO/);
assert.match(app, /_STUDIO_MONTE_ANNUO = 150/);
assert.match(app, /_TURNI_MULTI_MAX = 180/);
assert.match(app, /ct-cambio-voce/);
assert.match(app, /confermatoVoce/);
assert.match(firebase, /session\.ruolo === 'superadmin'/);
assert.match(db, /fallback to localStorage/);

for (const file of ['app.js', 'db.js', 'state.js', 'biometric.js', 'firebase-manager.js', 'firebase-messaging-sw.js']) {
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  assert.equal(result.status, 0, `${file}: ${result.stderr}`);
}
console.log('Smoke test C-Turni: OK');