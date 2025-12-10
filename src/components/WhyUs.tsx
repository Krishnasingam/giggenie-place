import { CheckCircle, Clock, Award, Headphones } from "lucide-react";

const WhyUs = () => {
  const benefits = [
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
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "If a placement doesn't work out within the first 90 days, we'll find a replacement at no additional cost.",
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose TechTalent
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              We Make Hiring
              <span className="text-gradient"> Effortless</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over a decade of experience in IT staffing, we've refined our process 
              to deliver exceptional results every time. Here's what sets us apart.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 p-6 rounded-2xl bg-card border border-border shadow-soft">
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-foreground">12+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-foreground">48h</span>
                <p className="text-sm text-muted-foreground">Avg. Response Time</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-foreground">98%</span>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
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
      </div>
    </section>
  );
};

export default WhyUs;
