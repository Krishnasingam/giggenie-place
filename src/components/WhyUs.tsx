import { CheckCircle, Clock, Award, Headphones, Globe, Shield } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import servicesBg from "@/assets/services-bg.jpg";

const WhyUs = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const statsAnimation = useScrollAnimation({ threshold: 0.2 });
  const gridAnimation = useScrollAnimation({ threshold: 0.1 });

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
    <section id="why-us" className="relative py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={servicesBg} 
          alt="" 
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose PeakEdge for IT Consulting
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Trusted IT Staffing Partner for
            <span className="text-gradient"> US Enterprises</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            PeakEdge IT Solutions LLC combines onshore reliability with offshore scalability. 
            With 12+ years of experience, we deliver pre-vetted IT talent and consulting services 
            that drive digital transformation.
          </p>
        </div>

        {/* Stats Row */}
        <div 
          ref={statsAnimation.ref}
          className={`flex flex-wrap justify-center gap-8 p-8 rounded-2xl bg-card border border-border shadow-soft mb-16 scroll-scale-in ${statsAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center px-6 hover-scale cursor-default">
            <span className="text-3xl font-heading font-bold text-foreground">12+</span>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center px-6 hover-scale cursor-default">
            <span className="text-3xl font-heading font-bold text-foreground">48h</span>
            <p className="text-sm text-muted-foreground">Avg. Response Time</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center px-6 hover-scale cursor-default">
            <span className="text-3xl font-heading font-bold text-foreground">99%</span>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center px-6 hover-scale cursor-default">
            <span className="text-3xl font-heading font-bold text-foreground">2</span>
            <p className="text-sm text-muted-foreground">Global Offices</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div 
          ref={gridAnimation.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group p-6 rounded-2xl bg-card border border-border shadow-soft card-animate scroll-fade-up stagger-${index + 1} ${gridAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary icon-bounce" />
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
