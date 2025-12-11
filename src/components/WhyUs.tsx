import { CheckCircle, Clock, Award, Headphones, Globe, Shield } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Delivery",
      description: "Leverage our presence in USA and India for round-the-clock support and cost-effective solutions with no compromise on quality.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get qualified candidates within 48 hours. Our extensive network means we can move quickly without sacrificing quality.",
    },
    {
      icon: Award,
      title: "Pre-Vetted Talent",
      description: "Every candidate goes through rigorous technical assessments and soft skills evaluation before reaching you.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Your personal account manager ensures smooth communication and handles all the details throughout the hiring process.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "If a placement doesn't work out within the first 90 days, we'll find a replacement at no additional cost.",
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 12 years of experience delivering successful IT solutions to enterprises across multiple industries.",
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose
            <span className="text-gradient"> PeakEdge</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            With over a decade of experience in IT services and staffing, we've refined our process 
            to deliver exceptional results every time. Here's what sets us apart.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 p-8 rounded-2xl bg-card border border-border shadow-soft mb-16">
          <div className="text-center px-6">
            <span className="text-3xl font-heading font-bold text-foreground">12+</span>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center px-6">
            <span className="text-3xl font-heading font-bold text-foreground">48h</span>
            <p className="text-sm text-muted-foreground">Avg. Response Time</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center px-6">
            <span className="text-3xl font-heading font-bold text-foreground">99%</span>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center px-6">
            <span className="text-3xl font-heading font-bold text-foreground">2</span>
            <p className="text-sm text-muted-foreground">Global Offices</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;