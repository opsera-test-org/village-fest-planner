import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  icon: LucideIcon;
  title: string;
  time: string;
  description: string;
  index: number;
}

const EventCard = ({ icon: Icon, title, time, description, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-sm font-body font-medium text-primary mb-1">{time}</p>
      <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default EventCard;
