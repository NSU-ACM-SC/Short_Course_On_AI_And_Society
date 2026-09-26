"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { promoVideoData } from "@/data/video";

export default function PromoVideo() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section
      className="py-20 bg-white brutal-border-thick border-x-0"
      id="video"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref1} className="reveal text-center">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            {promoVideoData.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-2">
            {promoVideoData.heading.prefix}
            <span className="text-acm-blue">
              {promoVideoData.heading.highlight}
            </span>
          </h2>
        </div>
        <div
          ref={ref2}
          className="reveal max-w-4xl mx-auto mt-8 brutal-border-thick brutal-shadow-lg bg-black"
        >
          <video
            controls
            preload="metadata"
            poster={promoVideoData.poster}
            className="w-full block"
          >
            <source src={promoVideoData.src} type={promoVideoData.type} />
            {promoVideoData.fallbackText}
          </video>
        </div>
      </div>
    </section>
  );
}
