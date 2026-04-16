"use client";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";


const BRAND = "iparx media";

export default function BrandHero() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    const x = e.clientX;
    let nearest = -1;
    let minDistance = Infinity;

    letterRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - x);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = idx;
      }
    });

    if (nearest !== -1) setActiveIdx(nearest);
  }, []);

  const getLetterMotion = (idx: number, char: string) => {
    if (char === " ") {
      return {
        color: "transparent",
        textShadow: "0 0 0 rgba(0,0,0,0)",
        transition: { duration: 0.3 },
      };
    }

    if (activeIdx === null) {
      return {
        color: "transparent",
        textShadow: "0 0 0 rgba(0,0,0,0)",
        transition: {
          duration: 0.9,
          ease: "easeOut",
        },
      };
    }

    const d = Math.abs(idx - activeIdx);
    const intensity = Math.max(0, 1 - d * 0.28);

    const fill = 0.06 + intensity * 0.26;
    const glowA = 0.05 + intensity * 0.22;
    const glowB = 0.04 + intensity * 0.14;

    return {
      color: `rgba(198, 212, 255, ${fill.toFixed(3)})`,
      textShadow:
        `0 0 ${(10 + intensity * 16).toFixed(0)}px rgba(167, 139, 250, ${glowA.toFixed(3)}), ` +
        `0 0 ${(20 + intensity * 28).toFixed(0)}px rgba(96, 165, 250, ${glowB.toFixed(3)})`,
      transition: {
        duration: 0.42,
        delay: d * 0.018,
        ease: "easeOut",
      },
    };
  };

  const getStrokeColor = (idx: number, char: string) => {
    if (char === " " || activeIdx === null) return "#323843";
    const d = Math.abs(idx - activeIdx);
    const intensity = Math.max(0, 1 - d * 0.28);
    const stroke = 68 + intensity * 32;
    return `rgba(${stroke.toFixed(0)}, ${(stroke + 8).toFixed(0)}, ${(stroke + 18).toFixed(0)}, 0.9)`;
  };

  return (
    <section className="w-full flex justify-center items-center py-20 px-0 bg-black">
      <h1
        className="select-none w-full text-center font-black uppercase relative leading-[1.05]"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveIdx(null)}
        style={{
          fontSize: "clamp(2.5rem,16vw,13vw)",
          WebkitTextStroke: "2.5px #323843",
          color: "transparent",
          width: "100%",
          letterSpacing: "0.01em",
          userSelect: "none",
        }}
      >
        {BRAND.split("").map((char, idx) => (
          <motion.span
            key={idx}
            ref={(el) => {
              letterRefs.current[idx] = el;
            }}
            className="inline-block relative"
            initial={{ color: "transparent", textShadow: "0 0 0 rgba(0,0,0,0)", WebkitTextStrokeColor: "#323843" }}
            animate={getLetterMotion(idx, char)}
            style={{ WebkitTextStroke: `2.5px ${getStrokeColor(idx, char)}` }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    </section>
  );
}
