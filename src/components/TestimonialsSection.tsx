import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Pulse Marketing transformed our digital presence. Our website traffic increased by 400% and lead generation by 300% in just 6 months. Their team is absolutely incredible!",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The ROI we've seen from Pulse Marketing is outstanding. They don't just execute campaigns – they become true partners in your growth strategy. Highly recommended!",
      rating: 5,
      company: "GrowthCo"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StyleHub",
      content: "Working with Pulse Marketing was a game-changer for our fashion brand. Their social media strategies helped us reach millions and build a loyal community.",
      rating: 5,
      company: "StyleHub"
    },
    {
      name: "David Thompson",
      role: "VP Marketing, InnovateLab",
      content: "Professional, results-driven, and always ahead of the curve. Pulse Marketing helped us dominate our niche through strategic SEO and content marketing.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Lisa Park",
      role: "CMO, EcoSolutions",
      content: "The transparency and communication from Pulse Marketing is unmatched. We always know exactly how our campaigns are performing and what's driving results.",
      rating: 5,
      company: "EcoSolutions"
    },
    {
      name: "Alex Rivera",
      role: "Business Owner, LocalPro",
      content: "From local SEO to social media management, Pulse Marketing helped our small business compete with the big players. Our revenue has doubled!",
      rating: 5,
      company: "LocalPro"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about working with Pulse Marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;