
"use client";
import { motion } from "framer-motion";

const leftPoints = [
  "Affordable, Transparent Pricing",
  "Project-Based, Skill-Driven Growth",
  "Always Evolving With Industry",
  "Community Events & Challenges",
  "Career-Focused, Real-World Skills",
];

const rightPoints = [
  "High Cost, Low Value",
  "Theory-Heavy, Less Practice",
  "Outdated, Static Approach",
  "No Real Community Engagement",
  "Limited Career Support",
];

export default function BrandComparison() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-2 md:px-0 bg-black">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          What Sets iparx Apart
        </span>
        <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-sm opacity-80" />
      </motion.h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-stretch">
        {/* Brand Side */}
        <motion.div
          className="flex-1 bg-[#101010] rounded-3xl border-2 border-indigo-500/60 shadow-xl p-8 flex flex-col items-start justify-center group hover:shadow-indigo-500/30 transition-all duration-500 relative"
          whileHover={{ scale: 1.03, boxShadow: "0 0 32px #6366f1aa" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><text x="50%" y="55%" textAnchor="middle" fill="#6366f1" fontSize="16" fontWeight="bold" dy=".3em">i</text></svg>
            </div>
            <span className="text-xl font-bold text-indigo-300 tracking-wide">iparx</span>
          </div>
          <ul className="flex flex-col gap-5 mt-2">
            {leftPoints.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-lg md:text-xl text-white/90 font-semibold group/point"
                whileHover={{ scale: 1.06, color: "#a78bfa" }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-green-400 bg-green-900/30 text-green-400 mr-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#22c55e"/><path d="M5 9l2.5 2.5L13 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                {point}
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-indigo-400/30 group-hover:border-indigo-400/80 transition-all duration-500"
            initial={{ opacity: 0.2 }}
            whileHover={{ opacity: 0.5 }}
          />
        </motion.div>
        {/* Others Side */}
        <motion.div
          className="flex-1 bg-[#101010] rounded-3xl border-2 border-zinc-700 shadow-xl p-8 flex flex-col items-start justify-center group hover:shadow-pink-500/20 transition-all duration-500 relative"
          whileHover={{ scale: 1.03, boxShadow: "0 0 32px #f472b6aa" }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center shadow-lg">
              {/* Stacked layers icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#101010"/>
                <g>
                  <path d="M8 13L14 10L20 13L14 16L8 13Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <path d="M8 16L14 19L20 16" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <path d="M8 13L14 16L20 13" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </g>
              </svg>
            </div>
            <span className="text-xl font-bold text-zinc-300 tracking-wide">Others</span>
          </div>
          <ul className="flex flex-col gap-5 mt-2">
            {rightPoints.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-lg md:text-xl text-white/80 font-semibold group/point"
                whileHover={{ scale: 1.06, color: "#f472b6" }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-red-500 bg-red-900/30 text-red-500 mr-2">
                  {/* Red cross icon */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#ef4444"/>
                    <path d="M6 6l6 6M12 6l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                {point}
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-pink-400/20 group-hover:border-pink-400/60 transition-all duration-500"
            initial={{ opacity: 0.15 }}
            whileHover={{ opacity: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
