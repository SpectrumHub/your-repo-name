"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { renderCanvas, TypeWriter } from "@/components/ui/hero-designali";
import { Plus } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";

// Add this at the top for TypeScript global declaration
// @ts-ignore
declare global {
  interface Window {
    UnicornStudio?: any;
  }
}

export const Hero = () => {
  const talkAbout = [
    "Graphic Design",
    "Branding",
    "Web Design",
    "Web Develop",
    "Marketing",
    "UI UX",
    "Social Media",
  ];

  useEffect(() => {
    renderCanvas();
    // Inject UnicornStudio script only once
    if (!window.UnicornStudio) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.27/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        // Try to remove watermark after UnicornStudio loads
        setTimeout(() => {
          // Remove watermark in light DOM
          document.querySelectorAll('[data-unicornstudio-watermark], .unicornstudio-watermark, .unicornstudio-watermark-btn').forEach(el => el.remove());
          // Remove watermark in shadow DOMs
          document.querySelectorAll('*').forEach(el => {
            if (el.shadowRoot) {
              el.shadowRoot.querySelectorAll('[data-unicornstudio-watermark], .unicornstudio-watermark, .unicornstudio-watermark-btn').forEach(wm => wm.remove());
            }
          });
        }, 2000); // Wait 2s for watermark to appear
      };
      document.body.appendChild(script);
    } else if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <main className="overflow-hidden relative">
      {/* UnicornStudio Background */}
      <div
        data-us-project="6dUMXJyCrMm0LQzz0IMj"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ minHeight: 900, height: '120vh' }}
      ></div>
      <section id="home" className="relative z-10">
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-40"></div>
          <div className="mx-auto max-w-5xl -mt-16">
            <div className="relative mx-auto h-full py-12 p-6">
              <h1 className="flex flex-col text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <span style={{ color: '#F4F3F0' }}>
                  Turn Your Brand Into a Market Leader
                </span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mt-3 mb-6" style={{ color: '#F4F3F0' }}>
                Tired of being the best-kept secret in your industry? We help ambitious businesses break through the noise with powerful branding, strategic marketing, and positioning that makes you the obvious choice.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <FlowButton text="Book Your Strategy Call" />
                <FlowButton text="See Our Work" />
              </div>
            </div>
          </div>
        </div>
        <canvas
          className="pointer-events-none absolute inset-0 mx-auto"
          id="canvas"
        ></canvas>
      </section>
    </main>
  );
}; 