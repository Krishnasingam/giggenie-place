import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Careers = () => {
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
        <title>Careers at PeakEdge — Join Our Global IT Team</title>
        <meta name="description" content="Join PeakEdge and build your career in IT services and staffing. We have opportunities in USA and India for talented professionals." />
        <link rel="canonical" href="https://www.peakedgeit.com/careers" />
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Build your career with a global IT company that values innovation, 
              collaboration, and professional growth.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why Work at PeakEdge?
              </h2>
              <p className="text-muted-foreground text-lg">
                We offer competitive benefits, flexible work arrangements, and opportunities 
                to work on exciting projects with clients worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Global Exposure</h3>
                <p className="text-muted-foreground text-sm">Work with clients across the world</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Career Growth</h3>
                <p className="text-muted-foreground text-sm">Clear paths for advancement</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Flexible Work</h3>
                <p className="text-muted-foreground text-sm">Remote and hybrid options</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">Work on cutting-edge tech</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our current openings and find your next opportunity
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-medium transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
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
                    <Button variant="outline" size="sm">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a position that fits? Send us your resume anyway!
              </p>
              <Link to="/contact">
                <Button variant="default">
                  Contact Us <ArrowRight className="w-4 h-4" />
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