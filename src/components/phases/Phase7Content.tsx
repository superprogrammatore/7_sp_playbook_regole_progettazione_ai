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
  Bug,
  Wrench,
  Eye,
  Hand,
} from "lucide-react";

interface PromptUnit {
  id: string;
  number: string;
  title: string;
  toolType: "chat" | "composer";
  whenToUse: string;
  inputRequired: string;
  prompt: string;
  expectedOutput: string[];
  commonErrors: string[];
  didacticNote: string;
}

const promptUnits: PromptUnit[] = [
  {
    id: "7.1",
    number: "7.1",
    title: "Analisi di un errore",
    toolType: "chat",
    whenToUse: "Quando compare un errore in console, runtime, build o un comportamento inatteso.",
    inputRequired: "Errore, stack trace o descrizione del problema.",
    prompt: `Ho questo errore/comportamento inatteso:

[INCOLLA QUI ERRORE, STACK TRACE O DESCRIZIONE]

Analizza il problema e spiegami:
1) cosa sta succedendo
2) perché probabilmente succede
3) quali parti del codice sono coinvolte
4) possibili soluzioni, ordinate dalla più semplice alla più invasiva

NON applicare modifiche.
Spiegami tutto in italiano semplice.`,
    expectedOutput: [
      "Comprensione chiara del problema",
      "Ipotesi ragionate sulle cause",
      "Aree di codice coinvolte",
      "Più soluzioni ordinate per impatto",
    ],
    commonErrors: [
      "Chiedere subito di \"fixare\"",
      "Saltare l'analisi dell'errore",
      "Accettare una sola soluzione senza alternative",
      "Modificare codice senza capire il perché",
    ],
    didacticNote: "Questo prompt costringe l'AI a pensare prima di agire, e te a capire prima di toccare.",
  },
  {
    id: "7.2",
    number: "7.2",
    title: "Debug guidato step-by-step",
    toolType: "chat",
    whenToUse: "Quando l'errore non è evidente o non produce messaggi chiari.",
    inputRequired: "Descrizione del problema o comportamento anomalo.",
    prompt: `Guidami nel debug di questo problema passo dopo passo.

Dimmi:
- cosa controllare per primo
- cosa verificare dopo
- quali segnali indicano che siamo sulla strada giusta

Non modificare codice finché non confermo ogni passo.`,
    expectedOutput: [
      "Percorso di debug ordinato",
      "Verifiche progressive e mirate",
      "Indicatori chiari di avanzamento",
    ],
    commonErrors: [
      "Fare debug \"a tentativi\"",
      "Controllare troppe cose insieme",
      "Saltare passaggi logici",
      "Toccare codice senza conferma",
    ],
    didacticNote: "Qui impari a debuggare davvero, non a sperare che il bug sparisca.",
  },
  {
    id: "7.3",
    number: "7.3",
    title: "Applicazione della soluzione",
    toolType: "composer",
    whenToUse: "Solo dopo aver capito il problema e scelto una soluzione.",
    inputRequired: "Numero soluzione scelta ([NUMERO]) + contesto del bug.",
    prompt: `Procediamo con la soluzione [NUMERO] che abbiamo scelto.

Applica SOLO questa modifica.
Spiega cosa cambia e perché.
Segui le regole in .cursorrules.

Mai "sistemiamo tutto insieme".`,
    expectedOutput: [
      "Modifica minima e mirata",
      "Nessun cambiamento collaterale",
      "Spiegazione chiara del fix",
      "Rispetto delle regole del progetto",
    ],
    commonErrors: [
      "Applicare più soluzioni insieme",
      "Rifattorizzare mentre si corregge un bug",
      "Introdurre \"migliorie\" non richieste",
      "Cambiare codice senza spiegazione",
    ],
    didacticNote: "Un buon fix è piccolo, comprensibile e spiegabile.",
  },
  {
    id: "7.4",
    number: "7.4",
    title: "Analisi per refactoring di un file",
    toolType: "chat",
    whenToUse: "Quando un file funziona ma è difficile da leggere, mantenere o spiegare.",
    inputRequired: "Nome file (@NomeFile)",
    prompt: `Analizza il file @NomeFile.

Dimmi:
1) cosa lo rende complesso o poco leggibile
2) quali responsabilità diverse contiene
3) come lo renderesti più semplice e modulare

Proponi un refactor in massimo 3 mosse.
NON applicare modifiche.`,
    expectedOutput: [
      "Diagnosi chiara dei problemi del file",
      "Identificazione delle responsabilità mischiate",
      "Proposta di refactor in poche mosse",
    ],
    commonErrors: [
      "Refactoring senza sapere perché",
      "Proposte troppo grandi o invasive",
      "Analisi superficiale (\"è lungo\")",
      "Applicare modifiche senza piano",
    ],
    didacticNote: "Il refactoring inizia sempre dall'analisi, mai dal codice.",
  },
  {
    id: "7.5",
    number: "7.5",
    title: "Refactoring controllato",
    toolType: "composer",
    whenToUse: "Dopo aver approvato una proposta di refactoring.",
    inputRequired: "Prima mossa di refactoring proposta + nome file.",
    prompt: `Applica SOLO la prima mossa di refactoring proposta per @NomeFile.

Assicurati che:
- il comportamento non cambi
- il codice resti leggibile
- non vengano introdotte nuove dipendenze

Spiega cosa hai fatto.

Dopo ogni mossa, testa. Sempre.`,
    expectedOutput: [
      "Refactor limitato a una sola mossa",
      "Comportamento invariato",
      "Codice più leggibile",
      "Nessuna nuova dipendenza",
    ],
    commonErrors: [
      "Fare più mosse insieme",
      "Cambiare comportamento \"per sbaglio\"",
      "Non testare dopo il refactor",
      "Introdurre astrazioni inutili",
    ],
    didacticNote: "Il refactoring è una serie di piccoli miglioramenti, non una riscrittura.",
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

  const isChat = unit.toolType === "chat";

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-7/15 text-sm font-bold text-phase-7">
            {unit.number}
          </span>
          <div>
            <h3 className="font-semibold text-lg">{unit.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {isChat ? (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                  <Terminal className="h-3 w-3" />
                  Chat CMD+L
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400">
                  <Wrench className="h-3 w-3" />
                  Composer CMD+I
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
                : "bg-primary/10 text-primary hover:bg-primary/20"
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
              <p className="text-sm font-medium text-primary flex items-center gap-2">
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
              <pre className="p-4 text-sm font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
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
          <div className="flex items-start gap-3 rounded-lg bg-primary/5 border border-primary/20 p-4">
            <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-primary">Nota didattica</p>
              <p className="text-sm mt-1 text-muted-foreground">{unit.didacticNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase7Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-7/15">
            <span className="text-2xl font-bold text-phase-7">7</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">Debug e Refactoring</h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-phase-7/10 px-3 py-1 text-xs font-medium text-phase-7 border border-phase-7/20">
                <Bug className="h-3.5 w-3.5" />
                LOOP
              </span>
            </div>
            <p className="mt-1 text-lg text-muted-foreground">
              Analisi errori, miglioramento codice. Comprendere prima di modificare.
            </p>
          </div>
        </div>
      </div>

      {/* Key Principles Banner */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Debug Principle */}
        <div className="rounded-xl border border-phase-7/30 bg-phase-7/5 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-phase-7/15">
              <Eye className="h-5 w-5 text-phase-7" />
            </div>
            <div>
              <h3 className="font-semibold text-phase-7">Nel Debug</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Cursor <span className="font-semibold text-foreground">NON deve agire</span>, deve <span className="font-semibold text-foreground">spiegare</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Refactoring Principle */}
        <div className="rounded-xl border border-phase-7/30 bg-phase-7/5 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-phase-7/15">
              <Hand className="h-5 w-5 text-phase-7" />
            </div>
            <div>
              <h3 className="font-semibold text-phase-7">Nel Refactoring</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Cursor <span className="font-semibold text-foreground">propone</span>, TU <span className="font-semibold text-foreground">approvi</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="flex items-center gap-3 rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3">
        <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
        <p className="text-sm">
          <span className="font-medium text-destructive">Se questo principio viene violato:</span>{" "}
          <span className="text-muted-foreground">perdi controllo e impari meno.</span>
        </p>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 7</h2>
            <p className="text-sm text-muted-foreground mt-1">
              5 prompt per debug e refactoring controllato.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-1.5 border border-blue-500/20">
              <Terminal className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Chat</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-violet-500/10 px-3 py-1.5 border border-violet-500/20">
              <Wrench className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Composer</span>
            </div>
          </div>
        </div>

        {/* Prompt Cards */}
        <div className="space-y-4">
          {promptUnits.map((unit) => (
            <PromptCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>

      {/* Workflow Summary */}
      <div className="rounded-xl border border-border bg-card/50 p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Bug className="h-5 w-5 text-phase-7" />
          Flusso della Fase 7
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">DEBUG</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["Analisi errore", "Debug guidato", "Applica fix"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-lg bg-phase-7/10 border border-phase-7/20 px-3 py-1.5 font-medium text-phase-7">
                    {step}
                  </span>
                  {i < 2 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">REFACTORING</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["Analisi file", "Refactor controllato", "Test"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-lg bg-phase-7/10 border border-phase-7/20 px-3 py-1.5 font-medium text-phase-7">
                    {step}
                  </span>
                  {i < 2 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress hint */}
      <div className="rounded-lg border border-border bg-card/50 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Dopo aver completato questi 5 prompt, passa alla <span className="font-medium text-foreground">Fase 8 – Chiusura e Documentazione</span>
        </p>
      </div>
    </div>
  );
}
