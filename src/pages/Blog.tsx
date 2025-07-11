import React from "react";

const features = [
  {
    title: "Smart Commands.",
    description:
      "Lightning-fast actions with intelligent shortcuts that adapt to your workflow patterns.",
    image:
      "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 text-white"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
    ),
    delay: "delay-100",
  },
  {
    title: "Project Canvas.",
    description:
      "Visualize project timelines and dependencies with an interactive workspace that scales with your team.",
    image:
      "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard w-5 h-5 text-white"><rect width={7} height={9} x={3} y={3} rx={1} /><rect width={7} height={5} x={14} y={3} rx={1} /><rect width={7} height={9} x={14} y={12} rx={1} /><rect width={7} height={5} x={3} y={16} rx={1} /></svg>
    ),
    delay: "delay-200",
  },
  {
    title: "Focus Sessions.",
    description:
      "Deep work modes with distraction blocking and ambient soundscapes to maximize concentration and creative output.",
    image:
      "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-5 h-5 text-white"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={6} /><circle cx={12} cy={12} r={2} /></svg>
    ),
    delay: "delay-300 col-span-2",
    colSpan: true,
  },
  {
    title: "Live Sync.",
    description:
      "Real-time collaboration with instant updates across devices and seamless conflict resolution.",
    image:
      "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw w-5 h-5 text-white"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
    ),
    delay: "delay-400",
  },
  {
    title: "AI Insights.",
    description:
      "Intelligent recommendations and performance insights that help optimize team efficiency and predict bottlenecks.",
    image:
      "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 text-white"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" /></svg>
    ),
    delay: "delay-500",
  },
];

const Blog = () => {
  return (
    <main className="container max-w-7xl mx-auto pt-40 pb-24 px-6">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: '#F4F3F0' }}>
          Pulse Marketing Insights
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Actionable strategies, creative inspiration, and expert tips to help your brand stand out and grow in the digital world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, i) => (
          <article
            key={feature.title}
            className={`relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-fade-in-up ${feature.delay} ${feature.colSpan ? 'md:col-span-2' : ''}`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-white text-xl font-medium tracking-tight">{feature.title}</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      {/* CTA Section */}
      <div className="text-center mt-20 animate-fade-in-up delay-600">
        {/* Pagination Placeholder - replace with real pagination when blogs are loaded from a database */}
        <nav className="inline-flex items-center gap-2 justify-center mt-4" aria-label="Pagination">
          <button className="px-3 py-2 rounded bg-background border border-border text-[#0C0712] hover:bg-primary/10 hover:text-[#F4F3F0] transition-colors" disabled>{'<'}</button>
          <button className="px-3 py-2 rounded bg-primary text-[#F4F3F0] font-semibold border border-primary">1</button>
          <button className="px-3 py-2 rounded bg-background border border-border text-[#0C0712] hover:bg-primary/10 hover:text-[#F4F3F0] transition-colors">2</button>
          <button className="px-3 py-2 rounded bg-background border border-border text-[#0C0712] hover:bg-primary/10 hover:text-[#F4F3F0] transition-colors">3</button>
          <span className="px-2 text-[#0C0712]">...</span>
          <button className="px-3 py-2 rounded bg-background border border-border text-[#0C0712] hover:bg-primary/10 hover:text-[#F4F3F0] transition-colors">10</button>
          <button className="px-3 py-2 rounded bg-background border border-border text-[#0C0712] hover:bg-primary/10 hover:text-[#F4F3F0] transition-colors">{'>'}</button>
        </nav>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </main>
  );
};

export default Blog;