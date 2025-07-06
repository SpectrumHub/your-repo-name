import { Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Pulse Marketing
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Driving Digital Excellence Since 2018
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Pulse Marketing, we believe every brand has a unique pulse. Our mission is to amplify that pulse through innovative digital marketing strategies that create meaningful connections between brands and their audiences.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center sm:text-left">
                <Target className="h-8 w-8 text-primary mb-3 mx-auto sm:mx-0" />
                <h3 className="font-semibold mb-2">Strategic Focus</h3>
                <p className="text-sm text-muted-foreground">Data-driven strategies that deliver results</p>
              </div>
              <div className="text-center sm:text-left">
                <Users className="h-8 w-8 text-primary mb-3 mx-auto sm:mx-0" />
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Certified professionals with proven expertise</p>
              </div>
              <div className="text-center sm:text-left">
                <Award className="h-8 w-8 text-primary mb-3 mx-auto sm:mx-0" />
                <h3 className="font-semibold mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">Recognized excellence in digital marketing</p>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground">Your Success Story Starts Here</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;