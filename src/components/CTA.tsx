import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-accent p-10 lg:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Whether you need one developer or an entire engineering team, 
                we're here to help. Let's discuss your requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+1-469-666-8246">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Schedule a Call
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className="lg:pl-10">
              <div className="space-y-4">
                {/* USA Office */}
                <div className="p-4 rounded-xl bg-primary-foreground/10">
                  <p className="text-primary-foreground font-semibold mb-2 flex items-center gap-2">
                    🇺🇸 USA Office
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>1021 E Lincolnway, Cheyenne, WY 82001</span>
                    </div>
                    <a href="tel:+1-469-666-8246" className="flex items-center gap-2 text-primary-foreground/80 text-sm hover:text-primary-foreground">
                      <Phone className="w-4 h-4" />
                      <span>(469) 666-8246</span>
                    </a>
                  </div>
                </div>

                {/* India Office */}
                <div className="p-4 rounded-xl bg-primary-foreground/10">
                  <p className="text-primary-foreground font-semibold mb-2 flex items-center gap-2">
                    🇮🇳 India Office
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad, Telangana, India</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">Email Us</p>
                    <a 
                      href="mailto:info@peakedgeit.com" 
                      className="text-primary-foreground font-semibold hover:underline"
                    >
                      info@peakedgeit.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;