import { CheckCircle, Clock, Shield, Zap } from "lucide-react";
import React from "react";

const benefits = [
    {
    icon: Zap,
    title: "Lightning-Fast Results",
    description: "We move at the speed of digital—launch, test, and optimize your campaigns in days, not months.",
    },
    {
    icon: CheckCircle,
    title: "Real, Measurable Growth",
    description: "No vanity metrics. We focus on what matters: more leads, more sales, more brand love.",
    },
    {
      icon: Shield,
    title: "Radical Transparency",
    description: "You get full access to your data, dashboards, and our team. No secrets, just results.",
    },
    {
    icon: Clock,
    title: "Always-On Support",
    description: "Questions at midnight? We’re here. Our team is your team, 24/7.",
  },
];

const WhyChooseUsSection = () => {
  // Duplicate the benefits array for seamless looping
  const slidingBenefits = [...benefits, ...benefits];
  return (
    <section className="relative py-20 w-full overflow-x-clip">
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/20 rounded-full blur-2xl z-0" style={{ transform: 'translateY(-50%)' }} />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Why Pulse?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#F4F3F0' }}>
            We’re Built for Modern Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We blend creativity, data, and tech to help you stand out and grow fast—no boring agency vibes.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-benefit-slide">
            {slidingBenefits.map((b, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-xs flex-shrink-0 bg-white/10 rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-lg flex flex-col items-center text-center"
                style={{
                  background: 'rgba(20, 20, 30, 0.35)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#F4F3F0',
                }}
              >
                <div className="mb-4 text-primary">{React.createElement(b.icon, { size: 40 })}</div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-base opacity-80">{b.description}</p>
            </div>
          ))}
          </div>
          <style>{`
            @keyframes benefit-slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-benefit-slide {
              animation: benefit-slide 32s linear infinite;
            }
            .animate-benefit-slide:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;