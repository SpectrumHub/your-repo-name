import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iaHNsKDI1OSAxMDAlIDY1JSAvIDAuMSkiLz4KPHN2Zz4K')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Pulse Your Brand to the Next Level
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that trust Pulse Marketing to drive their digital growth. 
            Get your free consultation today and discover how we can transform your marketing results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
              Start Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat With Our Team
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Free Consultation
            </div>
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              No Long-term Contracts
            </div>
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Dedicated Support
            </div>
            <div className="flex items-center justify-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Proven Results
            </div>
          </div>
          
          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-2">Prefer to talk directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:hello@pulsemarketing.com" className="text-primary hover:underline">
                hello@pulsemarketing.com
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                (123) 456-7890
              </a>
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