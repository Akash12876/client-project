"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ContactFormModal = dynamic(() => import("./ContactFormModal"), { ssr: false });
import { motion } from "framer-motion";


const subheadings = [
  "Performance Marketing",
  "High-Converting Content",
  "YouTube Growth",
  "Better ROI",
];

export default function Hero() {
  const [showHero, setShowHero] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 1000); // 1s delay after mount
    return () => clearTimeout(timer);
  }, []);
  const [subheadingIndex, setSubheadingIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (subheadings.length === 0) return;
    if (typing) {
      if (displayed.length < subheadings[subheadingIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(subheadings[subheadingIndex].slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed("");
        setSubheadingIndex((i) => (i + 1) % subheadings.length);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, subheadingIndex]);

  const handleConnectClick = () => {
    setShowContact(true);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[70vh] pt-24 pb-10 md:min-h-screen md:h-screen md:py-16 px-4 bg-black overflow-hidden animate-fade-in">
      {showHero && (
        <>
          <motion.h1
            className="text-center font-black mb-4 leading-[1.08] tracking-[0.01em] select-none"
          >
            <span className="block whitespace-nowrap text-[clamp(0.85rem,4.8vw,2.7rem)] md:whitespace-normal md:text-[clamp(3rem,10vw,7rem)]">
              {"Empowering Brands with".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block text-[clamp(2rem,10vw,3.2rem)] md:text-[clamp(3.5rem,12vw,8rem)]">
              {"iparx media".split("").map((char, i) => (
                <motion.span
                  key={"brand-" + i}
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1.15 + i * 0.08,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                  style={{
                    background: "linear-gradient(90deg, #a78bfa 20%, #7c3aed 60%, #fff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                    fontWeight: 900,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="text-xl md:text-2xl font-medium text-indigo-300 mb-8 h-8 min-h-[2rem] text-center"
          >
            {displayed}
            <span className="animate-pulse">|</span>
          </motion.div>
          <motion.button
            onClick={handleConnectClick}
            whileHover={{
              scale: 1.07,
              y: -4,
              boxShadow: "0 4px 32px 0 #a78bfa55, 0 0 0 4px #a78bfa33",
            }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="relative group mt-2 px-8 py-3 font-bold rounded-full shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa] overflow-hidden border border-[#a78bfa33]"
            style={{ minWidth: 200, background: "linear-gradient(90deg, #18181b 60%, #131314 120%)" }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 w-full">
              <span className="inline-block transition-transform duration-400 group-hover:-translate-x-1">
                Get Your Growth Plan 
              </span>
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.span>
            </span>
            {/* Glow effect */}
            <span className="pointer-events-none absolute inset-0 rounded-full z-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 opacity-60 blur-[6px]" style={{background: "linear-gradient(90deg, #4444A7 0%, #5043C4 100%)"}}></span>
            {/* Animated overlay for micro-interaction */}
            <span className="pointer-events-none absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(.7,.2,.2,1)] bg-[#18181b] bg-opacity-90 rounded-full z-0"></span>
          </motion.button>
          {showContact && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className="fixed inset-0 z-[100] flex items-center justify-center"
            >
              <ContactFormModal onClose={() => setShowContact(false)} />
            </motion.div>
          )}
        </>
      )}
    </section>
  );
}
