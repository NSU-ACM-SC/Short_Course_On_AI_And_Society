"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { eventDetails } from "@/lib/constants";

export default function Instructor() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  const tags = ["Information Science", "Cornell Tech", "AI & Society", "Media & Technology"];

  return (
    <section className="py-24" id="instructor">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref1} className="reveal">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            Meet the Instructor
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-8">
            Professor <span className="text-acm-blue">Mor Naaman</span>
          </h2>
        </div>

        <div ref={ref2} className="reveal bg-white brutal-border-thick brutal-shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center">
          {/* Photo */}
          <div className="brutal-border-thick brutal-shadow overflow-hidden bg-acm-blue aspect-square mx-auto md:mx-0 max-w-[300px] w-full">
            <Image
              src="/Short_Course_On_AI_And_Society/Mor-Namaan.jpg"
              alt="Professor Mor Naaman — Cornell Tech"
              width={600}
              height={600}
              className="w-full h-full object-cover object-[70%_40%]"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold tracking-tight mb-1">
              Prof. Mor Naaman
            </h3>
            <p className="font-mono text-sm font-bold text-acm-blue uppercase tracking-wider mb-5">
              {eventDetails.instructorTitle} at {eventDetails.institution}
            </p>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              Professor Mor Naaman is the{" "}
              <strong>Don and Mibs Follett Professor of Information Science</strong>{" "}
              and <strong>Associate Dean for Faculty Affairs</strong> at Cornell
              Tech (Cornell University). His research focuses on the intersection
              of technology, media, and society.
            </p>
            <p className="text-base leading-relaxed text-gray-700 mb-5">
              With extensive experience in studying how technology mediates human
              communication and societal interaction, Prof. Naaman brings a unique
              perspective to the evolving landscape of AI and its societal
              implications.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag) => (
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
