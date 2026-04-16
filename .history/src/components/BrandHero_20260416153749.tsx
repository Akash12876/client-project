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
        transition: { duration: 0.8 },
      };
    }

    if (activeIdx === null) {
      return {
        color: "transparent",
        textShadow: "0 0 0 rgba(0,0,0,0)",
        transition: {
          duration: 1.35,
        },
      };
    }

    const d = Math.abs(idx - activeIdx);
    const intensity = Math.exp(-d * 0.9);

    const fill = 0.03 + intensity * 0.18;
    const glowA = 0.02 + intensity * 0.14;
    const glowB = 0.015 + intensity * 0.1;

    return {
      color: `rgba(198, 212, 255, ${fill.toFixed(3)})`,
      textShadow:
        `0 0 ${(8 + intensity * 12).toFixed(0)}px rgba(167, 139, 250, ${glowA.toFixed(3)}), ` +
        `0 0 ${(16 + intensity * 20).toFixed(0)}px rgba(96, 165, 250, ${glowB.toFixed(3)})`,
      transition: {
        duration: 0.7,
        delay: d * 0.035,
      },
    };
  };

  const getStrokeColor = (idx: number, char: string) => {
    if (char === " " || activeIdx === null) return "#323843";
    const d = Math.abs(idx - activeIdx);
    const intensity = Math.exp(-d * 0.9);
    const stroke = 62 + intensity * 22;
    return `rgba(${stroke.toFixed(0)}, ${(stroke + 8).toFixed(0)}, ${(stroke + 18).toFixed(0)}, 0.75)`;
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
            initial={{ color: "transparent", textShadow: "0 0 0 rgba(0,0,0,0)" }}
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
