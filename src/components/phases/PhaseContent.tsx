import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { Phase1Content } from "./Phase1Content";
import { Phase2Content } from "./Phase2Content";
import { Phase3Content } from "./Phase3Content";
import { Phase4Content } from "./Phase4Content";
import { Phase5Content } from "./Phase5Content";
import { Phase6Content } from "./Phase6Content";
import { Phase7Content } from "./Phase7Content";
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
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
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

interface PhaseContentProps {
  phaseId: string;
}

export function PhaseContent({ phaseId }: PhaseContentProps) {
  const phase = phases.find((p) => p.id === phaseId);

  if (!phase) return null;

  // Show custom content for Phase 1
  if (phaseId === "phase-1") {
    return <Phase1Content />;
  }

  // Show custom content for Phase 2
  if (phaseId === "phase-2") {
    return <Phase2Content />;
  }

  // Show custom content for Phase 3
  if (phaseId === "phase-3") {
    return <Phase3Content />;
  }

  // Show custom content for Phase 4
  if (phaseId === "phase-4") {
    return <Phase4Content />;
  }

  // Show custom content for Phase 5
  if (phaseId === "phase-5") {
    return <Phase5Content />;
  }

  // Show custom content for Phase 6
  if (phaseId === "phase-6") {
    return <Phase6Content />;
  }

  // Show custom content for Phase 7
  if (phaseId === "phase-7") {
    return <Phase7Content />;
  }

  const Icon = iconMap[phase.icon];

  return (
    <div className="animate-fade-in space-y-8">
      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl"
            style={{ backgroundColor: `hsl(var(${phase.colorVar}) / 0.15)` }}
          >
            {phase.number ? (
              <span
                className="text-2xl font-bold"
                style={{ color: `hsl(var(${phase.colorVar}))` }}
              >
                {phase.number}
              </span>
            ) : (
              <Icon
                className="h-7 w-7"
                style={{ color: `hsl(var(${phase.colorVar}))` }}
              />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{phase.title}</h1>
            <p className="mt-1 text-lg text-muted-foreground">
              {phase.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="grid-pattern rounded-xl border border-dashed border-border bg-card/50 p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ backgroundColor: `hsl(var(${phase.colorVar}) / 0.1)` }}
          >
            <Icon
              className="h-8 w-8"
              style={{ color: `hsl(var(${phase.colorVar}))` }}
            />
          </div>
          <h3 className="text-xl font-semibold">Contenuto in arrivo</h3>
          <p className="mt-2 max-w-md text-muted-foreground">
            Questa sezione conterrà prompt, esempi pratici e linee guida
            operative per la fase "{phase.title.toLowerCase()}".
          </p>
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="phase-card group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-muted p-2.5">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Teoria</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Concetti chiave e principi fondamentali
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="phase-card group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-muted p-2.5">
              <Code2 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Prompt Template</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Modelli di prompt pronti all'uso
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="phase-card group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-muted p-2.5">
              <Target className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Checklist</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Punti di controllo per questa fase
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        <div className="phase-card group cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-muted p-2.5">
              <FileCheck className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Esempi</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Casi pratici e applicazioni reali
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
