"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { partnersData } from "@/data/partners";

export default function Partners() {
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="py-24" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            {partnersData.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-10">
            {partnersData.heading.prefix}
            <span className="text-acm-blue">
              {partnersData.heading.highlight}
            </span>
          </h2>
        </div>

        {/* Single unified grid — no category divisions */}
        <div
          ref={gridRef}
          className="reveal bg-white brutal-border-thick brutal-shadow-lg p-8 md:p-12"
        >
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {partnersData.allPartners.map((item) => (
              <div
                key={item.name}
                className="flex justify-center items-center bg-offwhite border-2 border-black px-5 sm:px-6 py-3.5 sm:py-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] transition-all"
              >
                <div className="relative h-12 w-auto flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={140}
                    height={48}
                    className="h-10 sm:h-12 w-auto max-h-12 max-w-[140px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
