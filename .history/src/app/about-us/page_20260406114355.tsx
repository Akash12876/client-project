"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.section
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-20 gap-16 bg-gradient-to-br from-[#18181b] via-[#232136] to-[#1a1a2e]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Left: Image with animated label */}
      <motion.div
        className="flex flex-col items-center md:items-start gap-8 flex-1"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#a78bfa]">
          <Image
            src="/aboutus-team.webp"
            alt="About Us Team"
            fill
            className="object-cover"
            priority
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-[#a78bfa]/90 py-3 text-center text-xl md:text-2xl font-bold text-white tracking-wide rounded-b-2xl shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 80, damping: 14 }}
          >
            Our Creative Team
          </motion.div>
        </div>
      </motion.div>
      {/* Right: Animated text content */}
      <motion.div
        className="flex-1 flex flex-col gap-8 items-center md:items-start"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-4 text-left"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          About <span className="text-[#a78bfa]">Us</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-zinc-200 max-w-2xl leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          We are a passionate team of creators, strategists, and innovators dedicated to redefining the digital landscape. Our journey is driven by a relentless pursuit of excellence, creativity, and meaningful impact. <br /><br />
          From influencer marketing to talent management, we believe in building authentic connections and empowering brands and creators to reach new heights. Join us as we shape the future, one story at a time.
        </motion.p>
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: "#a78bfa", color: "#fff" }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-full bg-white text-[#a78bfa] font-bold text-lg shadow-lg border-2 border-[#a78bfa] transition-all"
          >
            Meet the Team
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: "#fff", color: "#a78bfa" }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-full bg-[#a78bfa] text-white font-bold text-lg shadow-lg border-2 border-[#a78bfa] transition-all"
          >
            Our Story
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
