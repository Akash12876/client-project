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
  { title: "Video Editing", desc: "High-quality editing that transforms raw footage into captivating, shareable content." },
  { title: "YouTube Thumbnails", desc: "Click-magnet designs scientifically optimized for higher CTR and more views." },
  { title: "Motion Graphics", desc: "Animated elements and transitions that bring your content to life." },
  { title: "Graphic Design", desc: "Professional designs across all formats — posts, banners, ads, and more." },
  { title: "Color Grading", desc: "Cinema-quality color correction for premium, consistent visuals." },
  { title: "Sound Design", desc: "Professional audio mixing, SFX, and music selection for maximum impact." },
];

const tools = [
  { name: "Adobe Premiere", type: "Video Editing", color: "#9a00ff" },
  { name: "After Effects", type: "Motion Graphics", color: "#9999ff" },
  { name: "Photoshop", type: "Graphic Design", color: "#31a8ff" },
  { name: "DaVinci Resolve", type: "Color Grading", color: "#ff6b6b" },
];

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemAnim}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-br from-white/10 to-white/5 border border-pink-400/20 rounded-2xl p-6 cursor-default overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 30%, #ec489980, transparent 70%)" }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
          <span className="text-xl font-bold text-pink-400">✦</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ToolCard({ name, type, color }: { name: string; type: string; color: string }) {
  return (
    <motion.div
      variants={itemAnim}
      whileHover={{ scale: 1.06, y: -5 }}
      className="bg-gradient-to-br from-pink-900/40 to-black border border-pink-400/30 rounded-2xl p-8 text-center cursor-default"
    >
      <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${color}22`, border: `2px solid ${color}44` }}>
        <span className="text-2xl font-black" style={{ color }}>{name.charAt(0)}</span>
      </div>
      <p className="text-white font-bold text-lg mb-1">{name}</p>
      <p className="text-pink-400 text-sm font-semibold">{type}</p>
    </motion.div>
  );
}

export default function VideoEditingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), { stiffness: 60, damping: 20 });

  return (
    <main className="w-full bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-16 pt-32 pb-20 overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30" style={{ background: "radial-gradient(circle, #ec4899, transparent)" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, #f472b6, transparent)" }} />
        </motion.div>

        <motion.div style={{ y: parallaxY }} className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p className="text-pink-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Visuals That Captivate
          </motion.p>

          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] mb-8 text-white"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Video Editing &amp; <span className="text-pink-400">Design</span>
          </motion.h1>

          <motion.p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            High-quality video editing and designs that increase clicks, engagement, and audience retention.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
            <motion.a href="/#contact" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-pink-500 text-white font-bold text-lg shadow-lg hover:bg-pink-600 transition-colors">
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="w-full px-5 md:px-16 py-24 bg-[#0a0e1a]">
        <motion.div className="max-w-6xl mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-pink-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">What We Offer</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Our Creative Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </motion.div>
      </section>

      {/* TOOLS */}
      <section className="w-full px-5 md:px-16 py-24 bg-black relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #ec4899, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-5xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={itemAnim} className="text-pink-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">Industry Standard</motion.p>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-5xl font-black text-center mb-16">
            Tools We Master
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((t) => <ToolCard key={t.name} {...t} />)}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full px-5 md:px-16 py-28 bg-[#0a0e1a] relative overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #ec4899, transparent)" }} />
        </motion.div>
        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={container}>
          <motion.h2 variants={itemAnim} className="text-4xl md:text-6xl font-black mb-6">
            Ready to Stand Out?
          </motion.h2>
          <motion.p variants={itemAnim} className="text-zinc-400 text-lg md:text-xl mb-10">
            Let&apos;s create visuals that captivate your audience and convert them into customers.
          </motion.p>
          <motion.a href="/#contact" variants={itemAnim}
            whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}
            className="inline-block px-10 py-5 rounded-full bg-pink-500 text-white font-black text-xl shadow-2xl hover:bg-pink-600 transition-colors">
            Get Started
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
