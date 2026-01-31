import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Target,
  Layers,
  Shield,
  FolderGit2,
  Code2,
  Database,
  Bug,
  FileCheck,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Target,
  Layers,
  Shield,
  FolderGit2,
  Code2,
  Database,
  Bug,
  FileCheck,
  RefreshCw,
};

interface SidebarProps {
  activePhase: string;
  onPhaseChange: (phaseId: string) => void;
}

export function Sidebar({ activePhase, onPhaseChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-12 w-32 h-32 bg-phase-6/10 rounded-full blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-sidebar-border/50 px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg glow-pulse">
              <Code2 className="h-5 w-5 text-primary-foreground" />
              <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-phase-6 shadow-md">
                <Zap className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">AI Method</span>
              <p className="text-[10px] text-muted-foreground">v1.0 • Cursor Guide</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {/* Section: Setup */}
          <div className="mb-3">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="h-px flex-1 bg-gradient-to-r from-phase-4/50 to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-phase-4">Setup</span>
              <div className="h-px flex-1 bg-gradient-to-l from-phase-4/50 to-transparent" />
            </div>
          </div>

          {phases.filter(p => p.isSetup || p.id === 'intro').map((phase) => {
            const Icon = iconMap[phase.icon];
            const isActive = activePhase === phase.id;

            return (
              <button
                key={phase.id}
                onClick={() => onPhaseChange(phase.id)}
                className={cn(
                  "group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-sidebar-accent to-sidebar-accent/50 text-sidebar-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ backgroundColor: `hsl(var(${phase.colorVar}))` }}
                  />
                )}

                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300",
                    isActive 
                      ? "shadow-md" 
                      : "bg-muted/50 group-hover:scale-110"
                  )}
                  style={
                    isActive
                      ? { 
                          backgroundColor: `hsl(var(${phase.colorVar}) / 0.2)`,
                          color: `hsl(var(${phase.colorVar}))`,
                          boxShadow: `0 0 20px hsl(var(${phase.colorVar}) / 0.3)`
                        }
                      : undefined
                  }
                >
                  {phase.number ?? <Icon className="h-4 w-4" />}
                </span>
                <span className={cn(
                  "truncate font-medium transition-colors",
                  isActive && "text-foreground"
                )}>
                  {phase.shortTitle}
                </span>
              </button>
            );
          })}

          {/* Section: Loop */}
          <div className="my-3">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary flex items-center gap-1">
                <RefreshCw className="h-3 w-3" />
                Loop
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
            </div>
          </div>

          {phases.filter(p => p.isIterative).map((phase) => {
            const Icon = iconMap[phase.icon];
            const isActive = activePhase === phase.id;

            return (
              <button
                key={phase.id}
                onClick={() => onPhaseChange(phase.id)}
                className={cn(
                  "group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-sidebar-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-sidebar-foreground"
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ backgroundColor: `hsl(var(${phase.colorVar}))` }}
                  />
                )}

                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300",
                    isActive 
                      ? "shadow-md" 
                      : "bg-primary/10 group-hover:scale-110"
                  )}
                  style={
                    isActive
                      ? { 
                          backgroundColor: `hsl(var(${phase.colorVar}) / 0.2)`,
                          color: `hsl(var(${phase.colorVar}))`,
                          boxShadow: `0 0 20px hsl(var(${phase.colorVar}) / 0.3)`
                        }
                      : { color: `hsl(var(${phase.colorVar}))` }
                  }
                >
                  {phase.number ?? <Icon className="h-4 w-4" />}
                </span>
                <span className={cn(
                  "truncate font-medium transition-colors",
                  isActive && "text-foreground"
                )}>
                  {phase.shortTitle}
                </span>
              </button>
            );
          })}

          {/* Cycle View */}
          <button
            onClick={() => onPhaseChange("cycle")}
            className={cn(
              "group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all duration-300 mt-2",
              activePhase === "cycle"
                ? "bg-gradient-to-r from-primary/20 to-phase-6/20 text-sidebar-accent-foreground shadow-lg"
                : "text-muted-foreground hover:bg-muted/30 hover:text-sidebar-foreground"
            )}
          >
            {activePhase === "cycle" && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b from-primary to-phase-6" />
            )}
            <span className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
              activePhase === "cycle" 
                ? "bg-primary/20 shadow-md" 
                : "bg-muted/50 group-hover:scale-110"
            )}>
              <RefreshCw className={cn(
                "h-4 w-4",
                activePhase === "cycle" ? "text-primary" : "text-muted-foreground"
              )} />
            </span>
            <span className={cn(
              "truncate font-medium transition-colors",
              activePhase === "cycle" && "text-foreground"
            )}>
              Ciclo Completo
            </span>
          </button>
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border/50 p-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-phase-6/10 p-4">
            <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/20 rounded-full blur-2xl" />
            <div className="relative flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-medium text-foreground">Metodo AI Strutturato</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  Impara a guidare l'AI con controllo e consapevolezza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}