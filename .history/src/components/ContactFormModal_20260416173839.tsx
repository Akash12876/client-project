"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

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
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto px-3 py-4 sm:px-5 md:py-5"
    >
      {showThankYou && <ThankYouModal onClose={onClose} />}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 80, opacity: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 18 }}
        className="relative w-full max-w-4xl mx-auto bg-[#18181b] rounded-[1.6rem] sm:rounded-[2rem] shadow-2xl flex flex-col md:flex-row px-4 py-8 sm:p-8 md:p-12 lg:p-16 gap-7 md:gap-8 border border-zinc-700/70 max-h-[92vh] overflow-y-auto md:max-h-none md:overflow-visible"
        style={{ pointerEvents: showThankYou ? "none" : "auto", filter: showThankYou ? "blur(2px) grayscale(0.5)" : "none" }}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-3xl text-zinc-400 hover:text-white transition-colors font-bold z-10">×</button>
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4">
          <Link href="/" className="mb-2 flex w-full justify-center md:justify-start" aria-label="Go to homepage">
            <Image
              src="/iparx.png"
              alt="IPARX MEDIA"
              width={840}
              height={280}
              priority
              className="h-[90px] w-auto max-w-full object-contain sm:h-[110px] md:h-[128px]"
            />
          </Link>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            It&apos;s nice to<br />meet ya
          </h2>
          <p className="text-base sm:text-lg text-zinc-200 max-w-md leading-7">
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
          <button
            type="submit"
            className="group relative mt-2 w-full sm:w-auto overflow-hidden rounded-full border border-[#7c6bf177] px-6 py-3 text-white font-bold text-base sm:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
            style={{ background: "linear-gradient(90deg, #6d5be0 0%, #8d72ea 45%, #4f84de 100%)" }}
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(10,12,20,0.74),rgba(10,12,20,0.38),transparent)] opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
            <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700" />
            <span className="relative z-10">Send to Know Us</span>
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
