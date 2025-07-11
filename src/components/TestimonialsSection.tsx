import React from "react";
import { Component as TypewriterTestimonial } from "@/components/ui/typewriter-testimonial";

  const testimonials = [
    {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    audio: "audio_1.mp3",
    text:
      "Pulse Marketing transformed our digital presence. Our website traffic increased by 400% and lead generation by 300% in just 6 months. Their team is absolutely incredible!",
      name: "Sarah Johnson",
    jobtitle: "TechStart Inc.",
    },
    {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    audio: "audio_2.mp3",
    text:
      "The ROI we've seen from Pulse Marketing is outstanding. They don't just execute campaigns – they become true partners in your growth strategy. Highly recommended!",
      name: "Michael Chen",
    jobtitle: "GrowthCo",
    },
    {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    audio: "audio_3.mp3",
    text:
      "Working with Pulse Marketing was a game-changer for our fashion brand. Their social media strategies helped us reach millions and build a loyal community.",
      name: "Emily Rodriguez",
    jobtitle: "StyleHub",
    },
    {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    audio: "audio_4.mp3",
    text:
      "Professional, results-driven, and always ahead of the curve. Pulse Marketing helped us dominate our niche through strategic SEO and content marketing.",
      name: "David Thompson",
    jobtitle: "InnovateLab",
    },
    {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    audio: "audio_5.mp3",
    text:
      "The transparency and communication from Pulse Marketing is unmatched. We always know exactly how our campaigns are performing and what's driving results.",
      name: "Lisa Park",
    jobtitle: "EcoSolutions",
    },
    {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    audio: "audio_6.mp3",
    text:
      "From local SEO to social media management, Pulse Marketing helped our small business compete with the big players. Our revenue has doubled!",
      name: "Alex Rivera",
    jobtitle: "LocalPro",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm font-medium mb-6"
            style={{ color: '#F4F3F0' }}
          >
            Client Testimonials
          </div>
          <h2
            className="text-[60px] font-bold mb-6"
            style={{ color: '#F4F3F0' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about working with Pulse Marketing.
          </p>
        </div>
        <div className="flex justify-center">
          <TypewriterTestimonial testimonials={testimonials} />
        </div>
        {/* Stats */}
        <div className="mt-16 text-center" style={{ color: '#F4F3F0' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-1" style={{ color: '#F4F3F0' }}>4.9/5</div>
              <div className="text-sm" style={{ color: '#F4F3F0' }}>Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1" style={{ color: '#F4F3F0' }}>200+</div>
              <div className="text-sm" style={{ color: '#F4F3F0' }}>Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1" style={{ color: '#F4F3F0' }}>98%</div>
              <div className="text-sm" style={{ color: '#F4F3F0' }}>Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1" style={{ color: '#F4F3F0' }}>500+</div>
              <div className="text-sm" style={{ color: '#F4F3F0' }}>Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}