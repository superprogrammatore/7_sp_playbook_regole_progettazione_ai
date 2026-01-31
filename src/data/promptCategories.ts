export interface PromptCategory {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  colorVar: string;
  prompts: Prompt[];
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  useCase: string;
  expectedOutput: string[];
  content: string;
}

export const promptCategories: PromptCategory[] = [
  {
    id: "fondamenta",
    number: 1,
    title: "Fondamenta di progetto",
    description: "Prompt per definire vision, requisiti e struttura base del progetto",
    icon: "Landmark",
    colorVar: "--phase-1",
    prompts: [
      {
        id: "1.1",
        title: "Creare un progetto da zero con struttura corretta",
        description: "Cartelle, dipendenze, configurazioni base",
        useCase: "Usa questo prompt quando parti da una cartella completamente vuota e vuoi creare un progetto professionale con una struttura solida fin dall'inizio.",
        expectedOutput: [
          "Struttura cartelle completa e organizzata",
          "File di configurazione base pronti",
          "Spiegazione del perché di ogni scelta",
          "Boilerplate minimo funzionante"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare un nuovo progetto software professionale.

Prima di scrivere qualsiasi codice:
- fammi domande solo se strettamente necessarie
- altrimenti proponi tu una struttura solida e moderna

Obiettivi:
- struttura delle cartelle chiara e scalabile
- separazione tra codice, configurazioni e risorse
- best practice attuali

Spiegami:
1) che tipo di progetto stai creando
2) perché ogni cartella/file esiste
3) cosa verrà aggiunto in seguito

Poi:
- crea fisicamente la struttura delle cartelle
- genera i file iniziali vuoti o con boilerplate minimo`
      },
      {
        id: "1.2",
        title: "Inizializzare un progetto frontend o backend guidato passo passo",
        description: "Guida step-by-step per principianti",
        useCase: "Perfetto se sei alle prime armi e vuoi capire ogni singolo passaggio dell'inizializzazione, senza saltare nulla.",
        expectedOutput: [
          "Spiegazione di ogni comando prima dell'esecuzione",
          "Progetto inizializzato correttamente",
          "Primo file funzionante",
          "Istruzioni per avviare il progetto"
        ],
        content: `Parto da una cartella vuota.

Voglio inizializzare un progetto:
- guidami passo passo come se fossi alle prime armi
- spiegami ogni comando prima di eseguirlo
- fermati se qualcosa potrebbe creare confusione

Prima chiedimi:
- frontend o backend
- linguaggio e framework preferito

Poi:
1) inizializza il progetto
2) crea il primo file funzionante
3) fammi lanciare il progetto localmente
4) spiegami cosa succede dietro le quinte`
      },
      {
        id: "1.3",
        title: "Configurare ambiente Node o Python",
        description: "Versioni, venv, npm, pip",
        useCase: "Quando devi configurare l'ambiente di sviluppo in modo pulito e isolato, evitando conflitti tra versioni e dipendenze.",
        expectedOutput: [
          "Ambiente isolato configurato",
          "Versioni corrette installate",
          "Gestione dipendenze funzionante",
          "Comandi di verifica eseguiti"
        ],
        content: `Sto lavorando in una cartella vuota e voglio configurare correttamente l'ambiente di sviluppo.

Obiettivi:
- versioni corrette e consigliate
- ambiente isolato (venv o equivalente)
- gestione pulita delle dipendenze

Guidami così:
1) verifica prerequisiti sul mio sistema
2) inizializza l'ambiente (node o python)
3) spiega ogni comando prima di usarlo
4) dimmi come verificare che tutto funzioni

Alla fine:
- devo poter installare dipendenze senza rompere nulla
- devo capire cosa succede quando installo un pacchetto`
      },
      {
        id: "1.4",
        title: "Creare e gestire file .env e .env.example",
        description: "Variabili d'ambiente sicure e organizzate",
        useCase: "Fondamentale per gestire API keys, credenziali e configurazioni sensibili in modo sicuro e professionale.",
        expectedOutput: [
          "File .env.example documentato",
          "File .env con valori fittizi",
          "Configurazione per caricare le variabili",
          "Best practice di sicurezza spiegate"
        ],
        content: `Il progetto parte da zero.

Voglio gestire correttamente le variabili d'ambiente.

Obiettivi:
- sicurezza
- chiarezza
- compatibilità con ambienti diversi

Crea per me:
1) un file .env.example ben commentato
2) un file .env reale (con valori fittizi)
3) configurazione per caricare le variabili nel codice

Spiegami:
- cosa va nel .env e cosa no
- perché il .env non va versionato
- errori comuni da evitare`
      },
      {
        id: "1.5",
        title: "Generare un README chiaro e professionale",
        description: "Documentazione iniziale completa",
        useCase: "Quando vuoi che chiunque possa capire, installare e avviare il tuo progetto senza fare domande.",
        expectedOutput: [
          "README.md completo e professionale",
          "Sezioni ben organizzate",
          "Istruzioni chiare per esterni",
          "Troubleshooting base incluso"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio un README professionale, chiaro e leggibile anche da un junior.

Il README deve includere:
- descrizione del progetto
- requisiti
- installazione passo passo
- configurazione ambiente
- come avviare il progetto
- troubleshooting base

Scrivilo come se:
- fosse il primo contatto di uno sviluppatore esterno
- dovesse evitare domande inutili

Genera direttamente il file README.md completo.`
      },
      {
        id: "1.6",
        title: "Capire cosa succede al primo avvio del progetto",
        description: "Comprendere il flusso di bootstrap",
        useCase: "Ideale per capire esattamente cosa accade quando lanci npm start o python main.py, senza zone d'ombra.",
        expectedOutput: [
          "Spiegazione del flusso di avvio",
          "Ordine di caricamento chiarito",
          "Punti critici identificati",
          "Errori comuni spiegati"
        ],
        content: `Sto per avviare il progetto per la prima volta.

Voglio capire ESATTAMENTE cosa succede quando lancio:
- npm start / npm run dev
- oppure python main.py / uvicorn / flask / django

Spiegami:
1) cosa viene caricato per primo
2) cosa inizializza l'ambiente
3) come vengono lette le configurazioni
4) come viene aperta la porta
5) dove avvengono gli errori più comuni

Usa un linguaggio semplice ma tecnico.
Niente frasi vaghe.`
      },
      {
        id: "1.7",
        title: "Risolvere errori di avvio tipici",
        description: "Non parte, porta occupata, dipendenza mancante",
        useCase: "Quando il progetto non parte e non sai da dove cominciare. Una checklist di debug sistematica.",
        expectedOutput: [
          "Checklist di debug ordinata",
          "Errori comuni spiegati",
          "Comandi risolutivi pronti",
          "Prevenzione futura"
        ],
        content: `Il progetto non parte correttamente.

Voglio che tu agisca come debugger esperto.

Scenario:
- applicazione appena creata
- primo avvio locale
- errori comuni di setup

Fammi:
1) una checklist di debug ordinata
2) spiegazione degli errori più comuni:
   - porta occupata
   - modulo non trovato
   - versione sbagliata
   - variabili d'ambiente mancanti
3) comandi precisi per risolverli
4) come evitare che ricapitino

Trattami come uno sviluppatore che vuole capire, non copiare.`
      }
    ]
  },
  {
    id: "siti-webapp",
    number: 2,
    title: "Creazione di siti e web app",
    description: "Prompt per costruire siti web e applicazioni web moderne",
    icon: "Globe",
    colorVar: "--phase-2",
    prompts: [
      {
        id: "2.1",
        title: "Creare una landing page di vendita",
        description: "Hero, benefici, features, testimonianze, CTA",
        useCase: "Quando vuoi creare una pagina singola orientata alla conversione, con struttura professionale e codice pulito.",
        expectedOutput: [
          "Landing page completa e funzionante",
          "Sezioni hero, benefici, features, social proof",
          "Codice ottimizzato per performance",
          "Istruzioni per avvio locale"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare una landing page di vendita professionale e moderna.

Obiettivi:
- struttura pulita e scalabile
- performance elevate
- codice semplice da capire
- orientata alla conversione

La landing deve includere:
- hero section con headline e CTA
- sezione benefici
- sezione features
- social proof (testimonianze fittizie)
- CTA finale
- footer

Tecnologie:
- scegli tu lo stack più semplice ed efficace (HTML/CSS/JS o framework leggero)
- niente overengineering

Procedi così:
1) spiega brevemente l'architettura scelta
2) crea la struttura delle cartelle
3) genera tutto il codice necessario
4) dimmi come avviare il progetto localmente
5) spiegami come modificarla in futuro

Scrivi codice pronto all'uso.`
      },
      {
        id: "2.2",
        title: "Creare un sito con funzionalità FREE e PREMIUM",
        description: "Separazione contenuti e controllo accessi",
        useCase: "Quando vuoi creare un sito con aree riservate agli utenti paganti, mantenendo una struttura chiara e scalabile.",
        expectedOutput: [
          "Architettura FREE/PREMIUM definita",
          "Logica di controllo accessi implementata",
          "Simulazione utenti premium",
          "Guida per estensioni future"
        ],
        content: `Parto da una cartella vuota.

Voglio creare un sito web con:
- area FREE accessibile a tutti
- area PREMIUM accessibile solo agli utenti autorizzati

Obiettivi:
- separazione chiara tra contenuti free e premium
- struttura scalabile
- controllo degli accessi semplice ma corretto

Tecnologie:
- proponi tu lo stack più adatto
- preferenza per semplicità e chiarezza

Voglio che tu:
1) definisca l'architettura
2) crei la struttura del progetto
3) implementi la logica FREE / PREMIUM
4) simuli utenti premium (anche con dati fittizi)
5) spieghi come estendere il sistema in futuro

Parti dal filesystem, non saltare passaggi.`
      },
      {
        id: "2.3",
        title: "Creare una web app che chiede la mail tramite popup",
        description: "Popup email, validazione, persistenza",
        useCase: "Per raccogliere email in modo non invasivo, con validazione corretta e senza ripetere il popup inutilmente.",
        expectedOutput: [
          "Popup email funzionante",
          "Validazione email corretta",
          "Persistenza per evitare ripetizioni",
          "Istruzioni per backend reale"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare una web app che:
- mostra un popup per raccogliere email
- valida l'email
- salva l'email lato backend o localmente
- evita popup ripetuti inutili

Obiettivi:
- UX pulita
- codice semplice
- popup non invasivo

Procedi così:
1) scegli lo stack più semplice
2) crea struttura cartelle
3) implementa popup + validazione
4) gestisci la persistenza dell'email
5) spiega come collegarlo a un backend reale in futuro

Scrivi codice completo e funzionante.`
      },
      {
        id: "2.4",
        title: "Creare una web app con autenticazione",
        description: "Registrazione, login, logout, sessioni",
        useCase: "Quando hai bisogno di un sistema di autenticazione sicuro ma didattico, con password hashate e gestione sessioni.",
        expectedOutput: [
          "Sistema auth completo",
          "Password hashate correttamente",
          "Gestione sessione sicura",
          "Spiegazione del flusso completo"
        ],
        content: `Parto da una cartella vuota.

Voglio creare una web app con autenticazione:
- registrazione
- login
- logout
- gestione sessione

Requisiti:
- password hashate
- nessuna password in chiaro
- struttura sicura ma semplice

Tecnologie:
- scegli tu lo stack più didattico
- niente framework complessi inutili

Procedi in modo guidato:
1) architettura
2) struttura progetto
3) codice backend
4) codice frontend
5) spiegazione completa del flusso di autenticazione

Il progetto deve avviarsi in locale senza configurazioni strane.`
      },
      {
        id: "2.5",
        title: "Salvare dati degli utenti in un database",
        description: "Database, schema, operazioni CRUD",
        useCase: "Per imparare a salvare e recuperare dati utente in modo strutturato con un database reale.",
        expectedOutput: [
          "Database configurato",
          "Tabelle definite con schema chiaro",
          "Operazioni CRUD implementate",
          "Verifica dati salvati"
        ],
        content: `Sto lavorando partendo da una cartella vuota.

Voglio salvare dati utente in un database.

Obiettivi:
- database semplice
- schema chiaro
- operazioni CRUD di base

Tecnologie:
- scegli tu tra SQLite / PostgreSQL / altro
- priorità alla chiarezza

Voglio che tu:
1) crei il database
2) definisca le tabelle
3) implementi inserimento e lettura dati
4) spieghi ogni passaggio
5) mostri come verificare i dati salvati

Non saltare il setup iniziale.`
      },
      {
        id: "2.6",
        title: "Creare una web app con database auto-generato",
        description: "Auto-creazione database e tabelle al primo avvio",
        useCase: "Quando vuoi un'app che si configura da sola al primo avvio, senza setup manuale del database.",
        expectedOutput: [
          "Strategia auto-creazione spiegata",
          "Codice idempotente (non rompe se riavviato)",
          "Controllo errori robusto",
          "Test del comportamento"
        ],
        content: `Parto da una cartella vuota.

Voglio una web app che:
- al primo avvio
- crea automaticamente database e tabelle
- senza intervento manuale

Obiettivi:
- zero setup manuale
- controllo degli errori
- idempotenza (non rompe se riavviata)

Procedi così:
1) scegli stack adatto
2) spiega la strategia di auto-creazione
3) implementa il codice
4) mostra come testare il comportamento
5) spiega rischi e limiti

Scrivi codice robusto, non demo fragile.`
      },
      {
        id: "2.7",
        title: "Implementare un sistema di pagamento",
        description: "Integrazione provider, sandbox, gestione stato",
        useCase: "Per integrare pagamenti reali in modo sicuro, partendo da un ambiente di test.",
        expectedOutput: [
          "Provider pagamento integrato",
          "Flusso pagamento spiegato",
          "Ambiente sandbox configurato",
          "Guida per produzione"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio implementare un sistema di pagamento reale.

Obiettivi:
- integrazione con provider affidabile
- distinzione free / pagante
- gestione stato pagamento

Vincoli:
- usa ambiente di test (sandbox)
- niente chiavi reali
- sicurezza prima di tutto

Procedi così:
1) scegli il provider più adatto
2) spiega il flusso di pagamento
3) crea struttura progetto
4) implementa backend e frontend
5) spiega come passare in produzione

Il codice deve essere realistico, non finto.`
      },
      {
        id: "2.8",
        title: "Consumare API pubbliche",
        description: "Meteo, blacklist, dati esterni",
        useCase: "Per imparare a chiamare API esterne, gestire errori e visualizzare dati in modo pulito.",
        expectedOutput: [
          "Chiamate API corrette",
          "Gestione errori implementata",
          "Dati visualizzati chiaramente",
          "Limiti API documentati"
        ],
        content: `Parto da una cartella vuota.

Voglio creare una web app che consuma API pubbliche.

Obiettivi:
- chiamate API corrette
- gestione errori
- visualizzazione dati pulita

Procedi così:
1) scegli una API pubblica reale
2) spiega il formato dei dati
3) implementa fetch lato frontend o backend
4) mostra i dati in pagina
5) gestisci errori e limiti API

Codice chiaro, spiegazioni concrete.`
      },
      {
        id: "2.9",
        title: "Creare una dashboard con dati aggiornati",
        description: "Polling o realtime, visualizzazione chiara",
        useCase: "Per creare una dashboard che mostra dati aggiornati automaticamente, con architettura scalabile.",
        expectedOutput: [
          "Scelta polling/realtime motivata",
          "Dashboard funzionante localmente",
          "Aggiornamenti automatici",
          "Guida per scalare"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare una dashboard con dati:
- aggiornati periodicamente o in tempo reale
- visualizzati in modo chiaro

Obiettivi:
- architettura pulita
- aggiornamenti automatici
- codice estendibile

Procedi così:
1) scegli tra polling o realtime
2) spiega la scelta
3) crea struttura progetto
4) implementa backend + frontend
5) spiega come scalare il sistema

La dashboard deve funzionare localmente.`
      },
      {
        id: "2.10",
        title: "Implementare la Dark Mode",
        description: "Toggle, persistenza, fallback automatico",
        useCase: "Per aggiungere un tema scuro professionale con toggle manuale e salvataggio preferenze utente.",
        expectedOutput: [
          "Toggle light/dark funzionante",
          "Preferenza salvata",
          "Fallback automatico",
          "UX spiegata"
        ],
        content: `Parto da una cartella vuota.

Voglio creare un sito/web app con Dark Mode.

Requisiti:
- toggle manuale
- salvataggio preferenza utente
- fallback automatico

Procedi così:
1) struttura base del progetto
2) implementazione light/dark
3) gestione stato
4) persistenza preferenze
5) spiegazione UX e tecnica

Scrivi codice completo.`
      },
      {
        id: "2.11",
        title: "Creare un popup Exit Intent intelligente",
        description: "Rilevamento uscita, no spam, comportamento smart",
        useCase: "Per trattenere visitatori che stanno per lasciare la pagina, senza essere invasivi.",
        expectedOutput: [
          "Logica di rilevamento spiegata",
          "Popup non ripetitivo",
          "Condizioni intelligenti",
          "Limiti documentati"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare un popup Exit Intent intelligente.

Requisiti:
- rilevamento reale dell'intento di uscita
- no spam
- comportamento intelligente

Procedi così:
1) spiega la logica di rilevamento
2) implementa il popup
3) gestisci condizioni di visualizzazione
4) evita ripetizioni inutili
5) spiega limiti e alternative

Codice pronto all'uso.`
      },
      {
        id: "2.12",
        title: "Integrare un chatbot su FAQ aziendali (RAG semplice)",
        description: "Chatbot contestuale, dataset locale, risposte intelligenti",
        useCase: "Per creare un assistente virtuale che risponde basandosi su FAQ aziendali, con approccio RAG semplificato.",
        expectedOutput: [
          "RAG spiegato in modo pratico",
          "Chatbot funzionante",
          "Dataset FAQ locale",
          "Guida per miglioramenti"
        ],
        content: `Parto da una cartella vuota.

Voglio integrare un chatbot basato su FAQ aziendali.

Obiettivi:
- RAG semplice
- dataset FAQ locale
- risposte contestuali

Vincoli:
- niente overengineering
- chiarezza didattica

Procedi così:
1) spiega cos'è il RAG in modo pratico
2) definisci l'architettura
3) crea struttura progetto
4) implementa chatbot funzionante
5) spiega come migliorarlo in futuro

Scrivi codice completo, non pseudo-codice.`
      }
    ]
  },
  {
    id: "app-software",
    number: 3,
    title: "App e software",
    description: "Prompt per sviluppare applicazioni desktop e mobile",
    icon: "Smartphone",
    colorVar: "--phase-3",
    prompts: [
      {
        id: "3.1",
        title: "Creare una PWA (Progressive Web App)",
        description: "Installabile, offline, veloce",
        useCase: "Quando vuoi creare un'app web che si comporta come un'app nativa, installabile su qualsiasi dispositivo.",
        expectedOutput: [
          "PWA completa e funzionante",
          "Service worker configurato",
          "Cache intelligente implementata",
          "Istruzioni per test e pubblicazione"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare una Progressive Web App (PWA) completa e funzionante.

Obiettivi:
- installabile su desktop e mobile
- funzionante offline
- caricamento veloce
- struttura chiara

Requisiti tecnici:
- manifest.json
- service worker
- cache intelligente
- fallback offline

Procedi così:
1) spiegami cos'è una PWA in modo pratico
2) scegli lo stack più semplice ed efficace
3) crea la struttura delle cartelle
4) implementa service worker e cache
5) spiegami come testarla localmente
6) dimmi come pubblicarla correttamente

Scrivi codice reale e funzionante.`
      },
      {
        id: "3.2",
        title: "Creare un'app Android",
        description: "Progetto pulito, avvio su emulatore",
        useCase: "Per sviluppare un'app Android da zero, con spiegazione del ciclo di vita e setup completo.",
        expectedOutput: [
          "Progetto Android funzionante",
          "Prima schermata implementata",
          "Istruzioni per emulatore",
          "Ciclo di vita spiegato"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio creare un'app Android funzionante.

Obiettivi:
- progetto pulito
- codice comprensibile
- avvio rapido su emulatore o dispositivo reale

Tecnologie:
- scegli tu tra native o cross-platform
- priorità alla chiarezza didattica

Procedi così:
1) spiega lo stack scelto e perché
2) crea la struttura del progetto
3) implementa una prima schermata funzionante
4) fammi avviare l'app
5) spiegami il ciclo di vita dell'app

Niente codice incompleto o pseudo-codice.`
      },
      {
        id: "3.3",
        title: "Creare un'app iOS",
        description: "Struttura ordinata, codice moderno",
        useCase: "Per sviluppare un'app iOS nativa con struttura professionale e test su simulatore.",
        expectedOutput: [
          "Progetto iOS avviabile",
          "Schermata iniziale implementata",
          "Prerequisiti spiegati",
          "Test su simulatore"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare un'app iOS funzionante.

Obiettivi:
- struttura ordinata
- codice moderno
- compatibilità con versioni recenti di iOS

Vincoli:
- spiegami ogni passaggio
- assumiamo competenze base di programmazione

Procedi così:
1) scegli lo stack più adatto
2) spiega i prerequisiti
3) crea struttura progetto
4) implementa una schermata iniziale
5) spiegami come testarla su simulatore

Il progetto deve essere realmente avviabile.`
      },
      {
        id: "3.4",
        title: "Creare un programma desktop per macOS",
        description: "Interfaccia semplice, build distribuibile",
        useCase: "Per creare un'applicazione desktop macOS con interfaccia grafica e possibilità di distribuzione.",
        expectedOutput: [
          "App desktop funzionante",
          "Finestra principale implementata",
          "Build distribuibile",
          "Architettura spiegata"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio creare un'applicazione desktop per macOS.

Obiettivi:
- interfaccia semplice
- struttura professionale
- possibilità di estensione futura

Tecnologie:
- scegli tu lo stack migliore (native o cross-platform)
- evita soluzioni inutilmente complesse

Procedi così:
1) spiega l'architettura
2) crea struttura progetto
3) implementa una finestra funzionante
4) fammi avviare l'app localmente
5) spiega come creare un build distribuibile

Scrivi codice completo e commentato.`
      },
      {
        id: "3.5",
        title: "Creare un'app con storage cloud (S3)",
        description: "Upload, download, credenziali sicure",
        useCase: "Per integrare uno storage cloud come S3 per salvare e recuperare file in modo sicuro.",
        expectedOutput: [
          "Upload/download funzionanti",
          "Autenticazione configurata",
          "Ambiente test pronto",
          "Verifica dati salvati"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare un'app che salva e recupera dati da uno storage cloud.

Obiettivi:
- upload e download funzionanti
- credenziali gestite correttamente
- sicurezza di base

Vincoli:
- usa ambiente di test
- niente credenziali reali
- codice chiaro

Procedi così:
1) scegli lo storage più adatto
2) spiega il flusso di autenticazione
3) crea struttura progetto
4) implementa upload e download
5) spiega come verificare i dati salvati

Il sistema deve funzionare in locale.`
      },
      {
        id: "3.6",
        title: "Gestire file caricati dagli utenti",
        description: "Upload sicuro, download controllato, limiti",
        useCase: "Per gestire upload e download di file utente con sicurezza e controllo errori.",
        expectedOutput: [
          "Upload sicuro implementato",
          "Download controllato",
          "Limiti dimensione gestiti",
          "Rischi sicurezza spiegati"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio creare un'app che gestisce file caricati dagli utenti.

Requisiti:
- upload sicuro
- download controllato
- gestione errori
- limiti di dimensione

Procedi così:
1) definisci architettura frontend/backend
2) crea struttura progetto
3) implementa upload
4) implementa download
5) spiega rischi di sicurezza comuni
6) mostra come mitigare gli errori più frequenti

Scrivi codice pronto per l'uso.`
      },
      {
        id: "3.7",
        title: "Creare un'app offline-first con sincronizzazione",
        description: "Storage locale, sync automatica, gestione conflitti",
        useCase: "Per creare app che funzionano completamente offline e sincronizzano quando torna la connessione.",
        expectedOutput: [
          "App offline-first funzionante",
          "Storage locale implementato",
          "Sincronizzazione automatica",
          "Gestione conflitti spiegata"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare un'app offline-first.

Obiettivi:
- utilizzo completo offline
- salvataggio locale
- sincronizzazione automatica quando torna la connessione

Requisiti:
- gestione conflitti
- fallback robusto
- codice comprensibile

Procedi così:
1) spiega il concetto offline-first
2) scegli lo stack più adatto
3) crea struttura progetto
4) implementa storage locale
5) implementa sincronizzazione
6) spiega limiti e scenari critici

Scrivi codice reale, non esempi teorici.`
      }
    ]
  },
  {
    id: "automazione",
    number: 4,
    title: "Automazione e scripting",
    description: "Prompt per creare script e automatizzare processi ripetitivi",
    icon: "Zap",
    colorVar: "--phase-4",
    prompts: [
      {
        id: "4.1",
        title: "Creare uno script PowerShell",
        description: "Script professionale per Windows con commenti e logica reale",
        useCase: "Quando hai bisogno di automatizzare operazioni su Windows in modo professionale, con uno script leggibile e facilmente modificabile.",
        expectedOutput: [
          "File .ps1 funzionante",
          "Logica utile reale (non hello world)",
          "Commenti esplicativi per ogni blocco",
          "Istruzioni di esecuzione e modifica"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare uno script PowerShell professionale.

Obiettivi:
- compatibile con Windows moderno
- leggibile e commentato
- facilmente modificabile

Procedi così:
1) spiegami a cosa serve lo script che stai per creare
2) crea il file .ps1
3) implementa una logica utile reale (non hello world)
4) commenta ogni blocco di codice
5) spiegami come eseguirlo e come modificarlo

Assumi competenze base ma non avanzate.`
      },
      {
        id: "4.2",
        title: "Creare uno script bash per Linux",
        description: "Script bash robusto con gestione errori",
        useCase: "Quando devi automatizzare task su Linux/macOS con uno script bash solido che gestisce gli errori correttamente.",
        expectedOutput: [
          "File .sh eseguibile",
          "Funzionalità utile implementata",
          "Controlli sugli errori",
          "Istruzioni per renderlo eseguibile e testarlo"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio creare uno script bash per Linux.

Obiettivi:
- compatibile con bash standard
- robusto
- gestione errori di base

Procedi così:
1) spiega lo scopo dello script
2) crea il file .sh
3) implementa una funzionalità utile reale
4) aggiungi controlli sugli errori
5) spiegami come renderlo eseguibile
6) spiegami come testarlo

Niente scorciatoie.`
      },
      {
        id: "4.3",
        title: "Creare uno script Python",
        description: "Script Python pulito, modulare e riutilizzabile",
        useCase: "Quando vuoi creare uno script Python ben strutturato con funzioni separate e codice facilmente estendibile.",
        expectedOutput: [
          "File .py completo e funzionante",
          "Funzioni separate e modulari",
          "Commenti chiari",
          "Istruzioni di esecuzione e estensione"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare uno script Python utile e riutilizzabile.

Obiettivi:
- codice pulito
- funzioni separate
- output chiaro

Procedi così:
1) spiega cosa fa lo script
2) crea il file .py
3) implementa la logica completa
4) aggiungi commenti chiari
5) spiegami come eseguirlo
6) spiegami come estenderlo

Scrivi codice pronto all'uso.`
      },
      {
        id: "4.4",
        title: "Eseguire script Python online",
        description: "Script compatibile con ambienti online senza dipendenze",
        useCase: "Quando vuoi creare uno script Python che possa essere eseguito su piattaforme online come Replit, Google Colab o altri ambienti cloud.",
        expectedOutput: [
          "Script senza dipendenze locali",
          "Compatibilità con ambienti online",
          "Output visibile chiaramente",
          "Spiegazione delle differenze con l'esecuzione locale"
        ],
        content: `Parto da una cartella vuota.

Voglio creare uno script Python pensato per essere eseguito online.

Obiettivi:
- nessuna dipendenza locale
- compatibilità con ambienti online
- output visibile chiaramente

Procedi così:
1) spiega i limiti dell'esecuzione online
2) scrivi uno script compatibile
3) mostra come adattarlo a diversi ambienti online
4) spiega differenze rispetto all'esecuzione locale

Il codice deve funzionare senza configurazioni extra.`
      },
      {
        id: "4.5",
        title: "Creare uno script Python con interfaccia grafica",
        description: "GUI desktop semplice con libreria standard",
        useCase: "Quando vuoi trasformare uno script Python in un'applicazione con interfaccia grafica utilizzabile anche da utenti non tecnici.",
        expectedOutput: [
          "Applicazione GUI funzionante",
          "Codice comprensibile e strutturato",
          "Istruzioni di avvio",
          "Guide per aggiungere funzionalità"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare uno script Python con interfaccia grafica.

Obiettivi:
- GUI semplice
- codice comprensibile
- funzionante su sistemi comuni

Procedi così:
1) scegli la libreria GUI più adatta
2) spiega la struttura dell'app
3) crea il file principale
4) implementa una GUI funzionante
5) spiega come avviarla
6) spiega come aggiungere funzionalità

Scrivi codice completo, non esempi parziali.`
      },
      {
        id: "4.6",
        title: "Convertire uno script Python in file EXE",
        description: "Eseguibile standalone per Windows",
        useCase: "Quando vuoi distribuire il tuo script Python come applicazione Windows che gli utenti possono eseguire senza installare Python.",
        expectedOutput: [
          "Script Python di esempio",
          "Processo di conversione spiegato",
          "Comandi precisi per la conversione",
          "Problemi comuni e soluzioni"
        ],
        content: `Parto da una cartella vuota.

Voglio convertire uno script Python in un file EXE per Windows.

Obiettivi:
- eseguibile standalone
- nessuna dipendenza esterna per l'utente finale

Procedi così:
1) crea uno script Python di esempio
2) spiega il tool di conversione
3) mostra i comandi precisi
4) spiega i problemi comuni
5) mostra come verificare l'EXE

Voglio capire il processo, non solo copiarlo.`
      },
      {
        id: "4.7",
        title: "Creare un tool per controllare siti online/offline",
        description: "Checker di URL con report e gestione timeout",
        useCase: "Quando devi monitorare una lista di siti web per verificare che siano raggiungibili, con gestione intelligente di timeout e errori.",
        expectedOutput: [
          "Tool funzionante con input da file",
          "Gestione timeout configurabile",
          "Report chiaro e leggibile",
          "Codice estendibile"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare un tool che:
- legge una lista di URL
- controlla se sono online o offline
- mostra un report chiaro

Obiettivi:
- gestione timeout
- gestione errori
- output leggibile

Procedi così:
1) definisci struttura del progetto
2) crea file di input per gli URL
3) implementa il controllo
4) genera output chiaro
5) spiega come estendere il tool

Scrivi codice pronto per l'uso reale.`
      },
      {
        id: "4.8",
        title: "Creare un wrapper per tool Linux (es. nmap)",
        description: "Semplificazione di tool complessi con validazione input",
        useCase: "Quando vuoi semplificare l'uso di tool Linux complessi creando un'interfaccia più user-friendly con validazione degli input.",
        expectedOutput: [
          "Wrapper funzionante per tool specifico",
          "Validazione input implementata",
          "Esempi di utilizzo",
          "Guida all'estensione"
        ],
        content: `Parto da una cartella vuota.

Voglio creare un wrapper per un tool Linux (es. nmap).

Obiettivi:
- semplificare l'uso del tool
- evitare errori comuni
- parametri chiari

Procedi così:
1) spiega cosa fa il tool originale
2) definisci i casi d'uso del wrapper
3) crea lo script
4) implementa validazione input
5) mostra esempi di utilizzo
6) spiega come estenderlo

Scrivi codice solido, non demo fragile.`
      },
      {
        id: "4.9",
        title: "Realizzare un server FTP locale",
        description: "Server FTP per condivisione file con utenti separati",
        useCase: "Quando hai bisogno di condividere file in una rete locale in modo semplice, con gestione utenti e directory controllate.",
        expectedOutput: [
          "Server FTP funzionante in locale",
          "Utenti di test configurati",
          "Istruzioni di connessione",
          "Rischi di sicurezza spiegati"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare un server FTP locale per condividere file.

Obiettivi:
- configurazione semplice
- utenti separati
- directory controllate

Procedi così:
1) scegli l'approccio più semplice
2) spiega architettura e limiti
3) implementa il server
4) crea utenti di test
5) mostra come collegarsi
6) spiega i rischi di sicurezza

Il sistema deve funzionare in locale.`
      },
      {
        id: "4.10",
        title: "Leggere metadati EXIF delle immagini",
        description: "Estrazione metadati da foto con gestione errori",
        useCase: "Quando vuoi estrarre informazioni nascoste dalle immagini come data di scatto, GPS, modello fotocamera e altri metadati EXIF.",
        expectedOutput: [
          "Script di lettura EXIF funzionante",
          "Supporto JPEG/PNG",
          "Gestione immagini senza metadati",
          "Output formattato e leggibile"
        ],
        content: `Parto da una cartella vuota.

Voglio creare uno script che legge metadati EXIF delle immagini.

Obiettivi:
- supporto JPEG/PNG
- output leggibile
- gestione immagini senza EXIF

Procedi così:
1) spiega cosa sono i metadati EXIF
2) crea struttura progetto
3) implementa lettura EXIF
4) gestisci errori
5) mostra esempi di output

Scrivi codice completo e commentato.`
      },
      {
        id: "4.11",
        title: "Generatore di password sicure con salvataggio criptato",
        description: "Password manager minimale con cifratura",
        useCase: "Quando hai bisogno di generare password robuste e salvarle in modo sicuro, con cifratura e nessuna password in chiaro.",
        expectedOutput: [
          "Generatore password robusto",
          "Salvataggio cifrato implementato",
          "Procedura di recupero dati",
          "Limiti di sicurezza spiegati"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio creare un generatore di password sicure.

Requisiti:
- password robuste
- salvataggio cifrato
- nessuna password in chiaro

Procedi così:
1) spiega i criteri di sicurezza
2) crea struttura progetto
3) implementa generatore
4) implementa cifratura
5) spiega come recuperare i dati
6) spiega limiti di sicurezza

Il tool deve essere realistico.`
      },
      {
        id: "4.12",
        title: "Automatizzare task ripetitivi",
        description: "Backup, rinomina file, scraping leggero con logging",
        useCase: "Quando vuoi automatizzare operazioni ripetitive come backup, rinomina massiva di file o raccolta dati da web in modo responsabile.",
        expectedOutput: [
          "Script modulare con funzioni separate",
          "Logging implementato",
          "Istruzioni per schedulare lo script",
          "Codice estendibile"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio creare uno script di automazione per task ripetitivi.

Obiettivi:
- backup automatici
- rinomina file
- scraping leggero e responsabile

Procedi così:
1) scegli il linguaggio più adatto
2) crea struttura progetto
3) implementa ogni task come funzione separata
4) aggiungi logging
5) spiega come schedulare lo script
6) spiega come estenderlo

Scrivi codice robusto e riutilizzabile.`
      }
    ]
  },
  {
    id: "debug",
    number: 5,
    title: "Debug pratico e risoluzione errori",
    description: "Prompt per identificare e risolvere bug nel codice",
    icon: "Bug",
    colorVar: "--phase-5",
    prompts: []
  },
  {
    id: "analisi-codice",
    number: 6,
    title: "Analisi, modifica e comprensione del codice",
    description: "Prompt per analizzare, capire e modificare codice esistente",
    icon: "Search",
    colorVar: "--phase-6",
    prompts: []
  },
  {
    id: "database",
    number: 7,
    title: "Database pratico",
    description: "Prompt per gestire database, query e strutture dati",
    icon: "Database",
    colorVar: "--phase-7",
    prompts: []
  },
  {
    id: "api",
    number: 8,
    title: "API",
    description: "Prompt per creare, consumare e documentare API",
    icon: "Plug",
    colorVar: "--phase-8",
    prompts: []
  },
  {
    id: "sicurezza",
    number: 9,
    title: "Sicurezza base",
    description: "Prompt per implementare pratiche di sicurezza fondamentali",
    icon: "Shield",
    colorVar: "--primary",
    prompts: []
  },
  {
    id: "deploy",
    number: 10,
    title: "Deploy e messa online",
    description: "Prompt per pubblicare e distribuire applicazioni",
    icon: "Rocket",
    colorVar: "--phase-1",
    prompts: []
  },
  {
    id: "file-documenti",
    number: 11,
    title: "File, documenti e dati",
    description: "Prompt per gestire file, documenti e trasformazioni dati",
    icon: "FileText",
    colorVar: "--phase-2",
    prompts: []
  },
  {
    id: "integrazioni",
    number: 12,
    title: "Integrazioni e automazioni esterne",
    description: "Prompt per connettere servizi esterni e creare workflow",
    icon: "Link",
    colorVar: "--phase-3",
    prompts: []
  },
  {
    id: "git",
    number: 13,
    title: "Git e lavoro professionale",
    description: "Prompt per gestire versioning e collaborazione con Git",
    icon: "GitBranch",
    colorVar: "--phase-4",
    prompts: []
  },
  {
    id: "qualita-codice",
    number: 14,
    title: "Qualità del codice e manutenzione",
    description: "Prompt per refactoring, test e mantenimento del codice",
    icon: "CheckCircle",
    colorVar: "--phase-5",
    prompts: []
  },
  {
    id: "ui-professionale",
    number: 15,
    title: "UI professionale",
    description: "Prompt per creare interfacce utente moderne e accessibili",
    icon: "Palette",
    colorVar: "--phase-6",
    prompts: []
  },
  {
    id: "superpoteri",
    number: 16,
    title: "Superpoteri pratici per principianti",
    description: "Prompt avanzati ma accessibili per velocizzare il lavoro",
    icon: "Sparkles",
    colorVar: "--phase-7",
    prompts: []
  }
];
