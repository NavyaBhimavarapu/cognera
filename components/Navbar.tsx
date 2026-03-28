"use client";

import { useEffect, useState } from "react";

interface Navlink {
  label: string;
  href: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navlinks: Navlink[] = [
    { label: "Problems", href: "#Problems" },
    { label: "Solutions", href: "#Solution" },
    { label: "Usecases", href: "#Usecase" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${
      scrolled
        ? "bg-[#0D0B1E]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3"
        : "bg-[#0D0B1E]/80 backdrop-blur-sm py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#Hero" className="flex items-center gap-2">
          <img src="/Cognera_log_bg_removed.png" alt="logo" className="h-8 w-auto" />
          <span className="text-white font-bold text-lg tracking-tight">Cognera</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navlinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white/70 text-sm font-medium hover:text-white transition-colors">
            Login
          </button>
          <button className="bg-[#8B5CF6] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#7C3AED] transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile: Get Started + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="bg-[#8B5CF6] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#7C3AED] transition-colors">
            Get Started
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D0B1E]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navlinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors py-1">
              {link.label}
            </a>
          ))}
          <button className="text-white/70 text-sm font-medium hover:text-white transition-colors text-left py-1">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}