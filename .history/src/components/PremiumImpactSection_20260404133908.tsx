
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";

const impactData = [
  {
    value: 3,
    suffix: "x",
    label: "Growth",
    desc: "Business expansion in 12 months."
  },
  {
    value: 150,
    suffix: "%",
    label: "Leads Increase",
    desc: "More qualified leads generated."
  },
  {
    value: 2,
    suffix: "M+",
    label: "Reach",
    desc: "People reached across platforms."
  },
  {
    value: 40,
    suffix: "%",
    label: "Conversion Boost",
    desc: "Higher conversion rates achieved."
  }
];

function useCountUp(target: number, duration = 2, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [target, duration, start]);
  return count;
}

export default function PremiumImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] flex flex-col items-center justify-center py-24 px-4 md:px-0 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      {/* Animated glowing background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-purple-600/30 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 blur-2xl rounded-full animate-pulse-slow" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg"
      >
        Impact That Speaks
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-2xl text-indigo-200 mt-3 mb-12 text-center z-10 font-medium"
      >
        Real results. Real growth.
      </motion.p>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {impactData.map((item, idx) => (
          <ImpactCard
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
            desc={item.desc}
            inView={inView}
            delay={0.5 + idx * 0.2}
          />
        ))}
      </div>
      {/* Subtle animated particles (client-only to avoid hydration error) */}
      <Particles />
    </section>
  );
}

// Card component to allow hook usage at top level
function ImpactCard({ value, suffix, label, desc, inView, delay }: { value: number, suffix: string, label: string, desc: string, inView: boolean, delay: number }) {
  const count = useCountUp(value, 2, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.07, boxShadow: "0 0 32px 0 #a78bfa, 0 0 0 8px #6366f1" }}
      className="group bg-gradient-to-br from-[#232046]/80 to-[#181826]/90 rounded-3xl p-10 flex flex-col items-center justify-center shadow-2xl border border-indigo-700/40 hover:border-indigo-400/80 transition-all duration-300 cursor-pointer"
    >
      <span className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-glow group-hover:text-indigo-400 transition-colors duration-300 flex items-end">
        {count}
        <span className="text-3xl md:text-4xl font-bold ml-1 text-indigo-400 group-hover:text-pink-400 transition-colors duration-300">
          {suffix}
        </span>
      </span>
      <span className="text-xl md:text-2xl font-bold text-indigo-200 mt-2 mb-2 text-center">
        {label}
      </span>
      <span className="text-base md:text-lg text-indigo-300 text-center">
        {desc}
      </span>
    </motion.div>
  );
}
