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
  ChevronUp,
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
  const [expanded, setExpanded] = useState(index === 0); // First one expanded by default

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
          ? "border-border bg-card shadow-xl" 
          : "border-border/50 bg-card/50 hover:border-border hover:bg-card/80"
      )}
    >
      {/* Glow effect when expanded */}
      {expanded && (
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ 
            background: `radial-gradient(ellipse at top left, hsl(var(${colorVar}) / 0.15), transparent 50%)`
          }}
        />
      )}

      {/* Header - Always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div 
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold text-lg transition-all duration-300",
              expanded && "scale-110 shadow-lg"
            )}
            style={{ 
              backgroundColor: `hsl(var(${colorVar}) / ${expanded ? 0.25 : 0.15})`,
              color: `hsl(var(${colorVar}))`,
              boxShadow: expanded ? `0 0 30px hsl(var(${colorVar}) / 0.3)` : 'none'
            }}
          >
            {prompt.id}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "font-semibold transition-colors",
              expanded ? "text-foreground" : "text-foreground/80"
            )}>
              {prompt.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">{prompt.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              copied 
                ? "bg-green-500/20 text-green-400 shadow-lg" 
                : "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-md"
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
          <div 
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300",
              expanded ? "bg-primary/20 rotate-180" : "bg-muted/50"
            )}
          >
            <ChevronDown className={cn(
              "h-4 w-4 transition-colors",
              expanded ? "text-primary" : "text-muted-foreground"
            )} />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-5 pb-5 space-y-5">
          {/* Use Case & Expected Output */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* When to use */}
            <div 
              className="rounded-xl p-4 border border-border/50"
              style={{ backgroundColor: `hsl(var(${colorVar}) / 0.05)` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `hsl(var(${colorVar}) / 0.15)` }}
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
            <div className="rounded-xl p-4 border border-border/50 bg-muted/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15">
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted">
                  <Terminal className="h-4 w-4 text-muted-foreground" />
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
            
            <div className="relative group/code">
              <pre className="rounded-xl bg-[hsl(var(--background))] border border-border/50 p-5 text-sm font-mono whitespace-pre-wrap overflow-x-auto shadow-inner">
                <code className="text-foreground/90 leading-relaxed">{prompt.content}</code>
              </pre>
              
              {/* Decorative corner */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 opacity-50"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, hsl(var(${colorVar}) / 0.1) 50%)`
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
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Torna alle categorie
      </button>

      {/* Category Header */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 p-6"
        style={{ background: `linear-gradient(135deg, hsl(var(${category.colorVar}) / 0.1), hsl(var(${category.colorVar}) / 0.02))` }}
      >
        {/* Background glow */}
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: `hsl(var(${category.colorVar}))` }}
        />

        <div className="relative flex items-start gap-4">
          <div 
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-bold text-2xl"
            style={{ 
              backgroundColor: `hsl(var(${category.colorVar}) / 0.2)`,
              color: `hsl(var(${category.colorVar}))`
            }}
          >
            {category.number}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{category.title}</h1>
              {Icon && (
                <Icon 
                  className="h-5 w-5" 
                  style={{ color: `hsl(var(${category.colorVar}))` }}
                />
              )}
            </div>
            <p className="mt-1 text-muted-foreground">{category.description}</p>
            <div className="mt-3 flex items-center gap-2">
              <span 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `hsl(var(${category.colorVar}) / 0.15)`,
                  color: `hsl(var(${category.colorVar}))`
                }}
              >
                <Terminal className="h-3 w-3" />
                {category.prompts.length} prompt disponibili
              </span>
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
        <div className="rounded-xl border border-dashed border-border/50 bg-muted/20 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div 
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: `hsl(var(${category.colorVar}) / 0.1)` }}
            >
              <Terminal 
                className="h-8 w-8" 
                style={{ color: `hsl(var(${category.colorVar}))` }}
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Nessun prompt ancora</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            I prompt per questa categoria verranno aggiunti prossimamente.
          </p>
        </div>
      )}
    </div>
  );
}
