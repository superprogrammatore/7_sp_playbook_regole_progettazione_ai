import { 
  ArrowLeft, 
  Smartphone, 
  ExternalLink,
  QrCode,
  Store,
  Sparkles,
  Cpu,
  AlertTriangle,
  CreditCard,
  Target,
  Download,
  Vibrate,
  Camera,
  Bell,
  CheckCircle2,
  Wrench,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RorkViewProps {
  onBack: () => void;
}

export function RorkView({ onBack }: RorkViewProps) {
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
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-4/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-phase-5/15 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-4/15 border border-phase-4/40">
              <Smartphone className="h-4 w-4 text-phase-4" />
              <span className="text-sm font-semibold text-phase-4">Native Mobile</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Store className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">App Store Ready</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Rork</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Generatore di <span className="text-phase-4 font-medium">App Mobile Native</span> basato sull'AI. 
                Non crea web app: genera veri file <span className="text-foreground font-medium">.ipa</span> (iOS) 
                e <span className="text-foreground font-medium">.apk</span> (Android) con React Native e Expo.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Download className="h-4 w-4 text-phase-4" />
                  <span className="text-sm">Output: <span className="font-bold text-phase-4">.ipa / .apk</span></span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Cpu className="h-4 w-4 text-primary" />
                  <span className="text-sm">Stack: <span className="font-bold text-primary">React Native + Expo</span></span>
                </div>
              </div>
            </div>

            {/* Logo/Icon Area */}
            <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-phase-4/20 to-phase-5/20 border border-phase-4/30">
              <Smartphone className="h-12 w-12 text-phase-4" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a 
              href="https://rork.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-phase-4 text-phase-4-foreground font-medium hover:bg-phase-4/90 transition-colors"
            >
              Prova Rork
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Differenza Fondamentale */}
      <div className="relative overflow-hidden rounded-xl border border-phase-4/30 bg-gradient-to-br from-phase-4/5 to-transparent p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-phase-4/10 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15">
              <Smartphone className="h-5 w-5 text-phase-4" />
            </div>
            <h2 className="text-xl font-semibold">La Differenza Fondamentale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Altri Tool */}
            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <h3 className="font-medium text-muted-foreground mb-2">Gli altri (Bolt, Lovable, Replit)</h3>
              <p className="text-sm text-muted-foreground">
                Creano principalmente <span className="text-foreground">Web App</span>: siti che girano nel browser, 
                magari "mascherati" da app.
              </p>
            </div>

            {/* Rork */}
            <div className="p-4 rounded-lg bg-phase-4/10 border border-phase-4/30">
              <h3 className="font-medium text-phase-4 mb-2">Rork</h3>
              <p className="text-sm text-muted-foreground">
                Costruito per creare <span className="text-phase-4 font-medium">app native vere</span> con accesso a 
                fotocamera, giroscopio, notifiche push e quella fluidità tipica delle app installate.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {[
              { icon: Camera, label: "Fotocamera" },
              { icon: Vibrate, label: "Giroscopio" },
              { icon: Bell, label: "Push Notifications" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-phase-4/10 border border-phase-4/30">
                <item.icon className="h-4 w-4 text-phase-4" />
                <span className="text-xs font-medium text-phase-4">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Punti di Forza */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Punti di Forza</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* QR Code Preview */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-4/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-4/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-4/15">
                <QrCode className="h-6 w-6 text-phase-4" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Anteprima Reale (QR Code)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-4/20 text-phase-4">Killer Feature</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mentre chatti con l'AI, appare un <span className="text-foreground font-medium">QR Code</span>. 
                  Lo inquadri con il telefono (tramite <span className="text-phase-4">Expo Go</span>) e l'app si materializza 
                  nelle tue mani. Chiedi "cambia il colore in rosso" → <span className="text-phase-4 font-medium">il telefono si aggiorna in tempo reale</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Store Deployment */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Store className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Store Deployment
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Apple + Google</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rork gestisce la parte più dolorosa: la <span className="text-foreground font-medium">pubblicazione</span>. 
                  Aiuta a configurare certificati e requisiti per inviare l'app all'<span className="text-primary font-medium">Apple App Store</span> e 
                  <span className="text-primary font-medium"> Google Play Store</span>—un processo normalmente incubo per i principianti.
                </p>
              </div>
            </div>
          </div>

          {/* Componenti Nativi */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-5/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-5/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-5/15">
                <Cpu className="h-6 w-6 text-phase-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Componenti Nativi
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-5/20 text-phase-5">React Native</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Poiché usa <span className="text-foreground font-medium">React Native</span>, i pulsanti, gli scorrimenti 
                  e le animazioni sono quelli <span className="text-phase-5 font-medium">nativi del telefono</span>, 
                  non emulazioni web che spesso risultano "scattose".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando Usarlo */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15">
            <Target className="h-5 w-5 text-phase-4" />
          </div>
          <h2 className="text-xl font-semibold">Quando Serve</h2>
        </div>

        <div className="p-4 rounded-xl bg-phase-4/10 border border-phase-4/30 mb-4">
          <p className="text-foreground font-medium">
            È la scelta obbligata se la tua idea inizia con: <span className="text-phase-4">"Voglio che gli utenti scarichino la mia app dall'App Store"</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Founder Non-Tecnici",
              description: "MVP mobile funzionante in pochi minuti senza imparare Xcode o Android Studio.",
              icon: Sparkles
            },
            {
              title: "Presenza sugli Store",
              description: "Il modo più veloce per passare da 'prompt' a 'icona sulla schermata home'.",
              icon: Download
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-phase-4/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-5 w-5 text-phase-4" />
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
          <h2 className="text-xl font-semibold">Punti di Debolezza</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Il Costo dell'Errore (Crediti)",
              description: "Se l'AI fraintende e crea un bug, devi 'spendere' un altro messaggio per correggerlo. Nello sviluppo mobile, con tanti dettagli, può diventare costoso velocemente."
            },
            {
              title: "Meno Granularità Visiva",
              description: "A differenza di tool web dove puoi cliccare e modificare, con Rork dipendi molto dalla chat. Per pixel-perfect adjustments, chiedere a voce/testo è frustrante."
            },
            {
              title: "Complessità Backend",
              description: "Crea l'interfaccia benissimo, ma collegare logiche complesse (pagamenti in-app, database real-time) è ancora un punto dove l'AI può inciampare."
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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-4/15">
            <CreditCard className="h-5 w-5 text-phase-4" />
          </div>
          <h2 className="text-2xl font-semibold">Prezzi e Piani</h2>
        </div>

        <div className="p-4 rounded-xl bg-muted/30 border border-border/50 mb-4">
          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Nota:</span> A differenza dei tool web con piani Free generosi, 
              Rork è più orientato al business immediato. È un tool <span className="text-phase-4 font-medium">"pay-to-build"</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Junior */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
            <h3 className="text-lg font-semibold mb-1">Junior</h3>
            <p className="text-2xl font-bold text-phase-4 mb-3">~$20<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <ul className="space-y-2">
              {[
                "~100 messaggi inclusi",
                "Ottimo per prototipi semplici",
                "Funzionalità base"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle */}
          <div className="relative overflow-hidden rounded-xl border border-phase-4/50 bg-gradient-to-br from-phase-4/10 to-transparent p-6">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-phase-4/20 text-phase-4">
                Consigliato
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Middle</h3>
            <p className="text-2xl font-bold text-phase-4 mb-3">~$50<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <ul className="space-y-2">
              {[
                "~250 messaggi inclusi",
                "Priorità di risposta",
                "Necessario per iterazioni serie"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-phase-4 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-4/30 bg-gradient-to-br from-phase-4/10 via-card to-card p-8">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-4/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-4/20">
              <Smartphone className="h-6 w-6 text-phase-4" />
            </div>
            <h2 className="text-2xl font-bold">Verdetto Finale</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nella tua cassetta degli attrezzi, Rork occupa uno <span className="text-phase-4 font-semibold">slot unico</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="font-medium text-foreground mb-2">Usa Lovable o Bolt se...</h4>
                <p className="text-sm text-muted-foreground">
                  Ti basta inviare un <span className="text-foreground">link web</span> ai tuoi utenti 
                  (più veloce, più economico, più facile da aggiornare).
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-phase-4/10 border border-phase-4/30">
                <h4 className="font-medium text-phase-4 mb-2">Usa Rork se...</h4>
                <p className="text-sm text-muted-foreground">
                  È <span className="text-phase-4 font-medium">fondamentale essere sugli Store</span>. 
                  Il modo più veloce per passare da prompt a icona sulla home.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <Wrench className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Nota tecnica:</span> È attualmente il modo più veloce 
                al mondo per passare da <span className="text-phase-4">"prompt di testo"</span> a 
                <span className="text-phase-4"> "icona sulla schermata home del telefono"</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
