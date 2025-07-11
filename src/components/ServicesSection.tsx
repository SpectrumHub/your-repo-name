import React from "react";
import { Megaphone, Palette, Search, Rocket, BarChart } from "lucide-react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { FlowButton } from "@/components/ui/flow-button";

const SERVICE_CARDS = [
    {
    icon: <Megaphone className="w-8 h-8 text-indigo-500" />,
    title: "Digital Marketing",
    bold: "Amplify Your Brand Across Every Channel",
    description: (
      <>
        Strategic social media management that builds communities, not just followers. We craft compelling content—from eye-catching graphics and engaging videos to conversion-focused captions and thought-leadership blogs. Every campaign is meticulously planned and flawlessly executed to drive real results.
      </>
    ),
    },
    {
    icon: <Palette className="w-8 h-8 text-indigo-500" />,
    title: "Brand Identity Design",
    bold: "Create a Brand That Commands Attention",
    description: (
      <>
        Transform your vision into a powerful visual identity that resonates with your audience. From memorable logo design to carefully curated brand colors and typography, we develop comprehensive style guides that ensure consistency across every touchpoint and establish instant recognition in your market.
      </>
    ),
    },
    {
    icon: <Search className="w-8 h-8 text-indigo-500" />,
    title: "Industry & Audience Research",
    bold: "Know Your Market Inside and Out",
    description: (
      <>
        Deep-dive analysis that uncovers hidden opportunities and reveals exactly who your customers are and what they want. We dissect competitor strategies, map your ideal customer journey, and spot emerging trends before they become mainstream—giving you the competitive edge you need.
      </>
    ),
    },
    {
    icon: <Rocket className="w-8 h-8 text-indigo-500" />,
    title: "Go-to-Market Strategy",
    bold: "Launch with Confidence and Precision",
    description: (
      <>
        Turn your big ideas into market-ready success stories. We develop comprehensive launch strategies with laser-focused messaging, strategic positioning, and multi-channel campaign flows that ensure your product or service makes maximum impact from day one.
      </>
    ),
    },
    {
    icon: <BarChart className="w-8 h-8 text-indigo-500" />,
    title: "Analytics & Reporting",
    bold: "Transform Data into Actionable Growth",
    description: (
      <>
        No more guessing games. We track what matters, interpret complex data patterns, and deliver clear, actionable insights through detailed monthly reports. Every metric tells a story, and we help you write the next chapter of your success.
      </>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container min-h-svh place-content-center px-6 text-stone-900 xl:px-12">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
            <h2 className="mb-4 text-[60px] leading-[60px] font-bold tracking-tight">
              Solutions We Provide
            </h2>
            <p className="max-w-prose text-[18px] mb-4">
              Discover a range of services designed to meet your needs, drive results, and help you achieve your goals with ease and efficiency.
            </p>
            <FlowButton text="Work With Us" />
          </div>
          <ContainerScroll className="space-y-8 py-12">
            {SERVICE_CARDS.map((service, index) => (
              <CardSticky
                key={service.title}
                index={index + 2}
                className={`rounded-2xl border p-8 backdrop-blur-lg${index === SERVICE_CARDS.length - 1 ? ' z-30' : ''}`}
                style={{
                  background: 'rgba(20, 20, 30, 0.35)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#F4F3F0',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h2 className="text-[35px] leading-[40px] font-bold tracking-normal">{service.title}</h2>
                </div>
                <h3 className="text-lg font-bold mb-2">{service.bold}</h3>
                <div style={{ color: '#F4F3F0' }}>{service.description}</div>
              </CardSticky>
                  ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;