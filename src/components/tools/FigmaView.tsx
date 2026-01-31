import { 
  ArrowLeft, 
  Paintbrush, 
  ExternalLink,
  Users,
  Code2,
  Search,
  Sparkles,
  Layers,
  AlertTriangle,
  CreditCard,
  Target,
  Palette,
  Eye,
  FileCode,
  CheckCircle2,
  Wrench,
  Crown,
  Wand2,
  Type,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FigmaViewProps {
  onBack: () => void;
}

export function FigmaView({ onBack }: FigmaViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Torna ai Tools
      </Button>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-8/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-phase-7/15 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-8/15 border border-phase-8/40">
              <Paintbrush className="h-4 w-4 text-phase-8" />
              <span className="text-sm font-semibold text-phase-8">Design Tool</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Multiplayer</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Figma</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                La <span className="text-phase-8 font-medium">"lavagna digitale"</span> dove nasce quasi tutto 
                il software moderno. Strumento di design vettoriale collaborativo che gira nel browser, potenziato 
                da <span className="text-foreground font-medium">Figma AI e Dev Mode 2.0</span>.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Users className="h-4 w-4 text-phase-8" />
                  <span className="text-sm"><span className="font-bold text-phase-8">Real-time</span> collaboration</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm"><span className="font-bold text-primary">Dev Mode</span> incluso</span>
                </div>
              </div>
            </div>

            {/* Logo/Icon Area */}
            <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-phase-8/20 to-phase-7/20 border border-phase-8/30">
              <Paintbrush className="h-12 w-12 text-phase-8" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a 
              href="https://figma.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-phase-8 text-phase-8-foreground font-medium hover:bg-phase-8/90 transition-colors"
            >
              Prova Figma
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Superpotere: Collaboration */}
      <div className="relative overflow-hidden rounded-xl border border-phase-8/30 bg-gradient-to-br from-phase-8/5 to-transparent p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-phase-8/10 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-8/15">
              <Users className="h-5 w-5 text-phase-8" />
            </div>
            <h2 className="text-xl font-semibold">Il "Superpotere": Collaboration & Source of Truth</h2>
          </div>

          <p className="text-muted-foreground mb-4">
            La vera magia di Figma non è l'AI, ma il <span className="text-phase-8 font-medium">Multiplayer</span>. 
            È l'unico posto dove <span className="text-foreground font-medium">Designer, Product Manager e Sviluppatori</span> possono 
            guardare lo stesso file contemporaneamente.
          </p>

          <div className="p-4 rounded-xl bg-phase-8/10 border border-phase-8/30">
            <p className="text-foreground">
              L'AI qui non serve a "creare app da zero" (come Lovable), ma a 
              <span className="text-phase-8 font-medium"> togliere la noia dal processo di design</span> e 
              rendere il file pronto per lo sviluppo.
            </p>
          </div>
        </div>
      </div>

      {/* Funzionalità Killer */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Funzionalità Killer (AI & Dev)</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Figma AI */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-8/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-8/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-8/15">
                <Wand2 className="h-6 w-6 text-phase-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Figma AI ("Make Designs")
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-8/20 text-phase-8">Generativo</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Apri una finestra e scrivi: <span className="text-foreground italic">"Disegna una schermata di profilo utente 
                  per un'app di fitness scura"</span>. Figma genera un 
                  <span className="text-phase-8 font-medium"> layout vettoriale modificabile</span> con livelli, auto-layout e stili.
                </p>
                <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">Nota critica:</span> Non è magico come V0.dev per il codice, 
                    ma è utilissimo per sbloccare la "sindrome del foglio bianco".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dev Mode */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Dev Mode (La Terra Promessa per i Dev)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Premium</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Gli sviluppatori cliccano sull'interruttore verde e l'interfaccia cambia: 
                  <span className="text-foreground font-medium"> invece di strumenti di disegno, vedono codice</span>.
                </p>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Code Connect:</span> Le aziende collegano i loro veri componenti React 
                    ai design. Cliccando su un "Bottone", il dev vede: <code className="px-1.5 py-0.5 rounded bg-muted text-xs">&lt;Button variant="primary" /&gt;</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Utility AI */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-7/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-7/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-7/15">
                <Search className="h-6 w-6 text-phase-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Utility AI (Renaming & Search)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-7/20 text-phase-7">Più Amata</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-phase-7 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground font-medium">Visual Search:</span> Carica uno screenshot e l'AI cerca 
                      in tutti i file del team per vedere se qualcuno lo ha già disegnato.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Type className="h-5 w-5 text-phase-7 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground font-medium">Auto-Rename Layers:</span> Un click e l'AI rinomina 
                      <code className="px-1 py-0.5 rounded bg-muted text-xs mx-1">Frame 1342</code> in 
                      <code className="px-1 py-0.5 rounded bg-phase-7/20 text-phase-7 text-xs mx-1">Header</code>. 
                      Per gli sviluppatori, questo è <span className="text-phase-7 font-medium">oro</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando Usarlo */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-8/15">
            <Target className="h-5 w-5 text-phase-8" />
          </div>
          <h2 className="text-xl font-semibold">Quando è Indispensabile</h2>
        </div>

        <div className="p-4 rounded-xl bg-phase-8/10 border border-phase-8/30 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="h-5 w-5 text-phase-8" />
            <p className="text-foreground font-semibold">Sempre.</p>
          </div>
          <p className="text-muted-foreground">
            Se stai costruendo software professionale in team, il design <span className="text-phase-8 font-medium">DEVE passare da qui</span>. 
            Saltare Figma e andare direttamente al codice funziona per i prototipi, ma per prodotti complessi crea il caos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Design Systems",
              description: "Mantenere coerenza (tutti i bottoni uguali, colori allineati) tra design e codice.",
              icon: Layers
            },
            {
              title: "Team Collaboration",
              description: "Designer, PM e Dev sullo stesso file. Feedback in tempo reale, zero email.",
              icon: Users
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-phase-8/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-5 w-5 text-phase-8" />
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Punti di Debolezza */}
      <div className="relative overflow-hidden rounded-xl border border-destructive/30 bg-destructive/5 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/15">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-xl font-semibold">Punti di Debolezza e Rischi</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Non è un Site Builder",
              description: "Figma produce disegni, NON app funzionanti. Non puoi premere 'Pubblica' e avere un sito. Serve sempre uno sviluppatore (o un'AI come Cursor) che traduce il disegno in codice."
            },
            {
              title: "Il Costo del Dev Mode",
              description: "Prima era tutto incluso. Ora Figma fa pagare specificamente per le funzioni avanzate per sviluppatori, alzando notevolmente il prezzo per i team."
            },
            {
              title: "Allucinazioni nel Design",
              description: "L'AI generativa ('Make Designs') a volte crea layout che 'sembrano' belli ma sono impossibili da costruire nel codice reale (spaziature strane, componenti non standard)."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-8/15">
            <CreditCard className="h-5 w-5 text-phase-8" />
          </div>
          <h2 className="text-2xl font-semibold">Prezzi e Piani</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Starter */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Starter</h3>
            <p className="text-xl font-bold text-muted-foreground mb-3">Gratis</p>
            <ul className="space-y-2">
              {[
                "3 file Figma + 3 FigJam",
                "Figma AI limitata (beta)",
                "Dev Mode base/assente"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional */}
          <div className="relative overflow-hidden rounded-xl border border-phase-8/50 bg-gradient-to-br from-phase-8/10 to-transparent p-5">
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-phase-8/20 text-phase-8">
                Popolare
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Professional</h3>
            <p className="text-xl font-bold text-phase-8 mb-1">$12-15<span className="text-sm font-normal text-muted-foreground">/mese/editor</span></p>
            <ul className="space-y-2 mt-3">
              {[
                "File illimitati",
                "Librerie condivise",
                "Dev Mode incluso"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-8 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dev Mode Seat */}
          <div className="relative overflow-hidden rounded-xl border border-primary/50 bg-gradient-to-br from-primary/10 to-transparent p-5">
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                Novità
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Dev Mode Seat</h3>
            <p className="text-xl font-bold text-primary mb-1">~$25<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <ul className="space-y-2 mt-3">
              {[
                "Solo per sviluppatori",
                "Ispeziona senza disegnare",
                "Codice senza licenza designer"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-8/30 bg-gradient-to-br from-phase-8/10 via-card to-card p-8">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-8/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-8/20">
              <Crown className="h-6 w-6 text-phase-8" />
            </div>
            <h2 className="text-2xl font-bold">Verdetto Finale</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Figma rimane il <span className="text-phase-8 font-semibold">Re indiscusso del Design</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                <div className="flex items-center gap-2 mb-2">
                  <MousePointer2 className="h-5 w-5 text-destructive" />
                  <h4 className="font-medium text-destructive">NON usarlo per...</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Costruire l'app (codice). Per quello ci sono Cursor, Lovable, Bolt.
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-phase-8/10 border border-phase-8/30">
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="h-5 w-5 text-phase-8" />
                  <h4 className="font-medium text-phase-8">Usalo per...</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-phase-8 font-medium">Pensare e disegnare</span> l'app prima di scrivere una riga di codice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <Wrench className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">In sintesi:</span> Le nuove funzioni AI sono potenti 
                "assistenti" per velocizzare il lavoro manuale, ma <span className="text-phase-8 font-medium">non sostituiscono 
                il designer umano</span> come Lovable prova a sostituire lo sviluppatore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
