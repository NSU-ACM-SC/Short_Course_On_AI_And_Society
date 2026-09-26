"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { perksData, PerkItem } from "@/data/perks";

export default function Perks() {
  const titleRef = useScrollReveal();

  return (
    <section className="py-24" id="perks">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            {perksData.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-10">
            {perksData.heading.prefix}
            <span className="text-acm-blue">{perksData.heading.highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perksData.perks.map((perk, i) => (
            <PerkCard key={i} {...perk} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PerkCard({ icon, title, description }: PerkItem) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal bg-white brutal-border-thick brutal-shadow p-8 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#000]"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
