"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sherbime", label: "Shërbime" },
  { href: "#projekte", label: "Projekte" },
  { href: "#rreth", label: "Rreth nesh" },
  { href: "#lokacion", label: "Lokacion" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-3">
            <svg
              className="w-9 h-9 text-[#2BAEE6]"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden
            >
              <path
                d="M20 6 L34 32 L26 32 L20 20 L14 32 L6 32 Z"
                fill="currentColor"
              />
              <path d="M14 32 L26 32" stroke="#0B0B0D" strokeWidth="2.5" />
            </svg>
            <span className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl tracking-tight text-white">
              A <span className="font-normal opacity-70">Aluminium</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] font-medium tracking-wide text-white/75 hover:text-[#2BAEE6] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-[0.82rem] font-semibold tracking-wide px-5 py-2.5 transition-all bg-[#2BAEE6] text-[#0B0B0D] hover:bg-white"
            >
              Ofertë falas
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Meny"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-px transition-all bg-white ${mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-6 h-px transition-all bg-white ${mobileOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-6 h-px transition-all bg-white ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B0B0D] border-t border-white/10">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-[#2BAEE6] font-medium py-3 border-b border-white/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-[#2BAEE6] text-[#0B0B0D] font-semibold py-3.5"
            >
              Ofertë falas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
