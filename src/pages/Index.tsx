import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import StallsSection from "@/components/StallsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventsSection />
      <StallsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
