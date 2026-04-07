"use client";
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    img: "/impact1.jpg",
    featured: true,
    title: "Coming To Your Campus",
    desc: "This Time The Feature Was At IIIT Bhopal, Where We Talked About How To Stay Ahead Of The Crowd.",
  },
  {
    img: "/impact2.jpg",
    featured: false,
    title: "Session 2",
    desc: "Description for session 2.",
  },
  {
    img: "/impact3.jpg",
    featured: false,
    title: "Session 3",
    desc: "Description for session 3.",
  },
  {
    img: "/impact4.jpg",
    featured: false,
    title: "Session 4",
    desc: "Description for session 4.",
  },
  {
    img: "/impact5.jpg",
    featured: false,
    title: "Session 5",
    desc: "Description for session 5.",
  },
  {
    img: "/impact6.jpg",
    featured: false,
    title: "Session 6",
    desc: "Description for session 6.",
  },
  {
    img: "/impact7.jpg",
    featured: false,
    title: "Session 7",
    desc: "Description for session 7.",
  },
];




export default function ImpactSlider() {
  const [index, setIndex] = useState(0); // start of visible window
  const visibleCount = 3;
  const maxIndex = slides.length - visibleCount;

  // Auto-scroll logic
  const leftInterval = useRef<number | null>(null);
  const rightInterval = useRef<number | null>(null);


  const startAutoPrev = () => {
    if (leftInterval.current) return;
    leftInterval.current = window.setInterval(() => {
      setIndex(i => {
        if (i > 0) return i - 1;
        if (leftInterval.current) clearInterval(leftInterval.current);
        leftInterval.current = null;
        return i;
      });
    }, 600);
  };
  const stopAutoPrev = () => {
    if (leftInterval.current) {
      clearInterval(leftInterval.current);
      leftInterval.current = null;
    }
  };

  const startAutoNext = () => {
    if (rightInterval.current) return;
    rightInterval.current = window.setInterval(() => {
      setIndex(i => {
        if (i < maxIndex) return i + 1;
        if (rightInterval.current) clearInterval(rightInterval.current);
        rightInterval.current = null;
        return i;
      });
    }, 600);
  };
  const stopAutoNext = () => {
    if (rightInterval.current) {
      clearInterval(rightInterval.current);
      rightInterval.current = null;
    }
  };

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-black py-16 px-4 md:px-0">
      <div className="text-center mb-2">
        <span className="uppercase tracking-widest text-zinc-400 text-lg">Impact</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center leading-tight">
        How We Are Doing It Faster And Better<br />Than Others!
      </h2>
      <div className="relative w-full max-w-6xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onMouseEnter={startAutoPrev}
          onMouseLeave={stopAutoPrev}
          className={`absolute left-0 z-20 bg-black/70 hover:bg-indigo-600 text-white rounded-full p-3 shadow transition disabled:opacity-30 disabled:cursor-not-allowed`}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          disabled={index === 0}
          aria-label="Previous"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>

        {/* Cards with sliding animation */}
        <div className="relative w-full overflow-hidden px-12" style={{height: 440}}>
          <motion.div
            className="flex gap-8 w-full justify-center"
            initial={false}
            animate={{ x: `-${index * (340 + 32)}px` }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            style={{ minWidth: slides.length * 340 }}
          >
            {slides.map((slide, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #a78bfa, 0 0 0 8px #6366f1" }}
                className="relative bg-white/5 rounded-3xl overflow-hidden shadow-2xl min-w-[320px] max-w-xs flex-shrink-0 border border-zinc-800 group flex flex-col"
                style={{ height: "420px" }}
              >
                <div className="relative w-full h-2/3">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    className="object-cover w-full h-full"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  {slide.featured && (
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">Featured</span>
                  )}
                  <span className="absolute top-4 right-4 bg-black/80 text-white rounded-full p-2">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </span>
                </div>
                {/* Card content always visible at bottom */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="w-full p-6 bg-gradient-to-t from-purple-700/80 via-purple-500/70 to-transparent backdrop-blur-md rounded-b-3xl shadow-lg relative z-10">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {slide.desc}
                    </p>
                  </div>
                </div>
                {/* Overlay gradient animates on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: "linear-gradient(0deg, #a78bfa88 60%, transparent 100%)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onMouseEnter={startAutoNext}
          onMouseLeave={stopAutoNext}
          className={`absolute right-0 z-20 bg-black/70 hover:bg-indigo-600 text-white rounded-full p-3 shadow transition disabled:opacity-30 disabled:cursor-not-allowed`}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          disabled={index === maxIndex}
          aria-label="Next"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}
