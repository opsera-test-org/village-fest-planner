import { Music, UtensilsCrossed, Palette, TreePine, PartyPopper, Flame } from "lucide-react";
import EventCard from "./EventCard";

const events = [
  {
    icon: Music,
    title: "Folk Music Stage",
    time: "Sat 10:00 AM",
    description: "Live performances from local and regional folk bands throughout the day.",
  },
  {
    icon: UtensilsCrossed,
    title: "Harvest Feast",
    time: "Sat 1:00 PM",
    description: "A communal farm-to-table lunch featuring seasonal produce from local farms.",
  },
  {
    icon: Palette,
    title: "Artisan Market",
    time: "All Weekend",
    description: "Browse handmade crafts, pottery, woven goods, and local artwork.",
  },
  {
    icon: TreePine,
    title: "Nature Walk",
    time: "Sun 9:00 AM",
    description: "Guided walk through the village trails discovering local flora and fauna.",
  },
  {
    icon: PartyPopper,
    title: "Kids' Carnival",
    time: "Sat & Sun",
    description: "Face painting, puppet shows, pony rides, and games for the little ones.",
  },
  {
    icon: Flame,
    title: "Bonfire Night",
    time: "Sat 8:00 PM",
    description: "Stories, songs, and s'mores around a grand bonfire under the stars.",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-primary text-sm mb-2">What's Happening</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Festival Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
