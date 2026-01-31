import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";
import { ArrowRight, RotateCw } from "lucide-react";

interface CycleViewProps {
  onPhaseChange: (phaseId: string) => void;
}

export function CycleView({ onPhaseChange }: CycleViewProps) {
  const setupPhases = phases.filter((p) => p.isSetup);
  const iterativePhases = phases.filter((p) => p.isIterative);

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
            <RotateCw className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Il Ciclo di Lavoro
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">
              Fasi 1–4 una volta, fasi 5–8 ripetute per ogni feature
            </p>
          </div>
        </div>
      </div>

      {/* Visual Cycle */}
      <div className="relative rounded-2xl border border-border bg-card p-8">
        {/* Setup Section */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-phase-4/20 px-3 py-1 text-sm font-medium text-phase-4">
              SETUP INIZIALE
            </span>
            <span className="text-sm text-muted-foreground">
              — Eseguito una sola volta
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {setupPhases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => onPhaseChange(phase.id)}
                className="group relative flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-left transition-all hover:border-primary/50 hover:bg-muted/50"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                  style={{
                    backgroundColor: `hsl(var(${phase.colorVar}) / 0.15)`,
                    color: `hsl(var(${phase.colorVar}))`,
                  }}
                >
                  {phase.number}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium">{phase.shortTitle}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {phase.title}
                  </p>
                </div>
                {index < setupPhases.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground md:block hidden" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="mb-8 flex items-center justify-center">
          <div className="h-12 w-px bg-gradient-to-b from-phase-4 to-primary" />
        </div>

        {/* Iterative Section */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
              CICLO ITERATIVO
            </span>
            <span className="text-sm text-muted-foreground">
              — Ripetuto per ogni feature
            </span>
          </div>

          <div className="relative">
            {/* Cycle indicator */}
            <div className="absolute -left-2 top-1/2 hidden -translate-y-1/2 md:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-primary/30">
                <RotateCw className="h-8 w-8 animate-pulse text-primary/50" />
              </div>
            </div>

            <div className="grid gap-3 md:ml-24 md:grid-cols-4">
              {iterativePhases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => onPhaseChange(phase.id)}
                  className="group relative flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/10"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                    style={{
                      backgroundColor: `hsl(var(${phase.colorVar}) / 0.15)`,
                      color: `hsl(var(${phase.colorVar}))`,
                    }}
                  >
                    {phase.number}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{phase.shortTitle}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {phase.title}
                    </p>
                  </div>
                  {index < iterativePhases.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-primary/50 md:block" />
                  )}
                </button>
              ))}
            </div>

            {/* Loop back arrow */}
            <div className="mt-4 flex items-center justify-end md:mr-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Ripeti per la prossima feature</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <RotateCw className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-phase-4" />
          <span className="text-sm text-muted-foreground">
            Fase di Setup (una volta)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">
            Fase Iterativa (per feature)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCw className="h-3 w-3 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Ciclo ripetibile</span>
        </div>
      </div>
    </div>
  );
}
