import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, TrendingUp } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, value: "100+", label: "IT Consultants" },
    { icon: Briefcase, value: "50+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 border border-card/20 text-card text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Innovating Beyond Limits
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-card leading-tight mb-6 animate-fade-up delay-100">
            Transform Your Business with
            <span className="text-gradient"> Expert IT Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-card/70 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Peakedge IT Solutions delivers cutting-edge technology consulting, staffing, and managed services 
            to help businesses scale and succeed in the digital age.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 animate-fade-up delay-400">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="flex flex-col items-center p-6 rounded-2xl bg-card/5 border border-card/10 backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 text-accent mb-3" />
                <span className="text-3xl lg:text-4xl font-heading font-bold text-card mb-1">
                  {stat.value}
                </span>
                <span className="text-card/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
