"use client";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import { useRef, useState } from "react";

/* animation variants */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 70, damping: 16 },
  },
};

const stats = [
  { value: "200+", label: "Brands Empowered" },
  { value: "5B+",  label: "Views Generated"  },
  { value: "98%",  label: "Client Retention"  },
  { value: "50+",  label: "Creator Network"   },
];

const values = [
  { icon: "?", title: "Performance First",      desc: "Every decision, campaign, and creative choice is anchored in real results � not vanity metrics." },
  { icon: "??", title: "Precision Targeting",    desc: "We reach exactly the right audience at the right moment with data-driven strategies." },
  { icon: "??", title: "Authentic Partnerships", desc: "Brands and creators we work with become long-term allies, not just clients." },
  { icon: "??", title: "Scale Without Limits",   desc: "Our systems are built to grow with you � from 0 to millions, seamlessly." },
  { icon: "??", title: "Creative Intelligence",  desc: "Art meets analytics. Every story we craft is rooted in insight and elevated by imagination." },
  { icon: "??", title: "Always Evolving",        desc: "The digital landscape never stops changing � neither do we." },
];

const team = [
  {
    name: "MR PARAS SHARMA",
    role: "Director",
    color: "#a78bfa",
    accent: "#7c3aed",
    tagline: "Visionary behind iparx media's growth engine",
    initials: "PS",
  },
  {
    name: "MR AKASH PANDEY",
    role: "Co-Founder",
    color: "#60a5fa",
    accent: "#2563eb",
    tagline: "Architect of brand strategy & performance systems",
    initials: "AP",
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={itemAnim}
      whileHover={{ scale: 1.07, rotateX: -4, rotateY: 4 }}
      style={{ perspective: 800 }}
      className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-8 py-7 backdrop-blur-md shadow-xl cursor-default"
    >
      <span className="text-5xl md:text-6xl font-black text-[#a78bfa] drop-shadow-lg">{value}</span>
      <span className="text-zinc-300 text-base mt-2 font-medium tracking-wide">{label}</span>
    </motion.div>
  );
}

function ValueCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemAnim}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.04, rotateX: -3, rotateY: 3 }}
      style={{ perspective: 900 }}
      className="relative flex flex-col gap-4 bg-white/5 border border-white/10 rounded-3xl p-7 md:p-8 cursor-default overflow-hidden backdrop-blur-sm shadow-lg"
    >
      <motion.span
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: hovered ? 0.35 : 0, scale: hovered ? 1.2 : 0.8 }}
        transition={{ duration: 0.5 }}
        style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
      />
      <span className="text-4xl">{icon}</span>
      <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      <p className="text-zinc-400 text-base leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TeamCard({ name, role, color, accent, tagline, initials }: { name: string; role: string; color: string; accent: string; tagline: string; initials: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemAnim}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03, rotateY: 4, rotateX: -3, z: 40 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className="relative flex flex-col items-center gap-0 rounded-[2rem] cursor-default overflow-hidden"
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(135deg, ${color}33, ${accent}22, transparent)`,
          border: `1.5px solid ${color}${hovered ? "88" : "33"}`,
        }}
      />

      {/* Glow blob */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: hovered ? 0.45 : 0.12, scale: hovered ? 1.3 : 0.9 }}
        transition={{ duration: 0.6 }}
        style={{ background: `radial-gradient(circle, ${color}, transparent)` }}
      />

      <div className="relative z-10 flex flex-col items-center px-10 pt-12 pb-10 gap-6 w-full">
        {/* Avatar ring */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            animate={{ opacity: hovered ? 0.9 : 0.4, scale: hovered ? 1.4 : 1 }}
            transition={{ duration: 0.5 }}
            style={{ background: `radial-gradient(circle, ${color}, transparent)` }}
          />
          {/* Spinning dashed ring */}
          <motion.svg
            className="absolute -inset-3"
            width="114" height="114"
            viewBox="0 0 114 114"
            animate={{ rotate: hovered ? 360 : 0 }}
            transition={{ duration: 8, repeat: hovered ? Infinity : 0, ease: "linear" }}
          >
            <circle
              cx="57" cy="57" r="52"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="12 8"
              strokeOpacity={hovered ? 0.7 : 0.3}
            />
          </motion.svg>
          {/* Avatar circle */}
          <div
            className="relative w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-2xl select-none"
            style={{
              background: `linear-gradient(135deg, ${accent}cc, ${color}88)`,
              border: `2.5px solid ${color}`,
            }}
          >
            <span className="tracking-wider">{initials}</span>
          </div>
        </div>

        {/* Name + role */}
        <div className="text-center">
          <motion.div
            className="text-xl md:text-2xl font-black text-white tracking-wide mb-1"
            animate={{ letterSpacing: hovered ? "0.08em" : "0.04em" }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.div>
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mt-1"
            style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
          >
            {role}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px rounded-full"
          animate={{ width: hovered ? "80%" : "40%", opacity: hovered ? 0.8 : 0.3 }}
          transition={{ duration: 0.4 }}
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        {/* Tagline */}
        <motion.p
          className="text-center text-zinc-400 text-sm leading-relaxed max-w-xs"
          animate={{ opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          {tagline}
        </motion.p>

        {/* Bottom accent dots */}
        <div className="flex gap-2 mt-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              animate={{ scale: hovered ? [1, 1.6, 1] : 1, opacity: hovered ? 1 : 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, repeat: hovered ? Infinity : 0 }}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-16 pt-32 pb-20 overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }} />
        </motion.div>

        <motion.div style={{ y: parallaxY }} className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p className="text-[#a78bfa] text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Who We Are
          </motion.p>

          <motion.div initial="hidden" animate="show" variants={container} className="mb-8">
            {["We Don\u2019t", "Just Market.", "We", "Multiply."].map((line, i) => (
              <motion.div key={i} variants={itemAnim}>
                <span className={`block text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] ${i === 3 ? "text-[#a78bfa]" : "text-white"}`}>
                  {line}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            iparx media is a full-stack growth agency � blending performance marketing, creator ecosystems,
            and precision strategy to turn brands into category leaders.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
            <motion.a href="#values" whileHover={{ scale: 1.06, boxShadow: "0 0 40px #a78bfa66" }} whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-[#a78bfa] text-white font-bold text-lg shadow-lg">
              Explore Our Culture
            </motion.a>
            <motion.a href="#team" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg backdrop-blur-sm">
              Meet the Team
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <motion.div className="w-0.5 h-10 bg-zinc-600 rounded-full origin-top"
            animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
          Scroll
        </motion.div>
      </section>

      {/* STATS */}
      <section className="w-full px-5 md:px-16 py-20 bg-[#080810]">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="w-full px-5 md:px-16 py-24 bg-black relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #7c3aed, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={container}>
          <motion.p variants={itemAnim} className="text-[#a78bfa] text-sm font-semibold tracking-[0.3em] uppercase mb-4">Our Mission</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Attention is easy.<br /><span className="text-[#a78bfa]">Predictable revenue</span> is the goal.
          </motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We build end-to-end growth systems that attract, convert, and retain customers �
            combining paid ads, organic content, influencer amplification, and data analytics into one unified engine that scales.
          </motion.p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section id="values" className="w-full px-5 md:px-16 py-24 bg-[#080810]">
        <motion.div className="max-w-6xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={container}>
          <motion.p variants={itemAnim} className="text-[#a78bfa] text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">What Drives Us</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-14">Our Core Values</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => <ValueCard key={v.title} {...v} />)}
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="w-full bg-[#a78bfa] py-5 overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap text-black font-black text-xl tracking-widest uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              <span>Performance Marketing</span><span className="opacity-40">?</span>
              <span>Creator Economy</span><span className="opacity-40">?</span>
              <span>Brand Strategy</span><span className="opacity-40">?</span>
              <span>iparx media</span><span className="opacity-40">?</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* TEAM */}
      <section id="team" className="w-full px-5 md:px-16 py-28 bg-black relative overflow-hidden">
        {/* Background ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />

        <motion.div className="max-w-5xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-[#a78bfa] text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">The Minds Behind It</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black text-center mb-4">Meet the <span className="text-[#a78bfa]">Founders</span></motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-500 text-center text-lg mb-16 max-w-xl mx-auto">
            Two visionaries. One mission. Infinite growth.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((t) => <TeamCard key={t.name} {...t} />)}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full px-5 md:px-16 py-28 bg-[#080810] relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(ellipse, #7c3aed, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={container}>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to <span className="text-[#a78bfa]">Multiply</span><br />your brand?
          </motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-400 text-lg md:text-xl mb-10">
            Let&apos;s build something that lasts. Reach out and we&apos;ll craft a growth plan built for your goals.
          </motion.p>
          <motion.a href="/#contact" variants={itemAnim}
            whileHover={{ scale: 1.07, boxShadow: "0 0 50px #a78bfa77" }} whileTap={{ scale: 0.96 }}
            className="inline-block px-10 py-5 rounded-full bg-[#a78bfa] text-white font-black text-xl shadow-2xl">
            Let&apos;s Collaborate
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
}
