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
      <Sidebar activePhase={activePhase} onPhaseChange={setActivePhase} />
      
      <main className="pl-64">
        <Header activePhase={activePhase} />
        <div className="container max-w-4xl py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
