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
  Code2,
  Layers,
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
  onCategorySelect: (categoryId: string) => void;
}

export function PromptsView({ onCategorySelect }: PromptsViewProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const totalPrompts = promptCategories.reduce((acc, cat) => acc + cat.prompts.length, 0);
  const filledCategories = promptCategories.filter(c => c.prompts.length > 0).length;

  return (
    <div className="animate-fade-in space-y-10">
      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden rounded-3xl border border-border/30">
        {/* Animated mesh background */}
        <div className="absolute inset-0 mesh-background opacity-50" />
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating orbs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl float" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-phase-6/15 rounded-full blur-3xl float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-phase-7/10 rounded-full blur-3xl float" style={{ animationDelay: '-1.5s' }} />

        <div className="relative p-8 md:p-10">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">{totalPrompts} prompt pronti all'uso</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 rounded-2xl blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-2xl glow-box">
                <Terminal className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                <span className="text-gradient">Prompt</span> Operativi
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                La tua libreria completa di prompt professionali. Ogni prompt è stato progettato 
                per guidarti passo dopo passo, dal problema alla soluzione.
              </p>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="glass-card rounded-xl p-4 border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-1/15">
                  <FolderOpen className="h-5 w-5" style={{ color: 'hsl(var(--phase-1))' }} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{promptCategories.length}</p>
                  <p className="text-xs text-muted-foreground">Categorie</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-4 border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalPrompts}</p>
                  <p className="text-xs text-muted-foreground">Prompt totali</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-4 border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15">
                  <CheckCircle className="h-5 w-5" style={{ color: 'hsl(var(--phase-4))' }} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{filledCategories}</p>
                  <p className="text-xs text-muted-foreground">Completate</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-4 border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-6/15">
                  <Code2 className="h-5 w-5" style={{ color: 'hsl(var(--phase-6))' }} />
                </div>
                <div>
                  <p className="text-2xl font-bold">∞</p>
                  <p className="text-xs text-muted-foreground">Riutilizzabili</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-phase-6/20 border border-primary/20">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Esplora le Categorie</h2>
              <p className="text-sm text-muted-foreground">Clicca su una categoria per vedere i prompt</p>
            </div>
          </div>
        </div>

        {/* Categories Grid - Enhanced */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {promptCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            const isHovered = hoveredCategory === category.id;
            const hasPrompts = category.prompts.length > 0;

            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={cn(
                  "group relative flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-500",
                  "bg-gradient-to-br from-card to-card/50",
                  hasPrompts 
                    ? "border-border/50 hover:border-primary/40" 
                    : "border-border/30 opacity-60 hover:opacity-80",
                  isHovered && hasPrompts && "shadow-xl -translate-y-1"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Animated glow background */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-all duration-500",
                    isHovered && hasPrompts ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    background: `
                      radial-gradient(ellipse at 20% 20%, hsl(var(${category.colorVar}) / 0.15), transparent 50%),
                      radial-gradient(ellipse at 80% 80%, hsl(var(${category.colorVar}) / 0.08), transparent 50%)
                    `,
                  }}
                />

                {/* Shimmer effect on hover */}
                {isHovered && hasPrompts && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 shimmer" />
                  </div>
                )}

                {/* Number badge with enhanced styling */}
                <div className="relative">
                  <div
                    className={cn(
                      "absolute inset-0 rounded-xl blur-md transition-all duration-500",
                      isHovered && hasPrompts ? "opacity-60" : "opacity-0"
                    )}
                    style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
                  />
                  <div
                    className={cn(
                      "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-bold text-xl transition-all duration-500",
                      isHovered && hasPrompts && "scale-110 rotate-3"
                    )}
                    style={{
                      background: `linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.25), hsl(var(${category.colorVar}) / 0.1))`,
                      color: `hsl(var(${category.colorVar}))`,
                      border: `1px solid hsl(var(${category.colorVar}) / 0.3)`,
                    }}
                  >
                    {category.number}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className={cn(
                      "font-semibold text-lg transition-colors",
                      isHovered && hasPrompts ? "text-foreground" : "text-foreground/90"
                    )}>
                      {category.title}
                    </h3>
                    {Icon && (
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-all duration-300",
                          isHovered && hasPrompts ? "opacity-100 scale-110" : "opacity-40"
                        )}
                        style={{ color: `hsl(var(${category.colorVar}))` }}
                      />
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Footer with prompt count and arrow */}
                  <div className="flex items-center justify-between pt-2">
                    {hasPrompts ? (
                      <span 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `hsl(var(${category.colorVar}) / 0.1)`,
                          color: `hsl(var(${category.colorVar}))`
                        }}
                      >
                        <Terminal className="h-3 w-3" />
                        {category.prompts.length} prompt
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground/50 italic flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                        In arrivo
                      </span>
                    )}
                    
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300",
                        isHovered && hasPrompts 
                          ? "bg-primary/20 translate-x-1" 
                          : "bg-muted/30"
                      )}
                    >
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-all duration-300",
                          isHovered && hasPrompts ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden rounded-2xl gradient-border">
        <div className="relative bg-card p-8 rounded-2xl">
          <div className="absolute inset-0 mesh-background opacity-30" />
          
          <div className="relative text-center space-y-4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-phase-7/20 border border-primary/20 mx-auto">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Prompt sempre aggiornati</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Ogni prompt è progettato per essere copiato direttamente in Cursor Chat (CMD+L) 
              e guidarti passo dopo passo verso la soluzione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
