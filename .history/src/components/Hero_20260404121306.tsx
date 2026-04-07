"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen h-screen py-16 px-4 md:px-8 bg-black overflow-hidden animate-fade-in">
      {/* Image Container */}
      <motion.div
        whileHover={{}}
        className="flex-shrink-0 flex justify-center items-center mb-8 md:mb-0 md:mr-16"
      >
        <motion.div
          initial={{ boxShadow: "0 8px 32px 0 rgba(238, 238, 243, 0.37)", borderColor: "#6366f1" }}
          whileHover={{ boxShadow: "0 0 0 8px rgba(255,255,255,0.15)", borderColor: "#fff" }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border-4 border-indigo-500 shadow-2xl overflow-hidden bg-gradient-to-br from-zinc-900 via-indigo-900 to-black p-2 transition-all duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.13, borderRadius: "2.5rem" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-64 h-64"
          >
            <Image
              src="/profile.jpg.PNG"
              alt="Paras Sharma"
              width={260}
              height={260}
              className="w-64 h-64 rounded-2xl object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start max-w-xl w-full">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-2 text-center md:text-left"
        >
          Paras Sharma
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl font-medium text-indigo-300 mb-6 h-8 min-h-[2rem] text-center md:text-left"
        >
          {displayed}
          <span className="animate-pulse">|</span>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "#2563eb", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConnectClick}
          className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold rounded-full shadow-lg transition-all text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Explore My Skills
        </motion.button>
      </div>
    </section>
  );
}
