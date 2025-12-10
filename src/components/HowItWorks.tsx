import { FileText, Search, Users, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Share Your Requirements",
      description: "Tell us about your project, team culture, and the skills you need. We'll create a detailed profile to find the perfect match.",
    },
    {
      icon: Search,
      step: "02",
      title: "We Source & Screen",
      description: "Our recruiters tap into our extensive network and thoroughly vet candidates based on your specific criteria.",
    },
    {
      icon: Users,
      step: "03",
      title: "Review Top Candidates",
      description: "Receive a shortlist of pre-qualified candidates. Review profiles, portfolios, and interview the ones you like.",
    },
    {
      icon: Handshake,
      step: "04",
      title: "Make Your Hire",
      description: "Choose your ideal candidate. We handle all the paperwork and ensure a smooth onboarding process.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process gets you from requirement to hire in the shortest time possible.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border shadow-soft text-center group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
