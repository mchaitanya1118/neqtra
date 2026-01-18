import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { WorkflowVisualizer } from "@/components/sections/WorkflowVisualizer";
import { GradientMouseTrail } from "@/components/ui/GradientMouseTrail";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OnePromptSection } from "@/components/sections/OnePromptSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <GradientMouseTrail />
      <Navbar />
      <main>
        <Hero />
        <OnePromptSection />
        <HowItWorks />
        <WorkflowVisualizer />
        <FeatureGrid />
      </main>

      <Footer />
    </div>
  );
}
