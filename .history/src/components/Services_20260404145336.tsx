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
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <section id="services" className="w-full min-h-screen py-24 px-4 md:px-0 flex flex-col items-center bg-[#111]">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="relative bg-black border-2 border-white rounded-3xl shadow-xl flex flex-col justify-between p-8 min-h-[420px] group overflow-hidden"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: idx * 0.15 }}
          >
            <div>
              <div className="text-6xl font-extrabold text-white/80 mb-4">{`0${idx + 1}`}</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">{service.title}</h3>
              <p className="text-white/90 mb-8">{service.desc}</p>
            </div>
            <button
              className="mt-auto bg-white text-purple-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all text-lg border-2 border-white"
              onClick={() => setOpenModal(idx)}
            >
              Know More
            </button>
            {/* Modal */}
            {openModal === idx && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                <motion.div
                  className="bg-[#18181b] border-2 border-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <button
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-purple-400"
                    onClick={() => setOpenModal(null)}
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">{service.title}</h3>
                  <p className="text-white/80 mb-6">{service.desc}</p>
                  <form className="flex flex-col gap-4">
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
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
