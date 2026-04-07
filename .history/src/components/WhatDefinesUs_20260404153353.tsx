"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhatDefinesUs() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-16 bg-black relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: "spring", stiffness: 60, damping: 18 }}
    >
      {/* Left: Heading and Content */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full z-10">
        <h2 className="text-6xl md:text-7xl font-extrabold text-purple-300 mb-6 leading-tight">What<br />Defines Us</h2>
        <p className="text-white text-lg md:text-2xl font-semibold mb-8">
          We craft compelling narratives and build strong, impactful partnerships that set new standards in the Indian creator economy.
        </p>
        <motion.button
          className="bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg text-lg relative overflow-hidden"
          whileHover={{ scale: 1.07, boxShadow: "0 0 24px 0 #a78bfa, 0 0 0 8px #a78bfa44" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpenModal(true)}
        >
          <span className="relative z-10">Dive Into Our Culture</span>
          <motion.span
            className="absolute left-0 bottom-0 w-full h-1 bg-purple-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ originX: 0 }}
          />
        </motion.button>
      </div>
      {/* Right: Speech bubble and image placeholder, animated in from right */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center w-full relative mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, type: "spring", stiffness: 60, damping: 18 }}
      >
        {/* Speech bubble */}
        <motion.div
          className="bg-purple-500 text-white text-2xl md:text-3xl font-bold rounded-3xl px-8 py-8 mb-8 max-w-lg w-full shadow-lg z-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          We are the mapmakers of the content realm, navigating the digital landscape since its wild west days.
        </motion.div>
        {/* Image placeholder (replace src with your image) */}
        <motion.div
          className="relative w-full max-w-lg h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
        >
          <Image
            src="ourteam.webp"
            alt="Our Team"
            fill
            className="object-cover rounded-3xl"
            style={{objectFit: "cover"}}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {/* Decorative circle */}
        <div className="absolute right-0 -top-8 w-12 h-12 bg-white rounded-full border-4 border-purple-300 z-0" />
        {/* Decorative dashed line (optional, can be improved with SVG for more accuracy) */}
        <div className="absolute left-1/2 top-1/2 w-0.5 h-16 bg-dashed bg-white opacity-50 z-0" />
      </motion.div>

      {/* Modal Contact Form */}
      {openModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#18181b] border-2 border-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-purple-400"
              onClick={() => setOpenModal(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2 text-purple-400 text-center">Let's Work Together</h3>
            <p className="text-white/80 mb-6 text-center">Get to know what defines us.</p>
            <form className="flex flex-col gap-4 w-full max-w-md mt-2">
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
        </motion.div>
      )}
    </motion.section>
  );
}
