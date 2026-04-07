"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const subheadings = [
  "Performance Marketing",
  "Social Media Marketing",
  "Creative Strategy & Content Production",
  "Website & Funnel Development",
];

export default function Hero() {
  const [subheadingIndex, setSubheadingIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < subheadings[subheadingIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(subheadings[subheadingIndex].slice(0, displayed.length + 1));
        }, 60);
      } else {
        setTyping(false);
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
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] py-16 px-8 bg-gradient-to-br from-indigo-900 via-black to-zinc-900 overflow-hidden animate-fade-in">
      {/* Left: Name and Brand */}
      <div className="z-10 flex flex-col items-start gap-4 max-w-lg w-full md:w-1/2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-blue-400 drop-shadow-lg"
        >
          Paras Sharma
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 tracking-widest drop-shadow-lg"
        >
          iparx media
        </motion.h2>
        <div className="h-10 mt-2 flex items-center">
          <span className="text-xl md:text-2xl font-semibold text-indigo-200">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "#6366f1", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConnectClick}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 via-pink-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold rounded-full shadow-lg transition-all text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Let's Connect
        </motion.button>
      </div>
      {/* Right: Image Card */}
      <div className="z-10 flex justify-center items-center w-full md:w-1/2 mt-12 md:mt-0">
        <div className="glass p-4 md:p-8 flex flex-col items-center max-w-xs animate-fade-in">
          <img
            src="/profile.jpg"
            alt="Paras Sharma"
            className="w-40 h-40 rounded-2xl object-cover border-4 border-indigo-400 shadow-lg mb-4"
          />
          <span className="text-lg font-bold text-white">Paras Sharma</span>
        </div>
      </div>
    </section>
  );
}
