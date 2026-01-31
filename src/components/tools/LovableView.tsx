import { 
  ArrowLeft,
  Heart, 
  Brain,
  Zap,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Trophy,
  Target,
  RefreshCw,
  FileCode,
  Lock,
  Users,
  Clock,
  Star,
  Cpu,
  Eye,
  Github,
  ExternalLink,
  Rocket,
  MousePointer,
  Shield,
  CreditCard,
  TrendingUp,
  Package,
  Palette,
  Server,
  UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LovableViewProps {
  onBack: () => void;
}

export function LovableView({ onBack }: LovableViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium">Torna ai Tools</span>
      </button>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-1/30 bg-gradient-to-br from-card via-card/95 to-phase-1/5 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-phase-1/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-phase-4/10 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative">
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-1/15 border border-phase-1/40 shadow-lg shadow-phase-1/10">
              <Rocket className="h-4 w-4 text-phase-1" />
              <span className="text-sm font-bold text-phase-1">GPT-to-Software</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-4/15 border border-phase-4/30">
              <Database className="h-3.5 w-3.5 text-phase-4" />
              <span className="text-xs font-semibold text-phase-4">Supabase Native</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30">
              <Layers className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Full-Stack</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-3/15 border border-phase-3/30">
              <Github className="h-3.5 w-3.5 text-phase-3" />
              <span className="text-xs font-semibold text-phase-3">GitHub Sync</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="text-gradient-phase-1">Lovable</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-phase-1/20 border border-phase-1/30 shadow-lg shadow-phase-1/20">
              <Heart className="h-8 w-8 text-phase-1" />
            </div>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Da testo a <span className="text-phase-1 font-semibold">app completa</span>: frontend, backend, database e autenticazione. 
            Il re delle <span className="text-foreground font-medium">"MVP in un pomeriggio"</span>.
          </p>

          {/* CTA Button */}
          <a 
            href="https://lovable.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-phase-1 text-white font-semibold hover:bg-phase-1/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-phase-1/25"
          >
            <ExternalLink className="h-5 w-5" />
            Visita lovable.dev
          </a>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <DollarSign className="h-5 w-5 text-phase-4" />
              <div>
                <p className="text-xs text-muted-foreground">Piano Pro</p>
                <p className="text-lg font-bold text-foreground">~$25/mese</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Layers className="h-5 w-5 text-phase-1" />
              <div>
                <p className="text-xs text-muted-foreground">Stack</p>
                <p className="text-lg font-bold text-foreground">React + Supabase</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <CreditCard className="h-5 w-5 text-phase-3" />
              <div>
                <p className="text-xs text-muted-foreground">Modello</p>
                <p className="text-lg font-bold text-foreground">A Crediti</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cos'è Veramente Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-phase-1/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-1/20 border border-phase-1/30">
              <Brain className="h-6 w-6 text-phase-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cos'è Veramente</h2>
              <p className="text-sm text-phase-1 font-medium">Sotto il cofano</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Lovable si definisce uno strumento <span className="text-phase-1 font-semibold">GPT-to-Software</span> (o Text-to-App). 
              A differenza di Cursor (dove scrivi codice assistito) o V0 (che fa solo la grafica), 
              Lovable prova a costruire <span className="text-foreground font-semibold">l'intero prodotto</span>: frontend, backend, database e autenticazione.
            </p>

            <div className="p-5 rounded-xl bg-phase-1/5 border border-phase-1/20">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/20">
                  <Server className="h-4 w-4 text-phase-1" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Lo Stack Scelto</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Il suo "motore" è molto specifico: genera applicazioni web moderne usando 
                    <span className="text-primary font-semibold"> React</span> per la parte visiva e 
                    <span className="text-phase-4 font-semibold"> Supabase</span> per i dati (database PostgreSQL). 
                    Non ti chiede "quale database vuoi", sceglie lui lo standard di settore per le app moderne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Il Superpotere: Full-Stack */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-1/30 bg-gradient-to-br from-phase-1/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-phase-1/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-1/20 border border-phase-1/30 shadow-lg shadow-phase-1/10">
              <Sparkles className="h-6 w-6 text-phase-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Il "Superpotere"</h2>
              <p className="text-sm text-phase-1 font-medium">Full-Stack Senza Dolore</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            La magia di Lovable è che rompe la barriera tra <span className="text-phase-1 font-semibold">"disegno"</span> e 
            <span className="text-phase-1 font-semibold"> "funzionamento"</span>. Se scrivi:
          </p>

          <div className="p-4 rounded-lg bg-muted/50 border border-border/50 font-mono text-sm mb-6">
            <span className="text-muted-foreground italic">"Crea un'app tipo Airbnb per affittare cucce di cani"</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Lui non disegna solo le card con le foto dei cani...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-colors text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-phase-4/15 mb-3">
                <Database className="h-6 w-6 text-phase-4" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Crea la tabella</h3>
              <p className="text-xs text-muted-foreground">Nel database per salvare i cani</p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-3/30 transition-colors text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-phase-3/15 mb-3">
                <UserCheck className="h-6 w-6 text-phase-3" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Crea il login</h3>
              <p className="text-xs text-muted-foreground">Sistema di autenticazione</p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-1/30 transition-colors text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-phase-1/15 mb-3">
                <Zap className="h-6 w-6 text-phase-1" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Collega tutto</h3>
              <p className="text-xs text-muted-foreground">"Prenota" → Database</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-primary/10 border border-primary/30">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">In 5 minuti hai un link funzionante</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dove puoi effettivamente registrarti e salvare dati. 
                  <span className="text-primary font-medium"> Per fare la stessa cosa a mano servirebbero giorni.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funzionalità Killer */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-3/20 border border-phase-3/30">
            <Zap className="h-6 w-6 text-phase-3" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Funzionalità Killer</h2>
            <p className="text-sm text-phase-3 font-medium">Le feature che fanno la differenza</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Integrazione Supabase */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-r from-phase-4/5 via-card to-card p-6 hover:border-phase-4/50 transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-phase-4/10 rounded-full blur-2xl" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/40 shadow-lg shadow-phase-4/10 group-hover:scale-110 transition-transform">
                <Database className="h-7 w-7 text-phase-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Integrazione Supabase Nativa</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-1/15 text-xs font-semibold text-phase-1 flex items-center gap-1">
                    <Star className="h-3 w-3" /> Arma Segreta
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Molti tool AI fanno fatica con i database. Lovable è <span className="text-phase-4 font-semibold">partner stretto di Supabase</span>. 
                  Quando chiedi <span className="italic">"Voglio salvare i preferiti degli utenti"</span>, lui scrive ed esegue l'SQL per te. 
                  <span className="text-foreground font-medium"> Non devi mai aprire il pannello di gestione del database se non vuoi.</span>
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Sync */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-3/30 bg-gradient-to-r from-phase-3/5 via-card to-card p-6 hover:border-phase-3/50 transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-phase-3/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-3/15 border border-phase-3/30 group-hover:scale-110 transition-transform">
                <Github className="h-7 w-7 text-phase-3" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">GitHub Sync</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-3/15 text-xs font-semibold text-phase-3">La Via di Fuga</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A differenza di altri tool "No-Code" (come Bubble) dove sei prigioniero della loro piattaforma, 
                  Lovable <span className="text-phase-3 font-semibold">sincronizza tutto il codice su GitHub</span>. 
                  Se un giorno Lovable fallisce o diventa troppo costoso, hai tutto il tuo codice React standard 
                  e puoi darlo a uno sviluppatore umano. <span className="text-foreground font-medium">Il progetto è tuo.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Visual Editor */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card to-card/80 p-6 hover:border-primary/40 transition-all duration-300">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 border border-primary/30 group-hover:scale-110 transition-transform">
                <MousePointer className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Visual Editor</h3>
                  <span className="px-2 py-0.5 rounded-full bg-primary/15 text-xs font-semibold text-primary">Ibrido</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Puoi cliccare su un elemento (es. un titolo) e cambiare il testo o il colore 
                  <span className="text-primary font-semibold"> direttamente cliccandoci sopra</span>, senza consumare crediti AI e senza rigenerare tutto il codice. 
                  È un ibrido tra design e codice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando è Indispensabile */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-4/30 bg-gradient-to-br from-phase-4/5 via-card to-card p-8">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-phase-4/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/30">
              <Target className="h-6 w-6 text-phase-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Quando è Indispensabile</h2>
              <p className="text-sm text-phase-4 font-medium">I casi d'uso ideali</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-1/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-1/15 mb-4">
                <Rocket className="h-5 w-5 text-phase-1" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Founder Non Tecnici</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hai un'idea per una startup e vuoi vedere se funziona <span className="text-phase-1 font-medium">domani</span>, 
                non tra 3 mesi.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15 mb-4">
                <Package className="h-5 w-5 text-phase-4" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Internal Tools</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ti serve una dashboard per il team di vendita? Invece di aspettare l'IT (mesi), 
                <span className="text-phase-4 font-medium"> la fai tu in un pomeriggio</span>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-3/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15 mb-4">
                <Zap className="h-5 w-5 text-phase-3" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Hackathon / Prototipi</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Per vincere le <span className="text-phase-3 font-medium">gare di velocità</span>. MVP in ore, non giorni.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Punti di Debolezza */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-1/30 bg-gradient-to-br from-phase-1/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-phase-1/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-1/20 border border-phase-1/30">
              <AlertTriangle className="h-6 w-6 text-phase-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Punti di Debolezza</h2>
              <p className="text-sm text-phase-1 font-medium">Cosa tenere a mente</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">La Trappola del "L'ultimo 20%"</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lovable ti porta al <span className="text-foreground font-medium">90% del lavoro</span> in un'ora. Ma quel restante 10% 
                  (logiche di business molto complesse, regole di privacy strane, integrazioni con API bancarie vecchie) 
                  può diventare un incubo. L'AI potrebbe entrare in loop e non riuscire a risolvere bug specifici.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Il Consumo dei Crediti</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Il modello di prezzo è a crediti. Ogni modifica costa. 
                  <span className="text-phase-1 font-medium"> Se l'AI sbaglia e tu chiedi di correggere, paghi comunque</span>. 
                  È frustrante pagare per gli errori dell'AI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Scalabilità</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Va benissimo per <span className="text-foreground font-medium">1.000 utenti</span>. Se la tua app esplode con 100.000 utenti, 
                  probabilmente dovrai riscrivere parti del codice per ottimizzarle, 
                  perché il codice generato dall'AI non è sempre il più efficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prezzi */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/30">
            <DollarSign className="h-6 w-6 text-phase-4" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Prezzi e Piani</h2>
            <p className="text-sm text-phase-4 font-medium">Attenzione: modello a crediti</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Free */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-6">
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-xl font-bold text-foreground">Free</h3>
              </div>
              <p className="text-3xl font-bold text-foreground mb-4">$0<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>5 crediti al giorno</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-phase-1 shrink-0" />
                  <span>Progetti pubblici</span>
                </li>
              </ul>
              <div className="px-3 py-2 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-xs text-muted-foreground">Solo per "giocare"</p>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="relative overflow-hidden rounded-xl border border-phase-1/40 bg-gradient-to-br from-phase-1/10 to-card p-6 shadow-lg shadow-phase-1/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-phase-1/15 rounded-full blur-2xl" />
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-phase-1/20 border border-phase-1/30">
              <span className="text-xs font-bold text-phase-1">POPOLARE</span>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-phase-1" />
                <h3 className="text-xl font-bold text-foreground">Pro</h3>
              </div>
              <p className="text-3xl font-bold text-phase-1 mb-1">~$25<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <p className="text-xs text-muted-foreground mb-4">100-150 crediti/mese</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Progetti privati</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Export del codice</span>
                </li>
              </ul>
              <div className="px-3 py-2 rounded-lg bg-phase-1/10 border border-phase-1/20">
                <p className="text-xs text-phase-1 font-medium">⚠️ 100 crediti finiscono in fretta!</p>
              </div>
            </div>
          </div>

          {/* Business */}
          <div className="relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-br from-phase-4/5 to-card p-6">
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-phase-4" />
                <h3 className="text-xl font-bold text-foreground">Business</h3>
              </div>
              <p className="text-3xl font-bold text-phase-4 mb-4">~$50<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Più crediti</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Funzionalità per team</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Supporto prioritario</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-1/30 bg-gradient-to-br from-phase-1/5 via-card to-primary/5 p-8">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-phase-1/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-1/20 border border-phase-1/30">
              <Trophy className="h-6 w-6 text-phase-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Verdetto Finale</h2>
              <p className="text-sm text-phase-1 font-medium">Il re delle "MVP in un pomeriggio"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Non tecnici */}
            <div className="p-6 rounded-xl bg-phase-1/10 border border-phase-1/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-1/20">
                  <Users className="h-5 w-5 text-phase-1" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Se non sai programmare:</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ma capisci la logica (database, utenti), è lo 
                <span className="text-phase-1 font-semibold"> strumento più potente che esista oggi</span>.
              </p>
            </div>

            {/* Sviluppatori */}
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Se sei uno sviluppatore:</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lo userai per fare la <span className="text-primary font-semibold">struttura noiosa in 10 minuti</span>, 
                poi scaricherai il codice su VS Code (con Cursor) per finire il lavoro "vero".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
