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
    <section className="w-full flex justify-center items-center py-20 px-0 bg-black">
      <h1
        className="select-none w-full text-center font-black uppercase relative leading-[1.05]"
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
