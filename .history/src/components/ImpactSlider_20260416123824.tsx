"use client";
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    img: "/PMM.png", // available in public
    featured: true,
    title: "Performance Marketing",
    desc: "High-converting ad campaigns focused on ROI, not vanity metrics.",
  },
  {
    img: "/demo.png", // fallback to available image
    featured: false,
    title: "YouTube Growth (Editing + Thumbnails)",
    desc: "We create high-retention videos and click-worthy thumbnails that boost views, CTR, and watch time.",
  },
  {
    img: "/ourteam.webp", // fallback to available image
    featured: false,
    title: "Social Media Marketing",
    desc: "We grow your audience and turn followers into consistent leads and customers.",
  },
  {
    img: "/ourteam.webp", // fallback to available image
    featured: false,
    title: "Conversion-Focused Content",
    desc: "Content designed to capture attention and convert it into real business results.",
  },
  {
    img: "/ourteam.webp", // fallback to available image
    featured: false,
    title: "Creative Strategy & Design",
    desc: "From visuals to messaging — everything is crafted to make your brand stand out.",
  },
  {
    img: "/ourteam.webp", // fallback to available image
    featured: false,
    title: "Influencer & Creator Marketing",
    desc: "We leverage creators to build trust, authority, and faster brand growth.",
  },
  {
    img: "/ourteam.webp", // fallback to available image
    featured: false,
    title: "Scalable Growth Systems",
    desc: "We build systems that generate consistent, predictable growth over time.",
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
                className="relative bg-white/5 rounded-3xl overflow-hidden shadow-2xl min-w-[320px] max-w-xs flex-shrink-0 border border-zinc-800 group flex flex-col justify-end"
                style={{ height: "420px" }}
              >
                {/* Image covers the entire card */}
                <motion.div
                  className="absolute inset-0 w-full h-full z-0"
                  initial={{ scale: 1, x: 0 }}
                  whileHover={{ scale: 1.08, x: 16 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </motion.div>
                {/* Remove 'Featured' badge from first card */}
                {slide.featured && idx !== 0 && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">Featured</span>
                )}
                <span className="absolute top-4 right-4 bg-black/80 text-white rounded-full p-2 z-10">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </span>
                {/* Card content overlay: hidden by default, slides up on hover */}
                <div className="absolute bottom-0 left-0 w-full z-20">
                  <div className="w-full p-6 bg-gradient-to-t from-purple-700/80 via-purple-500/70 to-transparent backdrop-blur-md rounded-b-3xl shadow-lg translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
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
                  className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none z-10"
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
