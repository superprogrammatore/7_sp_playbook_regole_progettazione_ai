import { 
  ArrowLeft,
  RefreshCw, 
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
  FileCode,
  Lock,
  Users,
  Clock,
  Star,
  Cpu,
  Cloud,
  ExternalLink,
  Rocket,
  Globe,
  Smartphone,
  Server,
  Play,
  Link,
  Monitor,
  Tablet,
  QrCode,
  Bot,
  ListChecks
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ReplitViewProps {
  onBack: () => void;
}

export function ReplitView({ onBack }: ReplitViewProps) {
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
      <div className="relative overflow-hidden rounded-2xl border border-phase-2/30 bg-gradient-to-br from-card via-card/95 to-phase-2/5 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-phase-2/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-phase-4/10 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative">
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-2/15 border border-phase-2/40 shadow-lg shadow-phase-2/10">
              <Cloud className="h-4 w-4 text-phase-2" />
              <span className="text-sm font-bold text-phase-2">Cloud IDE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-4/15 border border-phase-4/30">
              <Bot className="h-3.5 w-3.5 text-phase-4" />
              <span className="text-xs font-semibold text-phase-4">Agent-First</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30">
              <Globe className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Zero Setup</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-3/15 border border-phase-3/30">
              <Smartphone className="h-3.5 w-3.5 text-phase-3" />
              <span className="text-xs font-semibold text-phase-3">Mobile Dev</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="text-gradient-phase-2">Replit</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-phase-2/20 border border-phase-2/30 shadow-lg shadow-phase-2/20">
              <RefreshCw className="h-8 w-8 text-phase-2" />
            </div>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Da <span className="text-phase-2 font-semibold">"Idea to URL"</span> in secondi. 
            Niente installazioni, niente configurazioni. Apri il browser e 
            <span className="text-foreground font-medium"> il tuo sito è già online</span>.
          </p>

          {/* CTA Button */}
          <a 
            href="https://replit.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-phase-2 text-white font-semibold hover:bg-phase-2/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-phase-2/25"
          >
            <ExternalLink className="h-5 w-5" />
            Visita replit.com
          </a>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <DollarSign className="h-5 w-5 text-phase-4" />
              <div>
                <p className="text-xs text-muted-foreground">Piano Core</p>
                <p className="text-lg font-bold text-foreground">~$20-25/mese</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Cloud className="h-5 w-5 text-phase-2" />
              <div>
                <p className="text-xs text-muted-foreground">Ambiente</p>
                <p className="text-lg font-bold text-foreground">100% Cloud</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Link className="h-5 w-5 text-phase-3" />
              <div>
                <p className="text-xs text-muted-foreground">Deploy</p>
                <p className="text-lg font-bold text-foreground">Istantaneo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cos'è Veramente Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-phase-2/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-2/20 border border-phase-2/30">
              <Cloud className="h-6 w-6 text-phase-2" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cos'è Veramente</h2>
              <p className="text-sm text-phase-2 font-medium">Sotto il cofano</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Replit è un <span className="text-phase-2 font-semibold">Cloud Development Environment (CDE)</span>. 
              Significa che non devi installare nulla sul tuo computer. Niente Node.js, niente Python, niente Git locale. 
              <span className="text-foreground font-medium"> Apri il browser e hai un computer potente pronto a programmare.</span>
            </p>

            <div className="p-5 rounded-xl bg-phase-2/5 border border-phase-2/20">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-2/20">
                  <Bot className="h-4 w-4 text-phase-2" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Pivot "Agent-First"</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Recentemente ha fatto un pivot totale. Non è più solo un editor online, ma una piattaforma dove 
                    <span className="text-phase-2 font-semibold"> Replit Agent</span> agisce come un dipendente junior: 
                    tu gli dai l'idea, lui scrive il codice, configura il server, installa il database e mette online il sito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Idea to URL Section */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30 shadow-lg shadow-primary/10">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Il Concetto</h2>
              <p className="text-sm text-primary font-medium">"Idea to URL" in secondi</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            La filosofia di Replit è <span className="text-primary font-semibold">azzerare la "tassa di configurazione"</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* VS Code Traditional */}
            <div className="p-5 rounded-xl bg-phase-1/5 border border-phase-1/20">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="h-5 w-5 text-phase-1" />
                <h3 className="font-semibold text-foreground">Con VS Code tradizionale:</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-3 w-3 text-phase-1 shrink-0" />
                  <span>Scaricare l'editor</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-3 w-3 text-phase-1 shrink-0" />
                  <span>Installare il linguaggio</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-3 w-3 text-phase-1 shrink-0" />
                  <span>Configurare l'ambiente locale</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-3 w-3 text-phase-1 shrink-0" />
                  <span>Comprare un dominio</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-3 w-3 text-phase-1 shrink-0" />
                  <span>Configurare un server (AWS/Vercel)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-3 w-3 text-phase-1 shrink-0" />
                  <span>Collegare il database...</span>
                </li>
              </ul>
            </div>

            {/* Replit */}
            <div className="p-5 rounded-xl bg-phase-2/10 border border-phase-2/30">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="h-5 w-5 text-phase-2" />
                <h3 className="font-semibold text-foreground">Con Replit:</h3>
              </div>
              <div className="flex flex-col items-center justify-center h-[calc(100%-2rem)]">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-phase-2/20 border border-phase-2/40">
                  <Play className="h-8 w-8 text-phase-2" />
                  <span className="text-lg font-bold text-phase-2">"Create Repl"</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  <span className="text-phase-2 font-semibold">L'URL è live dal secondo zero.</span>
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
          {/* Replit Agent */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-2/30 bg-gradient-to-r from-phase-2/5 via-card to-card p-6 hover:border-phase-2/50 transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-phase-2/10 rounded-full blur-2xl" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-2/20 border border-phase-2/40 shadow-lg shadow-phase-2/10 group-hover:scale-110 transition-transform">
                <Bot className="h-7 w-7 text-phase-2" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Replit Agent</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-1/15 text-xs font-semibold text-phase-1 flex items-center gap-1">
                    <Star className="h-3 w-3" /> L'Architetto Autonomo
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A differenza di Copilot che ti aiuta a scrivere una funzione, Replit Agent può 
                  <span className="text-phase-2 font-semibold"> pianificare un progetto intero</span>.
                </p>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-sm font-medium text-foreground mb-1">Tu dici:</p>
                    <p className="text-sm text-muted-foreground italic">"Voglio un clone di Twitter per appassionati di scacchi"</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-phase-2/10 border border-phase-2/20">
                    <p className="text-sm font-medium text-foreground mb-2">Lui scrive un piano:</p>
                    <div className="flex items-center gap-2">
                      <ListChecks className="h-4 w-4 text-phase-2" />
                      <span className="text-sm text-muted-foreground">1. Setup DB → 2. Auth → 3. Interfaccia scacchiera → 4. Feed</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Esegue i passaggi uno a uno, installando pacchetti e 
                    <span className="text-phase-2 font-medium"> correggendo i suoi stessi errori</span> se il codice non parte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hosting e Database */}
          <div className="group relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-r from-phase-4/5 via-card to-card p-6 hover:border-phase-4/50 transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-phase-4/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-4/15 border border-phase-4/30 group-hover:scale-110 transition-transform">
                <Database className="h-7 w-7 text-phase-4" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Hosting e Database Integrati</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-4/15 text-xs font-semibold text-phase-4">ReplDB</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Non devi cercare un provider esterno per il database. Replit ha un 
                  <span className="text-phase-4 font-semibold"> database PostgreSQL integrato</span> che si attiva con un click.
                </p>
                <div className="p-3 rounded-lg bg-phase-3/10 border border-phase-3/20">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-phase-3 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="text-phase-3 font-medium">Novità:</span> Separano automaticamente il Database di Sviluppo da quello di Produzione, 
                      così se fai un errore mentre testi, non cancelli i dati dei tuoi utenti veri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card to-card/80 p-6 hover:border-phase-3/40 transition-all duration-300">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-phase-3/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-3/15 border border-phase-3/30 group-hover:scale-110 transition-transform">
                <Smartphone className="h-7 w-7 text-phase-3" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Sviluppo Mobile Nativo</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-3/15 text-xs font-semibold text-phase-3 flex items-center gap-1">
                    <QrCode className="h-3 w-3" /> QR Code
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ora puoi vedere l'anteprima della tua app non solo come sito web, ma 
                  <span className="text-phase-3 font-semibold"> scansionando un QR code</span> vedi come gira l'app nativa sul tuo telefono 
                  (usando Expo/React Native). Puoi costruire <span className="text-foreground font-medium">app mobili reali</span> direttamente dal browser.
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
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-2/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-2/15 mb-4">
                <Star className="h-5 w-5 text-phase-2" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Principianti Assoluti</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                L'unico strumento che ti permette di creare un sito vero <span className="text-phase-2 font-medium">senza sapere</span> cosa sia 
                un "terminale" o una "variabile d'ambiente".
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15 mb-4">
                <Rocket className="h-5 w-5 text-phase-4" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Prototipazione Rapida</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hai un'idea in doccia e vuoi inviare il link funzionante a un investitore o a un amico 
                <span className="text-phase-4 font-medium"> entro 20 minuti</span>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-3/30 transition-all hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15 mb-4">
                <Tablet className="h-5 w-5 text-phase-3" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Coding "On the Go"</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Poiché è nel browser, puoi programmare seriamente da un <span className="text-phase-3 font-medium">iPad</span>, 
                da un Chromebook o dal computer di un hotel.
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
                <Lock className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Vendor Lock-in (La Prigione Dorata)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  È facilissimo entrare, <span className="text-phase-1 font-medium">difficile uscire</span>. Il codice è standard, 
                  ma la configurazione del server e del database è specifica di Replit. 
                  Se il tuo sito diventa enorme e vuoi spostarlo su AWS per risparmiare, la migrazione è dolorosa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Costi a Scalare</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Replit costa poco per iniziare, ma se la tua app fa successo e hai molto traffico, 
                  <span className="text-phase-1 font-medium"> i costi di hosting salgono più velocemente</span> rispetto a provider tradizionali.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border/50">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-phase-1/15">
                <XCircle className="h-4 w-4 text-phase-1" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Performance</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Le macchine virtuali del piano base non sono potentissime. Per progetti pesanti 
                  o compilazioni lunghe, può risultare lento.
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
            <p className="text-sm text-phase-4 font-medium">Abbonamento + Crediti</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Starter */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-6">
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-xl font-bold text-foreground">Starter</h3>
              </div>
              <p className="text-3xl font-bold text-foreground mb-4">$0<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Ottimo per imparare</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-phase-1 shrink-0" />
                  <span>Progetti pubblici</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Uso limitato AI base</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core */}
          <div className="relative overflow-hidden rounded-xl border border-phase-2/40 bg-gradient-to-br from-phase-2/10 to-card p-6 shadow-lg shadow-phase-2/5">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-phase-2/15 rounded-full blur-2xl" />
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-phase-2/20 border border-phase-2/30">
              <span className="text-xs font-bold text-phase-2">CONSIGLIATO</span>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-phase-2" />
                <h3 className="text-xl font-bold text-foreground">Core</h3>
              </div>
              <p className="text-3xl font-bold text-phase-2 mb-1">~$20-25<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
              <p className="text-xs text-muted-foreground mb-4">Include budget crediti Agent</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span><span className="text-foreground font-medium">Progetti privati</span></span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Macchine più veloci</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Crediti Replit Agent</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Teams */}
          <div className="relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-br from-phase-4/5 to-card p-6">
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-phase-4" />
                <h3 className="text-xl font-bold text-foreground">Teams</h3>
              </div>
              <p className="text-3xl font-bold text-phase-4 mb-1">~$35-40<span className="text-sm font-normal text-muted-foreground">/utente/mese</span></p>
              <p className="text-xs text-muted-foreground mb-4">Per collaborare in tempo reale</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Editing collaborativo</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                  <span>Come Google Docs per il codice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-2/30 bg-gradient-to-br from-phase-2/5 via-card to-primary/5 p-8">
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-phase-2/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-2/20 border border-phase-2/30">
              <Trophy className="h-6 w-6 text-phase-2" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Verdetto Finale</h2>
              <p className="text-sm text-phase-2 font-medium">Il "Game Changer" per non tecnici</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-phase-2/10 border border-phase-2/30">
              <p className="text-muted-foreground leading-relaxed">
                Se il tuo obiettivo è <span className="text-phase-2 font-semibold">imparare o lanciare subito</span> senza preoccuparti dell'infrastruttura, 
                è imbattibile. L'Agente è forse il più impressionante visivamente perché 
                <span className="text-foreground font-medium"> vedi l'app costruirsi da sola</span>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-phase-1/10 border border-phase-1/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-phase-1 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-phase-1 font-semibold">Tuttavia:</span> Per un'azienda software seria e strutturata, 
                  viene spesso usato solo per <span className="text-foreground font-medium">prototipi</span> e non per il prodotto finale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
