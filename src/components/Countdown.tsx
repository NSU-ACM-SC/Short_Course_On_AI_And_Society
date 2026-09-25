"use client";

import { useEffect, useState } from "react";
import { eventDetails } from "@/lib/constants";
import { FacebookIcon } from "@/components/Icons";

export default function Countdown() {
  const [time, setTime] = useState({ days: "--", hours: "--", mins: "--", secs: "--" });
  const [started, setStarted] = useState(false);

  const hasRegistration = eventDetails.registrationLink.trim().length > 0;
  const registerHref = hasRegistration
    ? eventDetails.registrationLink
    : "#register";
  const registerLabel = hasRegistration ? "Register Now →" : "Pre-Register Now →";

  useEffect(() => {
    const target = new Date(eventDetails.startDate).getTime();

    function update() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTime({ days: "00", hours: "00", mins: "00", secs: "00" });
        setStarted(true);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        mins: String(m).padStart(2, "0"),
        secs: String(s).padStart(2, "0"),
      });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.mins, label: "Mins" },
    { value: time.secs, label: "Secs" },
  ];

  return (
    <div className="bg-black text-white py-6 brutal-border-thick border-x-0">
      <div className="flex flex-col items-center gap-5">
        {/* Countdown */}
        <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-acm-blue-light">
            {started ? "The Course Has Begun!" : "Course Starts In"}
          </span>
          <div className="flex gap-3 sm:gap-4">
            {units.map((u) => (
              <div key={u.label} className="text-center">
                <span className="block font-mono text-2xl sm:text-3xl font-bold leading-none bg-acm-blue text-white px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-white min-w-12 sm:min-w-16 tabular-nums">
                  {u.value}
                </span>
                <span className="font-mono text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-widest mt-1.5 block opacity-70">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
          <a
            href={registerHref}
            target={hasRegistration ? "_blank" : undefined}
            rel={hasRegistration ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 bg-acm-blue text-white border-2 border-white hover:bg-acm-blue-dark transition-all"
          >
            {registerLabel}
          </a>
          <a
            href={eventDetails.facebookEvent}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/70 transition-all"
          >
            <FacebookIcon />
            Facebook Event
          </a>
        </div>
      </div>
    </div>
  );
}
