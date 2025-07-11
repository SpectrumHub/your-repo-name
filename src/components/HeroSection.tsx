import { FlowButton } from "@/components/ui/flow-button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Removed background and overlays for full white background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            🚀 Transforming Brands with Digital Excellence
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pulse Your Brand to 
            <span className="block">Digital Success</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
            style={{ color: '#F4F3F0' }}
          >
            {/* hero description text */}
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <FlowButton text="Get Started" />
            <FlowButton text="Watch Our Story" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50M+</div>
              <div className="text-sm text-muted-foreground">Reach Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;