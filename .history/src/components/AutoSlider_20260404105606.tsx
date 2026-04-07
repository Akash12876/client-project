import React from "react";
import { motion, useAnimation } from "framer-motion";

const slides = [
  {
    title: "Performance Marketing",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Social Media Marketing",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Creative Strategy & Content Production",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Website & Funnel Development",
    color: "from-green-500 to-teal-500",
  },
];

export default function AutoSlider() {
  return (
    <div className="relative w-full h-48 overflow-hidden flex items-center justify-center my-12">
      <div className="absolute inset-0 flex flex-col animate-slider-y">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.title}
            className={`flex items-center justify-center h-48 w-full text-3xl md:text-5xl font-bold text-white bg-gradient-to-r ${slide.color} shadow-lg mb-4 rounded-2xl`}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: idx * 0.5, duration: 1 }}
          >
            {slide.title}
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slider-y {
          0% { transform: translateY(0); }
          20% { transform: translateY(0); }
          25% { transform: translateY(-100%); }
          45% { transform: translateY(-100%); }
          50% { transform: translateY(-200%); }
          70% { transform: translateY(-200%); }
          75% { transform: translateY(-300%); }
          95% { transform: translateY(-300%); }
          100% { transform: translateY(0); }
        }
        .animate-slider-y {
          animation: slider-y 12s infinite cubic-bezier(0.77,0,0.175,1);
        }
      `}</style>
    </div>
  );
}
