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
    prompts: []
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
