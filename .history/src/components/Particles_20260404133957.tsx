"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  top: number;
  left: number;
  y: number;
  x: number;
  duration: number;
};


export default function Particles() {
  const [positions] = useState<Particle[]>(() =>
    Array.from({ length: 18 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      y: Math.random() * 40 - 20,
      x: Math.random() * 40 - 20,
      duration: 6 + Math.random() * 4,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {positions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-400/40"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            filter: "blur(2px)"
          }}
          animate={{
            y: [0, p.y, 0],
            x: [0, p.x, 0],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
