"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhatDefinesUs() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 lg:px-24 py-12 bg-black relative"
      style={{ maxWidth: '1600px', margin: '0 auto' }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: "spring", stiffness: 60, damping: 18 }}
    >
      {/* Left: Heading and Content */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full z-10 mb-12 lg:mb-0">
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
        className="flex-1 flex flex-col items-center justify-center w-full relative mt-12 md:mt-0 z-10 bg-transparent"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, type: "spring", stiffness: 60, damping: 18 }}
      >
        {/* Speech bubble */}
        <div className="relative w-full flex flex-col items-center justify-center gap-6 mt-4 lg:mt-0 bg-transparent" style={{minHeight: '520px', maxWidth: '700px', margin: '0 auto'}}>
          {/* Animated atomic structure at top */}
          <motion.div
            className="absolute top-0 right-0 mt-4 mr-4 flex items-center justify-center z-40"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{ rotate: [0, 10, -10, 0], transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' } }}
          >
            {/* Central nucleus */}
            <span className="block w-10 h-10 bg-purple-400 rounded-full shadow-lg relative z-20" />
            {/* Orbiting electrons */}
            <span className="absolute w-24 h-24 border-2 border-purple-300 rounded-full animate-spin-slow" style={{ animationDuration: '7s' }} />
            <span className="absolute w-32 h-32 border-2 border-purple-200 rounded-full animate-spin-reverse" style={{ animationDuration: '10s' }} />
            <span className="absolute w-40 h-40 border-2 border-purple-100 rounded-full animate-spin-slow" style={{ animationDuration: '13s' }} />
            {/* Electrons */}
            <span className="absolute left-1/2 top-0 w-4 h-4 bg-white rounded-full shadow" style={{ transform: 'translate(-50%, -50%)' }} />
            <span className="absolute right-0 top-1/2 w-3 h-3 bg-purple-200 rounded-full shadow" style={{ transform: 'translate(50%, -50%)' }} />
            <span className="absolute left-0 bottom-1/3 w-2.5 h-2.5 bg-purple-300 rounded-full shadow" style={{ transform: 'translate(-50%, 50%)' }} />
          </motion.div>
          {/* Speech bubble absolutely positioned at top-right of image */}
          <motion.div
            className="fixed bottom-0 right-0 text-white text-2xl md:text-3xl font-bold px-6 md:px-10 py-6 md:py-8 max-w-xl w-[90vw] md:w-[420px] z-50 text-left rounded-2xl bg-black/40 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 60, x: 60 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          >
            We are the mapmakers of the content realm, navigating the digital landscape since its wild west days.
          </motion.div>
          {/* Animated image - bottom left, larger and stretches horizontally */}
          <motion.div
            className="absolute left-0 bottom-0 max-w-2xl w-[90vw] md:w-[520px] h-[260px] sm:h-[340px] md:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl z-20"
            style={{ transform: 'translateY(20%)' }}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            <Image
              src="/ourteam.webp"
              alt="Our Team"
              fill
              className="object-cover rounded-3xl"
              style={{objectFit: "cover"}}
              sizes="(max-width: 600px) 90vw, (max-width: 1200px) 520px, 520px"
            />
          </motion.div>
          {/* Animated dashed line below image */}
          <motion.div
            className="absolute left-[120px] md:left-[160px] bottom-8 h-0.5 w-24 md:w-32 border-dashed border-t-2 border-white opacity-60 z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
            style={{ originX: 0 }}
          />
          {/* Animated circle below line */}
          <motion.div
            className="absolute left-4 bottom-4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-4 border-purple-300 z-20 shadow-lg"
            initial={{ scale: 0, rotateY: 90, rotateX: 90 }}
            whileInView={{ scale: 1, rotateY: [0, 30, -30, 0], rotateX: [0, -30, 30, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 2, type: "spring", repeat: Infinity, repeatType: "loop" }}
            style={{ perspective: 600 }}
          />
        </div>
      </motion.div>

      {/* Modal Contact Form */}
      {openModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal content goes here */}
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-purple-500"
              onClick={() => setOpenModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Contact Us</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" />
              <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" />
              <textarea placeholder="Your Message" className="border rounded px-4 py-2" rows={4} />
              <button type="submit" className="bg-purple-500 text-white rounded px-6 py-2 font-semibold hover:bg-purple-600">Send</button>
            </form>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
