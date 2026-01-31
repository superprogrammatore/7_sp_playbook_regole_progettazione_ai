import { phases, Phase } from "@/data/phases";
import { ChevronRight } from "lucide-react";

interface HeaderProps {
  activePhase: string;
}

export function Header({ activePhase }: HeaderProps) {
  const currentPhase = phases.find((p) => p.id === activePhase);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center px-6">
        <nav className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Percorso</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{currentPhase?.title}</span>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2">
            {currentPhase?.isSetup && (
              <span className="rounded-full bg-phase-4/20 px-3 py-1 text-xs font-medium text-phase-4">
                Fase di Setup
              </span>
            )}
            {currentPhase?.isIterative && (
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                Fase Iterativa
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
