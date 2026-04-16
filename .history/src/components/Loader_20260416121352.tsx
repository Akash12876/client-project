"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const brand = "IPARX MEDIA";

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 1700);
    const hideTimer = setTimeout(() => setIsVisible(false), 2200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <motion.p
        className="mb-7 text-center font-black tracking-[0.45em] text-white"
        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
        initial="hidden"
        animate="visible"
      >
        {brand.split("").map((char, idx) => (
          <motion.span
            key={`${char}-${idx}`}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  delay: idx * 0.07,
                  duration: 0.42,
                  ease: "easeOut",
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>

      <div className="h-[2px] w-[220px] overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="h-full bg-indigo-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
