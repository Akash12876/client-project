"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function WhatDefinesUs() {
  const router = useRouter();
  const pillars = useMemo(
    () => [
      {
        id: "audience-intelligence",
        name: "Audience Intelligence",
        label: "01",
        headline: "Know Exactly Who Buys And Why",
        copy:
          "We map intent signals, content behavior, and purchase objections to build targeting that converts faster with lower wasted spend.",
        outcome: "Lower CAC",
        outcomeValue: "-34%",
        metrics: [
          { name: "Signal Quality", value: 92 },
          { name: "Ad Relevance", value: 88 },
          { name: "Conversion Fit", value: 84 },
        ],
      },
      {
        id: "creative-systems",
        name: "Creative Systems",
        label: "02",
        headline: "Creative That Learns And Scales",
        copy:
          "Our content engine tests hooks, angles, and formats weekly, then doubles down on what drives watch time, clicks, and qualified leads.",
        outcome: "Higher CTR",
        outcomeValue: "+2.9x",
        metrics: [
          { name: "Hook Strength", value: 89 },
          { name: "Retention Curve", value: 85 },
          { name: "Message Clarity", value: 90 },
        ],
      },
      {
        id: "revenue-architecture",
        name: "Revenue Architecture",
        label: "03",
        headline: "Build A Predictable Revenue Machine",
        copy:
          "From first touch to repeat purchase, we connect ads, landing pages, CRM, and remarketing so every campaign compounds growth.",
        outcome: "ROAS Uplift",
        outcomeValue: "+4.1x",
        metrics: [
          { name: "Funnel Velocity", value: 87 },
          { name: "Lead Quality", value: 91 },
          { name: "Revenue Density", value: 86 },
        ],
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [paused, pillars.length]);

  const activePillar = pillars[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-20 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[560px] w-[560px] rounded-full bg-indigo-500/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
              What Defines Us
            </p>
            <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
              A Growth Engine, Not A
              <span className="text-cyan-300"> One-Off Campaign</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              This section runs like a live strategy console. Each pillar reveals how we turn traffic into predictable pipeline and revenue.
            </p>
          </div>

          <motion.div
            className="inline-flex items-center gap-3 self-start rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" />
            Auto Insight Mode
          </motion.div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.45fr]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-zinc-950/70 p-4 md:p-5"
          >
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group w-full rounded-2xl border px-4 py-4 text-left transition-all ${
                      isActive
                        ? "border-cyan-300/55 bg-cyan-400/12"
                        : "border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-cyan-500/8"
                    }`}
                  >
                    <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-cyan-200/80">{pillar.label}</p>
                    <p className="text-lg font-bold text-white">{pillar.name}</p>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">{pillar.copy}</p>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-zinc-500">Tap a pillar to inspect live strategy output.</p>
          </motion.div>

          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/12 via-black/70 to-indigo-500/12 p-6 md:p-8"
          >
            <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">Strategy Focus</p>
                <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">{activePillar.headline}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">{activePillar.copy}</p>
              </div>
              <div className="rounded-2xl border border-cyan-200/35 bg-black/40 px-5 py-4 text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">Primary Outcome</p>
                <p className="mt-2 text-sm font-semibold text-zinc-300">{activePillar.outcome}</p>
                <p className="text-3xl font-black text-cyan-300">{activePillar.outcomeValue}</p>
              </div>
            </div>

            <div className="space-y-4">
              {activePillar.metrics.map((metric) => (
                <div key={metric.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-300">{metric.name}</span>
                    <span className="font-semibold text-cyan-200">{metric.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 0.85, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push("/about-us")}
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-black md:text-base"
              >
                See Full Company Story
              </motion.button>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-cyan-300/45 px-6 py-3 text-sm font-semibold text-cyan-100 md:text-base"
              >
                Build My Growth Plan
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
