import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { InteractiveHub } from "@/components/landing/InteractiveHub";
import { FeaturesCompact } from "@/components/landing/FeaturesCompact";
import { WorkflowTimeline } from "@/components/landing/WorkflowTimeline";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <HeroSection />
        <InteractiveHub />
        <FeaturesCompact />
        <WorkflowTimeline />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
