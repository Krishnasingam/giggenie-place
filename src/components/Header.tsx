import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/peakedge-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="PeakEdge IT Solutions - Global IT Services & Staffing" 
              className="h-12 w-auto" 
              width={123} 
              height={48} 
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium ${
                    isActive(link.href) ? "text-foreground" : ""
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium ${
                    isActive(link.href) ? "text-foreground" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button variant="default" size="sm">Get in Touch</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-border">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="default" className="w-full">Get in Touch</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
