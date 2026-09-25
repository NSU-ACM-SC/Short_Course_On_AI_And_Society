"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { eventDetails } from "@/lib/constants";

export default function Registration() {
  const ref = useScrollReveal();

  const regLink = eventDetails.registrationLink;

  return (
    <section
      className="py-24 bg-acm-blue brutal-border-thick border-x-0 relative overflow-hidden"
      id="register"
    >
      {/* Decorative squares */}
      <div className="absolute w-52 h-52 border-4 border-white/15 -top-12 -left-12 rotate-[15deg]" />
      <div className="absolute w-40 h-40 border-4 border-white/15 -bottom-8 -right-8 -rotate-[20deg]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="reveal text-center">
          <span className="inline-block bg-black text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            Register Now
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-6">
            Secure Your <span className="text-black">Spot</span>
          </h2>

          {/* Info blocks */}
          <div className="inline-flex flex-wrap gap-6 justify-center mb-10">
            {[
              { label: "Fee", value: "BDT 1,500" },
              { label: "Duration", value: "3 Days" },
              { label: "Seats", value: "Limited" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white brutal-border-thick brutal-shadow px-7 py-4 text-center"
              >
                <div className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-gray-500 mb-1">
                  {item.label}
                </div>
                <div className="text-xl font-bold text-black">{item.value}</div>
              </div>
            ))}
          </div>

          <div>
            {/* Registration Button */}
            {regLink ? (
              <a
                href={regLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-lg font-bold uppercase tracking-wider px-12 py-5 bg-black text-white brutal-border-thick shadow-[6px_6px_0_rgba(0,0,0,0.3)] hover:bg-gray-900 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.3)] transition-all"
              >
                Pre-Register Now →
              </a>
            ) : (
              <>
                <button
                  onClick={() => alert("Registration link will be available soon. Stay tuned!")}
                  className="inline-flex items-center gap-2 font-mono text-lg font-bold uppercase tracking-wider px-12 py-5 bg-black text-white brutal-border-thick shadow-[6px_6px_0_rgba(0,0,0,0.3)] hover:bg-gray-900 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_rgba(0,0,0,0.3)] transition-all cursor-pointer"
                >
                  Pre-Register Now →
                </button>
                <div className="inline-block bg-white/15 border-2 border-dashed border-white/40 px-6 py-3 font-mono text-sm text-white/70 mt-4 italic">
                  ⚠ Registration link will be pasted here soon
                </div>
              </>
            )}
          </div>

          <p className="font-mono text-xs text-white/80 mt-6 max-w-xl mx-auto leading-relaxed">
            Pre-registration does not automatically confirm participation. Selected
            participants will receive the final registration instructions separately
            via their institutional email.
          </p>
        </div>
      </div>
    </section>
  );
}
