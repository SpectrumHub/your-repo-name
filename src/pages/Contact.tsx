import React from "react";
import { NavBarDemo } from "@/components/ui/tubelight-navbar-demo";
import { GlassCard } from "@/components/ui/GlassCard";
import { FlowButton } from "@/components/ui/flow-button";

// Star and ShootingStar components for animated background
const Star = ({ style, className = "" }: { style?: React.CSSProperties; className?: string }) => (
  <div
    className={`star absolute rounded-full bg-white opacity-70 ${className}`}
    style={style}
  />
);

const ShootingStar = ({ style }: { style?: React.CSSProperties }) => (
  <div className="shooting-star" style={{ ...style, position: "absolute" }}>
    <div className="star-tail" />
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Star className="h-2 w-2 top-[15%] left-[20%]" style={{ animationDelay: "0.5s" }} />
        <Star className="h-2 w-2 top-[45%] left-[80%]" style={{ animationDelay: "1.5s" }} />
        <Star className="h-3 w-3 top-[65%] left-[35%] opacity-80" style={{ animationDelay: "0.7s" }} />
        <Star className="h-2 w-2 top-[25%] left-[60%]" style={{ animationDelay: "2.1s" }} />
        <Star className="h-2 w-2 top-[75%] left-[75%]" style={{ animationDelay: "1.2s" }} />
        <Star className="h-3 w-3 top-[55%] left-[15%] opacity-90" style={{ animationDelay: "0.3s" }} />
        <Star className="h-2 w-2 top-[85%] left-[50%] opacity-80" style={{ animationDelay: "1.8s" }} />
        <ShootingStar style={{ top: "10%", right: "10%", animation: "shootingStar 2s ease-in-out 0.2s infinite" }} />
        <ShootingStar style={{ top: "5%", right: "30%", animation: "shootingStar 2.5s ease-in-out 1.7s infinite" }} />
      </div>
      {/* Navigation Bar */}
      {/* Contact Content */}
      <main className="relative min-h-screen flex items-center justify-center px-4 py-20 md:px-8 z-10">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            {/* Contact Info */}
            <div className="w-full md:w-2/5 space-y-6">
              <div className="animate-slide" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-primary text-lg md:text-xl tracking-normal uppercase font-serif">Get in touch</h2>
              </div>
              <div className="animate-slide" style={{ animationDelay: "0.2s" }}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F4F3F0]">Contact<br />Our Team</h1>
              </div>
              <div className="animate-slide" style={{ animationDelay: "0.3s" }}>
                <p className="text-[#F4F3F0] text-sm md:text-base max-w-xl">Have questions about our services? Want to learn more about how we can help your brand? Our team is ready to help you grow.</p>
              </div>
              <div className="animate-slide space-y-4" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
          </div>
                  <div>
                    <h3 className="text-[#F4F3F0] text-sm font-semibold">Email</h3>
                    <p className="text-muted-foreground text-sm">hello@pulsemarketing.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#F4F3F0] text-sm font-semibold">Phone</h3>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-[#F4F3F0] text-sm font-semibold">Location</h3>
                    <p className="text-muted-foreground text-sm">123 Marketing Street, Digital City</p>
                  </div>
                </div>
              </div>
                </div>
            {/* Contact Form */}
            <div className="w-full md:w-3/5 animate-slide" style={{ animationDelay: "0.5s" }}>
              <GlassCard className="border border-border rounded-xl p-6 md:p-8">
                <h3 className="font-serif text-[#F4F3F0] text-xl md:text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-[#F4F3F0] mb-1">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-2 bg-[#181A1B] border border-border rounded-lg text-[#F4F3F0] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-[#F4F3F0] mb-1">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 bg-[#181A1B] border border-border rounded-lg text-[#F4F3F0] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-[#F4F3F0] mb-1">Subject</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 bg-[#181A1B] border border-border rounded-lg text-[#F4F3F0] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="What's this about?" />
                  </div>
                    <div>
                    <label htmlFor="message" className="block text-sm text-[#F4F3F0] mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 bg-[#181A1B] border border-border rounded-lg text-[#F4F3F0] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your message..." />
                    </div>
                  <div>
                    <FlowButton text="Send Message" />
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide { animation: slideIn 0.5s ease-in-out forwards; }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .star { animation: twinkle 3s infinite ease-in-out; }
        @keyframes shootingStar {
          0% {
            transform: translateX(100%) translateY(-100%) rotate(-45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% {
            transform: translateX(-350%) translateY(350%) rotate(-45deg);
            opacity: 0;
          }
        }
        .shooting-star {
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.7);
        }
        .star-tail {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0));
          transform-origin: left center;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Contact;