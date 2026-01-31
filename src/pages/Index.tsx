import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { PhaseContent } from "@/components/phases/PhaseContent";
import { CycleView } from "@/components/phases/CycleView";
import { IntroView } from "@/components/phases/IntroView";

const Index = () => {
  const [activePhase, setActivePhase] = useState("intro");

  const renderContent = () => {
    if (activePhase === "intro") {
      return <IntroView onPhaseChange={setActivePhase} />;
    }
    if (activePhase === "cycle") {
      return <CycleView onPhaseChange={setActivePhase} />;
    }
    return <PhaseContent phaseId={activePhase} />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-phase-6/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-phase-7/5 rounded-full blur-3xl" />
      </div>

      <Sidebar activePhase={activePhase} onPhaseChange={setActivePhase} />
      
      <main className="relative pl-64">
        <Header activePhase={activePhase} />
        <div className="container max-w-4xl py-8 pb-16">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
