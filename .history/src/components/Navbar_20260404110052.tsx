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
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 backdrop-blur-lg bg-white/10 border-b border-white/10 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-indigo-400 tracking-widest drop-shadow-lg">iparx</span>
        <span className="text-lg font-bold text-white">media</span>
      </div>
      {/* Menu */}
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white/90 hover:text-indigo-400 font-semibold px-3 py-1 rounded transition-colors backdrop-blur-md"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
