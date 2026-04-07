"use client";
import { motion } from "framer-motion";
import { useState } from "react";


const BRAND = "Sheryians";

export default function BrandHero() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
        }}
      >
        {BRAND.split("").map((char, idx) => (
          <motion.span
            key={idx}
            className="inline-block relative"
            style={{
              cursor: char !== " " ? "pointer" : "default",
              marginRight: char === " " ? "0.15em" : undefined,
              color: hoveredIdx === idx ? "#ff7e3c" : "transparent",
              WebkitTextStroke: "2.5px #444",
              transition: "color 0.3s cubic-bezier(.4,0,.2,1)",
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            animate={
              hoveredIdx === idx
                ? {
                    textShadow:
                      "0 0 48px #ff7e3c, 0 0 128px #fff, 0 0 32px #ff7e3c",
                  }
                : { textShadow: "0 0 0 #000" }
            }
            transition={{ duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </section>
  );
}
