"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BrandHero() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="w-full flex justify-center items-center py-24 bg-black">
      <motion.h1
        className="select-none text-[clamp(2.5rem,12vw,8rem)] font-black tracking-tight uppercase relative inline-block text-center"
        style={{
          WebkitTextStroke: "2px #444",
          color: hovered ? "#ff6a2f" : "transparent",
          transition: "color 0.4s cubic-bezier(.4,0,.2,1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ letterSpacing: "-0.05em", opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={hovered ? { textShadow: "0 0 48px #ff6a2f, 0 0 120px #fff2" } : { textShadow: "0 0 0 #0000" }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <span className="brand-animated-text">
          Sheryians
        </span>
        {/* Animated light sweep */}
        {hovered && (
          <motion.span
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, x: "-60%" }}
            animate={{ opacity: 1, x: "120%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(120deg, transparent 0%, #fff8 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(120deg, transparent 0%, #fff 50%, transparent 100%)",
              mixBlendMode: "lighten",
              filter: "blur(2px)",
            }}
          />
        )}
      </motion.h1>
    </section>
  );
}
