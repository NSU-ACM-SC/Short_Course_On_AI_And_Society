"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { contactData } from "@/data/contact";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";

export default function Contact() {
  const titleRef = useScrollReveal();
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  return (
    <section
      className="py-20 bg-white brutal-border-thick border-x-0"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal">
          <span className="inline-block bg-acm-blue text-white font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 brutal-border brutal-shadow mb-5">
            {contactData.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-8">
            {contactData.heading.prefix}
            <span className="text-acm-blue">
              {contactData.heading.highlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div
            ref={ref1}
            className="reveal bg-offwhite brutal-border-thick brutal-shadow p-8"
          >
            <h4 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-acm-blue mb-4">
              <MailIcon className="w-4 h-4" />
              Email
            </h4>
            <a
              href={`mailto:${contactData.email}`}
              className="text-base font-semibold text-acm-blue hover:underline break-all"
            >
              {contactData.email}
            </a>
          </div>

          {/* Phone */}
          <div
            ref={ref2}
            className="reveal bg-offwhite brutal-border-thick brutal-shadow p-8"
          >
            <h4 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-acm-blue mb-4">
              <PhoneIcon className="w-4 h-4" />
              Phone
            </h4>
            {contactData.phones.map((phone) => (
              <p key={phone} className="text-base font-medium mb-1">
                {phone}
              </p>
            ))}
          </div>

          {/* Address */}
          <div
            ref={ref3}
            className="reveal bg-offwhite brutal-border-thick brutal-shadow p-8"
          >
            <h4 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-acm-blue mb-4">
              <MapPinIcon className="w-4 h-4" />
              Address
            </h4>
            <a
              href={contactData.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium leading-relaxed hover:text-acm-blue transition-colors"
            >
              {contactData.address.line1}
              <br />
              {contactData.address.line2}
              <br />
              {contactData.address.line3}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
