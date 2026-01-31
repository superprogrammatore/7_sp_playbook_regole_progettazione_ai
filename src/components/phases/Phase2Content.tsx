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
} from "lucide-react";

interface PromptUnit {
  id: string;
  number: string;
  title: string;
  whenToUse: string;
  inputRequired: string;
  prompt: string;
  expectedOutput: string[];
  commonErrors: string[];
  didacticNote: string;
}

const promptUnits: PromptUnit[] = [
  {
    id: "2.1",
    number: "2.1",
    title: "Proposta dello stack tecnologico",
    whenToUse: "Dopo aver completato la Fase 1, prima di inizializzare il progetto.",
    inputRequired: "app_vision.md e requirements.md",
    prompt: `Leggi app_vision.md e requirements.md.

Agisci come un Tech Lead che deve aiutare un principiante assoluto.

Proponi lo stack tecnologico più semplice e moderno possibile per costruire l'MVP.

Per ogni area, indica:
- strumento scelto
- perché è adatto a un principiante
- cosa evita di dover configurare

Aree:
1) Frontend
2) Styling UI
3) Backend / API
4) Autenticazione
5) Database
6) Hosting / Deploy
7) Tooling di sviluppo (lint, format, ecc.)

NON scrivere codice.
NON proporre alternative avanzate.`,
    expectedOutput: [
      "Stack completo diviso per aree",
      "Motivazioni semplici e comprensibili",
      "Focus su strumenti \"all-in-one\"",
      "Riduzione drastica della configurazione manuale",
    ],
    commonErrors: [
      "Proporre stack potenti ma complessi",
      "Inserire tecnologie enterprise",
      "Usare termini non spiegati",
      "Anticipare ottimizzazioni premature",
    ],
    didacticNote: "Questo prompt insegna che lo stack giusto è quello che ti fa finire l'MVP, non quello \"più figo\".",
  },
  {
    id: "2.2",
    number: "2.2",
    title: "Tradeoff e alternative scartate",
    whenToUse: "Subito dopo aver ricevuto la proposta di stack.",
    inputRequired: "Stack tecnologico proposto (output della 2.1)",
    prompt: `Per ogni scelta dello stack che hai proposto:
- indica almeno 1 alternativa comune
- spiega perché NON la scegliamo ora
- indica il compromesso che accettiamo (cosa perdiamo)

Rispondi in modo semplice.`,
    expectedOutput: [
      "Alternative realistiche per ogni scelta",
      "Motivazioni chiare del \"perché no\"",
      "Consapevolezza dei compromessi accettati",
    ],
    commonErrors: [
      "Pensare che esista una scelta \"perfetta\"",
      "Ignorare i compromessi",
      "Trattare le alternative in modo superficiale",
      "Giustificazioni vaghe (\"è meglio\")",
    ],
    didacticNote: "Qui l'utente smette di essere passivo e inizia a ragionare come un tecnico consapevole.",
  },
  {
    id: "2.3",
    number: "2.3",
    title: "Creazione del file tech_stack.md",
    whenToUse: "Dopo aver discusso stack e tradeoff.",
    inputRequired: "Decisioni prese nella 2.1 e 2.2",
    prompt: `Crea il file tech_stack.md con questa struttura:

# Stack Tecnologico

## Obiettivo dello stack
(2-3 righe: semplicità, velocità, adatto a principianti)

## Componenti principali
- Frontend:
- Styling:
- Backend:
- Auth:
- Database:
- Hosting:

## Perché questo stack
(spiegazione sintetica)

## Compromessi accettati
(elenco puntato)

## Cosa NON useremo ora
(elenco chiaro)

Scrivi in italiano, chiaro e concreto.`,
    expectedOutput: [
      "File tech_stack.md completo e leggibile",
      "Scelte tecnologiche esplicite",
      "Confini chiari su cosa è escluso",
    ],
    commonErrors: [
      "Descrizioni troppo tecniche",
      "Voci che non si capiscono",
      "Mancanza di \"cosa non useremo\"",
      "Stack non coerente con l'MVP",
    ],
    didacticNote: "Questo file diventa il riferimento assoluto contro le derive future dell'AI.",
  },
  {
    id: "2.4",
    number: "2.4",
    title: "Decision log (decisions.md)",
    whenToUse: "Subito dopo aver fissato lo stack.",
    inputRequired: "tech_stack.md",
    prompt: `Aggiorna il file decisions.md aggiungendo una sezione "Scelte tecnologiche iniziali".

Per ogni decisione usa questo formato:
- Decisione:
- Motivazione:
- Alternative considerate:
- Conseguenze:

Scrivi in modo sintetico ma chiaro.`,
    expectedOutput: [
      "Decision log leggibile",
      "Motivazioni storicizzate",
      "Memoria del perché delle scelte",
    ],
    commonErrors: [
      "Scrivere troppo poco (\"scelto perché sì\")",
      "Non indicare alternative",
      "Ignorare le conseguenze future",
      "Saltare completamente questo file",
    ],
    didacticNote: "Questo prompt insegna che le decisioni tecniche hanno memoria, non sono usa e getta.",
  },
  {
    id: "2.5",
    number: "2.5",
    title: "Verifica finale dello stack",
    whenToUse: "Prima di iniziare la Fase 4 (inizializzazione).",
    inputRequired: "app_vision.md, requirements.md, tech_stack.md",
    prompt: `Rileggi app_vision.md, requirements.md e tech_stack.md.

Dimmi:
1) Se lo stack è coerente con l'MVP
2) Se ci sono strumenti inutili o sovradimensionati
3) Se ci sono punti che potrebbero creare difficoltà a un principiante
4) Cosa semplificheresti ulteriormente se fosse un progetto didattico

Non scrivere codice.`,
    expectedOutput: [
      "Conferma o correzione dello stack",
      "Individuazione di complessità inutili",
      "Suggerimenti di ulteriore semplificazione",
    ],
    commonErrors: [
      "Andare avanti senza verifica",
      "Ignorare segnali di complessità",
      "Pensare che \"ormai abbiamo deciso\"",
      "Non ascoltare l'AI quando suggerisce di semplificare",
    ],
    didacticNote: "Se anche l'AI dice che puoi semplificare, quasi sempre ha ragione.",
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

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-phase-2/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-2/15 text-sm font-bold text-phase-2">
            {unit.number}
          </span>
          <div>
            <h3 className="font-semibold text-lg">{unit.title}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              <span>Cursor Chat CMD+L</span>
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
                : "bg-phase-2/10 text-phase-2 hover:bg-phase-2/20"
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
              <p className="text-sm font-medium text-phase-2 flex items-center gap-2">
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
          <div className="flex items-start gap-3 rounded-lg bg-phase-2/5 border border-phase-2/20 p-4">
            <Lightbulb className="h-5 w-5 text-phase-2 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-phase-2">Nota didattica</p>
              <p className="text-sm mt-1 text-muted-foreground">{unit.didacticNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase2Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-2/15">
            <span className="text-2xl font-bold text-phase-2">2</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Scelta dello Stack</h1>
            <p className="mt-1 text-lg text-muted-foreground">
              Decisioni tecnologiche, motivazioni e compromessi accettati.
            </p>
          </div>
        </div>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 2</h2>
            <p className="text-sm text-muted-foreground mt-1">
              5 prompt pronti da usare in Cursor Chat (CMD+L). Copia e incolla direttamente.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
            <Terminal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Cursor Chat CMD+L</span>
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
          Dopo aver completato questi 5 prompt, passa alla <span className="font-medium text-foreground">Fase 3 – Regole e Qualità</span>
        </p>
      </div>
    </div>
  );
}
