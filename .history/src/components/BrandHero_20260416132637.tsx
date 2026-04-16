"use client";
import { motion } from "framer-motion";
import { useState } from "react";


const BRAND = "iparx media";

export default function BrandHero() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Animation variants for lazyloader effect
  const getVariants = (idx: number) => ({
    initial: {
      color: "transparent",
      textShadow: "0 0 0 #000",
    },
    hovered: {
      color: "#ff7e3c",
      textShadow: "0 0 48px #ff7e3c, 0 0 128px #fff, 0 0 32px #ff7e3c",
      transition: {
        duration: 0.4,
        delay: hoveredIdx !== null && idx > hoveredIdx ? (idx - hoveredIdx) * 0.07 : 0,
        type: "spring",
      },
    },
    unhovered: {
      color: "transparent",
      textShadow: "0 0 0 #000",
      transition: {
        duration: 0.3,
        delay: hoveredIdx !== null && idx > hoveredIdx ? (idx - hoveredIdx) * 0.04 : 0,
        type: "spring",
      },
    },
  });

  return (
    <section className="w-full flex justify-center items-center py-20 px-0 bg-black">
      <h1
        className="select-none w-full text-center font-black uppercase relative leading-[1.05]"
        style={{
          fontSize: "clamp(2.5rem,16vw,13vw)",
          WebkitTextStroke: "2.5px #444",
          color: "transparent",
          width: "100%",
          letterSpacing: "0.01em",
          userSelect: "none",
        }}
      >
        {BRAND.split("").map((char, idx) => (
          <motion.span
            key={idx}
            className="inline-block relative"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            initial="initial"
            animate={hoveredIdx === null ? "initial" : hoveredIdx <= idx ? "hovered" : "unhovered"}
            variants={getVariants(idx)}
            style={{ WebkitTextStroke: "2.5px #444" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    </section>
  );
}
