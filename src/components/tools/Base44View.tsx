import { 
  ArrowLeft, 
  Layers, 
  ExternalLink,
  Database,
  Users,
  Shield,
  Sparkles,
  Plug,
  Github,
  AlertTriangle,
  CreditCard,
  Target,
  Building2,
  Briefcase,
  Table,
  CheckCircle2,
  Wrench,
  MessageSquare,
  Mail,
  Slack
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Base44ViewProps {
  onBack: () => void;
}

export function Base44View({ onBack }: Base44ViewProps) {
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
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-5/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-phase-6/15 rounded-full blur-2xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-phase-5/15 border border-phase-5/40">
              <Database className="h-4 w-4 text-phase-5" />
              <span className="text-sm font-semibold text-phase-5">Backend Included</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">B2B Focus</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Base44</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Piattaforma <span className="text-phase-5 font-medium">"Text-to-App" Full-Stack</span> con 
                backend integrato. Database, API e autenticazione nascono insieme all'interfaccia—senza 
                collegare Firebase o Supabase manualmente.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Database className="h-4 w-4 text-phase-5" />
                  <span className="text-sm">DB <span className="font-bold text-phase-5">Auto-generato</span></span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">Permessi <span className="font-bold text-primary">Built-in</span></span>
                </div>
              </div>
            </div>

            {/* Logo/Icon Area */}
            <div className="hidden md:flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-phase-5/20 to-phase-6/20 border border-phase-5/30">
              <Layers className="h-12 w-12 text-phase-5" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a 
              href="https://base44.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-phase-5 text-phase-5-foreground font-medium hover:bg-phase-5/90 transition-colors"
            >
              Prova Base44
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Concetto: App Aziendale Istantanea */}
      <div className="relative overflow-hidden rounded-xl border border-phase-5/30 bg-gradient-to-br from-phase-5/5 to-transparent p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-phase-5/10 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-5/15">
              <Briefcase className="h-5 w-5 text-phase-5" />
            </div>
            <h2 className="text-xl font-semibold">L'App Aziendale Istantanea</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            Base44 brilla per <span className="text-phase-5 font-medium">Internal Tools</span>, dashboard aziendali, 
            CRM leggeri e portali clienti. Un manager può dire:
          </p>

          <div className="p-4 rounded-xl bg-phase-5/10 border border-phase-5/30 mb-4">
            <p className="text-foreground italic">
              "Voglio un sistema per tracciare le richieste di ferie dei dipendenti con approvazione del manager"
            </p>
          </div>

          <p className="text-muted-foreground">
            E ottenere il software finito con <span className="text-foreground font-medium">ruoli differenziati</span> (Dipendente vs Manager) 
            e database sicuro, <span className="text-phase-5 font-medium">senza passare dal dipartimento IT</span>.
          </p>
        </div>
      </div>

      {/* Funzionalità Killer */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Funzionalità Killer</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Backend Integrato */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-5/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-5/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-5/15">
                <Database className="h-6 w-6 text-phase-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Backend Integrato (Zero-Config)
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-5/20 text-phase-5">Core Feature</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Se chiedi un'app di vendita, Base44 crea automaticamente le tabelle per 
                  <span className="text-foreground font-medium"> "Prodotti", "Clienti" e "Ordini"</span>. 
                  Gestisce le relazioni tra i dati nativamente.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Table, label: "Auto-schema" },
                    { icon: Users, label: "Auth inclusa" },
                    { icon: Shield, label: "Permessi reali" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-phase-5/10 border border-phase-5/30">
                      <item.icon className="h-3.5 w-3.5 text-phase-5" />
                      <span className="text-xs font-medium text-phase-5">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Integrazioni Plug-and-Play */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-primary/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Plug className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  Integrazioni "Plug-and-Play"
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Automazione</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Connettori pronti per <span className="text-foreground font-medium">email, Stripe, Slack, Google Sheets</span>. 
                  Esempio: "Quando viene creato un nuovo ordine, invia una notifica su Slack al canale #vendite"—
                  <span className="text-primary font-medium"> lo fa nativamente</span>.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Mail, label: "Email" },
                    { icon: CreditCard, label: "Stripe" },
                    { icon: Slack, label: "Slack" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Sync */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6 hover:border-phase-6/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-phase-6/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-phase-6/15">
                <Github className="h-6 w-6 text-phase-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  GitHub Sync & Code Export
                  <span className="text-xs px-2 py-0.5 rounded-full bg-phase-6/20 text-phase-6">Via di Fuga</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Anche se è "No-Code" nell'interazione, <span className="text-foreground font-medium">non ti tiene in ostaggio</span>. 
                  Integrazione con GitHub per sincronizzare il codice. Gli sviluppatori veri possono 
                  <span className="text-phase-6 font-medium"> subentrare se il progetto diventa troppo complesso</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quando Usarlo */}
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-5/15">
            <Target className="h-5 w-5 text-phase-5" />
          </div>
          <h2 className="text-xl font-semibold">Quando è Indispensabile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Internal Tools & B2B",
              description: "Pannello admin, inventario, tool per customer support interno? Imbattibile per velocità.",
              icon: Building2
            },
            {
              title: "MVP Solidi",
              description: "Lanciare un SaaS con logica dati robusta (utenti, pagamenti, dati privati) fin dal giorno 1.",
              icon: Briefcase
            },
            {
              title: "Automazione Processi",
              description: "Digitalizzare un processo che oggi fai su Excel + Email.",
              icon: Plug
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-phase-5/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-5 w-5 text-phase-5" />
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
              title: "Il Costo dei 'Messaggi'",
              description: "Ogni modifica consuma crediti. Per 'tuning' fine (sposta 2px, cambia colore), bruci crediti preziosi meglio usati per la logica."
            },
            {
              title: "Meno 'Design-First' di Lovable",
              description: "Lovable o V0 creano interfacce esteticamente sbalorditive. Base44 crea UI funzionali, pulite, ma con look più 'aziendale' o standard."
            },
            {
              title: "Complessità Crescente",
              description: "Se la logica diventa iperspecifica (algoritmi matematici complessi lato server), potresti trovare limiti che richiedono intervento manuale sul codice."
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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-phase-5/15">
            <CreditCard className="h-5 w-5 text-phase-5" />
          </div>
          <h2 className="text-2xl font-semibold">Prezzi e Piani</h2>
        </div>

        <div className="p-4 rounded-xl bg-muted/30 border border-border/50 mb-4">
          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Nota:</span> Il pricing scala con l'uso. 
              Ogni piano è basato sui <span className="text-phase-5 font-medium">messaggi mensili</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Free */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Free</h3>
            <p className="text-xl font-bold text-muted-foreground mb-3">~25 msg<span className="text-sm font-normal">/mese</span></p>
            <p className="text-xs text-muted-foreground">Solo per provare. Non ci costruisci nulla di serio.</p>
          </div>

          {/* Starter */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Starter</h3>
            <p className="text-xl font-bold text-phase-5 mb-1">~$16-20<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <p className="text-sm text-muted-foreground mb-2">100 messaggi</p>
            <p className="text-xs text-muted-foreground">Piccoli progetti personali o prototipi veloci.</p>
          </div>

          {/* Builder */}
          <div className="relative overflow-hidden rounded-xl border border-phase-5/50 bg-gradient-to-br from-phase-5/10 to-transparent p-5">
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-phase-5/20 text-phase-5">
                Popolare
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Builder</h3>
            <p className="text-xl font-bold text-phase-5 mb-1">~$40<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <p className="text-sm text-muted-foreground mb-2">250 messaggi</p>
            <p className="text-xs text-muted-foreground">Per lavorarci diverse ore a settimana.</p>
          </div>

          {/* Pro */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5">
            <h3 className="text-lg font-semibold mb-1">Pro</h3>
            <p className="text-xl font-bold text-phase-5 mb-1">~$80<span className="text-sm font-normal text-muted-foreground">/mese</span></p>
            <p className="text-sm text-muted-foreground mb-2">500 messaggi</p>
            <p className="text-xs text-muted-foreground">Strumento di lavoro principale per lanciare prodotti.</p>
          </div>
        </div>
      </div>

      {/* Verdetto Finale */}
      <div className="relative overflow-hidden rounded-2xl border border-phase-5/30 bg-gradient-to-br from-phase-5/10 via-card to-card p-8">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-phase-5/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phase-5/20">
              <Layers className="h-6 w-6 text-phase-5" />
            </div>
            <h2 className="text-2xl font-bold">Verdetto Finale</h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dove si colloca nella tua cassetta degli attrezzi?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="font-medium text-foreground mb-2">Usa Lovable se...</h4>
                <p className="text-sm text-muted-foreground">
                  Vuoi fare un'app <span className="text-foreground">B2C bellissima</span> (tipo Airbnb o Instagram) 
                  e l'estetica è tutto.
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-phase-5/10 border border-phase-5/30">
                <h4 className="font-medium text-phase-5 mb-2">Usa Base44 se...</h4>
                <p className="text-sm text-muted-foreground">
                  Devi fare un'app <span className="text-phase-5 font-medium">B2B o aziendale</span> (CRM, Gestionale, Dashboard) 
                  dove struttura dati e permessi contano più dei "fuochi d'artificio".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <Wrench className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">In sintesi:</span> Base44 è il costruttore 
                <span className="text-phase-5 font-medium"> "serio" per il business</span>. 
                Meno glamour, più sostanza strutturale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
