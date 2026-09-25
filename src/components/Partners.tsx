"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { partners } from "@/lib/constants";

// Flatten all partners into a single list
const allPartners = [
  ...partners.sponsors,
  ...partners.broadcast,
  ...partners.media,
  ...partners.digitalMedia,
];

export default function Partners() {
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="py-24" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            Our Partners
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-10">
            Supported <span className="text-acm-blue">By</span>
          </h2>
        </div>

        {/* Single unified grid — no category divisions */}
        <div ref={gridRef} className="reveal bg-white brutal-border-thick brutal-shadow-lg p-8 md:p-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {allPartners.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 bg-offwhite border-2 border-black px-6 py-4 font-mono font-bold text-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] transition-all"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
