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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-2 sm:px-4"
    >
      {showThankYou && <ThankYouModal onClose={onClose} />}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 80, opacity: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 18 }}
        className="w-full max-w-lg sm:max-w-xl md:max-w-3xl bg-[#18181b] rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row p-4 sm:p-8 md:p-20 gap-4 md:gap-10 relative border-2 border-zinc-800"
        style={{ pointerEvents: showThankYou ? "none" : "auto", filter: showThankYou ? "blur(2px) grayscale(0.5)" : "none" }}
      >
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            It’s nice to<br />meet ya
          </h2>
          <p className="text-xl text-zinc-200 mt-2 mb-8 max-w-md">
            For general enquiries, please fill out the form to <span className="text-[#a78bfa] underline underline-offset-4 cursor-pointer">get in touch.</span>
          </p>
        </div>
        {/* Right Side - Form */}
        <form className="flex-1 flex flex-col gap-8 justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 w-full">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
              <input id="name" type="text" required className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all placeholder-zinc-400" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">Email *</label>
              <input id="email" type="email" required className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all placeholder-zinc-400" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" required className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all placeholder-zinc-400" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="comment">Comment</label>
              <textarea id="comment" rows={3} className="w-full bg-zinc-900/40 border-b-2 border-zinc-400 focus:border-[#a78bfa] text-white py-2 px-3 outline-none transition-all resize-none placeholder-zinc-400" placeholder="Your comment (optional)" />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" id="privacy" required className="accent-[#a78bfa] w-5 h-5" />
            <label htmlFor="privacy" className="text-zinc-200 text-base">By submitting this form I accept the Privacy Policy of this site.</label>
          </div>
          <button type="submit" className="mt-4 w-full md:w-[260px] bg-[#a78bfa] hover:bg-[#cbb3e7] text-white font-bold text-xl py-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] mx-auto md:mx-0">
            Send to Know who we are
          </button>
        </form>
        <button onClick={onClose} className="absolute top-6 right-8 text-3xl text-zinc-400 hover:text-white transition-colors font-bold">×</button>
      </motion.div>
    </motion.div>
  );
}
