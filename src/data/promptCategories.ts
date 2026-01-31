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
    prompts: [
      {
        id: "5.1",
        title: "Leggere uno stack trace e trovare la riga che rompe tutto",
        description: "Analisi professionale di stack trace per individuare il problema",
        useCase: "Quando hai uno stack trace davanti e vuoi capire esattamente quale riga di codice causa l'errore, ignorando il rumore.",
        expectedOutput: [
          "Spiegazione della struttura di uno stack trace",
          "Tecniche per individuare il punto di rottura reale",
          "Distinzione tra chiamate rilevanti e irrilevanti",
          "Metodo sistematico per risalire alla causa"
        ],
        content: `Ho davanti uno stack trace.

Voglio che tu mi aiuti a leggerlo come farebbe uno sviluppatore senior.

Procedi così:
1) spiegami cos'è uno stack trace e come è strutturato
2) mostrami come individuare:
   - il vero punto di rottura
   - le chiamate irrilevanti
3) spiegami come risalire alla riga di codice responsabile
4) dimmi cosa controllare subito e cosa ignorare

Usa esempi concreti.
Trattami come uno sviluppatore che vuole imparare a leggerli da solo.`
      },
      {
        id: "5.2",
        title: "Capire perché \"non funziona\" anche senza errori evidenti",
        description: "Approccio sistematico per bug silenziosi",
        useCase: "Quando il programma non fa quello che dovrebbe ma non mostra errori, e hai bisogno di un metodo strutturato per trovare il problema.",
        expectedOutput: [
          "Checklist di debug ordinata per priorità",
          "Separazione tra problemi di logica, stato, configurazione",
          "Metodo per restringere il problema passo dopo passo",
          "Tecniche per evitare i tunnel mentali"
        ],
        content: `Il programma non funziona come dovrebbe, ma non mostra errori evidenti.

Voglio un approccio sistematico per capire cosa sta succedendo.

Procedi così:
1) crea una checklist di debug ordinata
2) separa problemi di:
   - logica
   - stato
   - configurazione
   - ambiente
3) dimmi cosa verificare per primo e perché
4) mostrami come restringere il problema passo dopo passo

Niente risposte vaghe.
Voglio metodo, non tentativi casuali.`
      },
      {
        id: "5.3",
        title: "Aggiungere logging utile (backend e frontend)",
        description: "Logging strategico per debug efficace",
        useCase: "Quando vuoi aggiungere log che siano davvero utili per capire cosa succede a runtime, senza riempire la console di rumore.",
        expectedOutput: [
          "Linee guida su cosa loggare e cosa evitare",
          "Esempi pratici per ogni livello (debug, info, warning, error)",
          "Punti strategici dove inserire i log",
          "Tecniche per leggere i log efficacemente"
        ],
        content: `Voglio aggiungere logging utile al mio progetto.

Obiettivi:
- capire cosa succede davvero a runtime
- evitare log inutili
- rendere il debug più semplice

Procedi così:
1) spiegami cosa loggare e cosa NON loggare
2) mostra esempi di logging utile
3) differenzia:
   - debug
   - info
   - warning
   - error
4) fammi capire dove inserire i log
5) spiegami come leggere i log in modo efficace

Parla da sviluppatore a sviluppatore.`
      },
      {
        id: "5.4",
        title: "Riprodurre un bug in modo controllato",
        description: "Tecniche per isolare e replicare bug intermittenti",
        useCase: "Quando hai un bug che appare e scompare in modo irregolare e hai bisogno di riprodurlo in modo affidabile per poterlo risolvere.",
        expectedOutput: [
          "Spiegazione dell'importanza della riproducibilità",
          "Tecniche per isolare il contesto minimo",
          "Metodi per eliminare variabili confondenti",
          "Criteri per verificare che il bug sia davvero riprodotto"
        ],
        content: `Ho un bug che si manifesta in modo irregolare.

Voglio imparare a riprodurlo in modo controllato.

Procedi così:
1) spiegami perché riprodurre un bug è fondamentale
2) mostrami come isolare il contesto minimo
3) dimmi come eliminare variabili inutili
4) mostrami tecniche per forzare il bug
5) spiegami quando un bug è davvero riprodotto

Usa esempi concreti e realistici.`
      },
      {
        id: "5.5",
        title: "Scrivere un test che cattura un bug",
        description: "Test di regressione per prevenire bug futuri",
        useCase: "Quando hai individuato un bug e vuoi scrivere un test che fallisce prima del fix e passa dopo, per evitare regressioni.",
        expectedOutput: [
          "Test minimo che cattura il bug specifico",
          "Spiegazione del ciclo fail-fix-pass",
          "Integrazione del test nel progetto",
          "Prevenzione regressioni future"
        ],
        content: `Ho individuato un bug e voglio scrivere un test che lo catturi.

Obiettivi:
- test che fallisce prima del fix
- test che passa dopo il fix
- prevenzione regressioni future

Procedi così:
1) spiegami il concetto di test che cattura un bug
2) mostra come scrivere il test minimo
3) spiega come leggere il fallimento del test
4) dimmi quando il test è sufficiente
5) mostra come integrare il test nel progetto

Non voglio teoria, voglio pratica.`
      },
      {
        id: "5.6",
        title: "Sistemare errori di configurazione ambiente",
        description: "Diagnosi di problemi \"funziona sulla mia macchina\"",
        useCase: "Quando il progetto funziona su una macchina ma non su un'altra, e devi capire quali differenze di ambiente causano il problema.",
        expectedOutput: [
          "Elenco cause comuni di discrepanze",
          "Metodo per confrontare due ambienti",
          "Tecniche per rendere il setup ripetibile",
          "Prevenzione problemi futuri"
        ],
        content: `Il progetto funziona su una macchina ma non su un'altra.

Voglio diagnosticare e sistemare problemi di configurazione ambiente.

Procedi così:
1) elenca le cause più comuni
2) separa:
   - variabili d'ambiente
   - versioni runtime
   - dipendenze
   - permessi
3) dimmi come confrontare due ambienti
4) mostrami come rendere il setup ripetibile
5) spiega come evitare questi problemi in futuro

Voglio metodo, non tentativi a caso.`
      },
      {
        id: "5.7",
        title: "Diagnosticare problemi di rete, API o database",
        description: "Debug strutturato per problemi di comunicazione",
        useCase: "Quando qualcosa non funziona nella comunicazione tra frontend/backend, API esterne o database, e devi capire dove si rompe il flusso.",
        expectedOutput: [
          "Mappa del flusso completo della richiesta",
          "Punti di test per ogni segmento",
          "Distinzione tra problema di rete, codice o configurazione",
          "Strumenti e tecniche pratiche"
        ],
        content: `Ho problemi di comunicazione tra:
- frontend e backend
- backend e API esterne
- backend e database

Voglio un approccio strutturato per capire dove si rompe il flusso.

Procedi così:
1) mappa il flusso completo della richiesta
2) mostrami come testare ogni punto
3) dimmi cosa loggare
4) spiega come distinguere:
   - problema di rete
   - problema di codice
   - problema di configurazione
5) mostra strumenti e tecniche pratiche

Parla come un debugger esperto.`
      },
      {
        id: "5.8",
        title: "Usare Cursor come checklist di debug guidato",
        description: "Debug interattivo con guida passo passo",
        useCase: "Quando vuoi un processo di debug guidato che ti faccia domande e ti aiuti a ragionare, invece di darti subito soluzioni.",
        expectedOutput: [
          "Checklist interattiva di debug",
          "Domande guidate per isolare il problema",
          "Adattamento dinamico alle risposte",
          "Focus sul ragionamento, non sulle soluzioni immediate"
        ],
        content: `Voglio usare Cursor come assistente di debug guidato.

Obiettivo:
- non dimenticare nulla
- seguire un processo ordinato
- evitare tunnel mentali

Agisci così:
1) comportati come checklist interattiva di debug
2) fammi domande una alla volta
3) guidami nella verifica dei punti critici
4) adattati alle risposte che ti do
5) aiutami a isolare il problema reale

Non darmi subito soluzioni.
Guidami nel ragionamento.`
      }
    ]
  },
  {
    id: "analisi-codice",
    number: 6,
    title: "Analisi, modifica e comprensione del codice",
    description: "Prompt per analizzare, capire e modificare codice esistente",
    icon: "Search",
    colorVar: "--phase-6",
    prompts: [
      {
        id: "6.1",
        title: "Commentare uno script riga per riga",
        description: "Analisi didattica di codice preso da GitHub",
        useCase: "Quando hai trovato uno script interessante su GitHub e vuoi capire esattamente cosa fa ogni riga, con spiegazioni dettagliate.",
        expectedOutput: [
          "Codice commentato riga per riga o blocco per blocco",
          "Spiegazione del perché di ogni scelta",
          "Punti ambigui o rischiosi evidenziati",
          "Logica originale preservata"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio analizzare uno script preso da GitHub e farlo commentare riga per riga in modo didattico.

Procedi così:
1) dimmi come devo incollare o importare il codice in questa cartella (file e percorso consigliati)
2) quando il file è presente, leggilo interamente
3) aggiungi commenti riga per riga (o blocco per blocco se più sensato) direttamente nel codice
4) per ogni commento spiega:
   - cosa fa quella riga/blocco
   - perché serve
   - cosa succede se la cambio o la rimuovo
5) segnala punti ambigui o rischiosi

Vincoli:
- non cambiare la logica del codice, solo commenti e chiarimenti
- mantieni stile chiaro e pratico`
      },
      {
        id: "6.2",
        title: "Generare documentazione automatica del codice",
        description: "Doc strutturata con standard appropriati (JSDoc, docstring, etc.)",
        useCase: "Quando vuoi creare documentazione professionale del tuo codice che possa essere rigenerata automaticamente ad ogni modifica.",
        expectedOutput: [
          "Standard di documentazione appropriato allo stack",
          "Commenti strutturati aggiunti al codice",
          "Sistema di doc consultabile (sito statico o markdown)",
          "Istruzioni per rigenerare la doc"
        ],
        content: `Parto da una cartella vuota.

Voglio generare documentazione automatica del codice del progetto.

Procedi così:
1) fammi creare/importare un piccolo progetto di esempio (se non esiste già)
2) scegli lo standard di doc più adatto allo stack (es. docstring / JSDoc / OpenAPI)
3) aggiungi commenti strutturati dove servono
4) genera un sistema di documentazione consultabile (es. sito statico o markdown)
5) scrivi istruzioni precise per rigenerare la doc in futuro

Obiettivo finale:
- devo poter lanciare un comando e ottenere la documentazione aggiornata.`
      },
      {
        id: "6.3",
        title: "Convertire codice da un linguaggio a un altro",
        description: "Traduzione idiomatica mantenendo la logica",
        useCase: "Quando hai del codice funzionante in un linguaggio e vuoi riscriverlo in un altro mantenendo la stessa logica ma con stile idiomatico.",
        expectedOutput: [
          "Analisi del codice sorgente",
          "Codice tradotto in stile idiomatico del target",
          "Gestione errori appropriata",
          "Test o esempi di verifica"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio convertire del codice da un linguaggio a un altro mantenendo la stessa logica.

Procedi così:
1) chiedimi SOLO: linguaggio sorgente e linguaggio target (se non sono già presenti)
2) fammi incollare il codice sorgente in un file dentro questa cartella (dimmi nome file)
3) analizza il codice e descrivi i suoi comportamenti principali
4) riscrivi il codice nel linguaggio target:
   - stessa logica
   - stile idiomatico del linguaggio target
   - gestione errori sensata
5) crea un piccolo set di test o esempi di input/output per verificare che la conversione sia corretta

Vincoli:
- niente traduzione "meccanica": voglio codice pulito nel linguaggio target.`
      },
      {
        id: "6.4",
        title: "Migliorare codice funzionante ma scritto male",
        description: "Refactoring progressivo senza cambiare funzionalità",
        useCase: "Quando hai codice che funziona ma è spaghetti code, con nomi confusi e duplicazioni, e vuoi migliorarlo senza rompere nulla.",
        expectedOutput: [
          "Lista problemi ordinata per impatto",
          "Refactoring progressivo con spiegazioni",
          "Confronto prima/dopo",
          "Checklist di regole per il futuro"
        ],
        content: `Parto da una cartella vuota.

Voglio migliorare codice che funziona ma è scritto male (spaghetti, nomi confusi, duplicazioni).

Procedi così:
1) fammi incollare il codice in un file dentro questa cartella (dimmi nome file)
2) analizza e produci una lista di problemi ordinata per impatto:
   - leggibilità
   - manutenibilità
   - performance (solo se rilevante)
   - bug potenziali
3) refactor progressivo:
   - una modifica alla volta
   - spiegazione chiara del perché
4) dopo ogni modifica, assicurati che la logica resti invariata
5) alla fine, genera una versione "prima/dopo" e una checklist di regole da seguire in futuro

Vincoli:
- non cambiare funzionalità, cambia qualità.`
      },
      {
        id: "6.5",
        title: "Trasformare codice avanzato in versione didattica",
        description: "Semplificazione per principianti mantenendo correttezza",
        useCase: "Quando hai codice avanzato che vuoi rendere comprensibile a chi sta imparando, con passaggi intermedi e commenti esplicativi.",
        expectedOutput: [
          "Overview del codice originale",
          "Versione didattica con nomi espliciti e funzioni piccole",
          "Esempio di esecuzione e output atteso",
          "Evidenziazione delle semplificazioni"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio prendere del codice avanzato e trasformarlo in una versione didattica per principianti:
- più leggibile
- più commentata
- con passaggi intermedi espliciti
- con esempi

Procedi così:
1) fammi incollare il codice in un file (dimmi nome file)
2) spiega a parole cosa fa il codice originale (overview)
3) riscrivi il codice in versione didattica:
   - nomi variabili espliciti
   - funzioni piccole
   - commenti chiari
   - controlli sugli errori più espliciti
4) aggiungi un esempio di esecuzione e output atteso
5) evidenzia cosa è stato semplificato e cosa è rimasto identico

Vincoli:
- deve restare corretto e funzionante.`
      },
      {
        id: "6.6",
        title: "Spiegare errori passo passo fino alla soluzione",
        description: "Debug guidato con comprensione profonda",
        useCase: "Quando hai un errore e vuoi non solo risolverlo, ma capire esattamente perché succede e come prevenirlo in futuro.",
        expectedOutput: [
          "Spiegazione del significato dell'errore",
          "Identificazione della vera causa (non dove esplode)",
          "Piano di debug in 5-8 passi",
          "Correzione minima con spiegazione"
        ],
        content: `Ho un errore e voglio che tu mi guidi passo passo fino alla soluzione.

Procedi così:
1) chiedimi di incollare:
   - messaggio di errore completo
   - stack trace completo
   - file coinvolti (o porzione di codice rilevante)
2) leggilo e spiegami:
   - cosa significa l'errore
   - dove nasce davvero (non dove "esplode")
3) proponi un piano di debug in 5-8 passi massimo
4) applica la correzione minima possibile
5) spiegami perché la correzione funziona
6) dimmi come prevenire lo stesso errore in futuro

Vincoli:
- niente salti logici: voglio capire ogni passaggio.`
      },
      {
        id: "6.7",
        title: "Individuare vulnerabilità di sicurezza nel codice",
        description: "Audit di sicurezza con remediation concrete",
        useCase: "Quando vuoi analizzare il tuo codice con mentalità da security auditor, identificando rischi e implementando fix.",
        expectedOutput: [
          "Lista vulnerabilità con descrizione e impatto",
          "Classificazione per severità",
          "Remediation concrete con codice",
          "Best practice e hardening"
        ],
        content: `Parto da una cartella vuota.

Voglio fare un'analisi di sicurezza del codice.

Procedi così:
1) fammi importare/incollare i file del progetto in questa cartella
2) analizza il codice con mentalità attacker + defender
3) crea una lista di vulnerabilità o rischi, ognuno con:
   - descrizione
   - impatto
   - scenario realistico di abuso (alto livello, senza istruzioni operative dannose)
   - remediation concreta con modifica codice o pattern alternativo
4) classifica per severità e priorità
5) implementa le fix principali in modo incrementale e spiegato

Vincoli:
- non fornire istruzioni per sfruttare vulnerabilità su sistemi reali
- concentrati su remediation, best practice e hardening.`
      },
      {
        id: "6.8",
        title: "Far scrivere una suite di test unitari",
        description: "Test significativi con casi normali, edge cases e errori",
        useCase: "Quando vuoi una suite di test completa per il tuo codice, con strategia chiara su cosa testare e cosa mockare.",
        expectedOutput: [
          "Identificazione funzioni testabili",
          "Strategia di test (cosa testare/mockare)",
          "Test per casi normali, edge cases e errori",
          "Istruzioni per esecuzione locale e CI"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio che tu scriva una suite di test unitari per il mio codice.

Procedi così:
1) fammi importare o incollare il codice nella cartella (dimmi dove metterlo)
2) identifica le funzioni/moduli testabili e le dipendenze esterne
3) proponi una strategia di test:
   - cosa testare
   - cosa mockare
   - cosa evitare
4) crea la struttura dei test
5) scrivi test significativi:
   - casi normali
   - edge cases
   - casi di errore
6) aggiungi istruzioni per eseguire i test in locale e in CI

Vincoli:
- i test devono essere utili, non "tanto per".`
      },
      {
        id: "6.9",
        title: "Code review guidata: cosa migliorare e perché",
        description: "Review professionale con miglioramenti ad alto impatto",
        useCase: "Quando vuoi una code review seria come in un team professionale, con priorità chiare e refactoring concreti.",
        expectedOutput: [
          "Analisi architettura, stile, qualità, sicurezza",
          "Review strutturata con priorità",
          "Motivazioni tecniche per ogni miglioramento",
          "2-3 miglioramenti ad alto impatto applicati"
        ],
        content: `Parto da una cartella vuota.

Voglio una code review guidata del mio codice, come se fossi in un team serio.

Procedi così:
1) fammi importare/incollare il progetto in questa cartella
2) analizza architettura, stile, qualità, error handling, performance (se rilevante), sicurezza di base
3) produci una review strutturata con:
   - ciò che va bene (breve)
   - cosa migliorare (priorità alta/media/bassa)
   - perché migliorarlo (motivazione tecnica)
   - esempi di refactor o patch proposte
4) applica 2-3 miglioramenti ad alto impatto direttamente nel codice e spiegami cosa hai fatto

Vincoli:
- niente pedanteria sterile: solo miglioramenti che contano davvero.`
      }
    ]
  },
  {
    id: "database",
    number: 7,
    title: "Database pratico",
    description: "Prompt per gestire database, query e strutture dati",
    icon: "Database",
    colorVar: "--phase-7",
    prompts: [
      {
        id: "7.1",
        title: "Implementare CRUD completo con interfaccia",
        description: "Create, Read, Update, Delete con UI funzionante",
        useCase: "Quando vuoi creare un sistema CRUD completo da zero, con frontend e backend separati e un'interfaccia usabile.",
        expectedOutput: [
          "Stack semplice ed efficace scelto",
          "CRUD backend funzionante",
          "Interfaccia web per tutte le operazioni",
          "Istruzioni per avviare in locale"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio implementare un CRUD completo (Create, Read, Update, Delete) con interfaccia web.

Obiettivi:
- CRUD realmente funzionante
- interfaccia semplice ma usabile
- codice chiaro e separato (frontend / backend)

Procedi così:
1) scegli uno stack semplice ed efficace
2) spiega brevemente l'architettura
3) crea la struttura del progetto
4) implementa il database
5) implementa tutte le operazioni CRUD
6) crea una UI per usare il CRUD
7) dimmi come avviare tutto in locale

Scrivi codice reale, pronto all'uso.`
      },
      {
        id: "7.2",
        title: "Collegare frontend e backend al database",
        description: "Flusso completo dati: UI → backend → database → UI",
        useCase: "Quando vuoi capire esattamente come i dati viaggiano dal frontend al database e tornano indietro, senza salti logici.",
        expectedOutput: [
          "Spiegazione flusso end-to-end",
          "Backend con API implementato",
          "Frontend che consuma le API",
          "Verifica del flusso dati"
        ],
        content: `Parto da una cartella vuota.

Voglio collegare:
- frontend
- backend
- database

Obiettivo:
- flusso completo dati: UI → backend → database → UI

Procedi così:
1) spiega il flusso di una richiesta end-to-end
2) crea struttura progetto
3) implementa backend con API
4) implementa frontend che consuma le API
5) collega il database
6) mostra come verificare che i dati viaggiano correttamente

Niente salti logici, voglio capire ogni passaggio.`
      },
      {
        id: "7.3",
        title: "Gestire migrazioni di schema",
        description: "Modificare il database nel tempo senza rotture",
        useCase: "Quando il tuo database deve evolvere nel tempo e vuoi gestire le modifiche allo schema in modo sicuro e reversibile.",
        expectedOutput: [
          "Strumento di migrazione configurato",
          "Schema iniziale creato",
          "Migrazione successiva implementata",
          "Procedura di rollback spiegata"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio gestire correttamente le migrazioni di schema del database.

Obiettivi:
- creare schema iniziale
- modificare lo schema nel tempo
- evitare rotture in produzione

Procedi così:
1) scegli il database e lo strumento di migrazione più adatto
2) crea la struttura iniziale
3) implementa una migrazione
4) implementa una modifica successiva (aggiunta campo, modifica tipo)
5) spiega come applicare e rollbackare una migrazione
6) spiega errori comuni da evitare

Voglio approccio pratico, non teoria accademica.`
      },
      {
        id: "7.4",
        title: "Popolare il database con dati fittizi (seed)",
        description: "Dati realistici per sviluppo e test",
        useCase: "Quando hai bisogno di dati realistici per sviluppare e testare, con uno script ripetibile che non rompe nulla.",
        expectedOutput: [
          "Schema database pronto",
          "Script di seeding funzionante",
          "Dati fittizi ma coerenti",
          "Comando singolo per rieseguire il seed"
        ],
        content: `Parto da una cartella vuota.

Voglio popolare il database con dati fittizi (seed).

Obiettivi:
- dati realistici
- ripetibilità
- utile per sviluppo e test

Procedi così:
1) crea schema database
2) scrivi script di seeding
3) genera dati fittizi ma coerenti
4) spiega come rieseguire il seed senza rompere nulla
5) spiega differenza tra seed e dati reali

Il tutto deve funzionare con un solo comando.`
      },
      {
        id: "7.5",
        title: "Gestire errori di query e dati inconsistenti",
        description: "Validazioni, error handling e messaggi sensati",
        useCase: "Quando vuoi rendere il tuo sistema robusto contro errori di query, dati mancanti e casi limite nel database.",
        expectedOutput: [
          "Elenco problemi comuni lato database",
          "Intercettazione errori di query",
          "Validazioni backend implementate",
          "Messaggi di errore user-friendly"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio gestire correttamente:
- errori di query
- dati inconsistenti
- casi limite nel database

Procedi così:
1) elenca i problemi più comuni lato database
2) mostra come intercettare errori di query
3) implementa validazioni lato backend
4) gestisci casi di dati mancanti o corrotti
5) mostra messaggi di errore sensati per l'utente
6) spiega come loggare errori critici

Voglio codice robusto, non fragile.`
      },
      {
        id: "7.6",
        title: "Ottimizzare query lente in modo semplice",
        description: "Diagnosi e ottimizzazione pragmatica",
        useCase: "Quando hai query lente e vuoi capire perché e come migliorarle senza overengineering.",
        expectedOutput: [
          "Esempio di query lenta analizzato",
          "Misurazione performance prima/dopo",
          "Ottimizzazioni semplici applicate (indici, query migliori)",
          "Criteri per sapere quando fermarsi"
        ],
        content: `Parto da una cartella vuota.

Voglio imparare a ottimizzare query lente in modo pratico.

Obiettivi:
- capire perché una query è lenta
- migliorare senza overengineering
- evitare ottimizzazioni premature

Procedi così:
1) crea un esempio di query lenta
2) spiega perché è lenta
3) mostra come misurare le performance
4) applica ottimizzazioni semplici (indici, query migliori)
5) confronta prima/dopo
6) spiega quando fermarsi

Approccio pragmatico, niente magia.`
      }
    ]
  },
  {
    id: "api",
    number: 8,
    title: "API",
    description: "Prompt per creare, consumare e documentare API",
    icon: "Plug",
    colorVar: "--phase-8",
    prompts: [
      {
        id: "8.1",
        title: "Creare una API REST semplice (GET / POST)",
        description: "API funzionante con endpoint base e dati JSON",
        useCase: "Quando vuoi creare la tua prima API REST da zero, con endpoint GET e POST funzionanti e codice chiaro.",
        expectedOutput: [
          "Stack backend scelto e spiegato",
          "Endpoint GET e POST implementati",
          "Esempi di request e response",
          "Istruzioni per avviare in locale"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare una API REST semplice ma fatta bene.

Requisiti:
- endpoint GET
- endpoint POST
- dati JSON
- struttura chiara

Obiettivi:
- capire come nasce una API
- poterla usare subito
- evitare overengineering

Procedi così:
1) scegli uno stack backend semplice ed efficace
2) spiega brevemente l'architettura
3) crea la struttura del progetto
4) implementa endpoint GET e POST
5) mostra esempi di request e response
6) dimmi come avviare la API in locale

Scrivi codice reale e funzionante.`
      },
      {
        id: "8.2",
        title: "Testare API con curl o Postman",
        description: "Test manuali per capire come funziona una API",
        useCase: "Quando vuoi imparare a testare le tue API in modo autonomo usando curl dalla riga di comando o Postman.",
        expectedOutput: [
          "Spiegazione dell'importanza dei test API",
          "Comandi curl per GET, POST, JSON",
          "Equivalenti in Postman",
          "Lettura delle risposte e riconoscimento errori"
        ],
        content: `Ho una API REST (anche appena creata).

Voglio imparare a testarla correttamente con strumenti manuali.

Procedi così:
1) spiegami perché testare una API è fondamentale
2) mostra come usare curl per:
   - GET
   - POST
   - invio JSON
3) mostra come fare le stesse cose con Postman
4) spiegami come leggere le risposte
5) mostra errori comuni e come riconoscerli

Voglio diventare autonomo nel test delle API.`
      },
      {
        id: "8.3",
        title: "Validare input lato server",
        description: "Non fidarsi mai del client, validazione robusta",
        useCase: "Quando vuoi proteggere la tua API da dati sbagliati o malevoli validando tutto lato server.",
        expectedOutput: [
          "Spiegazione del perché non fidarsi del client",
          "Regole di validazione implementate",
          "Gestione input mancanti o invalidi",
          "Esempi di errori di validazione"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio implementare validazione dell'input lato server per una API.

Obiettivi:
- evitare dati sbagliati
- prevenire bug
- migliorare sicurezza

Procedi così:
1) spiega perché non fidarsi mai del client
2) definisci regole di validazione realistiche
3) implementa la validazione negli endpoint
4) gestisci input mancanti o invalidi
5) mostra esempi di errori di validazione
6) spiega come estendere la validazione in futuro

Codice chiaro, niente magia.`
      },
      {
        id: "8.4",
        title: "Gestire errori API in modo chiaro",
        description: "Status code corretti e messaggi coerenti",
        useCase: "Quando vuoi che la tua API restituisca errori professionali, con status code corretti e messaggi chiari per i client.",
        expectedOutput: [
          "Struttura standard per gli errori",
          "Gestione centralizzata implementata",
          "Status code corretti assegnati",
          "Lista di cosa non esporre mai"
        ],
        content: `Voglio gestire gli errori della mia API in modo professionale.

Obiettivi:
- errori coerenti
- messaggi chiari
- status code corretti

Procedi così:
1) spiega i principali errori API
2) definisci una struttura standard per gli errori
3) implementa gestione centralizzata degli errori
4) assegna status code corretti
5) mostra esempi reali di errori restituiti
6) spiega cosa NON esporre mai al client

Voglio API pulite e prevedibili.`
      },
      {
        id: "8.5",
        title: "Implementare rate limit di base",
        description: "Protezione semplice contro abusi",
        useCase: "Quando vuoi proteggere la tua API da abusi limitando il numero di richieste per utente/IP.",
        expectedOutput: [
          "Spiegazione pratica del rate limiting",
          "Policy semplice definita",
          "Rate limit implementato",
          "Risposta quando limite superato"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio implementare un rate limit di base per una API.

Obiettivi:
- proteggere la API
- evitare abuso
- soluzione semplice e comprensibile

Procedi così:
1) spiega cos'è il rate limiting in modo pratico
2) definisci una policy semplice (es. richieste/minuto)
3) implementa il rate limit
4) gestisci il superamento del limite
5) mostra esempi di risposta quando il limite è superato
6) spiega limiti di questa soluzione

Niente sistemi complessi inutili.`
      },
      {
        id: "8.6",
        title: "Proteggere endpoint sensibili",
        description: "Accesso controllato con token o API key",
        useCase: "Quando hai endpoint che devono essere accessibili solo a utenti autorizzati e vuoi implementare una protezione corretta.",
        expectedOutput: [
          "Identificazione endpoint sensibili",
          "Meccanismo di protezione scelto e implementato",
          "Blocco accessi non autorizzati",
          "Esempi di request valide e invalide"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio proteggere endpoint sensibili della mia API.

Obiettivi:
- accesso controllato
- protezione dati
- soluzione semplice ma corretta

Procedi così:
1) identifica cosa rende un endpoint "sensibile"
2) scegli un meccanismo di protezione adatto (token, API key, ecc.)
3) implementa la protezione
4) blocca accessi non autorizzati
5) mostra esempi di request valide e invalide
6) spiega errori comuni da evitare

Focus su sicurezza pragmatica.`
      },
      {
        id: "8.7",
        title: "Versionare una API senza rompere i client",
        description: "Evoluzione compatibile nel tempo",
        useCase: "Quando la tua API deve evolvere ma non puoi rompere i client esistenti che la usano.",
        expectedOutput: [
          "Spiegazione del perché del versioning",
          "Strategie comuni mostrate",
          "Due versioni implementate",
          "Errori comuni da evitare"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio versionare una API in modo corretto senza rompere i client esistenti.

Obiettivi:
- evolvere la API nel tempo
- mantenere compatibilità
- evitare caos

Procedi così:
1) spiega perché la versioning è necessaria
2) mostra le strategie comuni di versioning
3) scegli una strategia semplice
4) implementa due versioni della stessa API
5) mostra come convivono
6) spiega errori comuni nella versioning

Approccio pratico, orientato alla realtà.`
      }
    ]
  },
  {
    id: "sicurezza",
    number: 9,
    title: "Sicurezza base",
    description: "Prompt per implementare pratiche di sicurezza fondamentali",
    icon: "Shield",
    colorVar: "--primary",
    prompts: [
      {
        id: "9.1",
        title: "Gestire password in modo sicuro (hashing)",
        description: "Nessuna password in chiaro, hashing corretto",
        useCase: "Quando devi implementare registrazione e login con password gestite in modo sicuro, senza mai salvarle in chiaro.",
        expectedOutput: [
          "Spiegazione pratica del perché dell'hashing",
          "Algoritmo di hashing scelto e implementato",
          "Registrazione con hashing e login con verifica",
          "Errori comuni da evitare"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio implementare una gestione sicura delle password.

Requisiti:
- nessuna password in chiaro
- hashing corretto
- confronto sicuro in fase di login

Procedi così:
1) spiega in modo pratico perché NON si salvano password in chiaro
2) scegli un algoritmo di hashing adatto a un progetto reale
3) crea struttura progetto minimale
4) implementa:
   - registrazione con hashing
   - login con verifica hash
5) spiega cosa NON fare mai
6) mostra errori comuni e come evitarli

Codice semplice, ma fatto bene.`
      },
      {
        id: "9.2",
        title: "Proteggere chiavi API e segreti",
        description: "Nessun segreto nel codice, variabili d'ambiente",
        useCase: "Quando hai chiavi API, token o altri segreti che non devono mai finire nel repository o nel codice visibile.",
        expectedOutput: [
          "Spiegazione dei rischi dei segreti esposti",
          "Struttura per gestione configurazioni",
          "File .env e .env.example creati",
          "Esempi di cosa succede quando si sbaglia"
        ],
        content: `Parto da una cartella vuota.

Voglio gestire correttamente chiavi API, token e segreti.

Obiettivi:
- nessun segreto nel codice
- configurazione sicura
- separazione ambienti (dev / prod)

Procedi così:
1) spiega cosa sono i segreti e perché sono critici
2) crea struttura per gestione configurazioni
3) usa variabili d'ambiente correttamente
4) crea .env e .env.example
5) mostra come caricare i segreti nel codice
6) spiega cosa succede quando si sbaglia (con esempi)

Approccio pratico, zero teoria inutile.`
      },
      {
        id: "9.3",
        title: "Gestire ruoli e permessi (user / admin)",
        description: "Controllo accessi semplice ed estendibile",
        useCase: "Quando hai bisogno di differenziare gli utenti normali dagli admin, proteggendo funzionalità riservate.",
        expectedOutput: [
          "Modello dati per ruoli implementato",
          "Utenti normali e admin distinti",
          "Protezione endpoint riservati",
          "Esempi di accesso consentito e negato"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio implementare ruoli e permessi (user / admin).

Obiettivi:
- controllo accessi semplice
- logica chiara
- estendibile in futuro

Procedi così:
1) spiega il concetto di ruolo e permesso in modo concreto
2) definisci un modello dati minimale
3) implementa:
   - utenti normali
   - utenti admin
4) proteggi endpoint o funzionalità riservate
5) mostra esempi di accesso consentito e negato
6) spiega errori comuni da evitare

Niente sistemi complessi inutili.`
      },
      {
        id: "9.4",
        title: "Configurare CORS correttamente",
        description: "Evitare errori browser senza aprire tutto",
        useCase: "Quando la tua API deve essere chiamata dal browser e vuoi configurare CORS in modo sicuro, non permissivo.",
        expectedOutput: [
          "Spiegazione pratica del CORS",
          "Esempio di problema reale senza CORS",
          "Configurazione corretta implementata",
          "Esempi di richieste permesse e bloccate"
        ],
        content: `Parto da una cartella vuota.

Voglio configurare correttamente il CORS per una API.

Obiettivi:
- evitare errori lato browser
- non aprire tutto inutilmente
- configurazione chiara

Procedi così:
1) spiega cos'è il CORS in modo pratico (non teorico)
2) mostra un esempio di problema reale senza CORS
3) implementa una configurazione CORS corretta
4) limita origini, metodi e header
5) mostra esempi di richieste permesse e bloccate
6) spiega cosa NON fare mai con il CORS

Focus su sicurezza reale.`
      },
      {
        id: "9.5",
        title: "Validare input per evitare abusi",
        description: "Prevenire input malformati e ridurre superficie di attacco",
        useCase: "Quando vuoi proteggere la tua applicazione da input malevoli o malformati che potrebbero causare bug o vulnerabilità.",
        expectedOutput: [
          "Spiegazione della validazione come misura di sicurezza",
          "Regole di validazione implementate",
          "Gestione input mancanti, extra o errati",
          "Esempi di input valido e non valido"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio validare l'input per evitare abusi e bug.

Obiettivi:
- prevenire input malformati
- ridurre superficie di attacco
- migliorare stabilità

Procedi così:
1) spiega perché la validazione è una misura di sicurezza
2) definisci regole di validazione realistiche
3) implementa validazione lato server
4) gestisci input mancanti, extra o errati
5) mostra esempi di input valido e non valido
6) spiega limiti della validazione

Codice chiaro, niente scorciatoie.`
      },
      {
        id: "9.6",
        title: "Checklist di sicurezza prima del deploy",
        description: "Verifica guidata per ogni progetto",
        useCase: "Quando stai per mandare in produzione e vuoi una checklist sistematica per non dimenticare nulla di critico.",
        expectedOutput: [
          "Checklist guidata completa",
          "Copertura di configurazione, segreti, auth, logging",
          "Per ogni punto: cosa verificare e perché",
          "Criteri per capire quando è abbastanza sicuro"
        ],
        content: `Sto per mandare un progetto in produzione.

Voglio una checklist di sicurezza pratica prima del deploy.

Agisci così:
1) comportati come checklist di sicurezza guidata
2) copri:
   - configurazione
   - segreti
   - autenticazione
   - autorizzazione
   - logging
   - error handling
3) per ogni punto dimmi:
   - cosa verificare
   - perché è importante
   - errore tipico da evitare
4) fammi capire quando il progetto è "abbastanza sicuro"

Voglio una checklist riutilizzabile per ogni progetto.`
      },
      {
        id: "9.7",
        title: "Analizzare dipendenze vulnerabili",
        description: "Individuare e gestire vulnerabilità nelle librerie",
        useCase: "Quando vuoi sapere se le librerie che usi hanno vulnerabilità note e come aggiornarle senza rompere tutto.",
        expectedOutput: [
          "Spiegazione delle dipendenze come superficie di attacco",
          "Analisi delle dipendenze eseguita",
          "Distinzione tra rischio reale e teorico",
          "Procedura di aggiornamento sicuro"
        ],
        content: `Parto da una cartella vuota.

Voglio analizzare le dipendenze del progetto per individuare vulnerabilità note.

Obiettivi:
- sapere cosa uso davvero
- individuare dipendenze rischiose
- aggiornare senza rompere tutto

Procedi così:
1) spiega perché le dipendenze sono una superficie di attacco
2) mostra come analizzare le dipendenze
3) interpreta i risultati (non solo elencarli)
4) distingui:
   - rischio reale
   - rischio teorico
5) mostra come aggiornare in sicurezza
6) spiega errori comuni negli aggiornamenti

Approccio pragmatico, niente panico.`
      }
    ]
  },
  {
    id: "deploy",
    number: 10,
    title: "Deploy e messa online",
    description: "Prompt per pubblicare e distribuire applicazioni",
    icon: "Rocket",
    colorVar: "--phase-1",
    prompts: [
      {
        id: "10.1",
        title: "Pubblicare una landing page online",
        description: "Deploy semplice con URL pubblico funzionante",
        useCase: "Quando hai una landing page statica e vuoi vederla online con un URL pubblico, nel modo più semplice possibile.",
        expectedOutput: [
          "Soluzione di hosting scelta e spiegata",
          "Landing page minimale creata",
          "Deploy passo passo completato",
          "Istruzioni per aggiornamenti futuri"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio pubblicare online una landing page statica.

Obiettivi:
- deploy semplice
- caricamento veloce
- URL pubblico funzionante

Procedi così:
1) scegli la soluzione di hosting più semplice ed efficace
2) spiega perché è adatta a una landing page
3) crea la struttura del progetto
4) genera una landing page minimale
5) mostrami passo passo come pubblicarla
6) dimmi come aggiornare la pagina in futuro

Voglio vedere la pagina online, non solo in locale.`
      },
      {
        id: "10.2",
        title: "Deploy di una web app frontend",
        description: "Build corretta e deploy stabile",
        useCase: "Quando hai un'applicazione frontend (React, Vue, etc.) e vuoi pubblicarla online con una build di produzione ottimizzata.",
        expectedOutput: [
          "Spiegazione del processo di build",
          "Build locale eseguita correttamente",
          "Deploy su piattaforma configurato",
          "Verifica online e gestione errori"
        ],
        content: `Sto partendo da una cartella vuota o da un progetto frontend già esistente.

Voglio fare il deploy di una web app frontend.

Obiettivi:
- build corretta
- deploy stabile
- gestione errori di build

Procedi così:
1) spiega cosa succede durante la build
2) mostrami come lanciare la build localmente
3) scegli una piattaforma di deploy adatta
4) configura il deploy passo passo
5) mostrami come verificare che tutto funzioni online
6) spiega errori comuni di deploy frontend

Approccio pratico, niente buzzword.`
      },
      {
        id: "10.3",
        title: "Deploy di un backend",
        description: "Backend raggiungibile online con sicurezza base",
        useCase: "Quando hai un backend funzionante in locale e vuoi renderlo accessibile via HTTP pubblicamente.",
        expectedOutput: [
          "Spiegazione di cosa serve per mettere online un backend",
          "Piattaforma scelta e configurata",
          "Backend avviato in produzione",
          "Verifica risposta HTTP e errori comuni"
        ],
        content: `Parto da una cartella vuota o da un backend già funzionante in locale.

Voglio fare il deploy di un backend.

Obiettivi:
- backend raggiungibile online
- configurazione corretta
- sicurezza di base

Procedi così:
1) spiega cosa serve per mettere online un backend
2) scegli una piattaforma adatta
3) configura ambiente di produzione
4) mostra come avviare il backend in produzione
5) verifica che risponda correttamente
6) spiega errori comuni nel deploy backend

Voglio un backend realmente accessibile via HTTP.`
      },
      {
        id: "10.4",
        title: "Collegare frontend e backend in produzione",
        description: "Chiamate API funzionanti con CORS corretto",
        useCase: "Quando hai frontend e backend entrambi online ma non comunicano correttamente e vuoi capire dove si rompe.",
        expectedOutput: [
          "Differenze locale/produzione spiegate",
          "Endpoint configurati correttamente",
          "Variabili d'ambiente gestite",
          "Debug chiamate API"
        ],
        content: `Ho un frontend e un backend entrambi online.

Voglio collegarli correttamente in produzione.

Obiettivi:
- chiamate API funzionanti
- niente URL hardcoded sbagliati
- gestione CORS corretta

Procedi così:
1) spiega le differenze tra collegamento locale e produzione
2) configura endpoint corretti
3) gestisci variabili d'ambiente lato frontend
4) verifica chiamate API reali
5) mostra come debuggarle se falliscono
6) spiega errori tipici di integrazione

Voglio capire dove si rompe se qualcosa non funziona.`
      },
      {
        id: "10.5",
        title: "Gestire variabili d'ambiente in produzione",
        description: "Segreti protetti e configurazioni separate",
        useCase: "Quando devi passare dal locale alla produzione e vuoi gestire le variabili d'ambiente in modo sicuro e corretto.",
        expectedOutput: [
          "Differenze env locale/produzione spiegate",
          "Variabili configurate in produzione",
          "Verifica lettura corretta",
          "Procedura per rotazione segreti"
        ],
        content: `Sto per mandare un progetto in produzione.

Voglio gestire correttamente le variabili d'ambiente.

Obiettivi:
- segreti protetti
- configurazioni separate
- nessun valore hardcoded

Procedi così:
1) spiega cosa cambia tra env locale e produzione
2) definisci le variabili necessarie
3) mostra come configurarle in produzione
4) verifica che vengano lette correttamente dal codice
5) spiega errori comuni
6) spiega come ruotare i segreti se compromessi

Approccio pratico e sicuro.`
      },
      {
        id: "10.6",
        title: "Collegare un dominio personalizzato",
        description: "DNS, HTTPS e configurazione corretta",
        useCase: "Quando hai un'app online con URL tecnico e vuoi collegare il tuo dominio personalizzato con HTTPS.",
        expectedOutput: [
          "Spiegazione pratica di DNS, record A e CNAME",
          "Dominio collegato all'hosting",
          "HTTPS configurato",
          "Troubleshooting propagazione"
        ],
        content: `Ho un'app o un sito online con un URL tecnico.

Voglio collegare un dominio personalizzato.

Obiettivi:
- dominio funzionante
- HTTPS attivo
- configurazione corretta DNS

Procedi così:
1) spiega cosa sono DNS, record A e CNAME in modo pratico
2) mostra come collegare il dominio al servizio di hosting
3) configura HTTPS
4) verifica che il dominio risponda correttamente
5) spiega tempi di propagazione e problemi comuni
6) mostra come fare rollback se qualcosa va storto

Voglio capire cosa sto facendo, non solo cliccare.`
      },
      {
        id: "10.7",
        title: "Capire perché \"in locale funziona ma online no\"",
        description: "Debug sistematico produzione vs locale",
        useCase: "Quando il progetto funziona perfettamente in locale ma si rompe in produzione e non capisci perché.",
        expectedOutput: [
          "Checklist di debug produzione",
          "Confronto sistematico locale/produzione",
          "Lettura log di produzione",
          "Metodo per restringere il problema"
        ],
        content: `Il progetto funziona in locale ma non in produzione.

Voglio un metodo sistematico per capire perché.

Procedi così:
1) crea una checklist di debug produzione
2) confronta:
   - ambiente locale vs produzione
   - variabili d'ambiente
   - build
   - permessi
3) mostrami come leggere log di produzione
4) individua i punti più comuni di rottura
5) fammi restringere il problema passo dopo passo
6) dimmi quando ho trovato davvero la causa

Niente tentativi casuali. Voglio metodo.`
      },
      {
        id: "10.8",
        title: "Risolvere errori di build e deploy",
        description: "Debug strutturato di log e correzione minima",
        useCase: "Quando hai errori durante la build o il deploy e vuoi capire come leggerli e risolverli in modo strutturato.",
        expectedOutput: [
          "Spiegazione di come leggere i log",
          "Identificazione errore reale vs rumore",
          "Correzione minima proposta",
          "Prevenzione errori futuri"
        ],
        content: `Ho errori durante build o deploy.

Voglio risolverli in modo strutturato.

Procedi così:
1) fammi incollare log completi di build/deploy
2) spiegami come leggere i log
3) individua l'errore reale (non il rumore)
4) proponi la correzione minima possibile
5) spiegami perché funziona
6) dimmi come evitare lo stesso errore in futuro

Guidami come farebbe un senior in produzione.`
      }
    ]
  },
  {
    id: "file-documenti",
    number: 11,
    title: "File, documenti e dati",
    description: "Prompt per gestire file, documenti e trasformazioni dati",
    icon: "FileText",
    colorVar: "--phase-2",
    prompts: [
      {
        id: "11.1",
        title: "Creare un generatore di PDF personalizzati",
        description: "PDF automatici con dati dinamici e layout pulito",
        useCase: "Quando hai bisogno di generare PDF automaticamente con dati personalizzati come fatture, report, certificati.",
        expectedOutput: [
          "Libreria PDF scelta e configurata",
          "Template PDF implementato",
          "Generazione con dati dinamici",
          "File PDF salvati e realmente apribili"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio creare un generatore di PDF personalizzati.

Obiettivi:
- PDF generati automaticamente
- dati dinamici (nome, data, contenuti)
- layout semplice ma pulito

Procedi così:
1) scegli il linguaggio e la libreria più adatti
2) crea la struttura del progetto
3) implementa un template PDF
4) genera PDF con dati personalizzati
5) salva i PDF su file system
6) spiegami come modificare layout e contenuti

Voglio PDF reali, non esempi finti.`
      },
      {
        id: "11.2",
        title: "Creare file Excel automaticamente",
        description: "Scrittura dati con formattazione e fogli multipli",
        useCase: "Quando devi generare report Excel automatici con intestazioni, dati formattati e pronti per utenti non tecnici.",
        expectedOutput: [
          "Libreria Excel scelta e configurata",
          "File Excel con intestazioni e dati",
          "Formattazione base applicata",
          "Istruzioni per fogli multipli e formule"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio creare file Excel in modo automatico.

Obiettivi:
- scrittura dati su fogli Excel
- formattazione di base
- file pronto per utenti non tecnici

Procedi così:
1) scegli la libreria più adatta
2) crea struttura progetto
3) genera un file Excel con:
   - intestazioni
   - righe di dati
4) applica una minima formattazione
5) salva il file
6) spiegami come aggiungere più fogli o formule

Il file deve essere realmente apribile in Excel.`
      },
      {
        id: "11.3",
        title: "Estrarre testo da PDF scansionati (OCR)",
        description: "OCR per documenti scansionati con gestione errori",
        useCase: "Quando hai PDF che sono immagini scansionate e vuoi estrarre il testo in modo automatico.",
        expectedOutput: [
          "Spiegazione differenza PDF nativi vs scansionati",
          "Strumento OCR configurato",
          "Estrazione testo implementata",
          "Limiti OCR e come migliorare risultati"
        ],
        content: `Sto partendo da una cartella vuota.

Voglio estrarre testo da PDF scansionati usando OCR.

Obiettivi:
- supporto PDF scansionati
- output testo leggibile
- gestione errori comuni

Procedi così:
1) spiega perché i PDF scansionati sono diversi
2) scegli uno strumento OCR adatto
3) crea struttura progetto
4) implementa estrazione testo
5) salva il testo estratto su file
6) spiega limiti dell'OCR e come migliorare i risultati

Approccio pratico, niente teoria inutile.`
      },
      {
        id: "11.4",
        title: "Tradurre documenti automaticamente",
        description: "Traduzione automatica multi-lingua con output separato",
        useCase: "Quando hai documenti da tradurre in più lingue in modo automatico, mantenendo file di output separati.",
        expectedOutput: [
          "Servizio di traduzione scelto",
          "Flusso input → traduzione → output implementato",
          "Gestione errori e limiti del servizio",
          "Estensione a più formati spiegata"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio tradurre documenti automaticamente.

Obiettivi:
- traduzione automatica affidabile
- supporto a più lingue
- file di output separato

Procedi così:
1) scegli il tipo di documento da supportare (es. testo, PDF, Word)
2) scegli il servizio di traduzione più adatto
3) crea struttura progetto
4) implementa il flusso:
   input → traduzione → output
5) gestisci errori e limiti del servizio
6) spiega come estendere a più formati

Il sistema deve funzionare end-to-end.`
      },
      {
        id: "11.5",
        title: "Manipolare file CSV e JSON",
        description: "Lettura, trasformazione e export di dati strutturati",
        useCase: "Quando devi leggere, modificare e salvare dati in formato CSV o JSON con gestione errori di formato.",
        expectedOutput: [
          "File CSV e JSON di esempio creati",
          "Lettura e trasformazione implementate",
          "Export file aggiornati",
          "Differenze pratiche CSV vs JSON spiegate"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio manipolare file CSV e JSON.

Obiettivi:
- leggere file
- modificare dati
- esportare file aggiornati

Procedi così:
1) crea file CSV e JSON di esempio
2) implementa lettura dei dati
3) applica trasformazioni realistiche
4) salva i nuovi file
5) gestisci errori di formato
6) spiega differenze pratiche tra CSV e JSON

Codice chiaro e riutilizzabile.`
      },
      {
        id: "11.6",
        title: "Importare ed esportare dati da applicazioni",
        description: "Import/export con validazione per produzione",
        useCase: "Quando la tua applicazione deve permettere agli utenti di importare ed esportare dati in modo affidabile.",
        expectedOutput: [
          "Formato di scambio dati definito",
          "Import con validazione implementato",
          "Gestione errori e dati inconsistenti",
          "Export dati strutturato"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio implementare import ed export dati per un'applicazione.

Obiettivi:
- import dati da file
- validazione dati
- export dati strutturati

Procedi così:
1) definisci un formato di scambio dati
2) crea struttura progetto
3) implementa import con validazione
4) gestisci errori e dati inconsistenti
5) implementa export dati
6) spiega come usare import/export in scenari reali

Voglio una soluzione usabile in produzione.`
      }
    ]
  },
  {
    id: "integrazioni",
    number: 12,
    title: "Integrazioni e automazioni esterne",
    description: "Prompt per connettere servizi esterni e creare workflow",
    icon: "Link",
    colorVar: "--phase-3",
    prompts: [
      {
        id: "12.1",
        title: "Inviare SMS dopo un acquisto",
        description: "Integrazione SMS con provider reale e gestione errori",
        useCase: "Quando vuoi inviare SMS automatici di conferma dopo un evento come un acquisto, con un provider reale in ambiente di test.",
        expectedOutput: [
          "Provider SMS scelto e configurato",
          "Flusso acquisto → SMS implementato",
          "Messaggio dinamico con dati utente",
          "Gestione errori e retry base"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio inviare un SMS automatico dopo un acquisto.

Scenario:
- un utente completa un acquisto
- il sistema invia un SMS di conferma

Obiettivi:
- integrazione con un servizio SMS reale (ambiente di test)
- messaggio dinamico
- gestione errori di invio

Procedi così:
1) scegli un provider SMS affidabile e comune
2) spiega il flusso completo dell'evento "acquisto → SMS"
3) crea la struttura del progetto
4) implementa la logica di invio SMS
5) gestisci errori e retry base
6) spiega come passare da test a produzione

Codice realistico, non simulazioni fittizie.`
      },
      {
        id: "12.2",
        title: "Inviare notifiche tramite Signal",
        description: "Notifiche push automatiche via Signal",
        useCase: "Quando vuoi inviare notifiche automatiche tramite Signal invece di SMS o email tradizionali.",
        expectedOutput: [
          "Spiegazione pratica dell'invio via Signal",
          "Strumento/libreria configurato",
          "Invio messaggio implementato",
          "Test funzionante"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio inviare notifiche automatiche tramite Signal.

Obiettivi:
- notifiche push affidabili
- messaggi testuali automatici
- integrazione semplice

Procedi così:
1) spiega come funziona l'invio di messaggi via Signal a livello pratico
2) scegli lo strumento/libreria più adatto
3) crea struttura progetto
4) implementa invio messaggio Signal
5) gestisci configurazione e segreti
6) mostra come testare l'invio

Focus su integrazione reale, non teoria.`
      },
      {
        id: "12.3",
        title: "Integrare DALL·E per generare immagini",
        description: "Generazione immagini via API con salvataggio",
        useCase: "Quando vuoi generare immagini automaticamente da prompt testuali usando DALL·E o API simili.",
        expectedOutput: [
          "Integrazione API spiegata",
          "Chiavi API gestite in sicurezza",
          "Generazione immagini implementata",
          "Salvataggio immagini su file/storage"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio integrare DALL·E per generare immagini automaticamente.

Obiettivi:
- generazione immagini via prompt testuale
- salvataggio immagini generate
- gestione errori API

Procedi così:
1) spiega a livello pratico come funziona l'integrazione
2) crea struttura progetto
3) gestisci chiavi API in modo sicuro
4) implementa chiamata per generare immagini
5) salva le immagini su file system o storage
6) spiega limiti, costi e buone pratiche

Scrivi codice pronto per essere esteso.`
      },
      {
        id: "12.4",
        title: "Collegare webhook esterni",
        description: "Ricevere e validare eventi da servizi esterni",
        useCase: "Quando vuoi che la tua applicazione riceva eventi automatici da servizi esterni come Stripe, GitHub, Zapier.",
        expectedOutput: [
          "Spiegazione webhook con esempio concreto",
          "Endpoint per ricevere webhook creato",
          "Validazione richieste implementata",
          "Gestione eventi e logging"
        ],
        content: `Parto da una cartella completamente vuota.

Voglio collegare webhook esterni alla mia applicazione.

Obiettivi:
- ricevere eventi da servizi esterni
- validare i webhook
- reagire agli eventi ricevuti

Procedi così:
1) spiega cos'è un webhook con un esempio concreto
2) crea una API endpoint per ricevere webhook
3) implementa validazione base della richiesta
4) gestisci eventi diversi
5) logga correttamente i webhook ricevuti
6) spiega errori comuni e come evitarli

Il webhook deve essere realmente testabile.`
      },
      {
        id: "12.5",
        title: "Automatizzare flussi tra più servizi",
        description: "Orchestrazione eventi multi-servizio con gestione errori",
        useCase: "Quando hai bisogno di collegare più servizi in un flusso automatico: evento A → elaborazione → azione su B e C.",
        expectedOutput: [
          "Flusso end-to-end definito",
          "Ogni step implementato",
          "Gestione fallimenti parziali",
          "Monitoraggio e debug spiegati"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio automatizzare un flusso tra più servizi esterni.

Scenario esempio:
- evento in un servizio A
- elaborazione interna
- azione su servizio B e C

Obiettivi:
- flusso affidabile
- gestione errori
- log chiaro delle operazioni

Procedi così:
1) definisci il flusso end-to-end
2) scegli strumenti e integrazioni adatte
3) crea struttura progetto
4) implementa ogni step del flusso
5) gestisci fallimenti parziali
6) spiega come monitorare e debuggare l'automazione

Voglio una base solida, non uno script fragile.`
      }
    ]
  },
  {
    id: "git",
    number: 13,
    title: "Git e lavoro professionale",
    description: "Prompt per gestire versioning e collaborazione con Git",
    icon: "GitBranch",
    colorVar: "--phase-4",
    prompts: [
      {
        id: "13.1",
        title: "Inizializzare un repository Git",
        description: "Setup professionale con .gitignore e configurazione base",
        useCase: "Usa questo prompt quando parti da una cartella vuota e vuoi inizializzare Git in modo corretto fin dall'inizio, evitando errori tipici dei principianti.",
        expectedOutput: [
          "Repository Git inizializzato",
          ".gitignore configurato correttamente",
          "Spiegazione di cosa versionare e cosa no",
          "Verifica stato del repository"
        ],
        content: `Sto partendo da una cartella completamente vuota.

Voglio inizializzare correttamente un repository Git per un progetto professionale.

Obiettivi:
- repository pulito
- configurazione corretta fin da subito
- evitare errori tipici dei principianti

Procedi così:
1) spiegami cos'è Git in modo pratico
2) inizializza il repository
3) crea un .gitignore adatto al progetto
4) spiega cosa va versionato e cosa no
5) mostrami come verificare lo stato del repo
6) dimmi quali errori evitare all'inizio

Voglio partire con fondamenta solide.`
      },
      {
        id: "13.2",
        title: "Scrivere commit chiari con l'aiuto di Cursor",
        description: "Commit piccoli, messaggi professionali, cronologia leggibile",
        useCase: "Quando hai modifiche da committare e vuoi farlo in modo professionale, con messaggi chiari e commit logicamente separati.",
        expectedOutput: [
          "Analisi delle modifiche correnti",
          "Suddivisione in commit logici",
          "Messaggi di commit professionali",
          "Best practice per la cronologia"
        ],
        content: `Sto lavorando su un progetto versionato con Git.

Voglio scrivere commit chiari, leggibili e professionali.

Obiettivi:
- commit piccoli e sensati
- messaggi chiari
- cronologia comprensibile anche dopo mesi

Agisci così:
1) analizza le modifiche correnti nel repository
2) suggeriscimi come suddividerle in commit logici
3) proponi messaggi di commit chiari e coerenti
4) spiegami perché ogni commit ha senso
5) dimmi cosa NON mettere mai in un commit

Usa uno stile da team professionale.`
      },
      {
        id: "13.3",
        title: "Tornare indietro dopo un errore",
        description: "Recupero da commit sbagliati, file modificati per errore, branch incasinati",
        useCase: "Quando hai fatto un errore con Git e vuoi tornare indietro senza peggiorare la situazione, capendo cosa è successo.",
        expectedOutput: [
          "Analisi dello stato attuale del repository",
          "Opzioni disponibili spiegate",
          "Soluzione meno distruttiva applicata",
          "Spiegazione di come evitare l'errore in futuro"
        ],
        content: `Ho fatto un errore con Git e voglio tornare indietro senza peggiorare la situazione.

Scenario possibile:
- commit sbagliato
- file modificati per errore
- branch incasinato

Procedi così:
1) fammi capire esattamente lo stato attuale del repo
2) spiegami le opzioni disponibili (senza ancora eseguirle)
3) consigliami la soluzione meno distruttiva
4) guidami passo passo nel recupero
5) spiegami cosa è successo e perché ha funzionato
6) dimmi come evitare lo stesso errore in futuro

Voglio capire, non solo riparare.`
      },
      {
        id: "13.4",
        title: "Lavorare con branch feature",
        description: "Flusso di lavoro con branch isolati come in un team reale",
        useCase: "Quando vuoi implementare nuove feature in modo isolato, mantenendo il branch main stabile e seguendo un flusso professionale.",
        expectedOutput: [
          "Branch feature creato correttamente",
          "Flusso di lavoro isolato spiegato",
          "Commit sul branch senza toccare main",
          "Preparazione al merge"
        ],
        content: `Sto partendo da un repository Git funzionante.

Voglio lavorare usando branch feature come in un team reale.

Obiettivi:
- isolamento delle feature
- main branch stabile
- flusso di lavoro chiaro

Procedi così:
1) spiegami il concetto di branch feature in modo pratico
2) mostrami come creare un branch per una nuova feature
3) lavorare sul branch senza toccare main
4) fare commit corretti sul branch
5) preparare il branch per il merge
6) spiegami errori comuni con i branch

Voglio un flusso realistico da team.`
      },
      {
        id: "13.5",
        title: "Fare merge senza rompere il progetto",
        description: "Merge pulito, gestione conflitti, verifica post-merge",
        useCase: "Quando hai una feature pronta su un branch e vuoi fare merge in modo sicuro, gestendo eventuali conflitti come un senior.",
        expectedOutput: [
          "Branch preparato al merge",
          "Merge eseguito passo passo",
          "Conflitti gestiti con spiegazioni",
          "Verifica funzionamento post-merge"
        ],
        content: `Ho una feature pronta su un branch e voglio fare merge senza rompere il progetto.

Obiettivi:
- merge pulito
- gestione conflitti
- progetto stabile

Procedi così:
1) spiegami cosa succede durante un merge
2) mostrami come preparare il branch al merge
3) esegui il merge passo passo
4) gestisci eventuali conflitti spiegando ogni scelta
5) verifica che il progetto funzioni dopo il merge
6) spiega come evitare conflitti in futuro

Agisci come farebbe un senior in code review.`
      },
      {
        id: "13.6",
        title: "Generare changelog automatici",
        description: "Changelog leggibile, convenzioni commit, generazione automatica",
        useCase: "Quando vuoi mantenere un changelog aggiornato automaticamente, utile sia per il team che per gli utenti finali.",
        expectedOutput: [
          "Convenzione commit definita",
          "Strumento changelog configurato",
          "Changelog di esempio generato",
          "Processo di mantenimento spiegato"
        ],
        content: `Sto lavorando su un progetto versionato con Git.

Voglio generare un changelog automatico e leggibile.

Obiettivi:
- changelog utile per utenti e team
- generazione automatica
- coerenza con i commit

Procedi così:
1) spiega cos'è un changelog e perché serve
2) definisci una convenzione di commit adatta
3) configura uno strumento per generare il changelog
4) genera un changelog di esempio
5) spiega come mantenerlo aggiornato nel tempo
6) mostra errori comuni da evitare

Voglio un changelog che abbia davvero senso.`
      }
    ]
  },
  {
    id: "qualita-codice",
    number: 14,
    title: "Qualità del codice e manutenzione",
    description: "Prompt per refactoring, test e mantenimento del codice",
    icon: "CheckCircle",
    colorVar: "--phase-5",
    prompts: [
      {
        id: "14.1",
        title: "Configurare formatter e linter",
        description: "Setup professionale per codice leggibile e consistente",
        useCase: "Usa questo prompt quando vuoi configurare strumenti automatici per mantenere il codice pulito, leggibile e privo di errori comuni.",
        expectedOutput: [
          "Stack progetto identificato",
          "Formatter e linter configurati",
          "File di configurazione creati",
          "Integrazione nel flusso di lavoro"
        ],
        content: `Sto partendo da una cartella completamente vuota (o da un progetto già esistente).

Voglio configurare formatter e linter in modo professionale.

Obiettivi:
- codice leggibile
- stile consistente
- errori intercettati subito

Procedi così:
1) identifica lo stack del progetto
2) scegli formatter e linter adatti
3) spiega cosa fa ognuno e perché servono entrambi
4) crea i file di configurazione
5) integra formatter e linter nel flusso di lavoro
6) mostrami come eseguirli manualmente e automaticamente

Voglio una configurazione usabile, non iper-complicata.`
      },
      {
        id: "14.2",
        title: "Rendere il codice consistente automaticamente",
        description: "Applicare standard di stile uniformi a tutto il progetto",
        useCase: "Quando hai codice scritto in modo inconsistente e vuoi uniformarlo automaticamente con un singolo comando.",
        expectedOutput: [
          "Incoerenze individuate",
          "Standard imposto automaticamente",
          "Diff prima/dopo mostrato",
          "Prevenzione regressioni configurata"
        ],
        content: `Ho un progetto con codice scritto in modo inconsistente.

Voglio rendere il codice consistente automaticamente.

Obiettivi:
- stesso stile ovunque
- meno discussioni sul formatting
- meno errori stupidi

Procedi così:
1) analizza il progetto e individua le incoerenze principali
2) configura formatter e linter per imporre uno standard
3) applica le regole automaticamente al codice esistente
4) mostrami cosa cambia prima/dopo
5) spiegami come evitare regressioni in futuro

Il risultato deve essere riproducibile con un comando.`
      },
      {
        id: "14.3",
        title: "Eseguire test e controlli prima di pubblicare",
        description: "Script di verifica pre-deploy per evitare bug in produzione",
        useCase: "Prima di pubblicare un progetto, per assicurarti che non ci siano errori evidenti e che il codice sia pronto per la produzione.",
        expectedOutput: [
          "Test esistenti identificati",
          "Controlli minimi configurati",
          "Script pre-publish creato",
          "Criteri di blocco deploy definiti"
        ],
        content: `Sto per pubblicare un progetto.

Voglio eseguire test e controlli automatici prima del deploy.

Obiettivi:
- evitare bug evidenti
- intercettare errori prima della produzione
- flusso semplice e affidabile

Procedi così:
1) identifica i test già presenti (se esistono)
2) proponi controlli minimi indispensabili:
   - test
   - lint
   - build
3) crea uno script unico di verifica pre-publish
4) mostrami come interpretare i risultati
5) spiega quando bloccare il deploy e quando no

Voglio una barriera di sicurezza, non un ostacolo inutile.`
      },
      {
        id: "14.4",
        title: "Refactor sicuro su progetto esistente",
        description: "Migliorare il codice senza rompere funzionalità",
        useCase: "Quando hai un progetto funzionante ma difficile da mantenere e vuoi migliorarlo incrementalmente senza rischi.",
        expectedOutput: [
          "Aree critiche identificate",
          "Strategia refactor definita",
          "Modifiche incrementali applicate",
          "Verifica funzionamento dopo ogni step"
        ],
        content: `Ho un progetto esistente che funziona, ma il codice è difficile da mantenere.

Voglio fare refactor in modo sicuro.

Obiettivi:
- migliorare qualità del codice
- non rompere funzionalità esistenti
- procedere per piccoli passi

Procedi così:
1) analizza il progetto e individua le aree più critiche
2) definisci una strategia di refactor incrementale
3) applica un refactor alla volta
4) dopo ogni modifica verifica che tutto funzioni
5) spiega perché ogni refactor migliora il codice
6) dimmi quando fermarmi

Non voglio riscritture totali inutili.`
      },
      {
        id: "14.5",
        title: "Aggiornare dipendenze senza paura",
        description: "Update sicuro e incrementale delle librerie",
        useCase: "Quando hai dipendenze vecchie e vuoi aggiornarle in modo controllato, riducendo vulnerabilità senza breaking change.",
        expectedOutput: [
          "Dipendenze analizzate",
          "Aggiornamenti sicuri vs rischiosi distinti",
          "Update incrementali eseguiti",
          "Strategia di rollback pronta"
        ],
        content: `Il progetto ha dipendenze vecchie e voglio aggiornarle senza fare danni.

Obiettivi:
- ridurre vulnerabilità
- evitare breaking change non gestiti
- mantenere il progetto stabile

Procedi così:
1) analizza le dipendenze attuali
2) distinguere:
   - aggiornamenti sicuri
   - aggiornamenti rischiosi
3) aggiorna una dipendenza alla volta
4) verifica il comportamento del progetto dopo ogni update
5) mostra come fare rollback se qualcosa si rompe
6) spiega una strategia di aggiornamento continua

Voglio perdere la paura degli update.`
      },
      {
        id: "14.6",
        title: "Aggiungere nuove feature a progetto già avviato",
        description: "Integrare funzionalità mantenendo ordine e qualità",
        useCase: "Quando devi aggiungere una nuova feature a un progetto esistente senza creare spaghetti code o compromettere l'architettura.",
        expectedOutput: [
          "Architettura esistente analizzata",
          "Punto di inserimento identificato",
          "Feature implementata incrementalmente",
          "Impatto sul resto del progetto verificato"
        ],
        content: `Ho un progetto già avviato e voglio aggiungere una nuova feature.

Obiettivi:
- non creare spaghetti code
- integrare bene la nuova funzionalità
- mantenere qualità e ordine

Procedi così:
1) analizza l'architettura esistente
2) individua il punto corretto dove inserire la feature
3) proponi una soluzione coerente con il progetto
4) implementa la feature passo passo
5) aggiungi test o controlli se necessari
6) verifica che il resto del progetto non sia stato impattato

Agisci come se il progetto dovesse durare anni.`
      }
    ]
  },
  {
    id: "ui-professionale",
    number: 15,
    title: "UI professionale",
    description: "Prompt per creare interfacce utente moderne e accessibili",
    icon: "Palette",
    colorVar: "--phase-6",
    prompts: [
      {
        id: "15.1",
        title: "Creare componenti riutilizzabili",
        description: "Bottoni, card, input, modali con API chiare",
        useCase: "Quando vuoi evitare duplicazioni nel codice frontend e creare una UI coerente con componenti facili da usare e mantenere.",
        expectedOutput: [
          "Elementi ripetuti individuati",
          "Componenti riutilizzabili creati",
          "Implementazioni duplicate sostituite",
          "Guida all'estensione dei componenti"
        ],
        content: `Sto partendo da una cartella completamente vuota (o da un progetto frontend esistente).

Voglio creare componenti UI riutilizzabili.

Obiettivi:
- evitare duplicazioni
- codice più leggibile
- UI coerente

Procedi così:
1) analizza lo stack frontend del progetto
2) individua elementi ripetuti (bottoni, card, input, modali)
3) progetta componenti riutilizzabili semplici
4) implementa i componenti con API chiare (props / parametri)
5) sostituisci le implementazioni duplicate
6) spiegami come estendere i componenti senza romperli

Voglio componenti pratici, non super-astratti.`
      },
      {
        id: "15.2",
        title: "Gestire loading, error e empty state",
        description: "Feedback chiaro per stati intermedi e di errore",
        useCase: "Quando la tua UI funziona ma mostra schermate vuote o rotte durante caricamento, errori o assenza di dati.",
        expectedOutput: [
          "Stati intermedi individuati",
          "Componenti per ogni stato implementati",
          "Flusso dati collegato agli stati",
          "UX più solida e professionale"
        ],
        content: `Ho una UI che funziona, ma non gestisce bene stati intermedi.

Voglio gestire in modo professionale:
- loading state
- error state
- empty state

Obiettivi:
- feedback chiaro all'utente
- niente schermate "rotte"
- UX più solida

Procedi così:
1) spiega perché questi stati sono fondamentali
2) individua i punti della UI dove servono
3) implementa componenti o pattern per ogni stato
4) collega gli stati al flusso dati reale
5) mostra esempi concreti prima/dopo
6) spiegami errori comuni da evitare

Approccio pragmatico, zero effetti speciali.`
      },
      {
        id: "15.3",
        title: "Validare form lato frontend",
        description: "Validazione con feedback immediato e messaggi utili",
        useCase: "Quando vuoi prevenire errori banali nei form e dare feedback immediato all'utente prima dell'invio.",
        expectedOutput: [
          "Regole di validazione definite",
          "Validazione frontend implementata",
          "Messaggi di errore chiari",
          "Gestione stato valido/non valido"
        ],
        content: `Sto partendo da una cartella vuota o da un progetto con form già esistenti.

Voglio validare i form lato frontend in modo professionale.

Obiettivi:
- prevenire errori banali
- feedback immediato all'utente
- migliorare UX senza complicare il codice

Procedi così:
1) analizza i form esistenti (o creane uno di esempio)
2) definisci regole di validazione realistiche
3) implementa la validazione lato frontend
4) mostra messaggi di errore chiari e utili
5) gestisci stato valido / non valido
6) spiega il rapporto tra validazione frontend e backend

Voglio validazione utile, non solo "obbligatorio".`
      },
      {
        id: "15.4",
        title: "Migliorare UX senza riscrivere tutto",
        description: "Piccoli cambiamenti ad alto impatto sulla percezione di qualità",
        useCase: "Quando hai una UI funzionante ma poco gradevole e vuoi migliorarla con modifiche mirate senza stravolgere il codice.",
        expectedOutput: [
          "Problemi UX evidenti individuati",
          "Miglioramenti mirati applicati",
          "Spaziature, gerarchia e feedback ottimizzati",
          "Percezione di qualità aumentata"
        ],
        content: `Ho una UI funzionante ma poco gradevole o confusa.

Voglio migliorare la UX senza riscrivere tutto da zero.

Obiettivi:
- piccoli cambiamenti ad alto impatto
- codice quasi invariato
- miglior percezione di qualità

Procedi così:
1) analizza l'interfaccia attuale
2) individua problemi UX evidenti
3) proponi miglioramenti mirati:
   - spaziature
   - gerarchia visiva
   - testi
   - feedback
4) applica le modifiche una alla volta
5) spiega perché ogni modifica migliora l'esperienza
6) dimmi quando fermarmi per evitare overdesign

Agisci come un dev che rispetta il tempo.`
      },
      {
        id: "15.5",
        title: "Rendere l'interfaccia coerente e pulita",
        description: "Stesso stile ovunque, meno confusione visiva",
        useCase: "Quando l'interfaccia funziona ma è incoerente e vuoi applicare regole UI minime per professionalità percepita.",
        expectedOutput: [
          "Analisi colori, font, spaziature",
          "Set minimo di regole UI definito",
          "Varianti inutili ridotte",
          "Coerenza mantenibile nel tempo"
        ],
        content: `Il progetto funziona, ma l'interfaccia è incoerente.

Voglio rendere la UI coerente e pulita.

Obiettivi:
- stesso stile ovunque
- meno confusione visiva
- più professionalità percepita

Procedi così:
1) analizza colori, font, spaziature e componenti
2) definisci un set minimo di regole UI
3) applica le regole all'interfaccia esistente
4) riduci varianti inutili
5) mostra esempi prima/dopo
6) spiega come mantenere coerenza nel tempo

Voglio ordine, non rigidità estrema.`
      }
    ]
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
