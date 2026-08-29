import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CoreSolutions } from "@/components/home/CoreSolutions";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { InteractiveDemo } from "@/components/home/InteractiveDemo";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { TechStack } from "@/components/home/TechStack";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CoreSolutions />
      <FeaturesGrid />
      <DashboardPreview />
      <InteractiveDemo />
      <WhyItMatters />
      <TechStack />
      <FAQ />
      <Footer />
    </main>
  );
}
