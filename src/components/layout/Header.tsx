import { phases, Phase } from "@/data/phases";
import { ChevronRight, Sparkles } from "lucide-react";

interface HeaderProps {
  activePhase: string;
}

export function Header({ activePhase }: HeaderProps) {
  const currentPhase = phases.find((p) => p.id === activePhase);

  return (
    <header className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="flex h-16 items-center px-6">
        <nav className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Percorso</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          <span 
            className="font-semibold"
            style={currentPhase?.colorVar ? { color: `hsl(var(${currentPhase.colorVar}))` } : undefined}
          >
            {currentPhase?.title}
          </span>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {currentPhase?.isSetup && (
            <div className="badge-setup">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-phase-4 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-phase-4"></span>
              </span>
              Fase di Setup
            </div>
          )}
          {currentPhase?.isIterative && (
            <div className="badge-loop">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Fase Iterativa
            </div>
          )}
          
          {/* Progress indicator */}
          {currentPhase?.number && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
              <span className="text-xs text-muted-foreground">Fase</span>
              <span 
                className="text-sm font-bold"
                style={{ color: `hsl(var(${currentPhase.colorVar}))` }}
              >
                {currentPhase.number}/8
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}