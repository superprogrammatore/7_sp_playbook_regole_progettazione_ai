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
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-sidebar-border px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">AI Method</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {phases.map((phase) => {
            const Icon = iconMap[phase.icon];
            const isActive = activePhase === phase.id;

            return (
              <button
                key={phase.id}
                onClick={() => onPhaseChange(phase.id)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}
                  style={
                    isActive
                      ? { backgroundColor: `hsl(var(${phase.colorVar}))` }
                      : undefined
                  }
                >
                  {phase.number ?? <Icon className="h-3.5 w-3.5" />}
                </span>
                <span className="truncate">{phase.shortTitle}</span>
                {phase.isSetup && (
                  <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    SETUP
                  </span>
                )}
                {phase.isIterative && (
                  <span className="ml-auto rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    LOOP
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">
              Metodo strutturato per lavorare con AI coding assistants
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
