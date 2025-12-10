import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-6">
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Whether you need one developer or an entire engineering team, 
                we're here to help. Let's discuss your requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-accent-foreground hover:bg-accent-foreground/10"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className="lg:pl-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-accent-foreground/10">
                  <div className="w-12 h-12 rounded-lg bg-accent-foreground/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-accent-foreground/60 text-sm">Email Us</p>
                    <a 
                      href="mailto:hello@techtalent.com" 
                      className="text-accent-foreground font-semibold hover:underline"
                    >
                      hello@techtalent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-accent-foreground/10">
                  <div className="w-12 h-12 rounded-lg bg-accent-foreground/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-accent-foreground/60 text-sm">Call Us</p>
                    <a 
                      href="tel:+1-555-123-4567" 
                      className="text-accent-foreground font-semibold hover:underline"
                    >
                      +1 (555) 123-4567
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
