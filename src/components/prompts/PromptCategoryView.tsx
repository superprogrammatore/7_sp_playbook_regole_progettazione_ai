import { useState } from "react";
import { promptCategories, Prompt } from "@/data/promptCategories";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Copy,
  Check,
  Terminal,
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
  Lightbulb,
  Target,
  ChevronDown,
  Code2,
} from "lucide-react";
import { toast } from "sonner";

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

interface PromptCategoryViewProps {
  categoryId: string;
  onBack: () => void;
}

function PromptCard({ prompt, colorVar, index }: { prompt: Prompt; colorVar: string; index: number }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(index === 0);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      toast.success("Prompt copiato negli appunti!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Errore durante la copia");
    }
  };

  return (
    <div 
      className={cn(
        "group relative rounded-2xl border overflow-hidden transition-all duration-500",
        expanded 
          ? "border-border bg-card shadow-2xl" 
          : "border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/60"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Animated glow effect when expanded */}
      {expanded && (
        <>
          <div 
            className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-500"
            style={{ 
              background: `
                radial-gradient(ellipse at 0% 0%, hsl(var(${colorVar}) / 0.15), transparent 50%),
                radial-gradient(ellipse at 100% 100%, hsl(var(${colorVar}) / 0.08), transparent 50%)
              `
            }}
          />
          <div 
            className="absolute top-0 left-0 right-0 h-1 opacity-80"
            style={{ 
              background: `linear-gradient(90deg, hsl(var(${colorVar})), hsl(var(${colorVar}) / 0.3))`
            }}
          />
        </>
      )}

      {/* Header - Always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <div className="flex items-center gap-4">
          {/* Number badge with glow */}
          <div className="relative">
            {expanded && (
              <div 
                className="absolute inset-0 rounded-xl blur-lg opacity-50 animate-pulse"
                style={{ backgroundColor: `hsl(var(${colorVar}))` }}
              />
            )}
            <div 
              className={cn(
                "relative flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl font-bold text-lg md:text-xl transition-all duration-500",
                expanded && "scale-110 rotate-3"
              )}
              style={{ 
                background: expanded 
                  ? `linear-gradient(135deg, hsl(var(${colorVar}) / 0.3), hsl(var(${colorVar}) / 0.15))`
                  : `linear-gradient(135deg, hsl(var(${colorVar}) / 0.2), hsl(var(${colorVar}) / 0.08))`,
                color: `hsl(var(${colorVar}))`,
                border: `1px solid hsl(var(${colorVar}) / ${expanded ? 0.4 : 0.2})`,
                boxShadow: expanded ? `0 8px 32px hsl(var(${colorVar}) / 0.2)` : 'none'
              }}
            >
              {prompt.id}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "font-semibold text-base md:text-lg transition-colors leading-tight",
              expanded ? "text-foreground" : "text-foreground/80"
            )}>
              {prompt.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1 md:line-clamp-none">
              {prompt.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-3 shrink-0 ml-3 md:ml-4">
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              copied 
                ? "bg-green-500/20 text-green-400 shadow-lg shadow-green-500/20" 
                : "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10"
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span className="hidden sm:inline">Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="hidden sm:inline">Copia</span>
              </>
            )}
          </button>
          
          {/* Expand indicator */}
          <div 
            className={cn(
              "flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl transition-all duration-500",
              expanded 
                ? "bg-primary/20 rotate-180" 
                : "bg-muted/30 group-hover:bg-muted/50"
            )}
          >
            <ChevronDown className={cn(
              "h-4 w-4 md:h-5 md:w-5 transition-colors",
              expanded ? "text-primary" : "text-muted-foreground"
            )} />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        expanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-5 md:px-6 pb-6 space-y-5">
          {/* Use Case & Expected Output Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* When to use */}
            <div 
              className="rounded-xl p-4 md:p-5 border transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: `hsl(var(${colorVar}) / 0.05)`,
                borderColor: `hsl(var(${colorVar}) / 0.15)`
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(var(${colorVar}) / 0.2), hsl(var(${colorVar}) / 0.1))`
                  }}
                >
                  <Lightbulb className="h-4 w-4" style={{ color: `hsl(var(${colorVar}))` }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: `hsl(var(${colorVar}))` }}>
                  Quando usarlo
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {prompt.useCase}
              </p>
            </div>

            {/* Expected Output */}
            <div className="rounded-xl p-4 md:p-5 border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary">Output atteso</span>
              </div>
              <ul className="space-y-2">
                {prompt.expectedOutput.map((output, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prompt Content */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-muted to-muted/50">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Prompt per Cursor Chat (CMD+L)
                </span>
              </div>
              <button
                onClick={handleCopy}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
                  copied 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copiato!" : "Copia prompt"}
              </button>
            </div>
            
            {/* Code block with enhanced styling */}
            <div className="relative group/code rounded-xl overflow-hidden">
              {/* Gradient border effect */}
              <div 
                className="absolute inset-0 p-[1px] rounded-xl"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${colorVar}) / 0.3), transparent 50%, hsl(var(${colorVar}) / 0.1))`
                }}
              >
                <div className="absolute inset-[1px] rounded-xl bg-[hsl(222,47%,8%)]" />
              </div>
              
              <pre className="relative rounded-xl bg-[hsl(222,47%,8%)] p-5 md:p-6 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {/* Line numbers decoration */}
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl opacity-50" 
                  style={{ backgroundColor: `hsl(var(${colorVar}))` }} 
                />
                <code className="text-foreground/90 leading-relaxed block pl-4">{prompt.content}</code>
              </pre>
              
              {/* Corner decoration */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-30 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, hsl(var(${colorVar}) / 0.15) 50%)`
                }}
              />
              
              {/* Hover glow */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover/code:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 40px hsl(var(${colorVar}) / 0.05)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PromptCategoryView({ categoryId, onBack }: PromptCategoryViewProps) {
  const category = promptCategories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Categoria non trovata</p>
        <button onClick={onBack} className="mt-4 text-primary hover:underline">
          Torna indietro
        </button>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Back button with enhanced styling */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 px-3 py-2 -ml-3 rounded-lg hover:bg-muted/30"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        <span>Torna alle categorie</span>
      </button>

      {/* Category Header - Enhanced */}
      <div className="relative overflow-hidden rounded-2xl border border-border/30">
        {/* Background effects */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `
              linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.12), hsl(var(${category.colorVar}) / 0.02)),
              radial-gradient(ellipse at 80% 20%, hsl(var(${category.colorVar}) / 0.1), transparent 50%)
            `
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Floating orbs */}
        <div 
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-40 float"
          style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
        />
        <div 
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-20 float"
          style={{ backgroundColor: `hsl(var(${category.colorVar}))`, animationDelay: '-2s' }}
        />

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            {/* Number badge with glow */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
              />
              <div 
                className="relative flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl font-bold text-2xl md:text-3xl shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.3), hsl(var(${category.colorVar}) / 0.15))`,
                  color: `hsl(var(${category.colorVar}))`,
                  border: `2px solid hsl(var(${category.colorVar}) / 0.4)`,
                  boxShadow: `0 8px 32px hsl(var(${category.colorVar}) / 0.25)`
                }}
              >
                {category.number}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-bold">{category.title}</h1>
                {Icon && (
                  <Icon 
                    className="h-6 w-6" 
                    style={{ color: `hsl(var(${category.colorVar}))` }}
                  />
                )}
              </div>
              <p className="mt-2 text-muted-foreground text-base md:text-lg leading-relaxed">
                {category.description}
              </p>
              
              {/* Stats badges */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.2), hsl(var(${category.colorVar}) / 0.1))`,
                    color: `hsl(var(${category.colorVar}))`,
                    border: `1px solid hsl(var(${category.colorVar}) / 0.3)`
                  }}
                >
                  <Terminal className="h-4 w-4" />
                  {category.prompts.length} prompt disponibili
                </span>
                
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-muted/30 text-muted-foreground border border-border/50">
                  <Code2 className="h-4 w-4" />
                  Cursor Chat (CMD+L)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prompts List */}
      {category.prompts.length > 0 ? (
        <div className="space-y-4">
          {category.prompts.map((prompt, index) => (
            <PromptCard key={prompt.id} prompt={prompt} colorVar={category.colorVar} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border/30 bg-gradient-to-br from-muted/20 to-muted/5 p-10 text-center">
          <div className="flex justify-center mb-5">
            <div 
              className="relative"
            >
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-30"
                style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
              />
              <div 
                className="relative flex h-20 w-20 items-center justify-center rounded-full"
                style={{ 
                  background: `linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.15), hsl(var(${category.colorVar}) / 0.05))`,
                  border: `1px solid hsl(var(${category.colorVar}) / 0.2)`
                }}
              >
                <Terminal 
                  className="h-10 w-10" 
                  style={{ color: `hsl(var(${category.colorVar}))` }}
                />
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Nessun prompt ancora</h3>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            I prompt per questa categoria verranno aggiunti prossimamente. 
            Torna più tardi per scoprire i nuovi contenuti!
          </p>
        </div>
      )}
    </div>
  );
}
