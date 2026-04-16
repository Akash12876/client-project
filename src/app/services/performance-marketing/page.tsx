"use client";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import { useRef, useState } from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 75, damping: 18 } },
};

const features = [
  { title: "Data-Driven Campaigns", desc: "Every campaign is backed by real data, ensuring maximum ROI on every rupee spent." },
  { title: "ROI Optimization", desc: "Continuous A/B testing and optimization to scale what works and cut what doesn't." },
  { title: "Multi-Channel Strategy", desc: "Meta, Google, YouTube — we master every platform to reach your audience." },
  { title: "Audience Targeting", desc: "Laser-focused targeting to reach high-intent customers ready to convert." },
  { title: "Retargeting Funnels", desc: "Re-engage warm audiences with precision retargeting that closes the loop." },
  { title: "Analytics & Reporting", desc: "Transparent reporting with insights that drive smarter decisions." },
];

const caseStudies = [
  { brand: "D2C Brand", metric: "320%", label: "ROAS Increase", detail: "Scaled from ₹2L to ₹18L/month ad spend with 3.2x returns." },
  { brand: "SaaS Product", metric: "5.2x", label: "Lead Growth", detail: "5x qualified leads in 90 days through funnel optimization." },
  { brand: "E-commerce", metric: "180%", label: "Revenue Growth", detail: "Doubled revenue in 6 months via full-funnel paid strategy." },
];

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemAnim}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-br from-white/10 to-white/5 border border-indigo-400/20 rounded-2xl p-6 cursor-default overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 30%, #6366f180, transparent 70%)" }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
          <span className="text-xl font-bold text-indigo-400">◆</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function CaseStudyCard({ brand, metric, label, detail }: { brand: string; metric: string; label: string; detail: string }) {
  return (
    <motion.div
      variants={itemAnim}
      whileHover={{ scale: 1.04, y: -6 }}
      className="bg-gradient-to-br from-indigo-900/40 to-black border border-indigo-400/30 rounded-2xl p-8 cursor-default"
    >
      <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">{brand}</p>
      <p className="text-6xl font-black text-white mb-1">{metric}</p>
      <p className="text-indigo-300 font-bold text-lg mb-4">{label}</p>
      <p className="text-zinc-400 text-sm leading-relaxed">{detail}</p>
    </motion.div>
  );
}

export default function PerformanceMarketingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), { stiffness: 60, damping: 20 });

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-16 pt-32 pb-20 overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30" style={{ background: "radial-gradient(circle, #4f46e5, transparent)" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, #818cf8, transparent)" }} />
        </motion.div>

        <motion.div style={{ y: parallaxY }} className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p className="text-indigo-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Scale Without Limits
          </motion.p>

          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] mb-8 text-white"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Performance <span className="text-indigo-400">Marketing</span>
          </motion.h1>

          <motion.p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            Data-driven ad campaigns engineered to generate consistent, profitable returns — not just clicks.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
            <motion.a href="/#contact" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-indigo-500 text-white font-bold text-lg shadow-lg hover:bg-indigo-400 transition-colors">
              Start Scaling
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-5 md:px-16 py-24 bg-[#0a0e1a]">
        <motion.div className="max-w-6xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-indigo-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">What We Do</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our Performance Stack
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </motion.div>
      </section>

      {/* CASE STUDIES */}
      <section className="w-full px-5 md:px-16 py-24 bg-black relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #4f46e5, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-6xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-indigo-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">Proven Results</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Real Numbers, Real Growth
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => <CaseStudyCard key={c.brand} {...c} />)}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full px-5 md:px-16 py-28 bg-[#0a0e1a] relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #4f46e5, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={container}>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black mb-6">
            Ready to Scale?
          </motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-400 text-lg md:text-xl mb-10">
            Let&apos;s build a performance engine that grows your business profitably.
          </motion.p>
          <motion.a href="/#contact" variants={itemAnim}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}
            className="inline-block px-10 py-5 rounded-full bg-indigo-500 text-white font-black text-xl shadow-2xl hover:bg-indigo-400 transition-colors">
            Get Started
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
