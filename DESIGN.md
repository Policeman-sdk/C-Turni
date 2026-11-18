# C-TURNI · DESIGN SYSTEM "FLUID BENTO TECH" (v3.0)
> **Linguaggio Visivo Istituzionale ad Alta Densità (Linear / Scrolltide / Vercel)**  
> *Riferimento Operativo:* Integrazione 1:1 su DOM completo di index.html (v4.2).

---

## 1. Architettura Visiva a 4 Livelli

### L0 — Sfondi SVG Dinamici (Fluid GPU Atmospheres)
Il fondo non è statico né piatto: un layer fisso (`position: fixed; inset: 0; z-index: -1; pointer-events: none`) ospita un SVG vettoriale con mesh gradient fluido a 3 o 4 stop cromatici arricchito da una texture noise a bassa opacità (`3-5%`) e micro-simboli istituzionali in filigrana vettoriale (`opacity: 0.04-0.07`):
- **Carabinieri (Default Dark):** Nero asfalto (`#070a0e`) sfumato verso il blu notte e rosso brunito, con filigrana geometrica della Fiamma dell'Arma a bagliore d'oro ambrato.
- **Forestale Dark:** Sottobosco verde pino profondo (`#080d09`), salvia scuro e muschio con accento smeraldo vivo.
- **Arma / Notte:** Zaffiro profondo, indaco e cobalto operativo con micro-griglie tattiche.
- **Rosa Dark:** Porpora notturno e magenta brunito con bagliore fluido caldo.
- **Varianti Giorno (Light):** Canvas satinato chiaro ad alto contrasto con aurore pastello ed hairline scure al posto dei riflessi.

### L1 & L2 — Bento Grid & Glass Panels
- **Bordi:** Sempre `1px solid var(--border-subtle)` (es. `rgba(255, 255, 255, 0.07)` sui dark).
- **Hairline Superiore (Luce):** `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08)`.
- **Raggi di Curvatura:** Serrati e tecnici: `10px` per chip e badge, `12px` per input e celle, `14px` per widget e card standard, massimo `16px` per Hero Card e modali.
- **Superfici:** Vetro scuro fumé satinato ad alta opacità (`rgba(13, 18, 25, 0.78)`) con `backdrop-filter: blur(16px)` dove non interferisce con lo scroll.

### L3 — Floating Action Sheet & Modali
- **Pillola di Navigazione:** Flottante a 24px di raggio, centrata (`max-width: 460px`), trasparenza azzerata sui contenitori padre per eliminare qualsiasi riquadro bianco[cite: 9, 11].
- **FAB Centrale (+):** Sfera/squircle 48x48px con gradiente d'accento che al tocco espande l'Action Sheet senza "X" rozze[cite: 9, 11].
- **Modali a Comparsa:** Bottom sheet fluidi con angoli arrotondati, maniglia di trascinamento magnetica e drag-to-dismiss.

---

## 2. Token di Stile e Palette

```css
:root {
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 9999px;

  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-prominent: rgba(255, 255, 255, 0.14);
  --border-glow: rgba(200, 169, 110, 0.35);

  --shadow-bento: 0 2px 8px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3);
  --hairline-top: inset 0 1px 0 rgba(255, 255, 255, 0.09);

  --font-mono: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
}

```

---

## 3. Implementazione della Sandbox (v3.0 "Fluid Bento Tech")

Il Design System è applicato **sul DOM reale di `index.html`**: nessuna schermata
ridotta, nessun blocco omesso. La sandbox è una copia 1:1 dell'interfaccia che
gira **100% offline** (nessuna richiesta di rete, nessun SDK Firebase).

| File | Ruolo | Contenuto |
|---|---|---|
| `test-index.html` | Scheletro DOM 1:1 | head di produzione offlinizzato (`test-style.css`, nessuna CDN), nuovo layer `#nf-bg` (L0), **tutto** il markup di `index.html` (splash, auth, 9 pagine, 30 modali, widget, drawer, FAB sheet), script inline di produzione (FAB + day-sheet), dock di collaudo, `Game/carabiniere-runner.js` (locale), `test-auth.js`, `test-app.js` |
| `test-style.css` | Base 1:1 + override | `style.css` di produzione **verbatim** (6408 righe, zero URL esterni) + **§19 Fluid Bento Tech v3.0** |
| `test-app.js` | Motore offline + adattatore DOM | §0 contesto e utility · §1 dati dimostrativi · §2 shell (toast, modali, nav) · §3 dashboard · §4 calendario/sheet/WhatsApp · §5 agenda, to-do, alert, notifiche · §6 reparto, straordinari, salvadanaio, studio · §7 impostazioni, tesserino, tema · §8 picker e modali operativi · §9 membri, comando, registrazione · §10 autostub, self-test, boot |
| `test-auth.js` | Accesso offline | 5 profili dimostrativi, `AuthModule`/`BiometricModule` compatibili con gli `onclick` di produzione, sessione simulata, selettore "Accesso rapido dimostrativo" |

### 3.1 Livello di override §19 (in coda a `test-style.css`)

- **19.1 Token**: `--radius-bento:14px`, `--radius-lg:16px`, `--radius-md:12px`,
  `--radius-chip:10px`, `--radius-pill:9999px`, `--border-subtle`,
  `--hairline-top`, `--shadow-bento`, `--glass:rgba(13,18,25,.78)`, `--font-mono`.
- **19.2 L0 Fluid Atmosphere**: `#nf-bg` SVG fisso (`z-index:-1`), 4 mesh
  gradient, texture `feTurbulence` al 4,5%, filigrana vettoriale per tema
  (Fiamma / foglia / costellazioni / griglia tattica) e deriva in solo `transform`.
- **19.3–19.8 Superfici**: bordo 1px + hairline interna + raggio 14px per card e
  widget, 16px per hero e modali, 12px per gli input, 10px per chip e badge;
  vetro fumé con `backdrop-filter: blur(16px)`.
- **19.4 Pillola di navigazione**: barra trasparente (nessun riquadro bianco) e
  pillola `.bn-items` da 24px, `max-width:460px`, centrata; FAB 48×48 con raggio
  16px e gradiente d'accento.
- **19.6 Tesserino digitale**: tessera d'identificazione in vetro scuro satinato,
  effigie del grado da PNG locale, matricola in cifre monospazio, timbro del
  Comando in filigrana ruotata.
- **19.14–19.17**: correzione di specificità per nav/FAB (`style.css` usa
  `!important` con selettori rinforzati), vetro sui widget, effigie dei gradi,
  contrasto delle varianti giorno.

### 3.2 Registro della replica DOM (nessuna omissione)

- **Pagine (9 blocchi `.pag`)**: `#pag-dash`, `#pag-cal`, `#pag-ag`, `#pag-rep`,
  `#pag-imp`, `#pag-turni`, `#pag-pers`, `#pag-membri`, `#pag-comando`.
- **Modali (30)**: `m-turno`, `m-mod-turno`, `m-straord`, `m-chiusura-straord`,
  `m-time-picker`, `m-datepicker`, `m-pers-picker`, `m-grado-picker`, `m-bacheca`,
  `m-cambio-turno`, `m-todo`, `m-agenda`, `m-scadenza`, `m-alert`, `m-persona`,
  `m-profilo`, `m-tema`, `m-avatar-editor`, `m-anno-lic`, `m-turni-custom`,
  `m-privacy`, `m-termini`, `m-guida`, `m-novita`, `m-giorno`, `m-confirm`,
  `m-rapido`, `m-fogli`, `m-egg`, `m-pwa-install`.
- **Pulsantiera sigle** (`#m-turno`): `M P N R ML PL RR 2 L 104 937 OBBM OBBP
  LICSTU PSTUDIO ESAME LS FEST C PER REC` (21 sigle dal markup reale) più
  periodo Dal/Al con frequenza, anteprima multi-turno e selezione giorni.
- **Straordinari**: stepper ore, pillole minuti `00/15/30/45`, 4 categorie,
  chiusura mese ("tutto a pagamento / tutto a recupero"), salvadanaio ore.
- **Minigioco**: `#widget-dino-dash` monta realmente `Game/carabiniere-runner.js`
  tramite `window.initDinoGame()` con sprite e fondali locali → funziona offline.
- **Drawer notifiche** (`#notif-drawer`) con 5 tab e stato letto/non letto;
  **FAB sheet** (`#sheet-fab`) con le 5 azioni reali e drag-to-dismiss.

### 3.3 Cablatura offline (zero errori, zero rete)

- **Login dimostrativo**: 5 profili con effigie reale (password `demo`), sessione
  simulata in `localStorage`, pulsanti biometrici simulati.
- **Stub di sicurezza**: al boot vengono censiti gli handler del markup; quelli
  non implementati diventano no-op loggate → **nessun ReferenceError** sui 410
  attributi `on*` del DOM di produzione.
- **Auto-diagnostica**: dock `#nf-qa-dock` con parametri URL `?qa`, `?deep`,
  `?login=<profilo>` e self-test che verifica struttura, navigazione, modali,
  calendario, sheet del giorno, condivisione WhatsApp, notifiche, widget,
  straordinari, tesserino, picker e integrità della sandbox.

### 3.4 Esito dei collaudi (Chrome headless, protocollo `file://`)

| Contesto | Self-test | Errori JS | Risorse esterne |
|---|---|---|---|
| Mobile 412×915 | **93 / 93** | 0 | 0 |
| Desktop 1280×860 | **93 / 93** | 0 | 0 |
| Reduce-motion | animazioni L0 disattivate | 0 | 0 |

Misure rilevate a runtime: pillola nav 24px / 460px / `blur(16px)` · FAB 48×48
raggio 16px · widget 14px + `rgba(13,18,25,.78)` + blur 16px · hero e modali
16px · input 12px · chip 10px · `#nf-bg` fisso con 4 mesh e filigrana per tema ·
tesserino con matricola `CC-102931` in monospazio · nessun overflow orizzontale
(`scrollWidth === innerWidth`).

### 3.5 Evidenze e punti aperti

- **Evidenze**: `test-shots/v3/` — `login`, `home`, `cal`, `sheet`, `notif`,
  `tess`, `light`, `rep`, `desktop`.
- **Punti aperti dichiarati**: la logica di business di `app.js` (15 575 righe,
  143 chiamate Firebase) non viene eseguita: la sandbox implementa i flussi a
  livello di interfaccia con dati dimostrativi, restando offline. L'integrazione
  in produzione di §19 resta **deferred** finché non viene approvata.

### 3.6 Rifinitura UI v3.1 — sfondi per tema, pop-up giorno, tesserino unificato

Nessuna modifica ai file di produzione (index.html / style.css / app.js
invariati: 205,1 / 231,1 / 748,4 KB).

**1 · Zero riferimenti geografici.** Rimosse tutte le occorrenze del toponimo di
reparto da `test-index.html`, `test-app.js`, `test-auth.js` (2 + 3 + 18) e gli ID
`STZ-VARAZZE-01` → `STZ-CC-01`. Diciture generiche: «Stazione CC Centro»,
«Comando Stazione», «Caserma Roma», timbro «COMANDO CARABINIERI · REPVBBLICA
ITALIANA». In registrazione l'ID reparto deriva dalla sede digitata (vuota →
`STZ-CC-01`). Un self-test verifica che il DOM non contenga il toponimo.

**2 · Sfondi SVG per tema** — 9 file in `assets/bg/` (1,4–1,5 KB ciascuno):
`viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"`, artwork ad alta
risoluzione (1536 px) dentro `<image href=... width="100%" height="100%">`,
vignettatura radiale e layer noise `feTurbulence` + `mix-blend-mode:overlay`.

| `data-theme` | file SVG | artwork di riferimento |
|---|---|---|
| `carabinieri` / `carabinieri-dark` | `bg-carabinieri-dark.svg` | `bg-carabinieri-dark.png` |
| `carabinieri-light` | `bg-carabinieri-light.svg` | `bg-carabinieri-light.png` |
| `forestale` / `forestale-dark` | `bg-forestale-dark.svg` | `bg-forestale-dark.png` |
| `forestale-light` | `bg-forestale-light.svg` | `bg-forestale-light.png` |
| `arma` / `arma-dark` | `bg-arma-dark.svg` | *alias* di `bg-carabinieri-dark.png` |
| `rosa` / `rosa-dark` | `bg-rosa-dark.svg` | `bg-rosa-dark.png` |
| `rosa-light` | `bg-rosa-light.svg` | `bg-rosa-light.png` |
| `light` / `chiaro` | `bg-light.svg` | `bg-chiaro-light.png` |
| *(default)* / `notte` | `bg-notte-dark.svg` | `bg-notte-dark.png` |

> **Nota sugli asset.** Gli artwork forniti sono JPEG con estensione `.png`; il
> render dedicato del tema `arma` non era presente, quindi `bg-arma-dark.svg`
> punta all'artwork Carabinieri (sostituibile lasciando il file nello stesso
> percorso). Il layer è completato da `.nf-bg-scrim`, un velo che garantisce il
> contrasto del testo (versione chiara sui temi giorno).

Aggancio ai temi: `#nf-bg` monta il file con `<object id="nf-bg-art">` e il
modulo `NF.bg` (test-app.js) ne riallinea `data` dentro `nfApplyTheme`, quindi
ogni cambio tema (card, `?deep`, `prefers-color-scheme`) aggiorna lo sfondo.

> **Vincolo tecnico verificato strumentalmente.** Un SVG caricato come *immagine*
> (`background-image` o `<img>`) **non risolve risorse esterne**: la prova ha
> restituito il pixel del rect di fallback `#ff00ff` → `[255,0,255]`. In contesto
> *documento* (`<object>` / `<iframe>` / inline) lo stesso `<image href>` si
> carica e restituisce i colori reali (`rgb(14,31,66)`). Per questo il montaggio
> usa `<object>`: i file `.svg` restano la sorgente unica e leggera. Controllo di
> rendering su griglia 3×3 dei 9 file: escursione di luminanza 104–225 su tutte
> le celle (nessun fallback piatto o magenta); A/B sul layer in pagina: spread 86
> con artwork vs 24 con artwork disattivato.

**3 · Pop-up del giorno (`#sheet-giorno`).**
- `#sheet-giorno > div` ha ora `padding-bottom: calc(115px + env(safe-area-inset-bottom, 0px))`
  e `max-height: calc(100vh - 56px)`: il pulsante «Condividi su WhatsApp» non
  finisce più sotto la bottom bar (misurato: `waBottom 800 ≤ navTop 833`).
- «Colleghi in servizio» torna suddiviso per fascia oraria —
  🌅 Mattina (06–14) · ☀️ Pomeriggio (14–22) · 🌙 Notte (22–06) · 🛋️ Riposo —
  con contatore e orario per gruppo (`nfFasciaTurno()` + `nfColleghiHtml()`).

**4 · Selettore colleghi sopra il form turno (fix z-index).** Causa individuata a
runtime: `openM()` scrive lo z-index come dichiarazione *inline non-important*
(≥ 99700) mentre la regola di produzione `#m-pers-picker{z-index:20010!important}`
vinceva, mettendo il selettore **dietro** il form. Rimedio doppio: §19.22 con
`#m-pers-picker{z-index:100060!important}` e l'elenco `NF_Z_FISSO` in `openM()`.
Verificato: picker 100060 > turno 99710 e `elementFromPoint` cade dentro il
selettore (quindi è davvero cliccabile).

**5 · Respiro in Agenda.** Righe di Appuntamenti e Compiti con
`padding:14px 16px`, `margin-bottom:8px`, `border-radius:14px`, `gap:12px`;
orario in cifre monospazio tabulari (`font-variant-numeric:tabular-nums`,
`min-width:48px`) e nota informativa staccata dal titolo.

**6 · Tesserino unificato in Impostazioni.** Il blocco isolato «Tesserino ATE»
in fondo alla pagina è stato eliminato: la card **Profilo Utente** è ora essa
stessa il tesserino digitale Bento Glass (stemma della Repubblica, avatar o
effigie del grado in PNG da `grades/`, nome e cognome, grado, reparto,
matricola monospazio, **timbro tondo** di comando in filigrana semitrasparente)
con il pulsante **Modifica Profilo**. In modifica la card mostra i campi
editabili — Nome, Cognome, Grado (picker con 18 effigi) e la **griglia avatar
completa** — con **Salva** e **Annulla**; i nodi legacy `#imp-nome`/`#imp-sub`
restano nel DOM (nascosti) per non rompere `applyIdentita()`.
La griglia avatar è stata implementata ex novo nella sandbox: 38 PNG locali in
3 categorie — truppa 10, ufficiali 10, forestali 18 — × genere, con le classi
`.avm3-*` di produzione (`renderAvatarPickerNew`, `switchAvaTab`,
`switchAvaGenere`, `selezionaAvatarNew`).

### 3.7 Collaudi aggiornati (dopo la rifinitura v3.1)

| Contesto | Self-test | Errori JS | Risorse esterne |
|---|---|---|---|
| Mobile 412×915 | **108 / 108** | 0 | 0 |
| Desktop 1280×860 | **108 / 108** | 0 | 0 |
| Reduce-motion | **109 / 109** (animazioni L0 disattivate) | 0 | 0 |

`npm test` (smoke + import Excel) verde. Nuovi self-test: zero toponimi nel DOM,
timbro del Comando, reparto `STZ-CC-01`, tesserino unico dentro la card Profilo,
pulsanti Salva/Annulla, 3 categorie avatar + selezione con anteprima, sfondo SVG
agganciato e 1:1 con `data-theme` (light / forestale / rosa-light), gerarchia del
selettore colleghi sopra il form turno, gruppi per fascia nello sheet del giorno,
padding di sicurezza e WhatsApp sopra la bottom bar, respiro delle righe in Agenda.

Evidenze: `test-shots/v3-task/` — `01-mobile`, `02-desktop`, `03-reduce`,
`04-gallery` (griglia dei 9 sfondi), `05-light-art` / `06-light-noart` (A/B
sull'artwork).

Strumenti di lavoro (in `%TEMP%`, non nel repo): `nf-cdp.js` (harness CDP),
`nf-bg-svg.js` (generatore dei file SVG), `nf-verify.js` / `nf-recap-q.js`
(sonde di misura), `nf-png-region.js` (analisi pixel degli screenshot),
`nf-regen-css.js` (`test-style.css` = `style.css` + §19), patch puntuali
`nf-patch-*.js`. Rigenerazione: modifica `%TEMP%\nf-bento.css` → `node
%TEMP%\nf-regen-css.js`; rifai gli SVG con `node %TEMP%\nf-bg-svg.js`.


## §21 · Gerarchia z-index dei modali e dei picker secondari (v5.0.2)

**Bug.** Durante l'inserimento/modifica di un turno, toccando il campo orario il
pannello `#m-time-picker` compariva **dietro** il form `#m-turno`.

**Causa (misurata, non dedotta).** Due difetti concorrenti:

1. `openM()` impila i modali con z-index *inline non-important* crescenti
   (`_zTop += 10` da 19000) mentre i picker erano ancorati da regole
   `!important` (20010…20040): superata quota ~20040 (≈105 aperture per
   sessione, perché **ogni** apertura di picker incrementava `_zTop`) il picker
   restava fermo e il modale lo scavalcava. Misura in Chrome headless:
   `#m-turno` 21260 vs `#m-time-picker` 20040, e `elementsFromPoint()` sul
   pulsante «Conferma» restituiva `#mt-ora-fi-btn` (un bottone del form).
2. `#m-time-picker` era l'unico modale ancora figlio di `#pg-app` invece che di
   `<body>` (mancava dall'elenco di re-parenting del `DOMContentLoaded`):
   fragile rispetto a qualunque `transform`/`contain` futuro sul contenitore,
   che avrebbe intrappolato il suo stacking context e spostato il containing
   block del bottom-sheet (`.mbox` ha `position:fixed` inline).

**Rimedio.** Sezione §21 in `style.css` + tre modifiche in `app.js`:

- fascia rigida: `#m-time-picker`, `#m-datepicker`, `#m-pers-picker`,
  `#m-grado-picker` → `z-index:100080!important`; contenitore interno
  (`> div`, cioè `.mbox`) → `position:relative; z-index:100081!important`.
  Il `position:relative` non è `!important` di proposito: sul time picker
  l'inline `fixed` del bottom-sheet deve continuare a vincere;
- `openM()`: i picker escono dall'ascensore (`NF_PICKER_Z`) e i modali hanno un
  soffitto (`NF_Z_CEIL = 100070`) che non può mai entrare nella fascia picker;
  `#m-confirm` 100090 (deve stare sopra un picker aperto), `#ct-spinner` 100099;
- `apriTimePicker()`: riporta il pannello su `<body>` con `_nfPinPicker()`
  (z-index + `pointer-events:auto`) prima di `openM()`;
- elenco di re-parenting del boot esteso ai modali rimasti in `#pg-app`:
  `m-mod-turno`, `m-scadenza`, `m-alert`, `m-bacheca`, `m-cambio-turno`,
  `m-persona`, `m-guida`, `m-time-picker`;
- `#m-turno`/`#m-mod-turno` a `z-index:10000` **senza** `!important`: è il
  livello base standard richiesto, ma l'ascensore deve poterli alzare quando
  vengono aperti sopra un altro modale (es. guida → «Nuovo turno»);
- rimossi gli z-index inline delle card picker (`99990`, `100000!important`,
  `100001!important`): un `!important` inline batte qualunque CSS `!important`
  e avrebbe reso §21 non pilotabile.

**Verifica.** Prima → dopo, stessa build, Chrome headless 430×932:
`stackConf` (punto del bottone Conferma) da `button#mt-ora-fi-btn…` a
`button.btn` del picker; `parent` da `div#pg-app` a `body`; prova di stress
(110 aperture): picker 20040 dietro → 100080 davanti. Con soffitto forzato
(`_zTop=100060`) `#m-turno` si ferma a 100070 < picker 100080. Datepicker e
selettore personale riaperti dal form restano cliccabili (`hitGiorno` cade su
una cella di `#dp-grid`). Zero errori JS, `npm test` verde, graffe CSS
bilanciate 1701/1701, cache-bust e service worker a `5.0.2`.




## §22 · Identità utente, contatore licenze, mesi precedenti e mesi chiusi (v5.0.3)

Cinque segnalazioni dal campo, tutte riprodotte in Chrome headless con dati
seminati prima di essere corrette (harness `%TEMP%\nf5\nftest.*`).

**1 · Turni e notifiche di un altro collega (omonimo di nome).**
Dashboard e push mostravano i turni di un collega con lo **stesso nome e cognome
diverso**, mentre il calendario era corretto. Causa: nell'import Excel la
decisione "questa riga sono io" accettava anche le varianti col **solo nome** e
il match parziale (`indexOf`): `"mario bianchi".indexOf("mario") !== -1` →
`ct_my_pid` e `linkPersonaToUser()` venivano assegnati **al collega**. Da quel
momento ogni filtro "è mio?" (dashboard, pre-turno, notifica mattutina)
rispondeva sì sui suoi turni; il calendario confronta `t.pid` e quindi restava
giusto. Rimedi:
- l'aggancio "sono io" ora richiede **nome e cognome completi e uguaglianza
  esatta** (nei due ordini), rifiuta le persone già collegate a un altro `uid`;
- `_nfPidValido()` / `_nfMioPid()`: il pid salvato viene validato contro `uid`
  e nome completo e **scartato** se appartiene a un altro utente (memoizzato,
  perché `_isMyTurno` gira su ogni turno a ogni render);
- `_nfSanificaIdentita()` ripara gli impianti già contaminati a ogni boot e dopo
  login/sync (`aggUI`), ricavando il pid **solo** dall'`uid`;
- `_nomeAmbigui()` blocca il matching per nome quando esiste un omonimo **anche
  di solo nome**, non solo di nome completo (`_nomeOmonimi` copriva solo il caso
  identico);
- `_isMyTurno()` non scrive più `ct_my_pid` da un match per nome (era la fonte
  dell'identità "ereditata") e non applica il fallback sul nome ai turni che
  dichiarano già pid/uid.
Misura prima → dopo: con `ct_my_pid` del collega, `_isMioTurnoStrict(suoTurno)`
`true` → **`false`**; widget `Mario Rossi/mattina` in entrambi i casi; push
schedulati solo sui propri turni (`n=2`, tutti `Mario Rossi`).

**2 · Contatore licenze che non calcola le immissioni.**
`saveFeriePool()` aggiornava i due badge (totale/saldo) ma **non** la lista per
anno: dopo aver immesso o consumato un giorno la lista restava al valore
precedente (misura: totale reale 34, lista ancora 30). Ora ridisegna anche
`renderFeriePool()`/`caricaPoolLicenzeMe()`. In più: `getLicenzePool`,
`aggiungiRimanenzaAnnoUtente`, `rimuoviRimanenzaAnno` e `saveFerie` confrontavano
`id` con `===` (falliva con id numerico vs stringa, in silenzio) o addirittura
per **nome** (scriveva il saldo sul collega omonimo): ora sempre per `id`/`uid`.

**3 · Mesi precedenti che non si aprono.**
Un turno importato **senza `tipo`** faceva crashare `renderCal`
(`mioTurno.tipo.slice` su `undefined`): l'eccezione interrompeva il render e la
griglia restava sul mese precedente, dando l'impressione che la navigazione
"non aprisse" i mesi con turni. Ora il badge usa `_tipoEffettivoTurno()` +
sigla di fallback, e `renderCal` è avvolta in una rete di sicurezza
(`try/catch` + log) perché un singolo record malformato non possa più bloccare
la navigazione.

**4 · Ore aggiunte a un mese chiuso impossibili da smistare.**
`salvadanaioChiudi()` confrontava i **totali** digitati col **residuo**
(`minDaDestinare`): su un mese chiuso con 4h già allocate e 2h aggiunte dopo,
"6h a pagamento" veniva rifiutato con «ne restano 1h da destinare», lasciando il
mese con ore da destinare impossibili da assegnare. Inoltre `apriChiusuraMese()`
ripartiva sempre da `0`, quindi salvare "il resto" **cancellava** le ore già
destinate. Rimedi: tetto = `minLavorate` quando il mese è già chiuso; campi
prefillati con i totali esistenti; «Tutto a pagamento/recupero» scrive il totale
del mese; la chiusura memorizza `minLavorate` per distinguere le ore aggiunte
dopo (`nuoveOreDopoChiusura` → il mese torna "da chiudere").

**5 · Riapertura di un mese chiuso che falliva sempre.**
`salvadanaioRiapriMese()` bloccava la riapertura se esistevano **consumi di
qualunque mese** (`s.minConsumati > 0`): bastava un giorno "Recupero ore" di un
altro periodo per rendere immodificabili le ore. Ora il controllo considera solo
i consumi **di quel mese**.

Verifica: 22 asserzioni runtime tutte verdi (prima: 7 rosse), `npm test` verde,
`node --check app.js` OK. Cache-bust `app.js?v=5.0.3`, service worker
`c-turni-v5.0.3`.

## §23 · Trasparenza dello sfondo regolabile (v5.0.4)

**Richiesta.** Poter aumentare o diminuire la trasparenza dello sfondo da
**Impostazioni ▸ Aspetto**.

**Interfaccia.** Nuovo cursore «Trasparenza sfondo» dentro
`Aspetto ▸ Tema interfaccia`, subito sotto «Dimensione interfaccia» (stesso
linguaggio visivo: cursore `accent-color: var(--blue)`, etichette agli estremi
*Solido* / *Vetro*, scala *Opaco · Bassa · Media · Alta · Massima* ed etichetta
live a destra). `oninput` = anteprima immediata, `onchange` = salvataggio.

**Come funziona.** Il cursore (0–100, default **50**) non tocca la trama
dell'artwork del tema, ma regola due variabili CSS su `<html>`:

| valore | `--nf-bg-solid-k` (velo pieno) | `--nf-bg-scrim-k` (velo contrasto) |
|---|---|---|
| 0 (Opaco) | `.55` | `1` |
| **50 (Media)** | `0` | `1` |
| 100 (Massima) | `0` | `.55` |

- lato «opaco»: `#nf-bg::after` sovrappone il colore di base del tema
  (`--nf-bg-solid`: `#070a0e` notte, `#e9eff7` temi chiari / `auto` in sistema
  chiaro) fino al 55% → il fondo diventa più pieno;
- lato «vetro»: si alleggerisce il velo di contrasto `.nf-bg-scrim` fino a .55
  → l'artwork emerge di più.

A **50** i due valori coincidono con l'aspetto precedente (`solid 0`, `scrim 1`):
nessun cambio visivo per chi non tocca il cursore. Si modula solo `opacity`
(su `#nf-bg`, layer già promosso in §20) con transizione di 180 ms, disattivata
da `html[data-motion="off"]`.

Persistenza: `ct_bg_tr` in localStorage. Un bootstrap in testa ad `app.js`
applica le variabili **prima del primo paint** (nessun flash), poi
`caricaTraspSfondo()` (chiamata accanto a `caricaTema()`) riallinea cursore ed
etichetta.

**Verifica.** 10 asserzioni runtime in Chrome headless: default = aspetto
storico (`scrim 1`, `::after 0`), 100 → `scrim .55`, 0 → velo `.55` +
`::after .55`, salvataggio/ripristino (`ct_bg_tr = 15` → `.39`), colore del
velo per tema chiaro/scuro, clamp fuori range (−40 → `.55`, 400 → `.55`).
Screenshot comparativi a 0/50/100 (`%TEMP%\nf5\shot-bgtr-*.png`) e controllo UI
(`shot-bg-slider-ui2.png`). `npm test` verde, `node --check app.js` OK, graffe
CSS 1708/1708. Cache-bust `5.0.4`, service worker `c-turni-v5.0.4`.


## §24 · Skin "Apple Liquid Glass" su tutti gli 8 temi (v5.0.5)

**Richiesta.** Trasformare l'intera UI in stile Apple Liquid Glass, adattivo a
tutti i temi, senza regressioni funzionali.

**Confini rispettati (zero regressioni).** Nessun `id` rinominato, nessuna
modifica a `app.js`, alla sezione *Profilo* (`#imp-profilo-card`/`#imp-profilo-body`),
ai picker, al minigioco, alle sigle turno né ai calcoli ferie/straordinari.
Restano intatti i fix precedenti, verificati a runtime:
- `#nf-bg` → `position:fixed`, `z-index:-1`, `pointer-events:none`,
  `transform:translateZ(0)` (matrice `matrix(1,0,0,1,…)`);
- picker secondari a `z-index:100080` e ancora sopra il form (hit-test sul
  pulsante «Conferma» del time picker: `button.btn` del picker in cima).

**Token (§24.1–24.3 in `style.css`).** In `:root` i valori richiesti
(`--glass-bg` 56%, `--glass-bg-elevated` 72%, `--glass-bg-subtle`,
`--glass-blur: blur(22px) saturate(180%)`, bordi, riflesso speculare
`--glass-highlight`, ombre, raggi 20/14/pill), sovrascritti dai quattro temi
chiari (vetro bianco latte 62/82%, ombre morbide) e da `auto` in modalità
chiara. Tinte ambientali per *Carabinieri* (oro/rosso), *Forestale* (verde),
*Rosa* (rosa) e riflessi tinti sulle rispettive varianti chiare.

**Applicazione (§24.4–24.6).**
- superfici statiche/elevate con blur **22px**: `.hdr`, pillola `#bottom-nav
  .bn-items`, `.modal .mbox`, `#auth-card`, `.noti`, `#notif-drawer`,
  `#sheet-giorno > div`, `.m3-list-group`, `.sett-card`, `.card`, `.pcard`;
- widget e card ripetute con blur **14px** (`--glass-blur-soft`): `.m3-card`,
  `.bento-card`; `.wdg-wrap` trasparente con raggio vetro;
- dettagli: campi `.fc` (token dedicato `--glass-field`: 6% bianco su scuro,
  72% bianco su chiaro, per restare leggibili e superare la regola legacy dei
  temi chiari), bottoni (`--glass-highlight` + ombra, colore semantico
  preservato), `.bico`, `.mcl`, chip/preset, righe `.m3-row` con hairline,
  card interne (`.ag-item`, `.todo-item`, `.twrap`, `.sc`, `.salv-card`,
  `.straord-row`, `.rep-count-card`), celle calendario, header/footer modali;
- `.modal` diventa un velo sfumato (`rgba(6,10,16,.45)` + blur 10px; versione
  chiara per i temi giorno) così l'artwork resta percepibile dietro i pannelli;
- `.hero-card` conserva il gradiente per tipo-turno impostato da `app.js`
  (inline) e riceve solo cornice, riflesso e ombra.

**Perf e stabilità (deliberato).** Il budget di §20.1 nasce dal flickering
misurato con 22 superfici a 16–24px: per questo il blur "pieno" resta solo su
superfici statiche, i widget usano 14px e durante il drag il blur viene spento
(`.wdg-wrap.dragging .m3-card{backdrop-filter:none}`). Inoltre
`@media (prefers-reduced-transparency: reduce)` rende le superfici quasi opache
(comportamento Apple) e `@media print` azzera blur e ombre.

**Verifica.** Matrice automatica su 8 temi (Chrome headless): per ognuno
`T_<tema>` = vetro con alpha < 1 su card/isole/header/nav + blur attivo su
group/header/pill + bordo token + raggio 20 + campo in vetro; `C_<tema>` =
contrasto testo/superficie sempre ≥ 4.5 (misurati 16.6 → 19.7 sugli scuri,
6.3 → 6.9 sui chiari); `W_<tema>` = widget a 14px; `G_nfbg` e `G_pickerZ`
invariati; `G_hitNav` = la pillola resta cliccabile. Sonda picker: 5/5 PASS.
Regressione §22 (22 asserzioni) e §23 (10 asserzioni) ancora verdi, `npm test`
verde, graffe CSS 1753/1753. Screenshot: dashboard nei 6 temi principali e
modale turno in notte/chiaro/carabinieri (`%TEMP%\nf5\shot-glass-*.png`).

## §25 · Glass uniforme su tutti i componenti + identità turni rigorosa (v5.0.6)

**A · Applicazione uniforme dei token `--glass-*` (§24.8–24.9 in `style.css`)**
- `.hdr`: `--glass-bg` + `--glass-blur` + hairline inferiore.
- Card/widget/gruppi (`.m3-card`, `.m3-list-group`, `.wdg-wrap`, `.bento-card`,
  `.pcard`, `#widget-oggi`, `.hero-card`): `--glass-bg`, `--glass-blur`, bordo,
  `--glass-shadow` + `--glass-highlight`, raggio 20. **Nessun blur annidato**:
  `.wdg-wrap` e `.bento-card > div` restano senza filtro (il vetro è sulla
  superficie interna) e durante il drag il blur della card si spegne.
- Interni/righe (`.ag-item`, `.ag-todo-card`, `.todo-item`, `.m3-row`,
  `.cal-cell`): `--glass-bg-subtle` + bordo sottile + raggio 14, **senza
  backdrop-filter** (30+ elementi in scroll). Hover/tap solo `transform` e
  `background-color`. Le righe dentro `.m3-list-group` prendono hairline singola
  e angoli arrotondati solo su prima/ultima (evita doppie cornici).
- Input e pulsanti secondari (`.fc`, `.btn-g`, `.tipo-rep-btn`, `.btn-turno-r`):
  vetro inciso (inset shadow), bordo `--glass-border`, raggio 12.
- Stati attivi (`.btn-p`, `.sel`, `.rep-tab.active`, switch): gradiente lucido,
  bordo luminoso e bagliore d'accento; dove `color-mix` è disponibile il
  bagliore deriva da `--accent` del tema.
- `#bottom-nav`: capsula `--glass-bg-elevated` con `blur(26px) saturate(200%)`,
  bordo, ombra, raggio pill; tab attivo = pillola interna in vetro + alone
  d'accento. FAB (`#fab-main`, `.nav-fab`, `#btn-nav-add`) con gradiente,
  bordo vetro e ombre combinate.
- Modali/sheet/picker/drawer (`.modal .mbox`, `#sheet-giorno > div`,
  `#notif-drawer`, più `.modal-dialog`/`.m-content` per compatibilità):
  `--glass-bg-elevated`, `blur(28px) saturate(190%)`, bordo superiore e ombra
  `0 -10px 40px`.

**B · Anti-burnt FPS (misurato)**
La sonda conta le superfici con `backdrop-filter` **effettivamente renderizzate**
e rileva i blur in catena: risultato **12 superfici, 0 annidati**. Per arrivarci
sono stati rimossi i due casi critici: `backdrop-filter` sull'overlay `.modal`
(era in catena con ogni `.mbox`: 30+ blur annidati finché un modale restava
aperto) e su `#auth-card` (stava sopra un overlay già sfocato). La capsula nav
usa selettori di specificità ≥ `nav#bottom-nav.bottom-bar .bn-items` per
superare la firma §20.1 (che fissava 14px/150%).

**C · Identità turni: una sola regola (bug omonimia)**
`_isMyTurno(t, me)` non contiene più alcun fallback sul nome né scritture di
identità: **delega a `_isMioTurnoStrict`**, quindi Dashboard, widget,
notifiche, condivisione e Report usano la stessa identità del Calendario
(`uid`/`pid`/`ownerUid` + risoluzione della persona da `ct_p` per uid/id).
Allineati esplicitamente anche: `_turniMieiUnici`, `controllaNotifiche` e
`schedulaPreTurniFirebase` (via `_turniMieiUnici`), `scheduleNotifMattutina`,
l'elenco "Colleghi in servizio oggi" in `aggiornaWidget` e il match del Report.
`_nfSanificaIdentita()` ora **forza** `ct_my_pid`/`me.myPid` sul `p.id` della
persona con `p.uid === me.uid` (con tie-break sul nome se più record
rivendicano lo stesso uid), invalidando la cache del pid: gli impianti già
contaminati si riparano al primo avvio/login.

**D · Nome completo nella hero card**
`aggiornaHeroCard()` compone `nomeCompleto = nickname || ("nome cognome").trim()`
e lo scrive in `#hero-greeting-name` (e nell'iniziale dell'avatar). `#w-nome-utente`
in `aggiornaWidget` usava già la stessa composizione.

**Verifica.** Matrice temi estesa: 8 temi × (vetro/bordi/raggio/campo, contrasto
`--txt` ≥ 4.5, contrasto `--txt2` ≥ 3, widget a 14px) = 32 PASS; guardrail
`#nf-bg`, z-index picker 100080, blur annidati 0, righe senza blur, capsula nav
26px/pill, campi raggio 12, gradiente stati attivi, hit-test nav = 7 PASS.
Sonde JS: hero `#hero-greeting-name` = "Mario Rossi"; `_isMyTurno` → turno del
collega `false`, proprio `true`, turno legacy senza identità `false`.
`npm test` verde, `node --check app.js` OK, graffe CSS 1786/1786.
Cache-bust `5.0.6`, service worker `c-turni-v5.0.6`.


## §26 · iOS 27 Liquid Glass, pagine iOS opache e identità rigorosa (v5.0.7)

**PARTE 1 — Identità utente (bug omonimia)**
- **Vietati i match per nome parziale.** In `firebase-manager.js` `syncUsers()`
  usava `uNome.indexOf(pn)`/`pn.indexOf(uNome)`: agganciava `ct_p` alla persona
  sbagliata quando il nome coincide e il cognome no, e da lì tutti i suoi turni
  diventavano "miei" (match per `uid`). Ora il legame avviene **solo** con
  nome+cognome completi ed esatti, **un solo candidato**, niente `indexOf`.
- `_collegaPlaceholder()` (app.js): rimossi i match per solo nome/cognome e i
  confronti parziali; aggancia solo per uid esatto o nome+cognome completi.
- **`window._sanitizeMyPid(me)`**: fonte di verità dell'identità. Allinea
  sempre `ct_my_pid`/`me.myPid` alla persona con lo stesso `uid` (o all'unica
  con nome+cognome completi), **cancella** un pid che appartenga a un omonimo
  con cognome diverso e invalida la cache. Chiamata in `aggiornaWidget()`,
  `aggiornaHeroCard()`, `controllaNotifiche()`, `schedulaPreTurniFirebase()` e
  dopo ogni sync profilo (`_setMeSanitized()` in firebase-manager, usata in
  login, restore sessione e snapshot `utenti/{uid}`).
- **Guardia anti-omonimo nei turni** (`_nfTurnoDiAltroNome`): se un turno
  dichiara un nome completo diverso dal mio, `_isMyTurno`/`_isMioTurnoStrict`
  rispondono **false** anche se il `pid` coincide (difesa sui dati incoerenti).
- **`window._getNomeCognomeUtente(me)`**: Nome+Cognome sempre completi, con
  recupero del cognome da `ct_users` e poi da `ct_p` se `me.cognome` è vuoto;
  usata in `#hero-greeting-name`, `#w-nome-utente` e nel benvenuto del login.

**PARTE 2 — Design iOS 27**
- **Token `--ios-*` per gli 8 temi**: `--ios-grouped-bg`, `--ios-card-bg`,
  `--ios-card-elevated`, `--ios-sep`, `--lg-pill-bg` (Notte `#000/#1C1C1E/#2C2C2E`,
  Carabinieri `#07090E/#121621/#1C2233`, Forestale `#060D08/#101E14/#192D1F`,
  Rosa `#0F050A/#1F0D16/#2E1522`; chiari `#F2F2F7/#FFF/#FFF`, con avorio
  `#F5F3EE` (Carabinieri) e salvia `#EFF5F0` (Forestale)).
- **Pagine opache**: Impostazioni, Agenda, Calendario, Report, Comando,
  Personale, Membri e Turni hanno sfondo solido (`!important`, per superare la
  shell storica `background:transparent!important`) con copertura completa via
  `.cont:has(> .pag.on:not(#pag-dash))` e `#pg-app:has(#pag-*.on)`. La
  **Dashboard** resta trasparente e conserva il vetro (§24).
- **Inset Grouped List iOS**: gruppi `--ios-card-bg`, 18px, hairline 0.5px,
  separatori rientrati a 56px con `::after` (niente doppie cornici), righe
  min 52px / padding 11-16, titoli 12px/600 uppercase, icone app 32×32 raggio 8
  con micro-riflesso, sottosezioni `--ios-card-elevated`.
- **Account card**: avatar 60×60 con anello, nome 19px/700 (-0.4px), sottotitolo
  13px `--ios-label2`, chevron; corpo espandibile in stile iOS.
- **Selettore temi**: swatch a pillola con anello speculare e checkmark
  circolare blu iOS `#007AFF` sulla card attiva.
- **Liquid Glass iOS 27**: tab bar `--lg-pill-bg` + `blur(28px) saturate(200%)`
  con doppio inset (edge ring + top highlight) e capsula attiva; `.btn-p` blu
  iOS a 14px con riflesso e `scale(.97)`; chip in vetro satinato (segmented);
  modali/sheet con 32px in alto, `blur(32px) saturate(190%)` e grabber 36×5.
  Nei temi chiari la Dashboard mantiene il vetro (`.m3-card` a
  `--glass-blur-soft`) nonostante la regola legacy delle superfici solide.

**Pulizia CSS**: rimossi i selettori morti `.modal-dialog`/`.m-content` (non
esistono nel DOM) e consolidati in §26 i layer vetro duplicati di §24 per nav,
modali, liste e righe (una sola dichiarazione efficace per componente). Le
sezioni storiche di tema e di performance (§19/§20) restano: non sono duplicati
grafici ma vincoli GPU/z-index ancora attivi (blur annidati = 0 misurato).

**Verifica.** `iosprobe`: 8 temi × (pagina+shell+card opache, lista 18px/riga
52/icona 32/raggio 8/titolo 12, nome 19px/700, Dashboard trasparente) = 32 PASS
+ nav 28px/pill/inset + swatch check + modale 32px/grabber + **blur 14 superfici,
0 annidati**. `glassprobe` (32 PASS) aggiornato alla nuova architettura;
`nftest` (28 asserzioni) verde, incluse `_sanitizeMyPid` (pid sporco 2 → 1),
`_getNomeCognomeUtente` e guardia anti-omonimo; `npm test` verde,
`node --check` su app.js e firebase-manager.js OK, graffe CSS 1841/1841.
Evidenze: `shot-ios-imp-notte.png`, `shot-ios-imp-light.png`.


