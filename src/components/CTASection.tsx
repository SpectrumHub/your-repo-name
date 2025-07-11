import { FlowButton } from "@/components/ui/flow-button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      {/* Removed background decoration for full white background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm font-medium mb-6"
            style={{ color: '#F4F3F0' }}
          >
            Ready to Get Started?
          </div>
          
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#F4F3F0' }}
          >
            Let's Pulse Your Brand to the Next Level
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that trust Pulse Marketing to drive their digital growth. 
            Get your free consultation today and discover how we can transform your marketing results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <FlowButton text="Get Started" />
            <FlowButton text="Chat With Our Team" />
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
            <div className="flex items-center justify-center" style={{ color: '#F4F3F0' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ background: '#F4F3F0', display: 'inline-block' }}></span>
              Free Consultation
            </div>
            <div className="flex items-center justify-center" style={{ color: '#F4F3F0' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ background: '#F4F3F0', display: 'inline-block' }}></span>
              No Long-term Contracts
            </div>
            <div className="flex items-center justify-center" style={{ color: '#F4F3F0' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ background: '#F4F3F0', display: 'inline-block' }}></span>
              Dedicated Support
            </div>
            <div className="flex items-center justify-center" style={{ color: '#F4F3F0' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ background: '#F4F3F0', display: 'inline-block' }}></span>
              Proven Results
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default CTASection;