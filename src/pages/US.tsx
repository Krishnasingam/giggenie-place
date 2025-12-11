import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail, Building2, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const US = () => {
  const benefits = [
    "On-shore support for US-based projects",
    "Local compliance and legal entity",
    "Same timezone collaboration",
    "Enterprise-grade security standards",
    "Direct communication with US team",
    "Quick contract and onboarding",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>PeakEdge IT Solutions LLC — USA | IT Services & Staffing</title>
        <meta name="description" content="PeakEdge IT Solutions LLC delivers top-tier IT staffing and services across the USA. Based in Cheyenne, Wyoming, we provide software engineering, cloud, data and AI solutions." />
        <link rel="canonical" href="https://www.peakedgeit.com/us" />
        <meta property="og:title" content="PeakEdge IT Solutions LLC — USA" />
        <meta property="og:description" content="Top-tier IT staffing and services across the USA. Software engineering, cloud, data and AI solutions." />
        <meta property="og:url" content="https://www.peakedgeit.com/us" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                🇺🇸 United States
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                PeakEdge IT Solutions LLC
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Your trusted partner for IT staffing and technology solutions in the United States. 
                We deliver exceptional talent and services with local expertise and global capabilities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Hire Talent in USA
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="/#services">
                  <Button variant="heroOutline" size="xl">
                    View Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Office Info Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Office Details */}
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Our US Headquarters
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Serving Clients Across America
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Based in Cheyenne, Wyoming, PeakEdge IT Solutions LLC serves enterprise clients 
                  across the United States. Our local presence ensures compliance, seamless communication, 
                  and rapid deployment of IT talent and solutions.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">1021 E Lincolnway, Cheyenne, WY 82001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+1-469-666-8246" className="text-muted-foreground hover:text-primary transition-colors">
                        (469) 666-8246
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@peakedgeit.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@peakedgeit.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-medium border border-border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4739837699!2d-104.8024!3d41.1399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3f69d8afe0b7%3A0x5a88e8f8a8a8a8a8!2s1021%20E%20Lincolnway%2C%20Cheyenne%2C%20WY%2082001!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PeakEdge USA Office Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why Work With Our US Team?
              </h2>
              <p className="text-muted-foreground text-lg">
                Local expertise combined with global delivery capabilities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Start Your US Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default US;