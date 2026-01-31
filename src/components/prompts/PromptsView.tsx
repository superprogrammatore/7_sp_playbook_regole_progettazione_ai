import { useState } from "react";
import { promptCategories } from "@/data/promptCategories";
import { cn } from "@/lib/utils";
import {
  Landmark,
  Globe,
  Smartphone,
  Zap,
  Bug,
  Search,
  Database,
  Plug,
  Shield,
  Rocket,
  FileText,
  Link,
  GitBranch,
  CheckCircle,
  Palette,
  Sparkles,
  ChevronRight,
  Terminal,
  FolderOpen,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Landmark,
  Globe,
  Smartphone,
  Zap,
  Bug,
  Search,
  Database,
  Plug,
  Shield,
  Rocket,
  FileText,
  Link,
  GitBranch,
  CheckCircle,
  Palette,
  Sparkles,
};

interface PromptsViewProps {
  onCategorySelect?: (categoryId: string) => void;
}

export function PromptsView({ onCategorySelect }: PromptsViewProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-background to-phase-6/5 p-8">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-phase-6/10 rounded-full blur-3xl" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
              <Terminal className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Prompt Operativi</h1>
              <p className="text-muted-foreground">Libreria completa di prompt pronti all'uso</p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-2xl">
            Una raccolta strutturata di prompt testuali completi, organizzati per categoria. 
            Ogni prompt è pronto per essere copiato e incollato direttamente in Cursor.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <FolderOpen className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{promptCategories.length}</p>
                <p className="text-xs text-muted-foreground">Categorie</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-phase-6/10">
                <Terminal className="h-4 w-4 text-phase-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {promptCategories.reduce((acc, cat) => acc + cat.prompts.length, 0)}
                </p>
                <p className="text-xs text-muted-foreground">Prompt totali</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FolderOpen className="h-5 w-5 text-primary" />
          Categorie
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {promptCategories.map((category) => {
            const Icon = iconMap[category.icon];
            const isHovered = hoveredCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect?.(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={cn(
                  "group relative flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 text-left transition-all duration-300",
                  "hover:border-border hover:bg-card hover:shadow-lg",
                  isHovered && "scale-[1.02]"
                )}
              >
                {/* Glow effect on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
                    isHovered && "opacity-100"
                  )}
                  style={{
                    background: `radial-gradient(circle at 30% 50%, hsl(var(${category.colorVar}) / 0.1), transparent 70%)`,
                  }}
                />

                {/* Number badge */}
                <div
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold text-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `hsl(var(${category.colorVar}) / 0.15)`,
                    color: `hsl(var(${category.colorVar}))`,
                  }}
                >
                  {category.number}
                </div>

                {/* Content */}
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold truncate">{category.title}</h3>
                    {Icon && (
                      <Icon
                        className="h-4 w-4 shrink-0 opacity-50"
                        style={{ color: `hsl(var(${category.colorVar}))` }}
                      />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Prompt count */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {category.prompts.length === 0 ? (
                        <span className="text-muted-foreground/50 italic">Nessun prompt ancora</span>
                      ) : (
                        `${category.prompts.length} prompt`
                      )}
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-all duration-300",
                        isHovered && "translate-x-1 text-foreground"
                      )}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty state message */}
      <div className="rounded-xl border border-dashed border-border/50 bg-muted/20 p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Terminal className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">Struttura pronta</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Le 16 categorie sono state create. I prompt verranno aggiunti progressivamente 
          mantenendo l'organizzazione originale.
        </p>
      </div>
    </div>
  );
}
