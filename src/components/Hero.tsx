import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-32 lg:pt-40 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-8 animate-fade-up">
            <Globe className="w-4 h-4" />
            Global IT Services • USA & India
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            PeakEdge — Global IT
            <span className="text-gradient"> Services & Staffing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 animate-fade-up delay-200">
            Delivering staffing, software engineering, cloud, data, and AI solutions 
            from our USA and India offices.
          </p>

          {/* Modern CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="/#services">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </a>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 animate-fade-up delay-400">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-1">
                2
              </span>
              <span className="text-primary-foreground/60 text-sm">Global Offices</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <Users className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-1">
                100+
              </span>
              <span className="text-primary-foreground/60 text-sm">IT Consultants</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <Building2 className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-1">
                50+
              </span>
              <span className="text-primary-foreground/60 text-sm">Enterprise Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
