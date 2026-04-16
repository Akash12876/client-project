"use client";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ["#a78bfa", "#fff", "#cbb3e7", "#7c3aed"];

/* precomputed once at module load — avoids impure calls inside render */
const CONFETTI = Array.from({ length: 18 }, (_, i) => ({
  y: 60 + ((i * 37 + 13) % 61),
  x: (((i * 53 + 7) % 321) - 160),
  delay: 0.4 + ((i * 11) % 10) / 33,
  duration: 1.2 + ((i * 7) % 10) / 20,
}));

export default function ThankYouModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: -200, scale: 0.7, rotate: -8, opacity: 0 }}
          animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
          exit={{ y: -120, scale: 0.7, rotate: 8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="bg-[#18181b] rounded-3xl shadow-2xl px-12 py-16 flex flex-col items-center border-2 border-[#a78bfa] relative"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1.2, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
            className="mb-6"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" fill="#a78bfa" stroke="#fff" strokeWidth="4" />
              <path d="M24 41.5L36.5 54L56 32" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <h2 className="text-4xl font-extrabold text-white mb-2 text-center">Thank You!</h2>
          <p className="text-lg text-zinc-300 mb-6 text-center max-w-xs">
            Your message has been received.<br />We&apos;ll get back to you soon.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: "#a78bfa" }}
            whileTap={{ scale: 0.96 }}
            className="mt-2 px-8 py-3 rounded-full bg-[#cbb3e7] text-black font-bold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
            onClick={onClose}
          >
            Close
          </motion.button>
          {/* Confetti animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            {confetti.map((c, i) => (
              <motion.div
                key={i}
                initial={{ y: -60, x: 0, opacity: 0 }}
                animate={{
                  y: [-60, c.y],
                  x: [0, c.x],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: c.delay,
                  duration: c.duration,
                  repeat: 0,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-0"
                style={{
                  width: 10,
                  height: 18,
                  background: COLORS[i % 4],
                  borderRadius: 4,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
