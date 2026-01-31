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
    id: "3.1",
    number: "3.1",
    title: "Creazione del file .cursorrules",
    whereToUse: "composer",
    whenToUse: "Dopo aver fissato lo stack (Fase 2) e prima di inizializzare davvero il progetto (Fase 4).",
    inputRequired: "Nessuno (si lavora nella root del progetto).",
    prompt: `Crea un file .cursorrules nella root del progetto.

Il file deve contenere regole chiare e operative per guidare il comportamento dell'AI durante lo sviluppo.

Includi queste sezioni:

1) Principi generali
- privilegia semplicità e leggibilità
- una cosa alla volta
- niente assunzioni non esplicitate

2) Regole sul codice
- usa TypeScript in modalità strict
- file piccoli e modulari
- se un file supera 120 righe, suggerire uno split
- separare UI, logica e accesso ai dati quando possibile

3) Commenti e spiegazioni
- commenti in italiano solo dove aggiungono valore
- spiegare cosa fa il codice, non ripetere il codice
- ogni modifica importante deve essere spiegata prima di essere applicata

4) Gestione dei file
- prima di creare nuovi file, spiegare perché servono
- non creare file duplicati o ridondanti
- rispettare la struttura del progetto esistente

5) Dipendenze e librerie
- non installare nuove librerie senza proporle prima
- spiegare sempre perché sono necessarie
- preferire soluzioni native o già presenti nello stack

6) API e funzionalità
- non inventare API, funzioni o endpoint
- se qualcosa non esiste, chiedere o creare prima uno stub
- rispettare ciò che è definito in tech_stack.md

7) Qualità e sicurezza base
- validare sempre input utente
- gestire errori in modo esplicito
- niente catch vuoti
- messaggi di errore comprensibili

8) Processo di lavoro
- ogni feature deve avere una spec in /specs
- seguire il piano definito in todo.md
- non implementare più di uno step per volta

Scrivi il file in modo chiaro e leggibile.`,
    expectedOutput: [
      "File .cursorrules creato nella root",
      "Regole chiare, operative e vincolanti",
      "Focus su semplicità, controllo e spiegazioni",
    ],
    commonErrors: [
      "Regole troppo vaghe (\"scrivi codice pulito\")",
      "Regole troppo lunghe e inutilizzabili",
      "Mancanza di vincoli su file, dipendenze e processo",
      "Regole che non impediscono \"derive\" tipiche dell'AI",
    ],
    didacticNote: "Questo file è la costituzione del progetto: serve a rallentare l'AI e tenere tu il controllo.",
  },
  {
    id: "3.2",
    number: "3.2",
    title: "Verifica delle regole",
    whereToUse: "chat",
    whenToUse: "Subito dopo aver creato .cursorrules, prima di procedere oltre.",
    inputRequired: "File .cursorrules appena creato.",
    prompt: `Rileggi il file .cursorrules.

Dimmi:
1) Se ci sono regole poco chiare o ambigue
2) Se qualche regola è troppo permissiva
3) Se manca qualcosa per un progetto da principianti
4) Quali regole avranno l'impatto maggiore sul modo di lavorare

Non scrivere codice.`,
    expectedOutput: [
      "Elenco punti ambigui da chiarire",
      "Identificazione di regole troppo permissive",
      "Suggerimenti mirati per progetti da principianti",
      "Focus sulle regole più \"impattanti\"",
    ],
    commonErrors: [
      "Accettare regole che non capisci",
      "Lasciare ambiguità che generano interpretazioni diverse",
      "Rendere le regole troppo permissive \"per comodità\"",
      "Saltare il controllo e scoprirlo dopo quando è tardi",
    ],
    didacticNote: "Le regole sono utili solo se sono chiare. Se non le capisci, non ti proteggono.",
  },
  {
    id: "3.3",
    number: "3.3",
    title: "Adattamento alle tue competenze",
    whereToUse: "chat",
    whenToUse: "Dopo la verifica delle regole, per tarare Cursor sul tuo livello reale.",
    inputRequired: "File .cursorrules + scelta del livello: principiante o intermedio.",
    prompt: `Considera che sono un principiante/intermedio [scegli tu].

Adatta le regole di .cursorrules per:
- ridurre complessità inutile
- aumentare spiegazioni dove serve
- evitare pattern avanzati non indispensabili

Proponi eventuali modifiche, ma non applicarle automaticamente.`,
    expectedOutput: [
      "Proposte di modifica mirate e motivate",
      "Più supporto didattico dove serve",
      "Riduzione di complessità non necessaria",
    ],
    commonErrors: [
      "Rendere le regole troppo \"soft\" e perdere controllo",
      "Inserire pattern avanzati \"perché si fa così\"",
      "Applicare modifiche senza capire l'effetto",
      "Confondere \"più semplice\" con \"meno qualità\"",
    ],
    didacticNote: "Cursor deve essere tarato su di te: se ti supera di livello, ti trascina in complessità inutile.",
  },
  {
    id: "3.4",
    number: "3.4",
    title: "Blocco delle derive tipiche dell'AI",
    whereToUse: "chat",
    whenToUse: "Dopo aver definito le regole, per verificare che coprano i rischi reali.",
    inputRequired: "File .cursorrules e contesto del progetto (vision + stack se disponibili).",
    prompt: `In base a questo progetto, elenca:
- 5 errori tipici che un'AI potrebbe fare
- quali regole di .cursorrules li prevengono
- se manca qualche regola per evitarli

Non scrivere codice.`,
    expectedOutput: [
      "5 derive realistiche dell'AI",
      "Mappatura \"errore → regola che lo previene\"",
      "Eventuali regole mancanti da aggiungere",
    ],
    commonErrors: [
      "Pensare che l'AI \"capisca da sola\"",
      "Non collegare regole a rischi concreti",
      "Ignorare problemi ricorrenti (file enormi, troppe librerie, magia)",
      "Non aggiornare .cursorrules quando emergono nuove derive",
    ],
    didacticNote: "Questa unità serve a rendere le regole \"anti-disastro\" e a blindare il metodo contro i comportamenti più comuni dell'AI.",
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
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-phase-3/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15 text-sm font-bold text-phase-3">
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
                : "bg-phase-3/10 text-phase-3 hover:bg-phase-3/20"
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
              <p className="text-sm font-medium text-phase-3 flex items-center gap-2">
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
          <div className="flex items-start gap-3 rounded-lg bg-phase-3/5 border border-phase-3/20 p-4">
            <Lightbulb className="h-5 w-5 text-phase-3 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-phase-3">Nota didattica</p>
              <p className="text-sm mt-1 text-muted-foreground">{unit.didacticNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase3Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-3/15">
            <span className="text-2xl font-bold text-phase-3">3</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Regole e Qualità</h1>
            <p className="mt-1 text-lg text-muted-foreground">
              Regole di lavoro con l'AI, linee guida sul codice, disciplina.
            </p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="rounded-lg border border-phase-3/30 bg-phase-3/5 p-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-phase-3/15 p-2">
            <Terminal className="h-5 w-5 text-phase-3" />
          </div>
          <div>
            <h3 className="font-medium text-phase-3">File .cursorrules</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Questa fase crea il file <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.cursorrules</code> — 
              la "costituzione" del progetto che guida il comportamento dell'AI durante tutto lo sviluppo.
            </p>
          </div>
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
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 3</h2>
            <p className="text-sm text-muted-foreground mt-1">
              4 prompt per definire e verificare le regole del progetto.
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
          Dopo aver completato questi 4 prompt, passa alla <span className="font-medium text-foreground">Fase 4 – Inizializzazione del Progetto</span>
        </p>
      </div>
    </div>
  );
}
