import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Mail, Building2, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const India = () => {
  const benefits = [
    "Cost-effective solutions without compromise",
    "Large pool of skilled IT professionals",
    "24/7 global delivery support",
    "Strong technical expertise",
    "Scalable team augmentation",
    "Proven offshore delivery model",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>PeakEdge Solutions Pvt Ltd — India | IT Services & Staffing</title>
        <meta name="description" content="PeakEdge Solutions Pvt Ltd delivers world-class IT staffing and services from Hyderabad, India. Software engineering, cloud, data and AI solutions with global delivery capabilities." />
        <link rel="canonical" href="https://www.peakedgeit.com/in" />
        <meta property="og:title" content="PeakEdge Solutions Pvt Ltd — India" />
        <meta property="og:description" content="World-class IT staffing and services from Hyderabad, India. Software engineering, cloud, data and AI solutions." />
        <meta property="og:url" content="https://www.peakedgeit.com/in" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                🇮🇳 India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                PeakEdge Solutions Pvt Ltd
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Your gateway to world-class IT talent and services from India's technology hub. 
                Hyderabad-based delivery center with global standards and local excellence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Hire Talent in India
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
                  Our India Delivery Center
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Excellence from Hyderabad
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Located in Hyderabad, one of India's premier IT hubs, PeakEdge Solutions Pvt Ltd 
                  leverages the city's rich talent pool and technological infrastructure to deliver 
                  world-class services to clients globally.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698779377!2d78.24323!3d17.4123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PeakEdge India Office Location"
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
                Why Work With Our India Team?
              </h2>
              <p className="text-muted-foreground text-lg">
                Access world-class talent at competitive rates
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
                  Start Your India Project
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

export default India;