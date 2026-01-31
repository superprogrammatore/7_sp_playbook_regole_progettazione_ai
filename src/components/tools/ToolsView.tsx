import { 
  Code2, 
  Wind, 
  Bot, 
  Heart, 
  RefreshCw, 
  Zap, 
  Paintbrush, 
  Layers,
  Github,
  Sparkles,
  ExternalLink,
  Wrench,
  LucideIcon,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  colorVar: string;
  hasContent?: boolean;
}

const tools: Tool[] = [
  {
    id: "cursor",
    name: "Cursor",
    icon: Code2,
    description: "AI-first code editor basato su VS Code",
    colorVar: "--primary",
    hasContent: true,
  },
  {
    id: "windsurf",
    name: "Windsurf",
    icon: Wind,
    description: "AI coding assistant con flow agents",
    colorVar: "--phase-6",
    hasContent: true,
  },
  {
    id: "claude-code",
    name: "Claude Code",
    icon: Bot,
    description: "Coding assistant by Anthropic",
    colorVar: "--phase-7",
    hasContent: true,
  },
  {
    id: "lovable",
    name: "Lovable",
    icon: Heart,
    description: "Full-stack app builder con AI",
    colorVar: "--phase-1",
    hasContent: true,
  },
  {
    id: "replit",
    name: "Replit",
    icon: RefreshCw,
    description: "Cloud IDE con AI integrata",
    colorVar: "--phase-2",
    hasContent: true,
  },
  {
    id: "bolt",
    name: "Bolt.new",
    icon: Zap,
    description: "Instant full-stack web apps",
    colorVar: "--phase-3",
  },
  {
    id: "v0",
    name: "V0.dev",
    icon: Sparkles,
    description: "UI generation by Vercel",
    colorVar: "--phase-4",
  },
  {
    id: "base44",
    name: "Base44",
    icon: Layers,
    description: "AI-powered app development",
    colorVar: "--phase-5",
  },
  {
    id: "figma",
    name: "Figma",
    icon: Paintbrush,
    description: "Design collaborativo con AI features",
    colorVar: "--phase-8",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    icon: Github,
    description: "AI pair programmer by GitHub",
    colorVar: "--phase-cycle",
  },
];

interface ToolsViewProps {
  onToolSelect?: (toolId: string) => void;
}

export function ToolsView({ onToolSelect }: ToolsViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-phase-6/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-phase-7/8 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Wrench className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Strumenti Essenziali</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">TOP CODING TOOLS</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I migliori strumenti AI per lo sviluppo software. Ogni tool ha le sue peculiarità 
            e casi d'uso ideali. Scopri quale fa al caso tuo.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
              <span className="text-2xl font-bold text-primary">{tools.length}</span>
              <span className="text-sm text-muted-foreground">Tools</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
              <Sparkles className="h-4 w-4 text-phase-7" />
              <span className="text-sm text-muted-foreground">Tutti AI-Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const isClickable = tool.hasContent && onToolSelect;
          
          return (
            <div
              key={tool.id}
              onClick={() => isClickable && onToolSelect(tool.id)}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 transition-all duration-500",
                "hover:border-transparent hover:-translate-y-1 hover:shadow-xl",
                "animate-fade-in",
                isClickable && "cursor-pointer"
              )}
              style={{ 
                animationDelay: `${index * 50}ms`,
                ["--tool-color" as string]: `hsl(var(${tool.colorVar}))`
              }}
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, hsl(var(${tool.colorVar}) / 0.15) 0%, transparent 70%)`
                }}
              />

              {/* Border Gradient on Hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${tool.colorVar}) / 0.3), transparent 50%, hsl(var(${tool.colorVar}) / 0.1))`,
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div 
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                    "group-hover:scale-110 group-hover:shadow-lg"
                  )}
                  style={{
                    backgroundColor: `hsl(var(${tool.colorVar}) / 0.15)`,
                    boxShadow: `0 0 0 0 hsl(var(${tool.colorVar}) / 0)`,
                  }}
                >
                  <Icon 
                    className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: `hsl(var(${tool.colorVar}))` }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    {tool.hasContent ? (
                      <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    ) : (
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Status Badge */}
                  {tool.hasContent ? (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <div 
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                      <span className="text-xs text-primary font-medium">Guida disponibile</span>
                    </div>
                  ) : (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border/50">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: `hsl(var(${tool.colorVar}))` }}
                      />
                      <span className="text-xs text-muted-foreground">Contenuto in arrivo</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative Corner */}
              <div 
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: `hsl(var(${tool.colorVar}))` }}
              />
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="relative overflow-hidden rounded-xl border border-border/30 bg-muted/30 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Contenuti in sviluppo</h4>
            <p className="text-sm text-muted-foreground">
              Le schede dettagliate per ogni tool verranno aggiunte progressivamente. 
              Ogni scheda includerà guide, best practices e casi d'uso specifici.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
