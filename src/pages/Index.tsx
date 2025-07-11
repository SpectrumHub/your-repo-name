import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/Hero";
import BrandsSlider from "@/components/BrandsSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Faq3 from "@/components/FAQsSection";
import CTASection from "@/components/CTASection";
import { GlassCard } from "@/components/ui/GlassCard";
import StickyFooter from "@/components/ui/footer";
// import NavMenu from "@/components/ui/menu-hover-effects";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen px-0">
      {/* <NavMenu /> */}
      <div className="relative z-10">
        <Hero />
        <GlassCard>
          <BrandsSlider />
        </GlassCard>
      </div>
      <GlassCard>
      <AboutSection />
      </GlassCard>
      <GlassCard>
      <ServicesSection />
      </GlassCard>
      <GlassCard>
      <WhyChooseUsSection />
      </GlassCard>
      <GlassCard>
      <TestimonialsSection />
      </GlassCard>
      <GlassCard>
        <Faq3 />
      </GlassCard>
      <GlassCard>
      <CTASection />
      </GlassCard>
      <StickyFooter />
    </div>
  );
};

export default Index;
