export interface Phase {
  id: string;
  number: number | null;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  colorVar: string;
  isSetup?: boolean;
  isIterative?: boolean;
}

export const phases: Phase[] = [
  {
    id: "intro",
    number: null,
    title: "Introduzione al Metodo",
    shortTitle: "Intro",
    description: "Cos'è questo metodo e perché usare l'AI senza disciplina porta a codice fragile.",
    icon: "BookOpen",
    colorVar: "--phase-intro",
  },
  {
    id: "phase-1",
    number: 1,
    title: "Definizione e Strategia",
    shortTitle: "Strategia",
    description: "Visione del progetto, requisiti, vincoli. Chiarezza su cosa costruire.",
    icon: "Target",
    colorVar: "--phase-1",
    isSetup: true,
  },
  {
    id: "phase-2",
    number: 2,
    title: "Scelta dello Stack",
    shortTitle: "Stack",
    description: "Decisioni tecnologiche, motivazioni e compromessi accettati.",
    icon: "Layers",
    colorVar: "--phase-2",
    isSetup: true,
  },
  {
    id: "phase-3",
    number: 3,
    title: "Regole e Qualità",
    shortTitle: "Regole",
    description: "Regole di lavoro con l'AI, linee guida sul codice, disciplina.",
    icon: "Shield",
    colorVar: "--phase-3",
    isSetup: true,
  },
  {
    id: "phase-4",
    number: 4,
    title: "Inizializzazione Progetto",
    shortTitle: "Setup",
    description: "Setup iniziale, struttura del progetto, verifica base stabile.",
    icon: "FolderGit2",
    colorVar: "--phase-4",
    isSetup: true,
  },
  {
    id: "phase-5",
    number: 5,
    title: "Sviluppo Funzionalità",
    shortTitle: "Sviluppo",
    description: "Una feature alla volta: specifica, piano, implementazione controllata.",
    icon: "Code2",
    colorVar: "--phase-5",
    isIterative: true,
  },
  {
    id: "phase-6",
    number: 6,
    title: "Dati e Sicurezza",
    shortTitle: "Dati",
    description: "Gestione dati, regole di accesso, validazione e comportamenti sicuri.",
    icon: "Database",
    colorVar: "--phase-6",
    isIterative: true,
  },
  {
    id: "phase-7",
    number: 7,
    title: "Debug e Refactoring",
    shortTitle: "Debug",
    description: "Analisi errori, miglioramento codice. Comprendere prima di modificare.",
    icon: "Bug",
    colorVar: "--phase-7",
    isIterative: true,
  },
  {
    id: "phase-8",
    number: 8,
    title: "Chiusura e Documentazione",
    shortTitle: "Chiusura",
    description: "Riepilogo lavoro, stato progetto, preparazione alla ripresa futura.",
    icon: "FileCheck",
    colorVar: "--phase-8",
    isIterative: true,
  },
  {
    id: "cycle",
    number: null,
    title: "Il Ciclo di Lavoro",
    shortTitle: "Ciclo",
    description: "Fasi 1–4 una volta, fasi 5–8 ripetute per ogni feature. Metodo iterativo.",
    icon: "RefreshCw",
    colorVar: "--phase-cycle",
  },
];
