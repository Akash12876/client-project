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

const services = [
  { title: "Brand Positioning", desc: "Define your unique market position with messaging that cuts through the noise." },
  { title: "Content Strategy", desc: "Scroll-stopping content backed by strategic insights that drive real conversions." },
  { title: "Campaign Concepts", desc: "Original ideas that capture attention, spark emotion, and drive action." },
  { title: "Story Development", desc: "Compelling brand narratives that resonate emotionally with your audience." },
  { title: "Visual Direction", desc: "Cohesive aesthetic language that strengthens your brand identity at every touchpoint." },
  { title: "Audience Research", desc: "Deep insights into who you&apos;re talking to, what they want, and how to reach them." },
];

const processSteps = [
  { step: "01 Discovery", desc: "Deep dive into your brand, goals, competitors and audience." },
  { step: "02 Strategy", desc: "Develop the creative roadmap aligned to your business objectives." },
  { step: "03 Creation", desc: "Bring concepts to life with precision and craftsmanship." },
  { step: "04 Optimization", desc: "Refine and iterate based on real performance data." },
];

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemAnim}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-br from-white/10 to-white/5 border border-amber-400/20 rounded-2xl p-6 cursor-default overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 30%, #d9770680, transparent 70%)" }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
          <span className="text-xl font-bold text-amber-400">→</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ProcessCard({ step, desc }: { step: string; desc: string }) {
  return (
    <motion.div
      variants={itemAnim}
      whileHover={{ scale: 1.04, y: -5 }}
      className="bg-gradient-to-br from-amber-900/40 to-black border border-amber-400/30 rounded-2xl p-8 cursor-default"
    >
      <p className="text-amber-400 font-black text-xl mb-3">{step}</p>
      <p className="text-zinc-300 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function CreativeStrategyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), { stiffness: 60, damping: 20 });

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-16 pt-32 pb-20 overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30" style={{ background: "radial-gradient(circle, #d97706, transparent)" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
        </motion.div>

        <motion.div style={{ y: parallaxY }} className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p className="text-amber-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Strategy Meets Creativity
          </motion.p>

          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] mb-8 text-white"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Creative <span className="text-amber-400">Strategy</span>
          </motion.h1>

          <motion.p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            We craft scroll-stopping content backed by strategy — designed to capture attention and drive real conversions.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
            <motion.a href="/#contact" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-lg shadow-lg hover:bg-amber-400 transition-colors">
              Let&apos;s Create
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="w-full px-5 md:px-16 py-24 bg-[#0a0e1a]">
        <motion.div className="max-w-6xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">What We Deliver</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our Creative Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="w-full px-5 md:px-16 py-24 bg-black relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #d97706, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-6xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">How We Work</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our Creative Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => <ProcessCard key={p.step} {...p} />)}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full px-5 md:px-16 py-28 bg-[#0a0e1a] relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #d97706, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={container}>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black mb-6">
            Ready to Create?
          </motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-400 text-lg md:text-xl mb-10">
            Let&apos;s develop a creative strategy that stands out and drives real results.
          </motion.p>
          <motion.a href="/#contact" variants={itemAnim}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}
            className="inline-block px-10 py-5 rounded-full bg-amber-500 text-black font-black text-xl shadow-2xl hover:bg-amber-400 transition-colors">
            Get Started
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
