import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MethodSection from "@/components/sections/MethodSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechSection from "@/components/sections/TechSection";
import FilteringSection from "@/components/sections/FilteringSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MethodSection />
      <ProcessSection />
      <TechSection />
      <FilteringSection />
      <ResultsSection />
      <FooterCTA />
    </main>
  );
}