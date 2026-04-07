import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] py-16 px-8 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden">
      {/* Left: Name and Brand */}
      <div className="z-10 flex flex-col items-start gap-4 max-w-lg">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          Paras Sharma
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-indigo-400 tracking-widest"
        >
          iparx media
        </motion.h2>
        <p className="mt-4 text-lg text-zinc-300 max-w-md">
          Welcome to a world of creative digital experiences. Scroll to explore stunning animations and impactful strategies.
        </p>
      </div>
      {/* Right: 3D/Animated Visual Placeholder */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-0 bottom-0 w-[500px] h-[500px] hidden md:block"
      >
        {/* Placeholder for 3D/animated visual (replace with Three.js/GSAP/your asset) */}
        <div className="w-full h-full bg-gradient-to-tr from-indigo-700/60 via-purple-700/40 to-transparent rounded-full blur-2xl animate-pulse" />
      </motion.div>
    </section>
  );
}
