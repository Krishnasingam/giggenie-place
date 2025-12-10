import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/peakedge-logo.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "#" },
    ],
    services: [
      { label: "Contract Staffing", href: "#" },
      { label: "Direct Hire", href: "#" },
      { label: "Executive Search", href: "#" },
      { label: "RPO Solutions", href: "#" },
    ],
    resources: [
      { label: "Job Board", href: "#" },
      { label: "Salary Guide", href: "#" },
      { label: "Industry Insights", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center mb-6">
              <img src={logo} alt="Peakedge IT Solutions" className="h-14 w-auto rounded-lg" />
            </a>
            <p className="text-primary-foreground/70 mb-4 max-w-xs">
              Innovating Beyond Limits
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@peakedgeit.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@peakedgeit.com</span>
              </a>
              <a href="tel:+1-469-917-1680" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(469) 917-1680</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">1021 E Lincolnway Suite #9247, Cheyenne, Wyoming 82001, United States</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/peakedge-it-solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Peakedge IT Solutions LLC. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Made with passion for connecting talent with opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
