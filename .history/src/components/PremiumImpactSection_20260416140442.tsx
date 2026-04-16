"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";

const stats = [
  { value: 3,   suffix: "x",  label: "Revenue Growth",   desc: "Average business expansion within the first 12 months of partnership.", color: "#a78bfa", accent: "#7c3aed", progress: 92 },
  { value: 150, suffix: "%",  label: "Leads Increase",    desc: "More qualified leads through hyper-targeted funnels.",                  color: "#60a5fa", accent: "#2563eb", progress: 78 },
  { value: 2,   suffix: "M+", label: "Monthly Reach",     desc: "People reached across all active platforms each month.",                color: "#34d399", accent: "#059669", progress: 85 },
  { value: 40,  suffix: "%",  label: "Conversion Boost",  desc: "Higher conversions via data-driven creative strategy.",                 color: "#f472b6", accent: "#db2777", progress: 68 },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 42, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] } },
};

function useCountUp(target: number, duration = 2.4, start = false, delay = 0) {
  const [count, setCount] = useState(0);
  const delayRef = useRef(delay);

  useEffect(() => {
    delayRef.current = delay;
  }, [delay]);

  useEffect(() => {
    if (!start) return;
    let ctrl: ReturnType<typeof animate> | null = null;
    const t = window.setTimeout(() => {
      ctrl = animate(0, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setCount(v),
        onComplete: () => setCount(target),
      });
    }, delayRef.current * 1000);

    return () => {
      window.clearTimeout(t);
      if (ctrl) ctrl.stop();
    };
  }, [target, duration, start]);
  return count;
}

function formatCounter(value: number, target: number) {
  if (target <= 5) {
    const precise = value.toFixed(2);
    return precise.endsWith(".00") ? `${Math.round(value)}` : precise;
  }
  return `${Math.floor(value)}`;
}

function Ring({ progress, color, inView, delay = 0, size = 80, stroke = 3 }: {
  progress: number; color: string; inView: boolean; delay?: number; size?: number; stroke?: number;
}) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const mv = useMotionValue(circ);
  const sp = useSpring(mv, { stiffness: 35, damping: 16 });
  const [dash, setDash] = useState(circ);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => mv.set(circ - (progress / 100) * circ), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, progress, circ, mv, delay]);
  useEffect(() => sp.on("change", (v) => setDash(v)), [sp]);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="white" strokeWidth={stroke} strokeOpacity={0.06}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={dash} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ filter: `drop-shadow(0 0 5px ${color}aa)` }}/>
    </svg>
  );
}

function Corners({ color, inView }: { color: string; inView: boolean }) {
  const p = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: inView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  });
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
      <motion.path d="M 20 52 L 20 20 L 52 20" stroke={color} strokeWidth="1.5" {...p(0.3)}/>
      <motion.path d="M calc(100% - 52px) 20 L calc(100% - 20px) 20 L calc(100% - 20px) 52" stroke={color} strokeWidth="1.5" {...p(0.42)}/>
      <motion.path d="M 20 calc(100% - 52px) L 20 calc(100% - 20px) L 52 calc(100% - 20px)" stroke={color} strokeWidth="1.5" {...p(0.54)}/>
      <motion.path d="M calc(100% - 52px) calc(100% - 20px) L calc(100% - 20px) calc(100% - 20px) L calc(100% - 20px) calc(100% - 52px)" stroke={color} strokeWidth="1.5" {...p(0.66)}/>
    </svg>
  );
}

function GridBg() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="impactgrid" width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M 72 0 L 0 0 0 72" fill="none" stroke="white" strokeWidth="0.4" strokeOpacity="0.025"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#impactgrid)"/>
    </svg>
  );
}

function LargeCard({ stat, inView, counterDelay = 0 }: { stat: typeof stats[0]; inView: boolean; counterDelay?: number }) {
  const count = useCountUp(stat.value, 1.2, inView, counterDelay);
  const displayCount = formatCounter(count, stat.value);
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative rounded-[2rem] overflow-hidden flex flex-col justify-end p-9 md:p-12 cursor-default h-full"
      style={{
        minHeight: 340,
        background: `linear-gradient(140deg, ${stat.accent}22 0%, #030306 60%)`,
        border: `1px solid ${hov ? stat.color + "40" : stat.color + "14"}`,
        boxShadow: hov ? `0 0 100px ${stat.color}20, inset 0 1px 0 ${stat.color}16` : `inset 0 1px 0 ${stat.color}0c`,
        transition: "box-shadow 0.6s, border-color 0.4s",
      }}
    >
      <Corners color={stat.color} inView={inView} />
      <motion.div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        animate={{ opacity: hov ? 0.2 : 0.07 }} transition={{ duration: 0.7 }}
        style={{ background: stat.color }} />
      <div className="absolute top-0 right-4 text-[170px] font-black leading-none select-none pointer-events-none"
        style={{ color: stat.color, opacity: 0.03, lineHeight: 1 }}>{stat.value}</div>
      <div className="absolute top-7 right-7 opacity-35">
        <Ring progress={stat.progress} color={stat.color} size={90} stroke={3} inView={inView} delay={0.12}/>
      </div>
      <div className="relative z-10">
        <motion.div className="inline-flex items-center gap-2 mb-5"
          initial={{ opacity: 0, x: -14 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.55 }}>
          <motion.span className="w-2 h-2 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ background: stat.color, boxShadow: `0 0 8px ${stat.color}` }} />
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase" style={{ color: stat.color }}>Top Metric</span>
        </motion.div>
        <div className="flex items-end gap-1 mb-3">
          <span className="text-8xl md:text-[96px] font-black leading-none tabular-nums"
            style={{ color: stat.color, textShadow: `0 0 80px ${stat.color}55` }}>{displayCount}</span>
          <span className="text-5xl font-black mb-3" style={{ color: stat.color }}>{stat.suffix}</span>
        </div>
        <div className="text-white text-2xl md:text-3xl font-bold mb-2">{stat.label}</div>
        <div className="text-zinc-600 text-sm leading-relaxed max-w-sm">{stat.desc}</div>
        <div className="mt-7 space-y-1.5">
          <div className="flex justify-between">
            <span className="text-[10px] tracking-widest uppercase text-zinc-700">Efficiency Index</span>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: stat.color }}>{stat.progress}%</span>
          </div>
          <div className="h-px rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
            <motion.div className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.color})`, boxShadow: `0 0 10px ${stat.color}88` }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${stat.progress}%` } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ stat, inView, counterDelay = 0 }: { stat: typeof stats[0]; inView: boolean; counterDelay?: number }) {
  const count = useCountUp(stat.value, 1, inView, counterDelay);
  const displayCount = formatCounter(count, stat.value);
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className="relative rounded-[1.5rem] overflow-hidden flex flex-col justify-between p-7 cursor-default"
      style={{
        minHeight: 172,
        background: `linear-gradient(140deg, ${stat.accent}14 0%, #030306 70%)`,
        border: `1px solid ${hov ? stat.color + "38" : stat.color + "12"}`,
        boxShadow: hov ? `0 0 60px ${stat.color}16, inset 0 1px 0 ${stat.color}16` : `inset 0 1px 0 ${stat.color}08`,
        transition: "box-shadow 0.5s, border-color 0.4s",
      }}
    >
      <Corners color={stat.color} inView={inView} />
      <div className="absolute top-5 right-5 opacity-25">
        <Ring progress={stat.progress} color={stat.color} size={56} stroke={2} inView={inView} delay={0.08}/>
      </div>
      <motion.div className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-[60px] pointer-events-none"
        animate={{ opacity: hov ? 0.22 : 0.06 }} transition={{ duration: 0.5 }}
        style={{ background: stat.color }} />
      <motion.div className="flex items-center gap-1.5"
        animate={{ opacity: hov ? 1 : 0.55 }} transition={{ duration: 0.3 }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: stat.color, boxShadow: `0 0 6px ${stat.color}` }} />
        <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: stat.color }}>Live</span>
      </motion.div>
      <div>
        <div className="flex items-end gap-0.5 mb-1">
          <span className="text-[42px] font-black leading-none tabular-nums" style={{ color: stat.color }}>{displayCount}</span>
          <span className="text-xl font-black mb-1.5" style={{ color: stat.color }}>{stat.suffix}</span>
        </div>
        <div className="text-white font-semibold text-sm mb-3">{stat.label}</div>
        <div className="h-px rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <motion.div className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.color})`, boxShadow: `0 0 8px ${stat.color}99` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${stat.progress}%` } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}/>
        </div>
      </div>
    </motion.div>
  );
}

export default function PremiumImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const hasStartedRef = useRef(false);
  const startTimerRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headY = useTransform(scrollYProgress, [0, 1], [-36, 36]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 22 });
  const sy = useSpring(my, { stiffness: 80, damping: 22 });
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }, [mx, my]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      const visible = e.isIntersecting;
      setInView(visible);

      if (visible && !hasStartedRef.current) {
        hasStartedRef.current = true;
        startTimerRef.current = window.setTimeout(() => setHasStarted(true), 120);
      }
    }, { threshold: 0.22 });

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (startTimerRef.current !== null) window.clearTimeout(startTimerRef.current);
    };
  }, []);

  const [large, ...small] = stats;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative w-full py-28 px-5 md:px-16 overflow-hidden bg-black"
    >
      <GridBg />

      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, #a78bfa11 95deg, transparent 160deg, #60a5fa10 245deg, transparent 360deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      />

      <motion.div
        className="absolute inset-y-0 -left-1/2 w-1/2 pointer-events-none z-0"
        style={{ background: "linear-gradient(90deg, transparent, #a78bfa16, transparent)" }}
        animate={{ x: ["0%", "300%"] }}
        transition={{ duration: 4.2, ease: "linear", repeat: Infinity }}
      />

      <motion.div className="absolute pointer-events-none rounded-full z-0"
        style={{
          width: 650, height: 650,
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          background: "radial-gradient(circle, #a78bfa09 0%, transparent 65%)",
        }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-1/3 left-[12%] w-[480px] h-[480px] rounded-full blur-[160px]"
          animate={{ opacity: inView ? [0.03, 0.1, 0.03] : 0, scale: inView ? [1, 1.08, 1] : 1 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "#a78bfa" }}/>
        <motion.div className="absolute bottom-0 right-[8%] w-[380px] h-[380px] rounded-full blur-[130px]"
          animate={{ opacity: inView ? [0.02, 0.08, 0.02] : 0, scale: inView ? [1, 1.06, 1] : 1 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          style={{ background: "#60a5fa" }}/>
      </div>

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"/>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"/>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div style={{ y: headY }} className="mb-16 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ border: "1px solid #a78bfa28", background: "#a78bfa0a" }}
            initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}/>
            <span className="text-[#a78bfa] text-xs font-bold tracking-[0.28em] uppercase">Numbers Don&apos;t Lie</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white leading-[1.02] mb-5 tracking-tight"
            initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}>
            Impact That{" "}
            <span className="relative inline-block">
              <span style={{
                background: "linear-gradient(100deg, #a78bfa 0%, #60a5fa 55%, #a78bfa 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Speaks</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #a78bfa, #60a5fa)", originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}/>
            </span>
          </motion.h2>

          <motion.p className="text-zinc-700 text-lg max-w-md mx-auto"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.12 }}>
            Real clients. Verified results. No fluff.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          initial="hidden"
          animate={hasStarted ? "show" : "hidden"}
          variants={containerVariants}
        >
          <div className="md:col-span-2">
            <LargeCard stat={large} inView={hasStarted} counterDelay={0.1} />
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <SmallCard stat={small[0]} inView={hasStarted} counterDelay={0.55} />
            <SmallCard stat={small[1]} inView={hasStarted} counterDelay={0.95} />
          </div>
          <SmallCard stat={small[2]} inView={hasStarted} counterDelay={1.35} />
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 rounded-[1.5rem] overflow-hidden flex items-center relative"
            style={{
              minHeight: 80,
              background: "linear-gradient(90deg, #a78bfa08, #03030a 40%, #60a5fa07)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}>
            <div className="w-full overflow-hidden py-5 px-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(90deg, #030306, transparent)" }}/>
              <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(-90deg, #030306, transparent)" }}/>
              <motion.div className="flex gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                {Array(6).fill(null).map((_, i) => (
                  <span key={i} className="flex items-center gap-12">
                    {["3x Revenue", "150% Leads", "2M+ Reach", "40% Conversions"].map((t, j) => (
                      <span key={j} className="flex items-center gap-3">
                        <span className="text-white/20 font-bold text-xs tracking-[0.25em] uppercase">{t}</span>
                        <span className="w-1 h-1 rounded-full bg-white/15"/>
                      </span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-16 flex items-center justify-center gap-5"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.div className="h-px flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07))" }}
            initial={{ scaleX: 0, originX: "right" }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.24 }}/>
          <span className="text-zinc-800 text-[11px] tracking-[0.3em] uppercase font-medium">
            iparx media — data driven since day one
          </span>
          <motion.div className="h-px flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.07), transparent)" }}
            initial={{ scaleX: 0, originX: "left" }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.24 }}/>
        </motion.div>
      </div>
    </section>
  );
}
