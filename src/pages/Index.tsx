import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandsSlider from "@/components/BrandsSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQsSection from "@/components/FAQsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BrandsSlider />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQsSection />
      <CTASection />
    </div>
  );
};

export default Index;
