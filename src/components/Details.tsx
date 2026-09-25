"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { eventDetails } from "@/lib/constants";

const cards = [
  { icon: "📅", label: "Date", value: "30 September – 2 October 2026" },
  { icon: "⏰", label: "Time", value: "9:30 AM – 5:30 PM", sub: "Each day" },
  { icon: "📍", label: "Venue", value: "Print Zone\nNorth South University" },
  { icon: "🎓", label: "Instructor", value: "Professor Mor Naaman\nCornell Tech" },
  { icon: "💰", label: "Registration Fee", value: "BDT 1,500", sub: "For the full 3-day course" },
  { icon: "✅", label: "Eligibility", value: "Undergraduate students from all UGC-approved universities" },
];

export default function Details() {
  const titleRef = useScrollReveal();

  return (
    <section className="py-24 bg-black text-white brutal-border-thick border-x-0" id="details">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal">
          <span className="inline-block bg-white text-black font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            Event Details
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-10">
            Everything You <span className="text-acm-blue">Need to Know</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <DetailCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal border-[3px] border-white p-8 transition-all hover:bg-acm-blue/10 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_theme(--color-acm-blue)]"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-acm-blue-light mb-2">
        {label}
      </h4>
      <p className="text-lg font-semibold leading-snug whitespace-pre-line">
        {value}
      </p>
      {sub && (
        <small className="text-sm opacity-60 mt-1 block">{sub}</small>
      )}
    </div>
  );
}
