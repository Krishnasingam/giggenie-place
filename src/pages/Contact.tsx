import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    office: "",
    message: "",
  });

  // Scroll to section based on hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOfficeChange = (value: string) => {
    setFormData({ ...formData, office: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", office: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact PeakEdge IT Solutions | IT Staffing & Consulting Inquiries</title>
        <meta name="description" content="Contact PeakEdge IT Solutions LLC for IT staffing, C2C arrangements, software development, and consulting services. USA office: (469) 666-8246. India office in Hyderabad. 24-hour response." />
        <meta name="keywords" content="contact PeakEdge, IT staffing inquiry, C2C staffing contact, IT consulting contact, PeakEdge IT Solutions contact, hire IT consultants, software development inquiry, USA IT staffing, India IT services" />
        <link rel="canonical" href="https://www.peakedgeit.com/contact" />
        <meta property="og:title" content="Contact PeakEdge IT Solutions | IT Staffing Inquiries" />
        <meta property="og:description" content="Contact PeakEdge IT Solutions LLC for IT staffing and consulting. USA office: (469) 666-8246. India delivery center in Hyderabad. We respond within 24 hours." />
        <meta property="og:url" content="https://www.peakedgeit.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              We Respond Within 24 Hours
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Contact PeakEdge IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Ready to discuss IT staffing, C2C arrangements, software development, or consulting services? 
              Reach out to our USA or India offices. PeakEdge IT Solutions LLC is here to help 
              you build your dream technology team.
            </p>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Office Locations
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                PeakEdge IT Solutions Offices
              </h2>
              <p className="text-muted-foreground text-lg">
                Contact our US headquarters for North American IT staffing and consulting, 
                or reach our India delivery center for offshore development services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {/* USA Office */}
              <div id="usa" className="scroll-mt-24 p-8 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="text-xs font-medium text-primary uppercase tracking-wider mb-2">United States</h3>
                <h2 className="font-heading font-bold text-xl text-foreground mb-4">
                  PeakEdge IT Solutions LLC
                </h2>
                
                <div className="space-y-3 mb-6">
                  <a
                    href="https://maps.google.com/?q=1021+E+Lincolnway,+Cheyenne,+WY+82001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>1021 E Lincolnway, Cheyenne, WY 82001, United States</span>
                  </a>
                  <a
                    href="tel:+1-469-666-8246"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(469) 666-8246</span>
                  </a>
                  <a
                    href="mailto:info@peakedgeit.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@peakedgeit.com</span>
                  </a>
                </div>
                <div className="rounded-xl overflow-hidden h-48 border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4739837699!2d-104.8024!3d41.1399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3f69d8afe0b7%3A0x5a88e8f8a8a8a8a8!2s1021%20E%20Lincolnway%2C%20Cheyenne%2C%20WY%2082001!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="USA Office Map"
                  />
                </div>
              </div>

              {/* India Office */}
              <div id="india" className="scroll-mt-24 p-8 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="text-xs font-medium text-primary uppercase tracking-wider mb-2">India</h3>
                <h2 className="font-heading font-bold text-xl text-foreground mb-4">
                  PeakEdge Solutions Pvt Ltd
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                  <a
                    href="mailto:info@peakedgeit.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@peakedgeit.com</span>
                  </a>
                </div>
                <div className="rounded-xl overflow-hidden h-48 border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698779377!2d78.24323!3d17.4123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="India Office Map"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-soft border border-border">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block text-center">
                  IT Staffing & Consulting Inquiry
                </span>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2 text-center">
                  Request IT Services from PeakEdge
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Tell us about your IT staffing needs, C2C requirements, or consulting project. 
                  Our team responds within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office">Which office would you like to contact?</Label>
                    <Select value={formData.office} onValueChange={handleOfficeChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an office" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">USA Office</SelectItem>
                        <SelectItem value="india">India Office</SelectItem>
                        <SelectItem value="both">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      required
                      maxLength={2000}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
