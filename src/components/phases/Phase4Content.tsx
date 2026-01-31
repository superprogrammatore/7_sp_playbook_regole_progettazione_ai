import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Terminal,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  FileInput,
  Clock,
  ChevronDown,
  ChevronUp,
  PenTool,
  MessageSquare,
  HardDrive,
  Ban,
} from "lucide-react";

interface PromptUnit {
  id: string;
  number: string;
  title: string;
  whereToUse: "chat" | "composer";
  whenToUse: string;
  inputRequired: string;
  prompt: string;
  expectedOutput: string[];
  commonErrors: string[];
  didacticNote: string;
}

const promptUnits: PromptUnit[] = [
  {
    id: "4.1",
    number: "4.1",
    title: "Piano di inizializzazione",
    whereToUse: "chat",
    whenToUse: "Prima di eseguire qualsiasi comando o creare file.",
    inputRequired: "File tech_stack.md",
    prompt: `Leggi tech_stack.md.

Prima di inizializzare il progetto, proponimi:

1) i comandi che verranno eseguiti
2) la struttura base delle cartelle
3) i file di configurazione che verranno creati
4) cosa potrò fare alla fine (es. avviare dev server)

Non eseguire nulla, non creare file.`,
    expectedOutput: [
      "Elenco chiaro dei comandi previsti",
      "Struttura cartelle comprensibile",
      "Lista dei file di configurazione",
      "Chiarezza su cosa funzionerà alla fine",
    ],
    commonErrors: [
      "Saltare il piano e inizializzare subito",
      "Accettare comandi che non si capiscono",
      "Strutture di cartelle troppo complesse",
      "File creati \"per default\" senza spiegazione",
    ],
    didacticNote: "Questo prompt serve a farti approvare il piano prima di agire. Senza piano, perdi controllo.",
  },
  {
    id: "4.2",
    number: "4.2",
    title: "Inizializzazione vera e propria",
    whereToUse: "composer",
    whenToUse: "Solo dopo aver approvato il piano di inizializzazione.",
    inputRequired: "Piano approvato (output della 4.1) + tech_stack.md",
    prompt: `Procedi con l'inizializzazione del progetto seguendo il piano approvato e lo stack definito in tech_stack.md.

Crea:
- struttura cartelle base
- file di configurazione necessari
- setup per TypeScript strict
- setup per lint/format se previsto

Assicurati che:
- il progetto parta con un comando "dev"
- non ci siano errori all'avvio
- il codice iniziale sia minimo

Spiega brevemente perché crei ogni file importante.`,
    expectedOutput: [
      "Progetto inizializzato correttamente",
      "Dev server avviabile senza errori",
      "Configurazioni minime e chiare",
      "Nessuna feature implementata",
    ],
    commonErrors: [
      "Anticipare login o feature future",
      "Creare file non previsti dal piano",
      "Aggiungere configurazioni avanzate",
      "Non spiegare il ruolo dei file chiave",
    ],
    didacticNote: "Qui Cursor deve eseguire, non improvvisare. Ogni file deve avere un motivo.",
  },
  {
    id: "4.3",
    number: "4.3",
    title: "Pagina di verifica (Hello World evoluto)",
    whereToUse: "composer",
    whenToUse: "Dopo che il progetto parte senza errori.",
    inputRequired: "Progetto inizializzato e dev server funzionante.",
    prompt: `Aggiungi una pagina o componente minimale che mostri un messaggio tipo:

"Setup completato: progetto avviato correttamente".

Deve servire solo a verificare che l'app gira.

Nessuna logica extra.`,
    expectedOutput: [
      "Pagina visibile nel browser",
      "Messaggio statico di conferma",
      "Nessuna dipendenza da dati o API",
    ],
    commonErrors: [
      "Inserire logica business",
      "Usare dati fittizi",
      "Aggiungere routing complesso",
      "Trattare questa pagina come una feature",
    ],
    didacticNote: "Questo è un segnale tecnico, non una feature. Serve solo a sapere che tutto funziona.",
  },
  {
    id: "4.4",
    number: "4.4",
    title: "Verifica e checklist di setup",
    whereToUse: "chat",
    whenToUse: "Dopo aver verificato che l'app gira correttamente.",
    inputRequired: "Progetto inizializzato.",
    prompt: `Verifica lo stato del progetto appena inizializzato.

Crea un file SETUP_CHECK.md con una checklist che includa:

- installazione dipendenze
- avvio dev server
- build (se applicabile)
- presenza di errori noti
- variabili d'ambiente richieste (se presenti)

Segnala eventuali problemi o miglioramenti minimi.`,
    expectedOutput: [
      "File SETUP_CHECK.md completo",
      "Checklist riutilizzabile",
      "Eventuali problemi documentati",
    ],
    commonErrors: [
      "Non creare alcuna checklist",
      "Scrivere checklist troppo generica",
      "Ignorare warning o problemi minori",
      "Pensare che \"tanto funziona\"",
    ],
    didacticNote: "Questo file ti salva tempo quando riprendi il progetto o lo sposti su un altro PC.",
  },
  {
    id: "4.5",
    number: "4.5",
    title: "Pulizia iniziale",
    whereToUse: "chat",
    whenToUse: "Dopo aver verificato che tutto funziona.",
    inputRequired: "Struttura del progetto appena inizializzato.",
    prompt: `Analizza la struttura del progetto.

Dimmi:

1) se ci sono file o configurazioni inutili per l'MVP
2) cosa potremmo semplificare senza rompere nulla
3) cosa è meglio NON toccare ora

Non applicare modifiche automaticamente.`,
    expectedOutput: [
      "Identificazione di zavorra iniziale",
      "Suggerimenti di semplificazione sicura",
      "Lista chiara di cose da non toccare",
    ],
    commonErrors: [
      "Eliminare file senza capirli",
      "\"Pulire\" rompendo il setup",
      "Ottimizzare troppo presto",
      "Ignorare la struttura generata",
    ],
    didacticNote: "Meglio una base leggermente più grande che una base rotta. La pulizia deve essere consapevole.",
  },
];

function PromptCard({ unit }: { unit: PromptUnit }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(unit.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isComposer = unit.whereToUse === "composer";

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-phase-4/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15 text-sm font-bold text-phase-4">
            {unit.number}
          </span>
          <div>
            <h3 className="font-semibold text-lg">{unit.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {isComposer ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs font-medium text-purple-400">
                  <PenTool className="h-3 w-3" />
                  Composer CMD+I
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                  <MessageSquare className="h-3 w-3" />
                  Chat CMD+L
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              copied
                ? "bg-green-500/20 text-green-400"
                : "bg-phase-4/10 text-phase-4 hover:bg-phase-4/20"
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copiato!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copia prompt
              </>
            )}
          </button>
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Expanded Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="border-t border-border p-5 space-y-5">
          {/* Where to use - highlighted */}
          <div className={cn(
            "flex items-center gap-3 rounded-lg p-3",
            isComposer ? "bg-purple-500/10 border border-purple-500/20" : "bg-blue-500/10 border border-blue-500/20"
          )}>
            {isComposer ? (
              <PenTool className="h-5 w-5 text-purple-400" />
            ) : (
              <MessageSquare className="h-5 w-5 text-blue-400" />
            )}
            <div>
              <p className={cn("text-sm font-medium", isComposer ? "text-purple-400" : "text-blue-400")}>
                Dove si usa
              </p>
              <p className="text-sm mt-0.5">
                {isComposer ? "Composer (CMD+I) — per creare/modificare file" : "Cursor Chat (CMD+L) — per discussione e analisi"}
              </p>
            </div>
          </div>

          {/* When to use */}
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Quando usarlo</p>
              <p className="text-sm mt-1">{unit.whenToUse}</p>
            </div>
          </div>

          {/* Input required */}
          <div className="flex items-start gap-3">
            <FileInput className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Input richiesto</p>
              <p className="text-sm mt-1">{unit.inputRequired}</p>
            </div>
          </div>

          {/* Prompt Box */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-phase-4 flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Prompt pronto da copiare
              </p>
              <button
                onClick={handleCopy}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all",
                  copied
                    ? "bg-green-500/20 text-green-400"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copiato!" : "Copia"}
              </button>
            </div>
            <div className="relative rounded-lg bg-background border border-border overflow-hidden">
              <pre className="p-4 text-sm font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-[400px] overflow-y-auto">
                {unit.prompt}
              </pre>
            </div>
          </div>

          {/* Output & Errors Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Expected Output */}
            <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <p className="text-sm font-medium text-green-400">Output atteso</p>
              </div>
              <ul className="space-y-2">
                {unit.expectedOutput.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Errors */}
            <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <p className="text-sm font-medium text-destructive">Errori tipici</p>
              </div>
              <ul className="space-y-2">
                {unit.commonErrors.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Didactic Note */}
          <div className="flex items-start gap-3 rounded-lg bg-phase-4/5 border border-phase-4/20 p-4">
            <Lightbulb className="h-5 w-5 text-phase-4 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-phase-4">Nota didattica</p>
              <p className="text-sm mt-1 text-muted-foreground">{unit.didacticNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase4Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-4/15">
            <span className="text-2xl font-bold text-phase-4">4</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Inizializzazione del Progetto</h1>
            <p className="mt-1 text-lg text-muted-foreground">
              Setup iniziale, struttura del progetto, verifica base stabile.
            </p>
          </div>
        </div>
      </div>

      {/* Key Message Banner */}
      <div className="rounded-xl border-2 border-phase-4/40 bg-phase-4/10 p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-phase-4/20 p-3">
            <HardDrive className="h-6 w-6 text-phase-4" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-phase-4 text-lg">Cursor è un INSTALLATORE</h3>
            <p className="text-sm text-muted-foreground mt-1">
              In questa fase l'AI deve solo configurare l'ambiente di lavoro. Nessuna logica, nessuna feature.
            </p>
          </div>
        </div>
      </div>

      {/* Forbidden Items */}
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Ban className="h-5 w-5 text-destructive" />
          <h4 className="font-medium text-destructive">Vietato in questa fase</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Login", "Dashboard", "API calls", "Database", "Logica business", "Feature utente"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1 text-sm text-destructive"
            >
              <Ban className="h-3 w-3" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 px-2.5 py-1 text-xs font-medium text-purple-400">
            <PenTool className="h-3 w-3" />
            Composer CMD+I
          </span>
          <span className="text-sm text-muted-foreground">Per creare/modificare file</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-2.5 py-1 text-xs font-medium text-blue-400">
            <MessageSquare className="h-3 w-3" />
            Chat CMD+L
          </span>
          <span className="text-sm text-muted-foreground">Per discussione e analisi</span>
        </div>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 4</h2>
            <p className="text-sm text-muted-foreground mt-1">
              5 prompt per inizializzare il progetto in modo controllato.
            </p>
          </div>
        </div>

        {/* Prompt Cards */}
        <div className="space-y-4">
          {promptUnits.map((unit) => (
            <PromptCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>

      {/* Progress hint */}
      <div className="rounded-lg border border-phase-4/30 bg-phase-4/5 p-4 text-center">
        <p className="text-sm">
          <span className="font-medium text-phase-4">Fine delle fasi di SETUP.</span>
          <span className="text-muted-foreground"> Da qui in poi inizia il </span>
          <span className="font-medium text-foreground">ciclo iterativo</span>
          <span className="text-muted-foreground"> (Fasi 5-8, ripetute per ogni feature).</span>
        </p>
      </div>
    </div>
  );
}
