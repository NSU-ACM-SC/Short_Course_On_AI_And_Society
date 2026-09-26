"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { aboutData } from "@/data/about";

export default function About() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div ref={ref1} className="reveal">
            <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
              {aboutData.badge}
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-4">
              {aboutData.heading.prefix}
              <span className="text-acm-blue">{aboutData.heading.highlight}</span>
              {aboutData.heading.suffix}
            </h2>
            {aboutData.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-[1.05rem] leading-relaxed text-gray-800 ${
                  i < aboutData.paragraphs.length - 1 ? "mb-5" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Topics Card */}
          <div
            ref={ref2}
            className="reveal bg-white brutal-border-thick brutal-shadow-lg p-10"
          >
            <h3 className="font-mono text-lg font-bold uppercase tracking-widest mb-6 pb-4 border-b-[3px] border-black">
              {aboutData.topicsHeading}
            </h3>
            <ul className="space-y-0">
              {aboutData.topics.map((topic, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 border-b-2 border-dashed border-gray-200 last:border-0 text-[0.95rem] font-medium"
                >
                  <span className="flex-shrink-0 w-7 h-7 bg-acm-blue flex items-center justify-center border-2 border-black text-sm">
                    {topic.icon}
                  </span>
                  <span>{topic.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
