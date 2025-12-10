import { Code, Cloud, Shield, Database, Smartphone, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack developers, frontend specialists, and backend engineers for your tech stack.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Azure, GCP experts and DevOps engineers to scale your infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security analysts, penetration testers, and compliance specialists.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data scientists, ML engineers, and BI analysts to unlock insights.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "iOS, Android, and cross-platform developers for your mobile needs.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "AI researchers, ML engineers, and NLP specialists for cutting-edge solutions.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            IT Staffing Across All Domains
          </h2>
          <p className="text-muted-foreground text-lg">
            From startups to enterprises, we provide specialized talent across the entire technology spectrum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
