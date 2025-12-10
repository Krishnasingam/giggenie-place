import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TechTalent found us three senior engineers in just two weeks. Their understanding of our tech stack and culture was impressive. Highly recommended!",
      author: "Sarah Chen",
      role: "CTO",
      company: "Fintech Startup",
      rating: 5,
    },
    {
      quote: "We've been working with TechTalent for over 3 years now. They consistently deliver high-quality candidates and their support is exceptional.",
      author: "Michael Roberts",
      role: "VP of Engineering",
      company: "Enterprise SaaS",
      rating: 5,
    },
    {
      quote: "As a job seeker, they helped me land my dream role at a Fortune 500. The recruiter truly understood my career goals and found the perfect fit.",
      author: "Emily Watson",
      role: "Senior DevOps Engineer",
      company: "Placed Candidate",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-card mb-6">
            What Our Clients Say
          </h2>
          <p className="text-card/70 text-lg">
            Don't just take our word for it. Hear from the companies and professionals we've helped.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-card/10 border border-card/20 backdrop-blur-sm group hover:bg-card/15 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent mb-6 opacity-50" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-card/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-heading font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-card">
                    {testimonial.author}
                  </h4>
                  <p className="text-card/60 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
