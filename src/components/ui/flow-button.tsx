// This is file of your component
'use client';
import { ArrowRight } from 'lucide-react';

export  function FlowButton({ text = "Modern Button" }: { text?: string }) {
  return (
    <button
      className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-[#F4F3F0] px-8 py-3 text-sm font-semibold text-[#0C0712] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#3B82F6] hover:text-[#F4F3F0] hover:rounded-[12px] active:scale-[0.95]"
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight
        className="absolute w-4 h-4 left-[-25%] z-[9] group-hover:left-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ stroke: '#0C0712', color: '#0C0712' }}
        // On hover, use Tailwind group-hover:stroke-[#F4F3F0]
      />
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>
      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0C0712] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 group-hover:bg-[#3B82F6] transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
      {/* Right arrow (arr-1) */}
      <ArrowRight
        className="absolute w-4 h-4 right-4 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ stroke: '#0C0712', color: '#0C0712' }}
      />
      <style>{`
        .group:hover .left-\[-25\%\],
        .group:hover .right-4 {
          stroke: #F4F3F0 !important;
          color: #F4F3F0 !important;
        }
        .group:hover .right-4 {
          right: -25% !important;
        }
        .group:hover .left-\[-25\%\] {
          left: 1rem !important;
        }
      `}</style>
    </button>
  );
} 