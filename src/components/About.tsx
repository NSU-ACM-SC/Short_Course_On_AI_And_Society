"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { topics } from "@/lib/constants";

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
              About the Course
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-4">
              Explore the{" "}
              <span className="text-acm-blue">Evolving Relationship</span>{" "}
              Between AI &amp; Society
            </h2>
            <p className="text-[1.05rem] leading-relaxed text-gray-800 mb-5">
              The NSU ACM Student Chapter, in collaboration with the Department
              of Electrical &amp; Computer Engineering at North South University,
              presents a special{" "}
              <strong className="text-black">3-day short course on AI &amp; Society</strong>.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-gray-800 mb-5">
              This interactive, in-person course explores the evolving
              relationship between Artificial Intelligence and Society. Through
              engaging sessions, thought-provoking discussions, and meaningful
              exchanges, participants will examine how AI is shaping human
              behavior, communication, education, work, privacy, trust, and
              society at large.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-gray-800">
              Led by{" "}
              <strong className="text-black">Professor Mor Naaman</strong>, Don
              and Mibs Follett Professor of Information Science and Associate
              Dean for Faculty Affairs at Cornell Tech, the course brings
              together students passionate about AI, technology, and its impact
              on our world.
            </p>
          </div>

          {/* Topics Card */}
          <div ref={ref2} className="reveal bg-white brutal-border-thick brutal-shadow-lg p-10">
            <h3 className="font-mono text-lg font-bold uppercase tracking-widest mb-6 pb-4 border-b-[3px] border-black">
              Topics Covered
            </h3>
            <ul className="space-y-0">
              {topics.map((topic, i) => (
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
