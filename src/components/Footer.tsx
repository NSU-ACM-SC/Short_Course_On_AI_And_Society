import Image from "next/image";
import {
  chapterEmail,
  chapterSocialLinks,
  chapterAddress,
  eventDetails,
} from "@/lib/constants";
import {
  FacebookIcon,
  YouTubeIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";

const socialItems = [
  { label: "Facebook", href: chapterSocialLinks.Facebook, Icon: FacebookIcon },
  { label: "YouTube", href: chapterSocialLinks.YouTube, Icon: YouTubeIcon },
  { label: "LinkedIn", href: chapterSocialLinks.LinkedIn, Icon: LinkedInIcon },
  { label: "GitHub", href: chapterSocialLinks.GitHub, Icon: GitHubIcon },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Instructor", href: "#instructor" },
  { label: "Details", href: "#details" },
  { label: "Registration", href: "#register" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white brutal-border-thick border-x-0 border-b-0">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/acm-logo.webp"
                alt="NSU ACM SC"
                width={44}
                height={44}
              />
              <div>
                <span className="block font-mono font-bold text-sm leading-tight">
                  NSU ACM
                </span>
                <span className="block font-mono font-bold text-xs text-white/50 leading-tight">
                  Student Chapter
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Department of Electrical &amp; Computer Engineering, North South
              University.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialItems.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-acm-blue-light hover:border-acm-blue-light/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-white/60 hover:text-acm-blue-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Event */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${chapterEmail}`}
                  className="font-mono text-sm text-white/60 hover:text-acm-blue-light transition-colors"
                >
                  {chapterEmail}
                </a>
              </li>
              <li>
                <a
                  href={chapterAddress.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-white/60 hover:text-acm-blue-light transition-colors leading-relaxed"
                >
                  {chapterAddress.line1}
                  <br />
                  {chapterAddress.line2}, {chapterAddress.line3}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={eventDetails.facebookEvent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border border-white/15 text-white/60 hover:text-acm-blue-light hover:border-acm-blue-light/40 transition-all"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  Facebook Event
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[0.65rem] text-white/30 tracking-wider">
            © 2026 NSU ACM Student Chapter. All rights
            reserved. <br />
            Developed by Web Group, NSU ACM Student Chapter.
          </p>
          <p className="font-mono text-[0.65rem] text-white/30 tracking-wider">
            {eventDetails.title} · {eventDetails.date}
          </p>
        </div>
      </div>
    </footer>
  );
}
