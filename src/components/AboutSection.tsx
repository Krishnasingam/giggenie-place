import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Globe, Award } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const sectionAnimation = useScrollAnimation({ threshold: 0.2 });
  const statsAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - SEO Paragraph */}
          <div 
            ref={sectionAnimation.ref}
            className={`scroll-fade-up ${sectionAnimation.isVisible ? 'visible' : ''}`}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About PeakEdge IT Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Global Delivery from USA & India Offices
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                PeakEdge IT Solutions LLC is a leading IT services and staffing company delivering 
                enterprise-grade technology solutions to businesses across the United States and globally. 
                With offices in the USA (PeakEdge IT Solutions LLC) and India (PeakEdge Solutions Pvt Ltd), 
                we combine onshore reliability with offshore scalability.
              </p>
              <p>
                Our core offerings include US IT staffing, contract and full-time hiring, C2C staffing, 
                software development, cloud migration, data analytics, AI & machine learning solutions, 
                and ERP/SAP consulting. Whether you need skilled IT consultants for short-term projects 
                or dedicated teams for long-term engagements, PeakEdge Staffing delivers pre-vetted talent 
                within 48 hours.
              </p>
              <p>
                At PeakEdge, we partner with startups, mid-market companies, and Fortune 500 enterprises 
                to accelerate digital transformation. Trust PeakEdge Solutions Private Limited for reliable 
                IT services that drive growth and innovation.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="default" size="lg" className="btn-animate group">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div 
            ref={statsAnimation.ref}
            className={`grid grid-cols-2 gap-6 scroll-scale-in ${statsAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground hover-lift">
              <Globe className="w-10 h-10 mb-4" />
              <h3 className="text-3xl font-heading font-bold mb-2">2</h3>
              <p className="text-primary-foreground/80 text-sm">Global Offices</p>
              <p className="text-primary-foreground/60 text-xs mt-1">USA & India</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover-lift">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">100+</h3>
              <p className="text-muted-foreground text-sm">IT Consultants</p>
              <p className="text-muted-foreground/60 text-xs mt-1">Pre-vetted talent</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover-lift">
              <Building2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground text-sm">Enterprise Clients</p>
              <p className="text-muted-foreground/60 text-xs mt-1">Fortune 500 included</p>
            </div>
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground hover-lift">
              <Award className="w-10 h-10 mb-4" />
              <h3 className="text-3xl font-heading font-bold mb-2">99%</h3>
              <p className="text-primary-foreground/80 text-sm">Client Satisfaction</p>
              <p className="text-primary-foreground/60 text-xs mt-1">Industry leading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
