# C-Turni 4.3

Gestionale per la pianificazione e gestione dei turni, disponibile come sito/PWA e progetto Android Capacitor.

## Permessi studio

In **Impostazioni → Ferie & Licenze** è possibile attivare un monte di 150 ore per l'anno corrente. Il turno `PSTUDIO` utilizza 6 ore. Il saldo viene ricalcolato dai turni esistenti, quindi modifica e cancellazione restituiscono automaticamente le ore.

## Controlli

`npm test` controlla sintassi, manifest, service worker e presenza della funzione permessi studio.

## Android

Il package predefinito è `it.policemansdk.cturni` e può essere cambiato in `capacitor.config.json` prima della pubblicazione.

1. `npm install`
2. `npm run android:sync`
3. `npm run android:open`

La firma release va creata e conservata dal proprietario dell'app. Non inserire keystore o password nella repository.

## Firebase

La repository include `firestore.rules`, `storage.rules` e `database.rules.json`. Verificarle su un progetto di prova prima della pubblicazione. Il Realtime Database è negato per impostazione predefinita perché l'app utilizza Firestore.
