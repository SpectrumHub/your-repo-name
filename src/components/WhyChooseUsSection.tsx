import { CheckCircle, Clock, Shield, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "95% success rate with measurable ROI improvements for our clients",
      stats: "95% Success Rate"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
      stats: "48hr Response"
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Complete visibility into campaigns with detailed reporting",
      stats: "100% Transparency"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tools",
      description: "Latest marketing technology and AI-powered insights",
      stats: "Advanced Analytics"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Choose Pulse
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Success is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just provide services – we partner with you to ensure your digital marketing goals become reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {reason.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {reason.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Plus, You Get:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <CheckCircle className="h-5 w-5 text-primary mx-auto mb-2" />
              <p><strong>Dedicated Account Manager</strong><br />Personal support throughout your journey</p>
            </div>
            <div>
              <CheckCircle className="h-5 w-5 text-primary mx-auto mb-2" />
              <p><strong>Monthly Strategy Reviews</strong><br />Regular optimization and planning sessions</p>
            </div>
            <div>
              <CheckCircle className="h-5 w-5 text-primary mx-auto mb-2" />
              <p><strong>24/7 Support</strong><br />Round-the-clock assistance when you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;