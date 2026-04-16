"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate, useTransform, useInView } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────── */
const stats = [
  {
    value: 3,
    suffix: "x",
    label: "Revenue Growth",
    desc: "Average business expansion within first 12 months of partnership.",
    color: "#a78bfa",
    accent: "#7c3aed",
    progress: 92,
    icon: "↑",
  },
  {
    value: 150,
    suffix: "%",
    label: "Leads Increase",
    desc: "More qualified leads generated through targeted funnels.",
    color: "#60a5fa",
    accent: "#2563eb",
    progress: 78,
    icon: "◈",
  },
  {
    value: 2,
    suffix: "M+",
    label: "Total Reach",
    desc: "People reached across platforms every month.",
    color: "#34d399",
    accent: "#059669",
    progress: 85,
    icon: "⬡",
  },
  {
    value: 40,
    suffix: "%",
    label: "Conversion Boost",
    desc: "Higher conversion rates through data-driven creative strategy.",
    color: "#f472b6",
    accent: "#db2777",
    progress: 68,
    icon: "⬢",
  },
];

/* ─── Animated count-up hook ────────────────────────────── */
function useCountUp(target: number, duration = 2.2, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
      onComplete: () => setCount(target),
    });
    return () => controls.stop();
  }, [target, duration, start]);
  return count;
}

/* ─── SVG Circular Progress Ring ────────────────────────── */
function RingProgress({
  progress, color, size = 80, stroke = 3, inView, delay = 0,
}: {
  progress: number; color: string; size?: number; stroke?: number; inView: boolean; delay?: number;
}) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const motionVal = useMotionValue(circ);
  const springVal = useSpring(motionVal, { stiffness: 40, damping: 18 });
  const [dash, setDash] = useState(circ);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => { motionVal.set(circ - (progress / 100) * circ); }, delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, progress, circ, motionVal, delay]);

  useEffect(() => { return springVal.on("change", (v) => setDash(v)); }, [springVal]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute top-6 right-6 opacity-25">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="white" strokeWidth={stroke} strokeOpacity={0.08} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={dash} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
    </svg>
  );
}

/* ─── Scan Line sweep ───────────────────────────────────── */
function ScanLine({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="absolute inset-x-0 h-px pointer-events-none z-20"
      style={{ background: "linear-gradient(90deg, transparent, #a78bfa88, #60a5fa88, transparent)" }}
      initial={{ top: "0%", opacity: 0 }}
      animate={inView ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
      transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
    />
  );
}

/* ─── Large Hero Card ────────────────────────────────────── */
function LargeCard({ stat, inView }: { stat: (typeof stats)[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2.2, inView);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="relative col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden cursor-default flex flex-col justify-end p-10 md:p-12 min-h-[340px]"
      style={{
        background: `linear-gradient(135deg, ${stat.accent}28 0%, #0a0a14 60%)`,
        border: `1.5px solid ${stat.color}${hovered ? "55" : "20"}`,
        boxShadow: hovered ? `0 0 80px ${stat.color}30, 0 0 0 1px ${stat.color}30` : "none",
        transition: "box-shadow 0.5s, border-color 0.4s",
      }}
    >
      {/* Ghost giant number */}
      <div className="absolute -top-6 -left-4 text-[200px] md:text-[260px] font-black leading-none select-none pointer-events-none"
        style={{ color: stat.color, opacity: 0.04, lineHeight: 1 }}>
        {stat.value}
      </div>

      <motion.div className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        animate={{ opacity: hovered ? 0.25 : 0.1 }} transition={{ duration: 0.6 }}
        style={{ background: stat.color }} />

      <RingProgress progress={stat.progress} color={stat.color} size={100} stroke={3.5} inView={inView} delay={0.5} />

      <div className="absolute top-8 left-10 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-black"
        style={{ background: `${stat.color}20`, color: stat.color, border: `1px solid ${stat.color}40` }}>
        {stat.icon}
      </div>

      <div className="relative z-10">
        <div className="flex items-end gap-2 mb-3">
          <span className="text-7xl md:text-8xl font-black leading-none"
            style={{ color: stat.color, textShadow: `0 0 60px ${stat.color}88` }}>
            {count}
          </span>
          <span className="text-4xl md:text-5xl font-black mb-2" style={{ color: stat.color }}>
            {stat.suffix}
          </span>
        </div>
        <div className="text-white text-2xl md:text-3xl font-bold mb-2">{stat.label}</div>
        <div className="text-zinc-400 text-base max-w-xs leading-relaxed">{stat.desc}</div>
        <div className="mt-6 h-1 rounded-full bg-white/10 w-48 overflow-hidden">
          <motion.div className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.color})` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${stat.progress}%` } : {}}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }} />
        </div>
        <div className="text-xs text-zinc-500 mt-1 tracking-widest">{stat.progress}% EFFICIENCY</div>
      </div>
    </motion.div>
  );
}

/* ─── Small Stat Card ────────────────────────────────────── */
function SmallCard({ stat, inView, delay }: { stat: (typeof stats)[0]; inView: boolean; delay: number }) {
  const count = useCountUp(stat.value, 2, inView);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="relative rounded-[1.75rem] overflow-hidden cursor-default flex flex-col justify-between p-7 min-h-[160px]"
      style={{
        background: `linear-gradient(135deg, ${stat.accent}18 0%, #080812 80%)`,
        border: `1.5px solid ${stat.color}${hovered ? "50" : "18"}`,
        boxShadow: hovered ? `0 0 50px ${stat.color}25, inset 0 0 30px ${stat.color}08` : "none",
        transition: "box-shadow 0.5s, border-color 0.4s",
      }}
    >
      <div className="absolute -right-3 -bottom-3 text-8xl font-black leading-none select-none pointer-events-none"
        style={{ color: stat.color, opacity: 0.05 }}>
        {stat.value}
      </div>

      <RingProgress progress={stat.progress} color={stat.color} size={64} stroke={2.5} inView={inView} delay={delay + 0.3} />

      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-black"
        style={{ background: `${stat.color}18`, color: stat.color, border: `1px solid ${stat.color}35` }}>
        {stat.icon}
      </div>

      <div>
        <div className="flex items-end gap-1 mb-1">
          <span className="text-4xl font-black leading-none" style={{ color: stat.color }}>{count}</span>
          <span className="text-2xl font-bold mb-0.5" style={{ color: stat.color }}>{stat.suffix}</span>
        </div>
        <div className="text-white font-semibold text-base">{stat.label}</div>
        <div className="mt-3 h-0.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.color})` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${stat.progress}%` } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: delay + 0.4 }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function PremiumImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [large, ...small] = stats;

  return (
    <section ref={sectionRef} className="relative w-full py-28 px-5 md:px-16 overflow-hidden bg-[#05050f]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute inset-0"
          animate={{ rotate: inView ? 360 : 0 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ background: "conic-gradient(from 0deg at 30% 60%, #a78bfa08 0deg, transparent 120deg, #60a5fa06 240deg, transparent 360deg)" }} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }} />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05050f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05050f] to-transparent" />
      </div>

      <ScanLine inView={inView} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p className="text-[#a78bfa] text-sm font-semibold tracking-[0.35em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05 }}>
            Numbers Don&apos;t Lie
          </motion.p>
          <motion.h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-4"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}>
            Impact That{" "}
            <span className="relative inline-block" style={{
              background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Speaks
              <motion.span className="absolute -bottom-1 left-0 h-px w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #a78bfa, #60a5fa)" }}
                initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} />
            </span>
          </motion.h2>
          <motion.p className="text-zinc-500 text-lg max-w-lg mx-auto"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}>
            Real data. Real clients. Real growth — documented.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
          <div className="md:col-span-2 md:row-span-2">
            <LargeCard stat={large} inView={inView} />
          </div>
          {small.map((s, i) => (
            <SmallCard key={s.label} stat={s} inView={inView} delay={0.3 + i * 0.15} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}>
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-zinc-700 hidden sm:block" />
          <p className="text-zinc-500 text-base tracking-wide">
            Powered by data-first strategy &amp; creative intelligence at{" "}
            <span className="text-[#a78bfa] font-semibold">iparx media</span>
          </p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-zinc-700 hidden sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
