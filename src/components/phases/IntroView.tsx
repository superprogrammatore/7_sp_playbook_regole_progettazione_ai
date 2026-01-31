import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Target,
  Code2,
  Rocket,
} from "lucide-react";

interface IntroViewProps {
  onPhaseChange: (phaseId: string) => void;
}

export function IntroView({ onPhaseChange }: IntroViewProps) {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card">
        {/* Background effects */}
        <div className="hero-gradient absolute inset-0" />
        <div className="mesh-background absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        
        {/* Floating orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-phase-6/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-phase-7/20 rounded-full blur-2xl float" style={{ animationDelay: '4s' }} />

        <div className="relative p-8 md:p-12">
          <div className="flex items-center gap-2 text-primary">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Metodo Strutturato</span>
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Impara a guidare l'
            <span className="text-gradient">AI</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Un approccio disciplinato per lavorare con AI coding assistants. 
            Non impari un linguaggio, ma un <span className="text-foreground font-medium">processo ripetibile</span> e <span className="text-foreground font-medium">professionale</span>.
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { icon: Target, label: "8 Fasi", desc: "strutturate" },
              { icon: Code2, label: "24+ Prompt", desc: "pronti all'uso" },
              { icon: Rocket, label: "MVP", desc: "in controllo" },
            ].map((stat, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 rounded-xl bg-background/50 border border-border/50 px-4 py-3 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* What is this method */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
          
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Cos'è questo metodo</h2>
            </div>
            <div className="mt-5 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Un framework mentale per guidare l'AI in modo consapevole, strutturato e controllato.
              </p>
              <ul className="space-y-3">
                {[
                  "Processo ripetibile per ogni progetto",
                  "Focus sulla qualità, non sulla velocità",
                  "Comprensione prima dell'implementazione",
                  "Controllo su ogni decisione automatica",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm group/item">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5 transition-colors group-hover/item:bg-primary/20">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why method matters */}
        <div className="group relative overflow-hidden rounded-2xl border border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 transition-all duration-300 hover:border-destructive/50 hover:shadow-lg hover:shadow-destructive/5">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-destructive/5 rounded-full blur-2xl transition-all duration-500 group-hover:bg-destructive/10" />
          
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-destructive/20 to-destructive/10 border border-destructive/20">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="text-xl font-bold">Senza metodo...</h2>
            </div>
            <div className="mt-5 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Usare l'AI senza disciplina porta a problemi strutturali che si accumulano nel tempo.
              </p>
              <ul className="space-y-3">
                {[
                  "Codice fragile e difficile da mantenere",
                  "Decisioni non comprese, solo copiate",
                  "Debito tecnico che cresce in silenzio",
                  "Dipendenza dall'AI senza vera crescita",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm group/item">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 mt-0.5 transition-colors group-hover/item:bg-destructive/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    </div>
                    <span className="text-destructive/80 group-hover/item:text-destructive transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-phase-6/5" />
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold">Inizia il percorso</h3>
          </div>
          <p className="text-muted-foreground">
            Esplora le fasi del metodo per costruire un processo di lavoro solido.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => onPhaseChange("phase-1")}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <span>Inizia con Fase 1</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onPhaseChange("cycle")}
              className="group inline-flex items-center gap-3 rounded-xl border border-border bg-background/50 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-muted hover:border-primary/30 hover:-translate-y-0.5"
            >
              <span>Vedi il ciclo completo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Phase Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-muted-foreground">Le 8 Fasi in sintesi</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {phases.filter(p => p.number).map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => onPhaseChange(phase.id)}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 text-left transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(135deg, hsl(var(${phase.colorVar}) / 0.1), transparent)` }}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `hsl(var(${phase.colorVar}) / 0.15)`,
                    color: `hsl(var(${phase.colorVar}))`,
                  }}
                >
                  {phase.number}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate">{phase.shortTitle}</p>
                  <p className="text-xs text-muted-foreground truncate">{phase.isSetup ? 'Setup' : 'Loop'}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}