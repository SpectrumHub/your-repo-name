import { Search, Megaphone, PenTool, TrendingUp, Mail, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with our comprehensive SEO strategies and technical optimizations.",
      features: ["Keyword Research", "On-Page SEO", "Technical Audits"]
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Engage your audience across all major social platforms with compelling content and campaigns.",
      features: ["Content Strategy", "Community Management", "Paid Advertising"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality content that tells your brand story and drives meaningful engagement.",
      features: ["Blog Writing", "Video Production", "Graphic Design"]
    },
    {
      icon: TrendingUp,
      title: "PPC Advertising",
      description: "Maximize your ROI with data-driven pay-per-click campaigns across Google and social platforms.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Build lasting relationships with personalized email campaigns that convert.",
      features: ["Automation", "Segmentation", "A/B Testing"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that drive conversions and enhance user experience.",
      features: ["Responsive Design", "CMS Integration", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end digital marketing services that drive growth and deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;