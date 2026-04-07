"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Influencer Marketing",
    desc:
      "Step into the realm of unparalleled brand collaborations and transformative campaigns with IPLIX Influencer Marketing.",
    color: "purple",
  },
  {
    title: "Talent Management",
    desc:
      "Welcome to the beating heart of creator empowerment at IPLIX. A sanctuary for creators seeking not just management but a transformative experience.",
    color: "indigo",
  },
  {
    title: "Creator Led Business",
    desc:
      "Embark on a transformative journey of entrepreneurship with Creator Led Brands.",
    color: "blue",
  },
  {
    title: "Personal Branding",
    desc:
      "Your brand is not confined to a niche; instead, we craft a narrative that spans across various facets of your personality and accomplishments.",
    color: "pink",
  },
];

export default function Services() {
  const [openModal, setOpenModal] = useState(false);

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
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="relative glassmorphic-card border border-purple-400/40 rounded-3xl shadow-2xl flex flex-col justify-between p-7 md:p-8 min-h-[340px] group overflow-hidden transition-transform duration-300 backdrop-blur-xl"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 #a78bfa, 0 0 0 8px #fff2', borderColor: '#a78bfa' }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: idx * 0.12 }}
          >
            {/* Animated Icon */}
            <motion.div
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-indigo-400 to-pink-400 shadow-lg mb-4 mx-auto"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.15 + 0.2, type: 'spring' }}
            >
              <span className="text-3xl text-white font-black">
                {idx === 0 && '🎯'}
                {idx === 1 && '🌟'}
                {idx === 2 && '🚀'}
                {idx === 3 && '💎'}
              </span>
            </motion.div>
            <div className="text-4xl font-extrabold text-white/90 mb-2 text-center drop-shadow-lg">{`0${idx + 1}`}</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-300 text-center drop-shadow-lg">{service.title}</h3>
            <p className="text-white/80 mb-6 text-center text-base md:text-lg min-h-[72px]">{service.desc}</p>
            <motion.button
              className="mt-auto bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white font-bold px-7 py-2.5 rounded-full shadow-lg border-2 border-white/10 relative overflow-hidden group/button transition-all duration-300 hover:scale-105 hover:from-pink-500 hover:to-purple-500"
              whileHover={{ scale: 1.09, boxShadow: '0 0 24px 0 #a78bfa, 0 0 0 8px #a78bfa44' }}
              onClick={() => setOpenModal(true)}
            >
              <span className="relative z-20 group-hover/button:opacity-0 transition-all duration-300">Know More</span>
              {/* Animated Connect Now text slides up on hover */}
              <span className="absolute left-0 bottom-0 w-full h-full flex items-end justify-center z-10 pointer-events-none">
                <span className="w-full text-center text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-b-full py-2 font-bold translate-y-10 opacity-0 group-hover/button:translate-y-0 group-hover/button:opacity-100 transition-all duration-500">
                  Connect Now
                </span>
              </span>
            </motion.button>
            {/* Decorative Glow */}
            <motion.div
              className="absolute -inset-1 rounded-3xl pointer-events-none z-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.18 }}
              style={{ background: 'radial-gradient(circle at 60% 40%, #a78bfa 0%, transparent 70%)' }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
            {/* Global Modal Contact Form (only once, outside the card map) */}
            {openModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="bg-[#18181b] border-2 border-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl flex flex-col items-center">
                  <button
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-purple-400"
                    onClick={() => setOpenModal(false)}
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-2 text-purple-400 text-center">Contact Us</h3>
                  <p className="text-white/80 mb-6 text-center">We'd love to hear from you! Fill out the form below and our team will get in touch.</p>
                  <form className="flex flex-col gap-4 w-full max-w-md mt-2">
                    <input
                      type="text"
                      placeholder="Contact Reason"
                      className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                      required
                    />
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
                      placeholder="Your Message"
                      className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                      rows={4}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 text-white font-bold px-6 py-2 rounded-full mt-2 hover:bg-purple-700 transition"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            )}
      </div>
    </section>
  );
}
