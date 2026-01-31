import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";
import { ArrowRight, RotateCw, Sparkles, Zap, ArrowDown } from "lucide-react";

interface CycleViewProps {
  onPhaseChange: (phaseId: string) => void;
}

export function CycleView({ onPhaseChange }: CycleViewProps) {
  const setupPhases = phases.filter((p) => p.isSetup);
  const iterativePhases = phases.filter((p) => p.isIterative);

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8">
        <div className="hero-gradient absolute inset-0" />
        <div className="mesh-background absolute inset-0" />
        
        <div className="absolute top-8 right-8 w-24 h-24 bg-primary/20 rounded-full blur-3xl float" />
        
        <div className="relative flex items-center gap-6">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg glow-pulse">
            <RotateCw className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Il <span className="text-gradient">Ciclo di Lavoro</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Fasi 1–4 una volta, fasi 5–8 ripetute per ogni feature
            </p>
          </div>
        </div>
      </div>

      {/* Visual Cycle */}
      <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative p-8">
          {/* Setup Section */}
          <div className="mb-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="badge-setup">
                <Zap className="h-3 w-3" />
                SETUP INIZIALE
              </div>
              <span className="text-sm text-muted-foreground">
                — Eseguito una sola volta all'inizio del progetto
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {setupPhases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => onPhaseChange(phase.id)}
                  className="group relative flex items-center gap-4 rounded-xl border border-border bg-background p-5 text-left transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Hover gradient */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(135deg, hsl(var(${phase.colorVar}) / 0.1), transparent)` }}
                  />
                  
                  <span
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `hsl(var(${phase.colorVar}) / 0.15)`,
                      color: `hsl(var(${phase.colorVar}))`,
                    }}
                  >
                    {phase.number}
                  </span>
                  <div className="relative min-w-0">
                    <p className="font-semibold truncate">{phase.shortTitle}</p>
                    <p className="text-xs text-muted-foreground truncate mt-1">
                      {phase.title}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < setupPhases.length - 1 && (
                    <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted border border-border">
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center py-6">
            <div className="h-16 w-px bg-gradient-to-b from-phase-4 via-primary/50 to-primary" />
            <div className="flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 p-2 -mt-1">
              <ArrowDown className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Iterative Section */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="badge-loop">
                <RotateCw className="h-3 w-3" />
                CICLO ITERATIVO
              </div>
              <span className="text-sm text-muted-foreground">
                — Ripetuto per ogni feature del progetto
              </span>
            </div>

            <div className="relative">
              {/* Cycle indicator */}
              <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 md:flex">
                <div className="relative flex h-28 w-28 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30">
                    <RotateCw className="h-6 w-6 text-primary animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:ml-28 md:grid-cols-4">
                {iterativePhases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => onPhaseChange(phase.id)}
                    className="group relative flex items-center gap-4 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-5 text-left transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                  >
                    {/* Hover glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `linear-gradient(135deg, hsl(var(${phase.colorVar}) / 0.15), transparent)` }}
                    />
                    
                    <span
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `hsl(var(${phase.colorVar}) / 0.2)`,
                        color: `hsl(var(${phase.colorVar}))`,
                      }}
                    >
                      {phase.number}
                    </span>
                    <div className="relative min-w-0">
                      <p className="font-semibold truncate">{phase.shortTitle}</p>
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {phase.title}
                      </p>
                    </div>
                    
                    {/* Arrow connector */}
                    {index < iterativePhases.length - 1 && (
                      <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Loop back indicator */}
              <div className="mt-6 flex items-center justify-center md:justify-end md:mr-8">
                <div className="flex items-center gap-3 rounded-full bg-primary/10 border border-primary/20 px-4 py-2">
                  <span className="text-sm text-muted-foreground">Ripeti per la prossima feature</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <RotateCw className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-phase-4 to-phase-4/70 shadow-sm" />
          <span className="text-sm text-muted-foreground">
            Fase di Setup <span className="text-foreground font-medium">(una volta)</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-sm" />
          <span className="text-sm text-muted-foreground">
            Fase Iterativa <span className="text-foreground font-medium">(per ogni feature)</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <RotateCw className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Ciclo ripetibile
          </span>
        </div>
      </div>

      {/* Tip */}
      <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-phase-6/5 p-5">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Pro Tip</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Le fasi di setup (1-4) creano le fondamenta. Una volta completate, il ciclo 5-8 è il tuo "ritmo" 
              quotidiano per ogni nuova feature. Più lo ripeti, più diventa naturale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}