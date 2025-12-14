import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Heart, Rocket, Users, Building2, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every engagement, delivering solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency and honesty, building trust with our clients and partners.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to drive transformative results.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About PeakEdge — Global IT Services & Staffing Company</title>
        <meta name="description" content="Learn about PeakEdge, a global IT services and staffing company with offices in USA and India. Delivering software engineering, cloud, data and AI solutions worldwide." />
        <link rel="canonical" href="https://www.peakedgeit.com/about" />
        <meta property="og:title" content="About PeakEdge — Global IT Services & Staffing" />
        <meta property="og:description" content="Global IT services and staffing company with offices in USA and India." />
        <meta property="og:url" content="https://www.peakedgeit.com/about" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                About PeakEdge
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                A global technology company committed to delivering exceptional IT services 
                and staffing solutions from our offices in USA and India.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Empowering Businesses Through Technology
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  At PeakEdge, our mission is to bridge the gap between exceptional IT talent 
                  and organizations seeking to innovate and grow. We leverage our global presence 
                  to deliver world-class solutions that drive business transformation.
                </p>
                <p className="text-muted-foreground text-lg">
                  With over a decade of experience in IT services and staffing, we've built 
                  a reputation for excellence, reliability, and client-centric delivery across 
                  industries ranging from startups to Fortune 500 companies.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                  <Globe className="w-10 h-10 mb-4" />
                  <h3 className="text-3xl font-heading font-bold mb-2">2</h3>
                  <p className="text-primary-foreground/80">Global Offices</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">100+</h3>
                  <p className="text-muted-foreground">IT Consultants</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">50+</h3>
                  <p className="text-muted-foreground">Enterprise Clients</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                  <Target className="w-10 h-10 mb-4" />
                  <h3 className="text-3xl font-heading font-bold mb-2">99%</h3>
                  <p className="text-primary-foreground/80">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Global Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Offices
              </h2>
              <p className="text-muted-foreground text-lg">
                Two offices, one mission — delivering excellence across borders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* USA Office */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🇺🇸</span>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    USA Office
                  </h3>
                </div>
                <p className="text-sm font-semibold text-foreground mb-3">PeakEdge IT Solutions LLC</p>
                <p className="text-muted-foreground mb-4">
                  Our US headquarters serves as the primary point of contact for North American 
                  clients, ensuring local compliance, seamless communication, and enterprise-grade 
                  service delivery.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>1021 E Lincolnway, Cheyenne, WY 82001, United States</span>
                  </div>
                  <a href="tel:+1-469-666-8246" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>(469) 666-8246</span>
                  </a>
                  <a href="mailto:info@peakedgeit.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@peakedgeit.com</span>
                  </a>
                </div>
              </div>

              {/* India Office */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🇮🇳</span>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    India Office
                  </h3>
                </div>
                <p className="text-sm font-semibold text-foreground mb-3">PeakEdge Solutions Pvt Ltd</p>
                <p className="text-muted-foreground mb-4">
                  Our India delivery center in Hyderabad leverages the city's rich talent pool 
                  and technological infrastructure to provide cost-effective, high-quality solutions 
                  to clients worldwide.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                  <a href="mailto:info@peakedgeit.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@peakedgeit.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Approach Section */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  How We Work
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Our Delivery Approach
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  PeakEdge operates on a hybrid delivery model that combines the best of both worlds — 
                  the reliability and compliance of on-shore operations with the scalability and 
                  cost-effectiveness of offshore delivery.
                </p>
                <p className="mb-6">
                  Our US team handles client relationships, project management, and compliance 
                  requirements, while our India team provides the technical expertise and 
                  execution capabilities needed for successful project delivery.
                </p>
                <p>
                  This approach ensures that our clients receive consistent, high-quality service 
                  regardless of where the work is performed, with the flexibility to scale teams 
                  up or down based on project requirements.
                </p>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Get Started With PeakEdge
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
