import { motion } from "framer-motion";
import { Store, Cookie, Flower2, Shirt } from "lucide-react";

const stalls = [
  { icon: Cookie, name: "Baker's Corner", desc: "Fresh bread, pies & pastries" },
  { icon: Store, name: "Farm Fresh", desc: "Organic produce & preserves" },
  { icon: Flower2, name: "Garden Blooms", desc: "Bouquets & potted plants" },
  { icon: Shirt, name: "Weaver's Loom", desc: "Handwoven textiles & scarves" },
];

const StallsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-secondary text-sm mb-2">
            Browse & Shop
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Village Stalls
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stalls.map((stall, i) => (
            <motion.div
              key={stall.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-lg p-6 text-center border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <stall.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{stall.name}</h3>
              <p className="font-body text-sm text-muted-foreground">{stall.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StallsSection;
