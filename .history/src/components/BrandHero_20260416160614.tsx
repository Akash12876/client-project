"use client";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";


const BRAND = "iparx media";
const MAX_EFFECT_RANGE = 2.6;

export default function BrandHero() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const updateActiveFromClientX = useCallback((x: number) => {
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

    if (nearest !== -1) {
      setIsHovering(true);
      setActiveIdx(nearest);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    updateActiveFromClientX(e.clientX);
  }, [updateActiveFromClientX]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLHeadingElement>) => {
    if (e.touches.length === 0) return;
    updateActiveFromClientX(e.touches[0].clientX);
  }, [updateActiveFromClientX]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLHeadingElement>) => {
    if (e.touches.length === 0) return;
    updateActiveFromClientX(e.touches[0].clientX);
  }, [updateActiveFromClientX]);

  const handleTouchEnd = useCallback(() => {
    setIsHovering(false);
    setActiveIdx(null);
  }, []);

  const getLetterMotion = (idx: number, char: string) => {
    if (char === " ") {
      return {
        color: "transparent",
        textShadow: "0 0 0 rgba(0,0,0,0)",
        transition: { duration: 0.3 },
      };
    }

    if (activeIdx === null || !isHovering) {
      return {
        color: "transparent",
        textShadow: "0 0 0 rgba(0,0,0,0)",
        y: 0,
        scale: 1,
        transition: {
          duration: 1.1,
        },
      };
    }

    const d = Math.abs(idx - activeIdx);
    if (d > MAX_EFFECT_RANGE) {
      return {
        color: "transparent",
        textShadow: "0 0 0 rgba(0,0,0,0)",
        y: 0,
        scale: 1,
        transition: {
          duration: 0.7,
        },
      };
    }

    const intensity = Math.exp(-(d * d) / 2.2);

    const fill = 0.03 + intensity * 0.18;
    const glowA = 0.02 + intensity * 0.12;
    const glowB = 0.015 + intensity * 0.09;

    return {
      color: `rgba(198, 212, 255, ${fill.toFixed(3)})`,
      y: -intensity * 1.2,
      scale: 1 + intensity * 0.015,
      textShadow:
        `0 0 ${(8 + intensity * 10).toFixed(0)}px rgba(167, 139, 250, ${glowA.toFixed(3)}), ` +
        `0 0 ${(14 + intensity * 18).toFixed(0)}px rgba(96, 165, 250, ${glowB.toFixed(3)})`,
      transition: {
        duration: 0.62,
        delay: d * 0.03,
      },
    };
  };

  const getStrokeColor = (idx: number, char: string) => {
    if (char === " " || activeIdx === null || !isHovering) return "#323843";
    const d = Math.abs(idx - activeIdx);
    if (d > MAX_EFFECT_RANGE) return "#323843";
    const intensity = Math.exp(-(d * d) / 2.2);
    const stroke = 62 + intensity * 24;
    return `rgba(${stroke.toFixed(0)}, ${(stroke + 8).toFixed(0)}, ${(stroke + 18).toFixed(0)}, 0.9)`;
  };

  return (
    <section className="relative w-full flex justify-center items-center py-20 px-0 bg-black overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(167,139,250,0.15) 90deg, transparent 170deg, rgba(96,165,250,0.14) 255deg, transparent 360deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-y-0 -left-1/2 w-1/2 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.2), transparent)" }}
        animate={{ x: ["0%", "300%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[8%] top-1/2 -translate-y-1/2 h-[260px] w-[260px] rounded-full blur-[90px]"
          style={{ background: "#a78bfa" }}
          animate={{ opacity: [0.08, 0.2, 0.08], scale: [1, 1.12, 1] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-1/2 -translate-y-1/2 h-[230px] w-[230px] rounded-full blur-[80px]"
          style={{ background: "#60a5fa" }}
          animate={{ opacity: [0.07, 0.18, 0.07], scale: [1, 1.1, 1] }}
          transition={{ duration: 2.05, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
      </div>

      <h1
        className="select-none w-full text-center font-black uppercase relative leading-[1.05] z-10"
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseLeave={() => {
          setIsHovering(false);
          setActiveIdx(null);
        }}
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
