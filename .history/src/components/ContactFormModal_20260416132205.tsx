"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const ThankYouModal = dynamic(() => import("./ThankYouModal"), { ssr: false });

export default function ContactFormModal({ onClose }: { onClose: () => void }) {
  const [showThankYou, setShowThankYou] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100vw", opacity: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      {showThankYou && <ThankYouModal onClose={onClose} />}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 80, opacity: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 18 }}
        className="relative w-full max-w-3xl mx-auto my-6 bg-[#18181b] rounded-[2rem] shadow-2xl flex flex-col md:flex-row px-5 py-10 sm:p-10 md:p-20 gap-8 md:gap-10 border-2 border-zinc-800"
        style={{ pointerEvents: showThankYou ? "none" : "auto", filter: showThankYou ? "blur(2px) grayscale(0.5)" : "none" }}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-5 text-3xl text-zinc-400 hover:text-white transition-colors font-bold z-10">×</button>
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            It&apos;s nice to<br />meet ya
          </h2>
          <p className="text-base sm:text-xl text-zinc-200 max-w-md">
            For general enquiries, please fill out the form to <span className="text-[#a78bfa] underline underline-offset-4 cursor-pointer">get in touch.</span>
          </p>
        </div>
        {/* Right Side - Form */}
        <form className="flex-1 flex flex-col gap-6 justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 w-full">
            <div>
              <label className="block text-base sm:text-lg font-semibold mb-1" htmlFor="name">Name</label>
              <input id="name" type="text" required className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all placeholder-zinc-400 text-base" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-base sm:text-lg font-semibold mb-1" htmlFor="email">Email *</label>
              <input id="email" type="email" required className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all placeholder-zinc-400 text-base" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-base sm:text-lg font-semibold mb-1" htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" required className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all placeholder-zinc-400 text-base" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-base sm:text-lg font-semibold mb-1" htmlFor="comment">Comment</label>
              <textarea id="comment" rows={3} className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all resize-none placeholder-zinc-400 text-base" placeholder="Your comment (optional)" />
            </div>
          </div>
          <div className="flex items-start gap-3 mt-1">
            <input type="checkbox" id="privacy" required className="accent-[#a78bfa] w-5 h-5 mt-0.5 shrink-0" />
            <label htmlFor="privacy" className="text-zinc-200 text-sm sm:text-base leading-snug">By submitting this form I accept the Privacy Policy of this site.</label>
          </div>
          <button type="submit" className="mt-2 w-full sm:w-auto bg-[#a78bfa] hover:bg-[#cbb3e7] text-white font-bold text-lg sm:text-xl py-3 px-8 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a78bfa]">
            Send to Know who we are
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
