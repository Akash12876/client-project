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
  { title: "Content Strategy", desc: "Crafted narratives that resonate with your audience and drive meaningful engagement." },
  { title: "Community Building", desc: "Grow engaged followers who become loyal brand advocates and repeat customers." },
  { title: "Influencer Partnerships", desc: "Strategic collaborations with creators that amplify your reach authentically." },
  { title: "Trend Leveraging", desc: "Stay ahead with real-time trend analysis and rapid content execution." },
  { title: "Engagement Optimization", desc: "Maximize interactions and build meaningful two-way connections with your audience." },
  { title: "Performance Analytics", desc: "Track metrics that matter — reach, saves, shares, and conversions." },
];

const platforms = [
  { name: "Instagram", users: "2B+", specialty: "Visual Storytelling" },
  { name: "TikTok", users: "1.5B+", specialty: "Viral Content" },
  { name: "YouTube", users: "2.5B+", specialty: "Long-Form Video" },
  { name: "LinkedIn", users: "930M+", specialty: "B2B Reach" },
];

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      variants={itemAnim}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-2xl p-6 cursor-default overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 30%, #06b6d480, transparent 70%)" }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
          <span className="text-xl font-bold text-cyan-400">◆</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function PlatformCard({ name, users, specialty }: { name: string; users: string; specialty: string }) {
  return (
    <motion.div
      variants={itemAnim}
      whileHover={{ scale: 1.06, y: -5 }}
      className="bg-gradient-to-br from-cyan-900/40 to-black border border-cyan-400/30 rounded-2xl p-8 text-center cursor-default"
    >
      <p className="text-white font-black text-2xl mb-2">{name}</p>
      <p className="text-cyan-400 font-bold text-xl mb-3">{users}</p>
      <p className="text-zinc-400 text-sm">{specialty}</p>
    </motion.div>
  );
}

export default function SocialMediaMarketingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), { stiffness: 60, damping: 20 });

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-16 pt-32 pb-20 overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, #0891b2, transparent)" }} />
        </motion.div>

        <motion.div style={{ y: parallaxY }} className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Build Your Community
          </motion.p>

          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] mb-8 text-white"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Social Media <span className="text-cyan-400">Marketing</span>
          </motion.h1>

          <motion.p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            Build a powerful online presence with strategies that grow your audience and turn followers into customers.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
            <motion.a href="/#contact" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold text-lg shadow-lg hover:bg-cyan-400 transition-colors">
              Start Growing
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-5 md:px-16 py-24 bg-[#0a0e1a]">
        <motion.div className="max-w-6xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">Our Approach</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our Social Strategy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </motion.div>
      </section>

      {/* PLATFORMS */}
      <section className="w-full px-5 md:px-16 py-24 bg-black relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #06b6d4, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-6xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">Where We Operate</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Platforms We Master
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p) => <PlatformCard key={p.name} {...p} />)}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full px-5 md:px-16 py-28 bg-[#0a0e1a] relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #06b6d4, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={container}>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black mb-6">
            Ready to Go Social?
          </motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-400 text-lg md:text-xl mb-10">
            Let&apos;s build your community and create meaningful connections that convert.
          </motion.p>
          <motion.a href="/#contact" variants={itemAnim}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}
            className="inline-block px-10 py-5 rounded-full bg-cyan-500 text-black font-black text-xl shadow-2xl hover:bg-cyan-400 transition-colors">
            Get Started
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
