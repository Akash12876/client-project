"use client";
import React from "react";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 glass animate-fade-in border-none shadow-none">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-indigo-400 tracking-widest drop-shadow-lg">iparx</span>
        <span className="text-lg font-bold text-white">media</span>
      </div>
      {/* Menu */}
      <nav className="flex gap-2 md:gap-6">
        {navItems.map((item, idx) => (
          <span key={item.label} className="relative group">
            <Link
              href={item.href}
              className="text-white/90 font-semibold px-3 py-1 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <span className="inline-block group-hover:scale-110 group-hover:text-indigo-400 transition-transform duration-200">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          </span>
        ))}
      </nav>
    </header>
  );
}
