import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/peakedge-logo.png";

const Footer = () => {
  const footerLinks = {
    navigation: [
      { label: "Services", href: "/#services" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    locations: [
      { label: "USA Office", href: "/us" },
      { label: "India Office", href: "/in" },
    ],
    resources: [
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src={logo} alt="PeakEdge" className="h-14 w-auto rounded-lg" />
            </Link>
            <p className="text-background/70 mb-6 text-sm">
              Global IT Services & Staffing — Delivering excellence from India & USA
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/peakedge-it-solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* USA Office */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              🇺🇸 USA Office
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-background/90 font-medium">PeakEdge IT Solutions LLC</p>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1021 E Lincolnway, Cheyenne, WY 82001</span>
              </div>
              <a href="tel:+1-469-666-8246" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span>(469) 666-8246</span>
              </a>
              <a href="mailto:info@peakedgeit.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@peakedgeit.com</span>
              </a>
            </div>
          </div>

          {/* India Office */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              🇮🇳 India Office
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-background/90 font-medium">PeakEdge Solutions Pvt Ltd</p>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <a href="mailto:info@peakedgeit.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@peakedgeit.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.href.endsWith(".xml") ? (
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PeakEdge IT Solutions LLC (USA) | PeakEdge Solutions Pvt Ltd (India). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;