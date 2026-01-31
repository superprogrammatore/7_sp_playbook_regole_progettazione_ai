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
  GitBranch,
  ArrowRight,
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
    id: "5.1",
    number: "5.1",
    title: "Scelta della feature",
    whereToUse: "chat",
    whenToUse: "Quando sei pronto a costruire una nuova feature e vuoi evitare di partire dalla cosa sbagliata.",
    inputRequired: "app_vision.md, requirements.md, todo.md",
    prompt: `Leggi app_vision.md, requirements.md e todo.md.

Proponimi:
- quale feature ha più senso implementare ora
- perché è prioritaria
- cosa sblocca nel progetto

Rispondi in modo sintetico.

Non scrivere codice.`,
    expectedOutput: [
      "1 proposta di feature prioritaria",
      "Motivazione chiara",
      "Spiegazione di cosa sblocca nel progetto",
    ],
    commonErrors: [
      "Partire da \"dashboard\" senza core feature",
      "Scegliere feature troppo grande",
      "Ignorare MVP e priorità",
      "Iniziare a scrivere codice senza scelta esplicita",
    ],
    didacticNote: "La prima feature deve sbloccare valore reale. Se sbagli qui, ti trascini complessità inutile.",
  },
  {
    id: "5.2",
    number: "5.2",
    title: "Scrittura della SPEC della feature",
    whereToUse: "chat",
    whenToUse: "Subito dopo aver scelto la feature, prima di qualsiasi piano o codice.",
    inputRequired: "Nome feature ([NOME FEATURE])",
    prompt: `Voglio implementare la feature: [NOME FEATURE].

Crea un file /specs/[nome_feature].md con questa struttura:

1) Descrizione della feature (2-3 righe)
2) User story principale
3) Requisiti funzionali (MUST / SHOULD / COULD)
4) Edge case e comportamenti limite
5) Criteri di accettazione (checklist verificabile)
6) Impatti su sicurezza e privacy (se rilevanti)
7) Cosa è esplicitamente fuori scope

Scrivi in italiano, semplice e concreto.

NON scrivere codice.`,
    expectedOutput: [
      "File /specs/[nome_feature].md creato",
      "Requisiti chiari e verificabili",
      "Checklist di accettazione pronta",
      "Fuori scope esplicito",
    ],
    commonErrors: [
      "Spec troppo vaga (\"gestire utenti\")",
      "Requisiti non verificabili",
      "Edge case ignorati",
      "Fuori scope assente (porta a derive)",
    ],
    didacticNote: "La spec è ciò che impedisce a Cursor di improvvisare. Se la spec è confusa, il codice lo sarà.",
  },
  {
    id: "5.3",
    number: "5.3",
    title: "Piano di implementazione",
    whereToUse: "chat",
    whenToUse: "Solo dopo la spec, prima di scrivere codice.",
    inputRequired: "/specs/[nome_feature].md e tech_stack.md",
    prompt: `Leggi /specs/[nome_feature].md e tech_stack.md.

Proponi un piano di implementazione in step piccoli e ordinati (max 8 step).

Per ogni step indica:
- cosa verrà fatto
- file coinvolti
- come verificare che lo step funzioni

Aggiorna todo.md con questi step.

NON scrivere codice.`,
    expectedOutput: [
      "Piano in max 8 step",
      "Step piccoli e testabili",
      "File coinvolti indicati",
      "Criterio di verifica per ogni step",
      "todo.md aggiornato",
    ],
    commonErrors: [
      "Step troppo grandi (\"implementa tutta la feature\")",
      "Step non verificabili",
      "Troppi step (piano dispersivo)",
      "Aggiornamento di todo.md saltato",
    ],
    didacticNote: "Il piano serve a spezzare la complessità. Se uno step è grande, devi spezzarlo prima di codare.",
  },
  {
    id: "5.4",
    number: "5.4",
    title: "Conferma del piano",
    whereToUse: "chat",
    whenToUse: "Dopo che hai un piano proposto, prima di passare al Composer.",
    inputRequired: "Piano di implementazione (output della 5.3)",
    prompt: `Rivedi il piano proposto.

Dimmi:
- se qualche step è troppo complesso
- se c'è un ordine migliore
- quali step sono più rischiosi

Non applicare modifiche automaticamente.`,
    expectedOutput: [
      "Identificazione step troppo complessi",
      "Suggerimenti di riordino (se utili)",
      "Evidenza degli step più rischiosi",
    ],
    commonErrors: [
      "Saltare la conferma e iniziare a codare",
      "Accettare step troppo grandi \"perché prima o poi\"",
      "Non individuare i rischi (auth, dati, permessi, ecc.)",
      "Cambiare piano senza aggiornare todo.md",
    ],
    didacticNote: "Questo passaggio ti mantiene in controllo. Se il piano non è chiaro, il codice non parte.",
  },
  {
    id: "5.5",
    number: "5.5",
    title: "Implementazione step-by-step",
    whereToUse: "composer",
    whenToUse: "Solo dopo che spec e piano sono approvati.",
    inputRequired: "Numero step ([NUMERO]) + nome feature ([nome_feature]) + .cursorrules",
    prompt: `Procediamo con lo step [NUMERO] del piano per la feature [nome_feature].

Implementa SOLO questo step.

Segui le regole in .cursorrules.

Se servono nuovi file o librerie, spiegalo prima.

Spiega brevemente cosa stai facendo e perché.`,
    expectedOutput: [
      "Solo lo step richiesto implementato",
      "Nessun extra o \"già che ci siamo\"",
      "Rispetto di .cursorrules",
      "Spiegazione breve e chiara",
    ],
    commonErrors: [
      "Implementare due step insieme",
      "Aggiungere miglioramenti non richiesti",
      "Introdurre librerie senza motivo",
      "Creare file \"misteriosi\" o ridondanti",
    ],
    didacticNote: "La disciplina è tutto: un passo per volta evita bug, caos e dipendenza dall'AI.",
  },
  {
    id: "5.6",
    number: "5.6",
    title: "Verifica dello step",
    whereToUse: "chat",
    whenToUse: "Dopo ogni step implementato, prima di passare allo step successivo.",
    inputRequired: "Numero step completato ([NUMERO]) + spec feature",
    prompt: `Abbiamo completato lo step [NUMERO].

Dimmi:
- cosa verificare manualmente
- possibili problemi da controllare
- se questo step è coerente con la spec

Non scrivere codice.`,
    expectedOutput: [
      "Checklist di verifica manuale",
      "Problemi tipici da controllare",
      "Conferma coerenza con la spec",
    ],
    commonErrors: [
      "Andare avanti senza verificare",
      "Verifiche troppo generiche (\"controlla che funzioni\")",
      "Ignorare incoerenze con la spec",
      "Rimandare test e scoprire bug troppo tardi",
    ],
    didacticNote: "Questo prompt impedisce di accumulare bug invisibili. Ogni step deve essere stabile prima del successivo.",
  },
  {
    id: "5.7",
    number: "5.7",
    title: "Chiusura della feature",
    whereToUse: "chat",
    whenToUse: "Quando tutti gli step sono completati.",
    inputRequired: "Spec feature + requirements.md + implementazione completata",
    prompt: `La feature [nome_feature] è completa.

Verifica:
- che tutti i criteri di accettazione siano soddisfatti
- che requirements.md sia rispettato
- che non ci siano parti fuori scope

Poi dimmi se la feature può essere considerata "done" o cosa manca.

Se non è "done", non si passa alla prossima.`,
    expectedOutput: [
      "Validazione dei criteri di accettazione",
      "Controllo rispetto requirements.md",
      "Identificazione di fuori scope o incompletezze",
      "Decisione \"done / non done\" motivata",
    ],
    commonErrors: [
      "Dichiarare \"done\" senza checklist",
      "Lasciare TODO nascosti",
      "Avere pezzi fuori scope non dichiarati",
      "Passare alla prossima feature con debiti tecnici",
    ],
    didacticNote: "Una feature finita è spiegabile, testabile e riprendibile. Se non sai spiegarla, non è finita.",
  },
];

const workflowSteps = [
  { label: "SPEC", color: "bg-phase-5" },
  { label: "PIANO", color: "bg-phase-6" },
  { label: "APPROVAZIONE", color: "bg-phase-3" },
  { label: "CODICE", color: "bg-purple-500" },
  { label: "VERIFICA", color: "bg-blue-500" },
  { label: "CHIUSURA", color: "bg-green-500" },
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
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-phase-5/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-5/15 text-sm font-bold text-phase-5">
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
                : "bg-phase-5/10 text-phase-5 hover:bg-phase-5/20"
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
              <p className="text-sm font-medium text-phase-5 flex items-center gap-2">
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
          <div className="flex items-start gap-3 rounded-lg bg-phase-5/5 border border-phase-5/20 p-4">
            <Lightbulb className="h-5 w-5 text-phase-5 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-phase-5">Nota didattica</p>
              <p className="text-sm mt-1 text-muted-foreground">{unit.didacticNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase5Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-5/15">
            <span className="text-2xl font-bold text-phase-5">5</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Sviluppo delle Funzionalità</h1>
              <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary">
                LOOP
              </span>
            </div>
            <p className="mt-1 text-lg text-muted-foreground">
              Una feature alla volta: specifica, piano, implementazione controllata.
            </p>
          </div>
        </div>
      </div>

      {/* Golden Rule Banner */}
      <div className="rounded-xl border-2 border-phase-5/40 bg-phase-5/10 p-5">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-phase-5/20 p-3">
            <GitBranch className="h-6 w-6 text-phase-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-phase-5 text-lg">Regola d'oro: MAI scrivere codice subito</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Ogni feature segue un flusso preciso. Saltare passaggi significa perdere controllo.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="rounded-lg border border-border bg-card p-5">
        <h4 className="font-medium mb-4 text-sm text-muted-foreground">Flusso di sviluppo per ogni feature</h4>
        <div className="flex flex-wrap items-center gap-2">
          {workflowSteps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-2">
              <span className={cn(
                "inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold text-white",
                step.color
              )}>
                {index + 1}. {step.label}
              </span>
              {index < workflowSteps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
              )}
            </div>
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
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 5</h2>
            <p className="text-sm text-muted-foreground mt-1">
              7 prompt per sviluppare ogni feature in modo controllato.
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
      <div className="rounded-lg border border-border bg-card/50 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Dopo aver completato la feature, passa alla <span className="font-medium text-foreground">Fase 6 – Dati e Sicurezza</span> per validare i dati.
          <br />
          <span className="text-xs mt-1 inline-block">Ripeti le Fasi 5-8 per ogni nuova feature.</span>
        </p>
      </div>
    </div>
  );
}
