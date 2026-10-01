# C-Turni 4.3

Gestionale per la pianificazione e gestione dei turni, disponibile come sito/PWA e progetto Android Capacitor.

## Turni multipli (più colleghi e più giorni)

Dal pulsante **＋ Nuovo Turno** è possibile creare più turni in un'unica operazione:

1. **Più colleghi** — il pulsante *＋ Più colleghi* apre il picker persone in modalità multi-selezione
   (pulsante **Multi** oppure direttamente dal form). Ogni collega selezionato compare come *chip*
   rimovibile sotto il campo Persona; il riepilogo mostra "Nome +N".
2. **Più giorni** — il pulsante *Più giorni (periodo)* attiva il campo **Al giorno**, il passo
   *Ogni (giorni)* e i chip dei giorni della settimana (Lun→Dom) per includere/escludere i giorni
   del periodo.
3. **Anteprima** — prima del salvataggio il form mostra `colleghi × giorni = turni` e il pulsante
   diventa `Salva (N)`.

Il salvataggio crea il prodotto colleghi × giorni con gli stessi tipo turno, orario, note e codice:

- i turni **già presenti** (stessa persona, data e tipo) vengono ignorati e segnalati nel messaggio finale;
- i turni che richiedono disponibilità (ferie, recupero, 937, licenza) non salvabili vengono saltati;
- i turni vengono scritti **una sola volta** su `localStorage` e su Firestore, con una notifica aggregata;
- senza ruolo di comando restano salvabili solo i propri turni.

## Salvadanaio straordinario (recupero ore / pagamento)

Le ore di straordinario **non modificano i turni** `L`/`LICSTU`: restano voci proprie
(Report → tab **⏱️ Straordinari**) e confluiscono nel **salvadanaio ore**, diviso tra
**mese in corso** e **mesi precedenti**.

1. **A fine mese** l'app propone la *Chiusura mese*: si scelgono quante ore mandare
   **a pagamento** (escono dall'app, restano solo nel riepilogo *Pagamenti*) e quante
   **a recupero**. Le ore non destinate restano in memoria come arretrato e il mese si
   può riaprire (`Riapri`) o chiudere di nuovo per il resto.
2. **Durante il mese** le ore a recupero si usano per **generare un nuovo giorno di
   licenza chiamato "Recupero ore"** (1 giorno = 6 h, configurabile dal salvadanaio):
   il giorno è un turno `licenza` con codice `RECUPERO ORE` che **non scala il pool
   Ferie & Licenze** — lo paga il salvadanaio — e in calendario/elenco è mostrato come
   `RO` / 🔄 Recupero ore.
3. **Reversibilità**: se il giorno "Recupero ore" viene modificato o eliminato, le 6 h
   **tornano disponibili** nel salvadanaio. Le ore di un mese chiuso non si modificano
   né si eliminano finché il mese non viene riaperto.

Dati: tutto in `ct_straord` (voci normali + `kind:'chiusura'` e `kind:'consumo'`),
quindi già sincronizzato su Firestore insieme agli straordinari, senza migrazioni.

## Permessi studio

In **Impostazioni → Ferie & Licenze** è possibile attivare un monte di 150 ore per l'anno corrente. Il turno `PSTUDIO` utilizza 6 ore. Il saldo viene ricalcolato dai turni esistenti, quindi modifica e cancellazione restituiscono automaticamente le ore.

## Menu Comando — cambio turno e compiti

Il **Menu Comando** (Comandante/Vice) gestisce due flussi nuovi:

### Richieste di cambio turno (doppia accettazione)
- Dal calendario, **🔄 Chiedi cambio turno**: scegli il tuo turno, il collega e il suo turno; la richiesta parte con stato `attesa_collega`.
- Se il collega è già stato sentito verbalmente, si può spuntare **“Collega già sentito a voce”**: la richiesta passa direttamente a `attesa_comando`, con traccia nel log. In caso contrario, il collega accetta/rifiuta dalla lista **Le mie richieste cambio turno** o dai pulsanti della notifica; poi il comando approva/rifiuta dalla pagina Comando.
- All'approvazione lo scambio è atomico: i due turni mantengono gli stessi id e si scambiano la persona assegnata. Turni passati, ferie/permessi e turni modificati nel frattempo bloccano lo scambio (stato `scaduta`).
- Stati: `attesa_collega → attesa_comando → approvata | rifiutata_collega | rifiutata_comando | annullata | scaduta`, con log completo nella collezione `reparti/{rep}/richieste` (servono le nuove regole Firestore pubblicate).

### Compiti e appuntamenti assegnati
- Dal Menu Comando, o dai modal To-Do/Agenda con la sezione **Assegna a militari**, il comando assegna promemoria e appuntamenti a uno o più militari oppure a tutto il reparto.
- I destinatari vedono il compito con badge 📥 e possono segnarlo fatto: chi lo ha assegnato riceve una notifica. Gli altri militari non lo vedono.
- I dati restano su `todo_condivisi` / `agenda_condivisa` con i campi `assegnatoA`, `assegnatoNomi`, `assegnatoDa`, `stato`.

### Bacheca (avvisi del reparto)
- Dal Menu Comando → **Bacheca → Nuovo avviso** il comando pubblica avvisi per tutti i militari (titolo, testo, scadenza opzionale, flag urgente).
- I militari vedono gli avvisi attivi in un banner in cima alla **Dashboard**; gli avvisi scaduti spariscono automaticamente.
- La pubblicazione invia una notifica in-app a tutti i membri; se l'avviso è **urgente** parte anche la push. Dati su `reparti/{rep}/bacheca` (solo Comando può scrivere).

### Situazione e copertura
- La sezione **Situazione e statistiche** della pagina Comando mostra la copertura dei prossimi 7 giorni: per ogni giorno i turni di servizio assegnati (M/ML/P/PL/N/S) con nome del militare; i giorni senza alcun turno sono evidenziati come **SCOPERTO** con riepilogo in fondo.

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
