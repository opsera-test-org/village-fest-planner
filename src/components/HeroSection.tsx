import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-village.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-4">
            Annual Celebration
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Village Fest
            <span className="block text-gradient-warm text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold">
              2026
            </span>
          </h1>
          <p className="font-body text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Join us for a magical weekend of folk music, artisan crafts,
            harvest feasts, and community spirit in the heart of our village.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-body">March 14–16, 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/40" />
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-body">Greenfield Village Square</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-body font-semibold text-accent-foreground text-lg"
            style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-warm)" }}
          >
            Get Your Tickets
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative bunting */}
      <div className="absolute top-0 left-0 right-0 h-8 opacity-40">
        <svg viewBox="0 0 1200 40" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 Q60,35 120,0 Q180,35 240,0 Q300,35 360,0 Q420,35 480,0 Q540,35 600,0 Q660,35 720,0 Q780,35 840,0 Q900,35 960,0 Q1020,35 1080,0 Q1140,35 1200,0" fill="none" stroke="hsl(28 80% 52%)" strokeWidth="3"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
