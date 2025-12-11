import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy — PeakEdge IT Solutions</title>
        <meta name="description" content="Read PeakEdge's privacy policy to understand how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.peakedgeit.com/privacy" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/80">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                PeakEdge IT Solutions LLC ("we," "our," or "us") respects your privacy and is committed 
                to protecting your personal data. This privacy policy explains how we collect, use, 
                and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company information</li>
                <li>Information you provide through our contact forms</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (how you interact with our website)</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong> info@peakedgeit.com<br />
                <strong>Phone:</strong> (469) 666-8246<br />
                <strong>Address:</strong> 1021 E Lincolnway, Cheyenne, WY 82001
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;