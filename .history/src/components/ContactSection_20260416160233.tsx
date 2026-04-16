"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import dynamic from "next/dynamic";

const ContactFormModal = dynamic(() => import("./ContactFormModal"), { ssr: false });

const cardEnter = {
  initial: { opacity: 0, y: 34, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contact" data-contact="true" className="relative w-full overflow-hidden bg-black px-4 py-20 md:px-10 md:py-24">
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg at 25% 60%, rgba(167,139,250,0.08), transparent 35%, rgba(96,165,250,0.08), transparent 70%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,#0b0b10_0%,#06070b_55%,#0a0d14_100%)] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.55)] md:grid-cols-[1.4fr_0.9fr] md:gap-12 md:p-14"
      >
        <div className="relative z-10 flex flex-col justify-between gap-9">
          <motion.div
            {...cardEnter}
            transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a78bfa33] bg-[#a78bfa14] px-4 py-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
                animate={{ scale: [1, 1.45, 1], opacity: [1, 0.45, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a78bfa]">Get In Touch</span>
            </div>

            <h2 className="max-w-[18ch] text-4xl font-black leading-[1.05] text-white md:text-6xl">
              Elevate Your Influence with <span className="text-[#a78bfa]">IPaRX</span>
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-8 text-zinc-400 md:text-lg">
              Partner with a growth-focused team that blends creator strategy, paid media, and premium content systems to scale your brand faster.
            </p>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-8 inline-flex w-full max-w-[260px] items-center justify-center overflow-hidden rounded-full border border-[#a78bfa66] px-8 py-4 text-base font-bold text-white"
              style={{ background: "linear-gradient(90deg, rgba(167,139,250,0.9), rgba(96,165,250,0.72))" }}
              onClick={() => setShowModal(true)}
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700" />
              <span className="relative z-10">Let&apos;s Collaborate</span>
            </motion.button>
          </motion.div>

          <motion.div
            {...cardEnter}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(167,139,250,0.42)" }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Delhi Office</p>
              <p className="text-sm leading-7 text-zinc-300">
                241, Westend Marg, Saidulajab, Saket, New Delhi, Delhi 110030
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.42)" }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Mumbai Office</p>
              <p className="text-sm leading-7 text-zinc-300">
                Peninsula Park, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400047
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          {...cardEnter}
          transition={{ duration: 0.58, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-full flex-col justify-between gap-6 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 md:p-7"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Contact Us</p>
            <a
              href="mailto:contact@iplix.in"
              className="mt-3 block text-2xl font-bold text-white transition hover:text-[#a78bfa]"
            >
              contact@iplix.in
            </a>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Follow Us</p>
            <div className="mt-3 flex gap-3">
              <motion.a
                href="#"
                whileHover={{ y: -4, rotate: -6, borderColor: "#a78bfa", color: "#c4b5fd" }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-[#a78bfa88] bg-[#a78bfa10] text-xl text-[#a78bfa]"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -4, rotate: 6, borderColor: "#60a5fa", color: "#93c5fd" }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-[#60a5fa88] bg-[#60a5fa10] text-xl text-[#60a5fa]"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">Work With Us</p>
            <p className="text-sm leading-7 text-zinc-300">
              Build category-leading campaigns with a team focused on strategy, creative precision, and measurable growth.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
