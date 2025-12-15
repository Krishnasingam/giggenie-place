import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Careers = () => {
  const whyJoinAnimation = useScrollAnimation({ threshold: 0.2 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.1 });
  const positionsHeaderAnimation = useScrollAnimation({ threshold: 0.2 });
  const positionsListAnimation = useScrollAnimation({ threshold: 0.1 });

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote (India/USA)",
      type: "Full-time",
      department: "Engineering",
    },
    {
      title: "Cloud Solutions Architect",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Cloud & DevOps",
    },
    {
      title: "Data Engineer",
      location: "Remote (India/USA)",
      type: "Full-time",
      department: "Data & Analytics",
    },
    {
      title: "Technical Recruiter",
      location: "Cheyenne, WY / Remote",
      type: "Full-time",
      department: "Human Resources",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>IT Careers at PeakEdge | Jobs in Software, Cloud, Data & AI</title>
        <meta name="description" content="Join PeakEdge IT Solutions LLC. We're hiring software developers, cloud architects, data engineers, and IT consultants. Remote, hybrid & onsite jobs in USA and India." />
        <meta name="keywords" content="IT jobs, software developer jobs, cloud architect jobs, data engineer jobs, IT consultant careers, PeakEdge careers, remote IT jobs, tech jobs USA, tech jobs India, IT staffing careers" />
        <link rel="canonical" href="https://www.peakedgeit.com/careers" />
        <meta property="og:title" content="IT Careers at PeakEdge | Software, Cloud & AI Jobs" />
        <meta property="og:description" content="Join PeakEdge IT Solutions. We're hiring software developers, cloud architects, and data engineers. Remote & onsite positions in USA and India." />
        <meta property="og:url" content="https://www.peakedgeit.com/careers" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              Join Our Growing Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
              IT Careers at PeakEdge
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-up delay-200">
              Build your career with PeakEdge IT Solutions LLC. We offer exciting opportunities 
              in software development, cloud architecture, data engineering, and AI/ML for 
              talented professionals in USA and India.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div 
              ref={whyJoinAnimation.ref}
              className={`text-center max-w-3xl mx-auto mb-12 scroll-fade-up ${whyJoinAnimation.isVisible ? 'visible' : ''}`}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why Choose a Career at PeakEdge IT Solutions?
              </h2>
              <p className="text-muted-foreground text-lg">
                PeakEdge offers competitive benefits, flexible remote and hybrid work arrangements, 
                and opportunities to work on cutting-edge projects with enterprise clients worldwide. 
                Join our team of 100+ IT consultants.
              </p>
            </div>

            <div 
              ref={benefitsAnimation.ref}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {[
                { emoji: "🌍", title: "Global IT Projects", desc: "Work with Fortune 500 clients across USA and worldwide" },
                { emoji: "📈", title: "Career Growth", desc: "Clear advancement paths in software, cloud, and data roles" },
                { emoji: "🏠", title: "Remote & Hybrid", desc: "Flexible work options from USA or India offices" },
                { emoji: "💡", title: "Cutting-Edge Tech", desc: "AWS, Azure, AI/ML, and modern development stacks" },
              ].map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className={`group p-6 rounded-2xl bg-card border border-border text-center card-animate scroll-fade-up stagger-${index + 1} ${benefitsAnimation.isVisible ? 'visible' : ''}`}
                >
                  <div className="text-3xl mb-3 icon-bounce">{benefit.emoji}</div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div 
              ref={positionsHeaderAnimation.ref}
              className={`text-center max-w-3xl mx-auto mb-12 scroll-fade-up ${positionsHeaderAnimation.isVisible ? 'visible' : ''}`}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Current Openings
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                IT Jobs at PeakEdge Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our current IT job openings in software development, cloud engineering, 
                data analytics, and more. Remote and onsite positions available.
              </p>
            </div>

            <div 
              ref={positionsListAnimation.ref}
              className="max-w-4xl mx-auto space-y-4"
            >
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-xl bg-card border border-border card-animate scroll-fade-up stagger-${index + 1} flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${positionsListAnimation.isVisible ? 'visible' : ''}`}
                >
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="hover-scale group">
                      Apply Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a position that fits? We're always looking for talented IT professionals. 
                Send us your resume for future opportunities at PeakEdge IT Solutions.
              </p>
              <Link to="/contact">
                <Button variant="default" className="btn-animate group">
                  Submit Your Resume <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

export default Careers;
