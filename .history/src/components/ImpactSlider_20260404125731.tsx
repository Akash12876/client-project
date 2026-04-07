"use client";
"use client";
import { useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCards, setShowCards] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-16 px-4 md:px-0"
      onMouseEnter={() => setShowCards(true)}
      onMouseLeave={() => setShowCards(false)}
    >
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
      >
        <div className="flex gap-8 w-full">
          {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 120 }}
              animate={showCards ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
              transition={{ delay: idx * 0.25, duration: 0.7, type: "spring", stiffness: 60, damping: 20 }}
              className="relative bg-white/5 rounded-3xl overflow-hidden shadow-2xl min-w-[320px] max-w-xs flex-shrink-0 border border-zinc-800 group"
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
              {/* Card content hidden by default, slides up on hover */}
              <div className="absolute bottom-0 left-0 w-full px-0 flex flex-col items-start z-20">
                <div className="w-full transition-all duration-500 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 p-6 bg-gradient-to-t from-purple-700/80 via-purple-500/70 to-transparent backdrop-blur-md rounded-b-3xl shadow-lg">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
