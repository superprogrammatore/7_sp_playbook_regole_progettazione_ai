import { useState } from "react";
import { promptCategories, PromptCategory, Prompt } from "@/data/promptCategories";
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

function PromptCard({ prompt, colorVar }: { prompt: Prompt; colorVar: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
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
    <div className="group relative rounded-xl border border-border/50 bg-card/50 overflow-hidden transition-all duration-300 hover:border-border hover:shadow-lg">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 border-b border-border/50"
        style={{ backgroundColor: `hsl(var(${colorVar}) / 0.05)` }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm"
            style={{ 
              backgroundColor: `hsl(var(${colorVar}) / 0.15)`,
              color: `hsl(var(${colorVar}))`
            }}
          >
            {prompt.id}
          </div>
          <div>
            <h3 className="font-semibold text-sm">{prompt.title}</h3>
            <p className="text-xs text-muted-foreground">{prompt.description}</p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
            copied 
              ? "bg-green-500/20 text-green-500" 
              : "bg-primary/10 text-primary hover:bg-primary/20"
          )}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copiato!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copia prompt
            </>
          )}
        </button>
      </div>

      {/* Prompt content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Cursor Chat (CMD+L)
          </span>
        </div>
        <pre className="relative rounded-lg bg-muted/50 p-4 text-sm font-mono whitespace-pre-wrap overflow-x-auto border border-border/30">
          <code className="text-foreground/90">{prompt.content}</code>
        </pre>
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
          {category.prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} colorVar={category.colorVar} />
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
