"use client";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
];

export default function ImpactSlider() {
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mouse move handler for horizontal drag
  const handleMouseMove = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    // Calculate percent and animate
    const percent = x / rect.width;
    // Animate to left as mouse moves right
    controls.start({ x: -percent * (rect.width * 0.5) });
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    controls.start({ x: 0 });
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-16 px-4 md:px-0">
      <div className="text-center mb-2">
        <span className="uppercase tracking-widest text-zinc-400 text-lg">Impact</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center leading-tight">
        How We Are Doing It Faster And Better<br />Than Others!
      </h2>
      <div
        ref={sliderRef}
        className="relative w-full max-w-6xl mx-auto flex overflow-x-hidden"
        style={{ cursor: "grab" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-8"
          animate={controls}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 rounded-3xl overflow-hidden shadow-2xl min-w-[320px] max-w-xs flex-shrink-0 border border-zinc-800"
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
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {slide.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
