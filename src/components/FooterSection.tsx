import { MapPin, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Village Fest</h3>
            <p className="font-body text-background/70 text-sm leading-relaxed">
              Celebrating community, craft, and culture since 1987. Join us every spring for a weekend you'll never forget.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="font-body text-sm space-y-2 text-background/70">
              <li className="hover:text-accent cursor-pointer transition-colors">Schedule</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Vendors</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Volunteer</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Sponsors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <div className="space-y-3 font-body text-sm text-background/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Greenfield Village Square</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@villagefest.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-background/50">
            © 2026 Village Fest. Made with ♥ by the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
