import { 
  ArrowLeft,
  Code2, 
  Brain,
  Zap,
  Search,
  Layers,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Trophy,
  Target,
  RefreshCw,
  FileCode,
  Terminal,
  Database,
  Lock,
  Users,
  Clock,
  Star,
  Cpu,
  Eye,
  Edit3,
  GitBranch
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CursorViewProps {
  onBack: () => void;
}

export function CursorView({ onBack }: CursorViewProps) {
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
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card/95 to-primary/5 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-phase-6/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-phase-7/10 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative">
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 shadow-lg shadow-primary/10">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-primary">AI Code Editor</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-4/15 border border-phase-4/30">
              <Star className="h-3.5 w-3.5 text-phase-4" />
              <span className="text-xs font-semibold text-phase-4">Top Pick 2024</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-7/15 border border-phase-7/30">
              <GitBranch className="h-3.5 w-3.5 text-phase-7" />
              <span className="text-xs font-semibold text-phase-7">Fork di VS Code</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="text-gradient">Cursor</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 border border-primary/30 shadow-lg shadow-primary/20">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            L'editor di codice che ha <span className="text-primary font-semibold">rivoluzionato</span> il modo di programmare.
            Non è un plugin, è un <span className="text-foreground font-medium">fork completo di VS Code</span> con AI integrata a livello profondo.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <DollarSign className="h-5 w-5 text-phase-4" />
              <div>
                <p className="text-xs text-muted-foreground">Piano Pro</p>
                <p className="text-lg font-bold text-foreground">$20/mese</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Cpu className="h-5 w-5 text-phase-6" />
              <div>
                <p className="text-xs text-muted-foreground">Modelli AI</p>
                <p className="text-lg font-bold text-foreground">Multi-LLM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-phase-3" />
              <div>
                <p className="text-xs text-muted-foreground">Fast Requests</p>
                <p className="text-lg font-bold text-foreground">500/mese</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cos'è Veramente Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/80 p-8">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-phase-7/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-7/20 border border-phase-7/30">
              <Brain className="h-6 w-6 text-phase-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cos'è Veramente</h2>
              <p className="text-sm text-phase-7 font-medium">Sotto il cofano</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Cursor non è semplicemente un'estensione o un plugin. È un <span className="text-foreground font-semibold">fork di VS Code</span>.
              Questo significa che gli sviluppatori hanno preso il codice open-source di Visual Studio Code (l'editor più usato al mondo) e lo hanno modificato alla base.
            </p>

            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Perché è importante?</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Poiché controllano l'intero editor, l'Intelligenza Artificiale non vive in una finestrella laterale isolata. 
                    L'AI ha accesso al cursore, al terminale, alla struttura dei file e può "vedere" e modificare il codice 
                    in tempo reale mentre scrivi, in modo molto più fluido rispetto a un semplice plugin come GitHub Copilot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Sauce: Il Contesto */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-6/30 bg-gradient-to-br from-phase-6/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-phase-6/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-6/20 border border-phase-6/30 shadow-lg shadow-phase-6/10">
              <Search className="h-6 w-6 text-phase-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">La "Secret Sauce"</h2>
              <p className="text-sm text-phase-6 font-medium">Il Contesto</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Il vero superpotere di Cursor rispetto agli altri è la gestione del <span className="text-phase-6 font-semibold">Context (Contesto)</span>.
            Quando apri un progetto, Cursor indicizza (legge e cataloga) tutto il tuo codice locale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-phase-6/15">
                  <Cpu className="h-4 w-4 text-phase-6" />
                </div>
                <h3 className="font-semibold text-foreground">Come funziona</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quando fai una domanda, non guarda solo il file aperto. Grazie a una tecnica chiamata 
                <span className="text-foreground font-medium"> RAG (Retrieval Augmented Generation)</span> ottimizzata per il codice, 
                capisce che se modifichi la funzione A nel file <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">login.js</code>, 
                deve aggiornare anche la funzione B nel file <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">database.js</code>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-6/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Comando @</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nella chat puoi digitare <code className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-mono font-bold">@</code> per citare 
                file specifici, cartelle, o persino la documentazione online di librerie esterne 
                (es. <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">@React</code> o 
                <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">@Stripe Docs</code>), 
                dando all'AI la conoscenza perfetta per risponderti.
              </p>
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
          {/* Cursor Tab */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card to-card/80 p-6 hover:border-phase-4/40 transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-phase-4/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-4/15 border border-phase-4/30 group-hover:scale-110 transition-transform">
                <Edit3 className="h-7 w-7 text-phase-4" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Cursor Tab</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-4/15 text-xs font-semibold text-phase-4">Autocompletamento Predittivo</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Non completa solo la parola. Se stai modificando una variabile, Cursor capisce l'intento e può suggerirti 
                  la modifica di <span className="text-phase-4 font-semibold">5-10 righe di codice successive</span> in un colpo solo. 
                  Spesso "indovina" la tua prossima mossa logica, non solo sintattica.
                </p>
              </div>
            </div>
          </div>

          {/* Composer */}
          <div className="group relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 via-card to-card p-6 hover:border-primary/50 transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 border border-primary/40 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform">
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Composer</h3>
                  <code className="px-2 py-1 rounded bg-primary/10 text-xs font-mono font-bold text-primary">Ctrl/Cmd + I</code>
                  <span className="px-2 py-0.5 rounded-full bg-phase-1/15 text-xs font-semibold text-phase-1 flex items-center gap-1">
                    <Star className="h-3 w-3" /> Game Changer
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questa è la funzione che ha cambiato le regole del gioco. Si apre una finestra fluttuante dove puoi scrivere:
                </p>

                <div className="p-4 rounded-lg bg-muted/50 border border-border/50 font-mono text-sm mb-4">
                  <span className="text-muted-foreground italic">"Crea una pagina di contatti con un form che invia una mail e salva nel DB"</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-card/80 border border-border/30">
                    <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                    <span className="text-sm text-muted-foreground">Creerà il file <code className="text-xs bg-muted px-1 rounded">contact.tsx</code></span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-card/80 border border-border/30">
                    <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                    <span className="text-sm text-muted-foreground">Creerà il file <code className="text-xs bg-muted px-1 rounded">api/send-mail.ts</code></span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-card/80 border border-border/30">
                    <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0" />
                    <span className="text-sm text-muted-foreground">Modificherà la config del database</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <Sparkles className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium">Tutto in una volta!</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Tu vedi le modifiche accadere live e puoi accettarle o rifiutarle (<span className="text-phase-4">Apply</span>/<span className="text-phase-1">Reject</span>).
                </p>
              </div>
            </div>
          </div>

          {/* Scelta del Modello */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card to-card/80 p-6 hover:border-phase-7/40 transition-all duration-300">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-phase-7/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-phase-7/15 border border-phase-7/30 group-hover:scale-110 transition-transform">
                <Cpu className="h-7 w-7 text-phase-7" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">Scelta del Modello</h3>
                  <span className="px-2 py-0.5 rounded-full bg-phase-7/15 text-xs font-semibold text-phase-7">Multi-LLM</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Non sei bloccato con un solo cervello. Puoi scegliere di usare <span className="text-phase-7 font-semibold">Claude 3.5 Sonnet</span> (attualmente il miglior modello al mondo per il coding), 
                  <span className="text-phase-6 font-semibold"> GPT-4o</span>, o modelli più piccoli e veloci per task semplici.
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
              <p className="text-sm text-phase-4 font-medium">Use Cases Perfetti</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-2/15 mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw className="h-5 w-5 text-phase-2" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Refactoring</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Prendi questo codice spaghetti di 500 righe, dividilo in 3 componenti separati e aggiungi i tipi TypeScript". <span className="text-phase-2 font-medium">Lo fa in secondi.</span>
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-8/15 mb-4 group-hover:scale-110 transition-transform">
                <FileCode className="h-5 w-5 text-phase-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Legacy Code</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entri in un nuovo lavoro e non capisci il codice scritto da chi c'era prima? Chiedi a Cursor: <span className="text-phase-8 font-medium">"Spiegami cosa fa questo file"</span>
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card/80 border border-border/50 hover:border-phase-4/30 transition-colors group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-3/15 mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5 text-phase-3" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Sviluppo Rapido</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Per sviluppatori esperti che sanno cosa vogliono ma non vogliono perdere tempo a scrivere la sintassi <span className="text-phase-3 font-medium">("boilerplate")</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Punti di Debolezza e Rischi */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-1/30 bg-gradient-to-br from-phase-1/5 via-card to-card p-8">
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-phase-1/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-1/20 border border-phase-1/30">
              <AlertTriangle className="h-6 w-6 text-phase-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Punti di Debolezza e Rischi</h2>
              <p className="text-sm text-phase-1 font-medium">Da tenere a mente</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/80 border border-border/50">
              <XCircle className="h-5 w-5 text-phase-1 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Curva di Apprendimento</h3>
                <p className="text-sm text-muted-foreground">
                  Anche se l'interfaccia è VS Code, imparare a "parlare" bene con Composer richiede pratica. Se chiedi male, ottieni codice spazzatura.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/80 border border-border/50">
              <Lock className="h-5 w-5 text-phase-2 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  Il tuo codice viene inviato ai server di Cursor. Hanno una "Privacy Mode" ma le aziende molto rigide come le banche potrebbero bloccarlo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/80 border border-border/50">
              <Brain className="h-5 w-5 text-phase-7 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Dipendenza</h3>
                <p className="text-sm text-muted-foreground">
                  È talmente comodo che rischi di dimenticare come si scrivono certe funzioni base a memoria.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/80 border border-border/50">
              <RefreshCw className="h-5 w-5 text-phase-3 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Loop di Errori</h3>
                <p className="text-sm text-muted-foreground">
                  A volte l'AI prova a correggere un errore, ne crea un altro, e così via. Devi essere bravo a fermarlo e resettare il contesto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prezzi e Piani */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-4/20 border border-phase-4/30">
            <DollarSign className="h-6 w-6 text-phase-4" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Prezzi e Piani</h2>
            <p className="text-sm text-phase-4 font-medium">Scegli quello giusto per te</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hobby */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-muted-foreground/30 transition-colors">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground">Hobby</h3>
              <p className="text-3xl font-bold text-foreground mt-2">Gratis</p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0 mt-0.5" />
                <span>2 settimane di accesso Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0 mt-0.5" />
                <span>Modelli lenti dopo trial</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0 mt-0.5" />
                <span>Perfetto per studenti</span>
              </li>
            </ul>
          </div>

          {/* Pro - Featured */}
          <div className="relative overflow-hidden rounded-xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-card p-6 shadow-lg shadow-primary/10">
            <div className="absolute -top-3 right-4">
              <span className="px-3 py-1 rounded-full bg-primary text-xs font-bold text-primary-foreground">Consigliato</span>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground">Pro</h3>
              <p className="text-3xl font-bold text-primary mt-2">$20<span className="text-base font-normal text-muted-foreground">/mese</span></p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Accesso illimitato modelli veloci</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Claude 3.5 Sonnet, GPT-4o</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span><strong>500 Fast Requests</strong>/mese</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Illimitato dopo (code lente)</span>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-6/30 transition-colors">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground">Business</h3>
              <p className="text-3xl font-bold text-foreground mt-2">$40<span className="text-base font-normal text-muted-foreground">/mese</span></p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 text-phase-6 shrink-0 mt-0.5" />
                <span>Per team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-phase-6 shrink-0 mt-0.5" />
                <span>Fatturazione centralizzata</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-phase-6 shrink-0 mt-0.5" />
                <span>SSO, SOC2 compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-card to-phase-6/5 p-8">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-phase-6/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 border border-primary/40 shadow-lg shadow-primary/20">
              <Trophy className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Verdetto Finale</h2>
              <p className="text-sm text-primary font-medium">La nostra opinione</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card/80 border border-primary/20 backdrop-blur-sm">
            <p className="text-lg text-foreground leading-relaxed">
              Se scrivi codice per lavoro o passione almeno <span className="text-primary font-bold">5 ore a settimana</span>, 
              Cursor è attualmente il <span className="text-primary font-bold">miglior investimento di 20 dollari</span> che puoi fare.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              È lo strumento che ti fa sentire "superpotente", riducendo la fatica mentale di ricordare la sintassi 
              e permettendoti di concentrarti sulla <span className="text-foreground font-medium">logica</span>.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-6 w-6 text-phase-3 fill-phase-3" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">5/5</span>
            <span className="text-muted-foreground">- Per sviluppatori seri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
