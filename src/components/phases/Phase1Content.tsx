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
  inputRequired: string | null;
  prompt: string;
  expectedOutput: string[];
  commonErrors: string[];
  didacticNote: string;
}

const promptUnits: PromptUnit[] = [
  {
    id: "1.1",
    number: "1.1",
    title: "Creazione della Visione",
    whenToUse: "Appena apri la cartella progetto, prima di qualsiasi scelta tecnica.",
    inputRequired: "Un'idea in 2 righe: \"Voglio creare un'app che: ...\"",
    prompt: `Voglio creare un'app che: [SCRIVI QUI LA TUA IDEA IN 2 RIGHE].

Agisci come un Product Manager pratico e concreto.

Crea un file app_vision.md con questa struttura:

1) Problema che risolve (2-4 righe)
2) Target utenti (3 bullet max)
3) Promessa di valore (1 frase)
4) MVP: funzionalità essenziali (max 6 punti, molto concreti)
5) Non-obiettivi (max 6 punti: cosa NON faremo ora)
6) Obiettivo finale (1 paragrafo)
7) Assunzioni e vincoli (max 6 punti)

Scrivi in italiano, semplice e diretto. Non scrivere codice.`,
    expectedOutput: [
      "File app_vision.md completo con 7 sezioni",
      "MVP limitato e concreto",
      "Non-obiettivi espliciti",
      "Vincoli chiari e verificabili",
    ],
    commonErrors: [
      "Idea troppo vaga (\"un'app per gestire tutto\")",
      "MVP troppo lungo o astratto",
      "Non-obiettivi assenti o deboli",
      "Vincoli non dichiarati",
    ],
    didacticNote: "Questo prompt serve a fissare confini e direzione. Se è debole, tutte le fasi dopo diventano più confuse.",
  },
  {
    id: "1.2",
    number: "1.2",
    title: "Flussi principali (User Journey)",
    whenToUse: "Subito dopo aver creato app_vision.md.",
    inputRequired: "Il file app_vision.md già scritto.",
    prompt: `Leggi app_vision.md.

Ora voglio che mi descrivi il flusso utente principale (happy path) in massimo 10 step numerati.

Poi descrivi 3 flussi secondari importanti (max 6 step ciascuno).

Infine, elenca 5 domande aperte che dovrei chiarire prima di passare allo stack.

Non scrivere codice.`,
    expectedOutput: [
      "1 flusso principale in max 10 step",
      "3 flussi secondari, max 6 step ciascuno",
      "5 domande aperte utili per chiarire ambiguità",
    ],
    commonErrors: [
      "Parlare di \"dashboard\" senza sapere cosa contiene",
      "Flussi troppo generici o non sequenziali",
      "Step non verificabili (\"l'utente usa l'app\")",
      "Mancanza di domande aperte concrete",
    ],
    didacticNote: "Una feature ha senso solo se sai dove vive nel percorso utente. Questo evita feature scollegate.",
  },
  {
    id: "1.3",
    number: "1.3",
    title: "Requisiti non funzionali (requirements.md)",
    whenToUse: "Dopo aver chiarito vision e flussi, prima dello stack.",
    inputRequired: "app_vision.md + descrizione flussi (output della 1.2)",
    prompt: `Basandoti su app_vision.md e sui flussi descritti, crea un file requirements.md con:

A) Qualità minima del prodotto
- performance (cosa significa "veloce" qui)
- accessibilità base (minimo sindacale)
- compatibilità (browser principali)
- gestione errori (cosa deve vedere l'utente)
- logging (cosa registriamo e cosa no)

B) Sicurezza e privacy base
- dati sensibili (se presenti)
- autenticazione e autorizzazione (principi, non implementazione)
- regole di base su input utente (validation)
- policy su dati e tracciamento (no tracking non necessario)

C) Vincoli di progetto
- deve restare semplice per principianti
- niente feature avanzate fuori MVP
- dipendenze esterne: solo se indispensabili

Scrivi in italiano, pratico e verificabile. Non scrivere codice.`,
    expectedOutput: [
      "File requirements.md con sezioni A/B/C",
      "Requisiti formulati in modo controllabile (\"checklist\")",
      "Regole minime su errori, logging, input, sicurezza",
    ],
    commonErrors: [
      "Requisiti vaghi (\"deve essere veloce\" senza criteri)",
      "Sicurezza trattata in modo teorico e non pratico",
      "Vincoli troppo permissivi",
      "Mancanza di regole su gestione errori e validazione",
    ],
    didacticNote: "Questo documento impedisce all'AI di introdurre complessità inutile e ti dà una checklist di qualità.",
  },
  {
    id: "1.4",
    number: "1.4",
    title: "Lista MVP reale e priorità",
    whenToUse: "Dopo app_vision.md, prima di passare allo stack (o subito dopo 1.3).",
    inputRequired: "app_vision.md già scritto.",
    prompt: `Leggi app_vision.md.

Ora crea una lista di funzionalità divise in 3 livelli:

1) MUST (indispensabili per far funzionare l'MVP) - max 6
2) SHOULD (molto utili ma non bloccanti) - max 6
3) COULD (nice-to-have) - max 6

Poi aggiorna app_vision.md inserendo questa sezione alla fine.

Non scrivere codice.`,
    expectedOutput: [
      "Lista funzionalità in 3 livelli, max 6 ciascuno",
      "Aggiornamento di app_vision.md con la sezione priorità",
      "MVP realistico e finibile",
    ],
    commonErrors: [
      "Mettere troppe cose nei MUST",
      "Confondere SHOULD e COULD",
      "Aggiungere feature non coerenti con la vision",
      "Non aggiornare app_vision.md davvero",
    ],
    didacticNote: "Questo blocca l'MVP gonfiato e ti protegge dalla deriva \"già che ci siamo\".",
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
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-1/15 text-sm font-bold text-phase-1">
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
          {unit.inputRequired && (
            <div className="flex items-start gap-3">
              <FileInput className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Input richiesto</p>
                <p className="text-sm mt-1">{unit.inputRequired}</p>
              </div>
            </div>
          )}

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

export function Phase1Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-1/15">
            <span className="text-2xl font-bold text-phase-1">1</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Definizione e Strategia</h1>
            <p className="mt-1 text-lg text-muted-foreground">
              Visione del progetto, requisiti, vincoli. Chiarezza su cosa costruire.
            </p>
          </div>
        </div>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 1</h2>
            <p className="text-sm text-muted-foreground mt-1">
              4 prompt pronti da usare in Cursor Chat (CMD+L). Copia e incolla direttamente.
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
          Dopo aver completato questi 4 prompt, passa alla <span className="font-medium text-foreground">Fase 2 – Scelta dello Stack</span>
        </p>
      </div>
    </div>
  );
}
