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
    prompts: []
  },
  {
    id: "app-software",
    number: 3,
    title: "App e software",
    description: "Prompt per sviluppare applicazioni desktop e mobile",
    icon: "Smartphone",
    colorVar: "--phase-3",
    prompts: []
  },
  {
    id: "automazione",
    number: 4,
    title: "Automazione e scripting",
    description: "Prompt per creare script e automatizzare processi ripetitivi",
    icon: "Zap",
    colorVar: "--phase-4",
    prompts: []
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
