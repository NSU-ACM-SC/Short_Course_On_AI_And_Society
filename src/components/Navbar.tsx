"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Instructor", href: "#instructor" },
  { label: "Details", href: "#details" },
  { label: "Perks", href: "#perks" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-offwhite brutal-border-thick border-t-0 border-x-0 transition-shadow ${
        scrolled ? "shadow-[0_4px_0_#000]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/acm-logo.webp"
            alt="NSU ACM Student Chapter Logo"
            width={44}
            height={44}
            className="h-11 w-auto"
          />
          <span className="font-mono font-bold text-sm tracking-tight hidden sm:inline">
            NSU ACM SC
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-2 border-2 border-transparent hover:border-black hover:bg-white hover:brutal-shadow transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, "#register")}
              className="font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 bg-acm-blue text-white border-2 border-black brutal-shadow hover:bg-acm-blue-dark hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#000] transition-all"
            >
              Register →
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 border-2 border-black bg-white cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-offwhite brutal-border-thick border-t-0 border-x-0 px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block font-mono text-xs font-bold uppercase tracking-wider py-3 text-center border-b-2 border-dashed border-gray-300 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, "#register")}
            className="block mt-3 font-mono text-xs font-bold uppercase tracking-wider py-3 text-center bg-acm-blue text-white border-2 border-black brutal-shadow"
          >
            Register →
          </a>
        </div>
      )}
    </nav>
  );
}
