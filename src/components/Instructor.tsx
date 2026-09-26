"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { instructorData } from "@/data/instructor";

export default function Instructor() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="py-24" id="instructor">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref1} className="reveal">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            {instructorData.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-8">
            {instructorData.heading.prefix}
            <span className="text-acm-blue">
              {instructorData.heading.highlight}
            </span>
          </h2>
        </div>

        <div
          ref={ref2}
          className="reveal bg-white brutal-border-thick brutal-shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center"
        >
          {/* Photo */}
          <div className="brutal-border-thick brutal-shadow overflow-hidden bg-acm-blue aspect-square mx-auto md:mx-0 max-w-[300px] w-full">
            <Image
              src={instructorData.image.src}
              alt={instructorData.image.alt}
              width={instructorData.image.width}
              height={instructorData.image.height}
              className="w-full h-full object-cover object-[70%_40%]"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold tracking-tight mb-1">
              {instructorData.name}
            </h3>
            <p className="font-mono text-sm font-bold text-acm-blue uppercase tracking-wider mb-5">
              {instructorData.title} at {instructorData.institution}
            </p>
            {instructorData.bioParagraphs.map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-gray-700 ${
                  i < instructorData.bioParagraphs.length - 1 ? "mb-4" : "mb-5"
                }`}
              >
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {instructorData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-offwhite border-2 border-black font-mono text-[0.7rem] font-bold uppercase tracking-wider px-3.5 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
