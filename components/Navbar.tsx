"use client";

import { useEffect, useState } from "react";
interface Navlink{
  label: string;
  href: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navlinks: Navlink[]=[
    {label: "Problems", href: "#Problems"},
    {label: "Solutions", href: "#Solution"},
    {label: "Usecases", href: "#Usecase"},
    {label: "Contact", href: "#Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${
        scrolled
          ? "bg-[#0D0B1E]/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-[#0D0B1E]/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#Hero" className="flex items-center gap-2">
  <img src="/Cognera_log_bg_removed.png" alt="logo" className="h-8 w-auto" />
  <span className="text-white font-bold text-lg tracking-tight">Cognera</span>
</a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {navlinks.map((link)=> (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
                </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-white/70 text-sm font-medium hover:text-white transition-colors hidden sm:block">
            Login
          </button>
          <button className="bg-[#8B5CF6] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#7C3AED] transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}