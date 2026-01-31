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
