"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    desc:
      "Scale your business with data-driven ad campaigns designed to generate consistent, profitable returns not just clicks.",
  },
  {
    title: "Social Media Marketing",
    desc:
      "Build a powerful online presence with strategies that grow your audience, boost engagement, and turn followers into customers.",
  },
  {
    title: "Creative Strategy & Content Production",
    desc:
      "We craft scroll-stopping content backed by strategy designed to capture attention and drive real conversions.",
    color: "blue",
  },
  {
    title: "Video Editing & Graphic Design",
    desc:
      "High-quality video editing, YouTube thumbnails & creative designs that increase clicks, engagement, and retention.",
    color: "blue",
  },
];

export default function Services() {
  const [openModalIdx, setOpenModalIdx] = useState<number | null>(null);

  return (
    <section id="services" className="w-full min-h-screen py-24 px-4 md:px-0 flex flex-col items-center bg-[#111]">
      <motion.h2
        className="relative text-5xl md:text-6xl font-extrabold mb-16 text-white text-center tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Services
        </span>
        <motion.span
          className="block absolute left-1/2 -translate-x-1/2 bottom-[-18px] h-2 w-40 rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 blur-sm opacity-80"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          style={{ originX: 0.5 }}
        />
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {services.map((service, idx) => {
          // Roman numerals for 1-4
          const romanNumerals = ['I', 'II', 'III', 'IV'];
          // Color map for headings and borders
          const colorMap = [
            'text-purple-400 border-purple-400',
            'text-indigo-400 border-indigo-400',
            'text-blue-400 border-blue-400',
            'text-pink-400 border-pink-400',
          ];
          return (
            <motion.div
              key={service.title}
              className={`relative glassmorphic-card border rounded-t-[3.5rem] rounded-b-3xl shadow-2xl flex flex-col justify-between p-7 md:p-8 min-h-[340px] group overflow-hidden transition-transform duration-300 backdrop-blur-xl items-start text-left ${colorMap[idx]}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 #a78bfa, 0 0 0 8px #fff2', borderColor: '#a78bfa' }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: idx * 0.12 }}
            >
              {/* Large Roman numeral at top left */}
              <div className="text-5xl font-black text-white/90 mb-2 mt-2 ml-2 drop-shadow-lg self-start">{romanNumerals[idx]}</div>
              <h3 className={`text-xl md:text-2xl font-bold mb-2 drop-shadow-lg self-start ${colorMap[idx].split(' ')[0]}`}>{service.title}</h3>
              <p className="text-white/80 mb-6 text-base md:text-lg min-h-[72px] self-start">{service.desc}</p>
              <motion.button
                className="mt-auto bg-white text-black font-bold px-7 py-2.5 rounded-full shadow-lg border-2 border-white/10 relative overflow-hidden group/button transition-all duration-300 self-start"
                whileHover={{ scale: 1.09, boxShadow: '0 0 24px 0 #a78bfa, 0 0 0 8px #a78bfa44' }}
                onClick={() => setOpenModalIdx(idx)}
              >
                <span className="relative z-20 block transition-all duration-300 group-hover/button:opacity-0">Know More</span>
                {/* Animated Connect Now text slides up from bottom on hover */}
                <span className="absolute left-0 bottom-0 w-full h-full flex items-end justify-center z-10 pointer-events-none">
                  <span className="w-full text-center font-bold bg-black text-white rounded-b-full py-2 translate-y-10 opacity-0 group-hover/button:translate-y-0 group-hover/button:opacity-100 transition-all duration-500">
                    Connect Now
                  </span>
                </span>
              </motion.button>
              {/* Decorative Glow */}
              <motion.div
                className="absolute -inset-1 rounded-t-[3.5rem] rounded-b-3xl pointer-events-none z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.18 }}
                style={{ background: 'radial-gradient(circle at 60% 40%, #a78bfa 0%, transparent 70%)' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          );
        })}
            {/* Global Modal Contact Form (only once, outside the card map) */}
        <AnimatePresence>
          {openModalIdx !== null && (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 80, opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                className="bg-[#18181b] border-2 border-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl flex flex-col items-center overflow-hidden"
              >
                {/* Animated white border highlight */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl border-4 border-white/60 z-20"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  style={{ boxShadow: "0 0 32px 0 #fff8" }}
                />
                {/* Animated moving white line */}
                <motion.div
                  className="absolute left-0 top-0 h-1 w-full z-30"
                  initial={{ x: '-100%' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <div className="h-1 w-1/3 bg-white rounded-full blur-[2px] opacity-80" />
                </motion.div>
                <button
                  className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-purple-400 z-40"
                  onClick={() => setOpenModalIdx(null)}
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mb-2 text-purple-400 text-center z-30">{services[openModalIdx].title}</h3>
                <form className="flex flex-col gap-4 w-full max-w-md mt-2 z-30">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                    required
                  />
                  <textarea
                    placeholder={`Why are you interested in ${services[openModalIdx].title}?`}
                    className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                    rows={4}
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.08, backgroundColor: "#fff", color: "#a78bfa" }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-purple-600 text-white font-bold px-6 py-2 rounded-full mt-2 hover:bg-purple-700 transition shadow-lg"
                  >
                    Send
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
