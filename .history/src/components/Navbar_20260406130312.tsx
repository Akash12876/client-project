"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "/about-us" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (typeof window !== "undefined") {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 animate-fade-in backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg" style={{boxShadow: "0 4px 32px 0 rgba(31,38,135,0.10)"}}>
      {/* Logo */}
      <button
        className="flex items-center gap-2 focus:outline-none"
        onClick={() => handleNav("#home")}
      >
        <span className="text-2xl font-extrabold text-indigo-400 tracking-widest drop-shadow-lg cursor-pointer">iparx</span>
        <span className="text-lg font-bold text-white cursor-pointer">media</span>
      </button>
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-2 md:gap-6">
        {navItems.map((item) => (
          <span key={item.label} className="relative group">
            <button
              onClick={() => handleNav(item.href)}
              className="text-white/90 font-semibold px-3 py-1 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <span className="inline-block group-hover:scale-110 group-hover:text-indigo-400 transition-transform duration-200">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </button>
          </span>
        ))}
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[101]"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        style={{ position: "relative" }}
      >
        <span className={`block w-7 h-1 rounded-full bg-indigo-400 mb-1 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-7 h-1 rounded-full bg-indigo-400 mb-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
        <span className={`block w-7 h-1 rounded-full bg-indigo-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Mobile Menu - covers only below navbar, no overlap with brand, only one close button, all items visible */}
      {open && (
        <div className="fixed left-0 top-[64px] w-full h-[calc(100%-64px)] bg-black/95 z-[100] flex flex-col items-center gap-8 animate-fade-in md:hidden px-4 pt-8" style={{overflowY: 'auto'}}>
          <button
            className="absolute top-4 right-4 text-3xl text-white bg-indigo-500/20 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none z-[102]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-2xl font-bold text-white py-3 px-6 rounded hover:bg-indigo-700/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-3/4"
              style={{marginTop: item.label === 'HOME' ? '2.5rem' : undefined}}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
