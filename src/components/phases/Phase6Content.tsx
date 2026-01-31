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
  Database,
  Shield,
  AlertCircle,
} from "lucide-react";

interface PromptUnit {
  id: string;
  number: string;
  title: string;
  toolType: "chat";
  whenToUse: string;
  inputRequired: string;
  prompt: string;
  expectedOutput: string[];
  commonErrors: string[];
  didacticNote: string;
}

const promptUnits: PromptUnit[] = [
  {
    id: "6.1",
    number: "6.1",
    title: "Identificazione dei dati della feature",
    toolType: "chat",
    whenToUse: "Per ogni feature che crea, legge, modifica o cancella dati.",
    inputRequired: "Nome feature ([nome_feature])",
    prompt: `Per la feature [nome_feature]:

Elenca:

1) quali dati vengono creati
2) quali dati vengono letti
3) quali dati vengono modificati
4) quali dati vengono cancellati

Per ogni dato indica:
- chi lo crea
- chi può leggerlo
- chi può modificarlo
- se è sensibile o no

Rispondi in modo semplice e strutturato.

NON scrivere codice.`,
    expectedOutput: [
      "Elenco completo dei dati coinvolti",
      "Chiarezza su chi usa cosa",
      "Identificazione dei dati sensibili",
      "Visione \"backend-oriented\" della feature",
    ],
    commonErrors: [
      "Pensare solo ai dati \"visibili\"",
      "Dimenticare letture o cancellazioni",
      "Non distinguere dati sensibili e non",
      "Risposte vaghe o non strutturate",
    ],
    didacticNote: "Questo prompt ti obbliga a ragionare sui dati prima di costruire strutture tecniche.",
  },
  {
    id: "6.2",
    number: "6.2",
    title: "Modello dati concettuale",
    toolType: "chat",
    whenToUse: "Dopo aver identificato i dati della feature.",
    inputRequired: "Output del prompt 6.1",
    prompt: `Basandoti sui dati elencati, proponi un modello dati concettuale.

Per ogni entità indica:
- nome (singolare)
- campi principali
- tipo di dato (descrittivo, non tecnico)
- relazioni con altre entità

Non scrivere SQL.
Non scrivere codice.`,
    expectedOutput: [
      "Modello dati concettuale chiaro",
      "Entità comprensibili",
      "Relazioni esplicite",
      "Base per il database futuro",
    ],
    commonErrors: [
      "Entità troppo tecniche",
      "Campi non giustificati",
      "Relazioni non spiegate",
      "Modello troppo complesso per l'MVP",
    ],
    didacticNote: "Questo modello è una mappa mentale, non uno schema tecnico.",
  },
  {
    id: "6.3",
    number: "6.3",
    title: "Verifica del modello dati",
    toolType: "chat",
    whenToUse: "Prima di toccare il database o scrivere schema reali.",
    inputRequired: "Modello dati concettuale (output della 6.2)",
    prompt: `Rivedi il modello dati proposto.

Dimmi:
- se ci sono dati ridondanti
- se mancano dati importanti
- se il modello è troppo complesso per l'MVP
- cosa potremmo semplificare ora

Non applicare modifiche automaticamente.`,
    expectedOutput: [
      "Individuazione di ridondanze",
      "Segnalazione di mancanze",
      "Suggerimenti di semplificazione",
      "Conferma di adeguatezza all'MVP",
    ],
    commonErrors: [
      "Accettare il modello senza revisione",
      "Tenere campi \"perché potrebbero servire\"",
      "Ignorare segnali di complessità inutile",
      "Passare al database troppo presto",
    ],
    didacticNote: "Qui spesso scopri che metà dei campi non servono davvero ora.",
  },
  {
    id: "6.4",
    number: "6.4",
    title: "Regole di accesso e autorizzazione",
    toolType: "chat",
    whenToUse: "Dopo aver chiarito modello e dati.",
    inputRequired: "Nome feature ([nome_feature]) + modello dati",
    prompt: `Per il modello dati della feature [nome_feature]:

Definisci le regole di accesso in modo concettuale:
- chi può creare
- chi può leggere
- chi può aggiornare
- chi può cancellare

Usa frasi tipo:
"Un utente può leggere solo i dati che ha creato".

Non scrivere policy tecniche.`,
    expectedOutput: [
      "Regole di accesso chiare e leggibili",
      "Distinzione netta dei permessi",
      "Base concettuale per auth e RLS",
    ],
    commonErrors: [
      "Regole troppo vaghe",
      "Permessi troppo permissivi",
      "Mancanza di distinzione tra ruoli",
      "Pensare alle policy solo dopo",
    ],
    didacticNote: "Le regole concettuali evitano disastri prima ancora delle policy tecniche.",
  },
  {
    id: "6.5",
    number: "6.5",
    title: "Input validation ed errori",
    toolType: "chat",
    whenToUse: "Prima di implementare form, API o scrittura dati.",
    inputRequired: "Nome feature ([nome_feature])",
    prompt: `Per la feature [nome_feature]:

Elenca:
- quali input arrivano dall'utente
- quali validazioni minime servono
- errori possibili e messaggi da mostrare all'utente

Usa esempi concreti.

Non scrivere codice.`,
    expectedOutput: [
      "Lista completa degli input",
      "Validazioni minime chiare",
      "Messaggi di errore sensati",
      "Riduzione di bug lato utente",
    ],
    commonErrors: [
      "Fidarsi degli input",
      "Validazioni incomplete",
      "Messaggi di errore poco chiari",
      "Gestire gli errori \"più tardi\"",
    ],
    didacticNote: "Se un input può essere sbagliato, lo sarà. Sempre.",
  },
  {
    id: "6.6",
    number: "6.6",
    title: "Mini security review",
    toolType: "chat",
    whenToUse: "Prima di considerare la feature chiusa.",
    inputRequired: "Feature completa + decisioni prese nella Fase 6",
    prompt: `Fai una mini security review della feature [nome_feature].

Indica:
- errori di sicurezza comuni per questo tipo di feature
- cosa stiamo facendo per evitarli
- cosa NON stiamo coprendo ora (consapevolmente)

Rispondi in modo pragmatico, non teorico.`,
    expectedOutput: [
      "Elenco rischi realistici",
      "Mitigazioni adottate",
      "Limiti dichiarati dell'MVP",
    ],
    commonErrors: [
      "Pensare che \"non serva sicurezza\"",
      "Confondere MVP con superficialità",
      "Non dichiarare cosa è fuori scope",
      "Saltare questo controllo finale",
    ],
    didacticNote: "Dichiarare cosa NON stai coprendo è una scelta tecnica, non una debolezza.",
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
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-6/15 text-sm font-bold text-phase-6">
            {unit.number}
          </span>
          <div>
            <h3 className="font-semibold text-lg">{unit.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                <Terminal className="h-3 w-3" />
                Chat CMD+L
              </span>
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

export function Phase6Content() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-phase-6/15">
            <span className="text-2xl font-bold text-phase-6">6</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">Dati e Sicurezza</h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-phase-6/10 px-3 py-1 text-xs font-medium text-phase-6 border border-phase-6/20">
                <Database className="h-3.5 w-3.5" />
                LOOP
              </span>
            </div>
            <p className="mt-1 text-lg text-muted-foreground">
              Gestione dati, regole di accesso, validazione e comportamenti sicuri.
            </p>
          </div>
        </div>
      </div>

      {/* Key Message Banner */}
      <div className="rounded-xl border border-phase-6/30 bg-phase-6/5 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-phase-6/15">
            <AlertCircle className="h-6 w-6 text-phase-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-phase-6">Questa fase NON è penetration testing</h3>
            <p className="mt-2 text-muted-foreground">
              Serve a <span className="text-foreground font-medium">evitare errori banali</span> su dati e sicurezza 
              che poi costano tempo.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-phase-6/20 text-xs font-bold text-phase-6">1</span>
                <span>Prima si chiariscono <span className="font-medium text-foreground">i dati</span> e <span className="font-medium text-foreground">chi li usa</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-phase-6/20 text-xs font-bold text-phase-6">2</span>
                <span>Solo dopo si pensa a <span className="font-medium text-foreground">database</span> e <span className="font-medium text-foreground">policy</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Chat Note */}
      <div className="flex items-center gap-3 rounded-lg bg-blue-500/10 border border-blue-500/20 px-4 py-3">
        <Terminal className="h-5 w-5 text-blue-400" />
        <p className="text-sm">
          <span className="font-medium text-blue-400">Nota:</span>{" "}
          <span className="text-muted-foreground">Tutti i prompt di questa fase si usano in</span>{" "}
          <span className="font-medium text-foreground">Cursor Chat (CMD+L)</span>
        </p>
      </div>

      {/* Prompt Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Prompt operativi – Fase 6</h2>
            <p className="text-sm text-muted-foreground mt-1">
              6 prompt per gestire dati e sicurezza in modo consapevole.
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

      {/* Data Flow Summary */}
      <div className="rounded-xl border border-border bg-card/50 p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-phase-6" />
          Flusso della Fase 6
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {["Identifica dati", "Modello concettuale", "Verifica modello", "Regole accesso", "Validazione", "Security review"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg bg-phase-6/10 border border-phase-6/20 px-3 py-1.5 font-medium text-phase-6">
                {step}
              </span>
              {i < 5 && <span className="text-muted-foreground">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Progress hint */}
      <div className="rounded-lg border border-border bg-card/50 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Dopo aver completato questi 6 prompt, passa alla <span className="font-medium text-foreground">Fase 7 – Debug e Refactoring</span>
        </p>
      </div>
    </div>
  );
}
