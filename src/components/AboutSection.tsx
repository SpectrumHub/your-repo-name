import React from "react";
import { FlowButton } from "@/components/ui/flow-button";

const AboutSection = () => {
  return (
    <section id="about" className="py-0">
      <div className="text-center mb-8">
        <h2 className="font-extrabold tracking-tight text-primary-900 mb-4" style={{ fontSize: '60px' }}>
          Navigating The Trends For Growth
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#1C1917' }}>
          Explore how to navigate ever-changing trends, harness their potential, and drive meaningful growth for your brand or business.
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Block 1: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Portrait Image */}
          <div className="w-full">
            <div className="aspect-[3/4] w-full max-w-md rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <h2 className="font-extrabold tracking-tight text-primary-900 leading-tight" style={{ fontSize: '50px' }}>
              Mission: Guide You Until Reach The Next Level
            </h2>
            <p className="text-lg text-gray-700">
              Our mission is to empower individuals and businesses to navigate evolving trends, unlock new opportunities, and achieve lasting growth. By providing actionable insights and practical strategies.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <div className="text-5xl font-extrabold" style={{ color: '#F4F3F0' }}>567M</div>
                <div className="font-semibold mt-2" style={{ color: '#F4F3F0' }}>Followers Gained</div>
                <div className="text-sm" style={{ color: '#F4F3F0' }}>
                  The number of new followers gained over a specific period, reflecting audience growth and engagement.
                </div>
              </div>
              <div>
                <div className="text-5xl font-extrabold" style={{ color: '#F4F3F0' }}>98%+</div>
                <div className="font-semibold mt-2" style={{ color: '#F4F3F0' }}>Engagement ROI</div>
                <div className="text-sm" style={{ color: '#F4F3F0' }}>
                  Measures the return on investment from your engagement efforts, showing the value generated.
              </div>
              </div>
              </div>
            </div>
          </div>
          
        {/* Block 2: Vision (slides over Block 1) */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            background: '#0C0712',
            boxShadow: '0 4px 32px 0 rgba(0,0,0,0.4)',
            borderRadius: '1.5rem',
            padding: '2rem',
          }}
        >
          {/* Left: Content */}
          <div className="flex flex-col gap-8 order-2 md:order-1">
            <h2 className="font-extrabold tracking-tight text-primary-900 leading-tight" style={{ fontSize: '50px' }}>
              Vision: Inspire Growth And Empower Excellence
            </h2>
            <p className="text-lg text-gray-700">
              Our vision is to inspire individuals and businesses to embrace change, seize new opportunities, and thrive sustainably through innovation, adaptability, and strategic growth.
            </p>
            <p className="text-lg text-gray-700">
              We aim to create a future where adaptability and innovation drive success, empowering everyone to reach their full potential.
            </p>
            <div>
              <FlowButton text="Work With Us" />
                </div>
              </div>
          {/* Right: Portrait Image */}
          <div className="w-full order-1 md:order-2">
            <div className="aspect-[3/4] w-full max-w-md rounded-2xl overflow-hidden relative bg-yellow-300 ml-auto">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                alt="Woman with laptop"
                className="w-full h-full object-cover"
              />
              {/* Optionally, add floating icons here for extra polish */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;