import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface IntroViewProps {
  onPhaseChange: (phaseId: string) => void;
}

export function IntroView({ onPhaseChange }: IntroViewProps) {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="mesh-background absolute inset-0" />
        <div className="relative p-8 md:p-12">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Metodo Strutturato</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Introduzione al Metodo
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Un approccio disciplinato per lavorare con AI coding assistants. Non
            impari un linguaggio, ma un processo ripetibile e professionale.
          </p>
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* What is this method */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Cos'è questo metodo</h2>
          </div>
          <div className="mt-4 space-y-3">
            <p className="text-muted-foreground">
              Un framework mentale per guidare l'AI in modo consapevole,
              strutturato e controllato.
            </p>
            <ul className="space-y-2">
              {[
                "Processo ripetibile per ogni progetto",
                "Focus sulla qualità, non sulla velocità",
                "Comprensione prima dell'implementazione",
                "Controllo su ogni decisione automatica",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why method matters */}
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/15">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <h2 className="text-xl font-semibold">Senza metodo...</h2>
          </div>
          <div className="mt-4 space-y-3">
            <p className="text-muted-foreground">
              Usare l'AI senza disciplina porta a problemi strutturali che si
              accumulano nel tempo.
            </p>
            <ul className="space-y-2">
              {[
                "Codice fragile e difficile da mantenere",
                "Decisioni non comprese, solo copiate",
                "Debito tecnico che cresce in silenzio",
                "Dipendenza dall'AI senza vera crescita",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-destructive/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold">Inizia il percorso</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Esplora le fasi del metodo per costruire un processo di lavoro solido.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => onPhaseChange("phase-1")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Inizia con Fase 1
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => onPhaseChange("cycle")}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Vedi il ciclo completo
          </button>
        </div>
      </div>
    </div>
  );
}
