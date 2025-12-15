import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Heart, Rocket, Users, Building2, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import aboutTeam from "@/assets/about-team.jpg";
import globalOffices from "@/assets/global-offices.jpg";

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
        <title>About PeakEdge IT Solutions LLC | US IT Staffing & Consulting Company</title>
        <meta name="description" content="PeakEdge IT Solutions LLC is a leading IT staffing and consulting company with offices in USA and India. 12+ years delivering software development, cloud, AI & data analytics solutions to Fortune 500 enterprises." />
        <meta name="keywords" content="PeakEdge IT Solutions, PeakEdge IT Solutions LLC, PeakEdge Solutions Pvt Ltd, IT staffing company, IT consulting firm, software development company USA, cloud consulting, data analytics, AI solutions, enterprise IT services" />
        <link rel="canonical" href="https://www.peakedgeit.com/about" />
        <meta property="og:title" content="About PeakEdge IT Solutions LLC | US IT Staffing & Consulting" />
        <meta property="og:description" content="Leading IT staffing and consulting company with 12+ years experience. PeakEdge IT Solutions LLC (USA) and PeakEdge Solutions Pvt Ltd (India) deliver enterprise-grade technology solutions." />
        <meta property="og:url" content="https://www.peakedgeit.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-hero overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={aboutTeam} 
              alt="PeakEdge team meeting" 
              className="w-full h-full object-cover opacity-20"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                Trusted IT Staffing Partner Since 2012
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                About PeakEdge IT Solutions
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                PeakEdge IT Solutions LLC is a premier IT services and staffing company delivering 
                enterprise-grade technology solutions. With offices in the USA and India, we combine 
                onshore reliability with offshore scalability for Fortune 500 enterprises.
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
                  Empowering Enterprises Through IT Staffing & Consulting
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  At PeakEdge IT Solutions LLC, our mission is to bridge the gap between exceptional 
                  IT talent and organizations seeking to innovate and grow. We specialize in US IT staffing, 
                  contract and full-time hiring, C2C staffing arrangements, and comprehensive IT consulting 
                  services that accelerate digital transformation.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  Our team of 100+ pre-vetted IT consultants delivers expertise across software development, 
                  cloud migration (AWS, Azure, GCP), data analytics, AI & machine learning, and ERP/SAP 
                  consulting. Whether you need skilled developers for short-term projects or dedicated 
                  teams for enterprise implementations, PeakEdge Staffing delivers qualified candidates 
                  within 48 hours.
                </p>
                <p className="text-muted-foreground text-lg">
                  With over 12 years of experience serving startups to Fortune 500 companies, 
                  PeakEdge Solutions Private Limited has built a reputation for excellence, reliability, 
                  and a 99% client satisfaction rate across industries including healthcare, finance, 
                  retail, and technology.
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
        <section className="relative py-16 lg:py-24 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={globalOffices} 
              alt="Global offices - USA and India" 
              className="w-full h-full object-cover opacity-10"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Global IT Delivery Centers
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                US & India Office Locations
              </h2>
              <p className="text-muted-foreground text-lg">
                Two strategic locations enabling 24/7 support, cost-effective delivery, and seamless 
                collaboration for clients across North America and worldwide.
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
                  Our US headquarters handles client relationships, contract IT staffing, C2C arrangements, 
                  project management, and compliance requirements. We ensure seamless communication and 
                  enterprise-grade service delivery for North American clients.
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
                  Our India delivery center in Hyderabad, Telangana leverages the city's exceptional 
                  talent pool for software development, cloud engineering, data analytics, and AI/ML 
                  solutions. PeakEdge Solutions Private Limited provides cost-effective, high-quality 
                  offshore and remote IT services to clients worldwide.
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
                What Drives PeakEdge IT Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide every IT staffing engagement, consulting project, 
                and client relationship at PeakEdge.
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
                  Hybrid IT Delivery Model
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Onshore & Offshore IT Staffing Approach
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  PeakEdge IT Solutions operates on a hybrid delivery model that combines the best of 
                  onshore and offshore IT staffing. Our approach balances the reliability and compliance 
                  of US-based operations with the scalability and cost-effectiveness of our India 
                  delivery center.
                </p>
                <p className="mb-6">
                  Our PeakEdge IT Solutions LLC team in the USA handles client relationships, contract 
                  negotiations, project management, and compliance requirements for C2C staffing and 
                  direct placements. Meanwhile, PeakEdge Solutions Pvt Ltd in Hyderabad provides the 
                  technical expertise in software development, cloud consulting, data analytics, and 
                  AI/ML implementation.
                </p>
                <p>
                  This hybrid IT staffing model ensures that our enterprise clients receive consistent, 
                  high-quality service with 24/7 support coverage, flexible engagement models, and the 
                  ability to scale teams up or down based on project requirements. Whether you need 
                  onsite consultants, remote IT professionals, or a blended team, PeakEdge delivers.
                </p>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Partner With PeakEdge IT Solutions
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
