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
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="relative bg-black border-2 border-white rounded-3xl shadow-xl flex flex-col justify-between p-8 min-h-[420px] group overflow-hidden transition-transform duration-300"
            style={{ boxShadow: '0 0 0 0 #fff' }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 #a78bfa, 0 0 0 8px #fff2' }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: idx * 0.15 }}
          >
            {/* Decorative left border design */}
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent rounded-l-3xl opacity-80 z-10" />
            <div>
              <div className="text-6xl font-extrabold text-white/80 mb-4">{`0${idx + 1}`}</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">{service.title}</h3>
              <p className="text-white/90 mb-8">{service.desc}</p>
            </div>
            <button
              className="mt-auto bg-white text-purple-600 font-bold px-8 py-3 rounded-full shadow-lg border-2 border-white relative overflow-hidden group/button transition-all duration-300"
              onClick={() => setOpenModal(true)}
            >
              <span className="relative z-20 group-hover/button:opacity-0 transition-all duration-300">Know More</span>
              {/* Animated Connect Now text slides up on hover */}
              <span className="absolute left-0 bottom-0 w-full h-full flex items-end justify-center z-10 pointer-events-none">
                <span className="w-full text-center text-white bg-black rounded-b-full py-2 font-bold translate-y-10 opacity-0 group-hover/button:translate-y-0 group-hover/button:opacity-100 transition-all duration-500">
                  Connect Now
                </span>
              </span>
            </button>
                {/* Global Modal Contact Form */}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
