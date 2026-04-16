"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "iparx media’s creative vision and execution took our brand to the next level. The results were beyond our expectations!",
    name: "Amit Sharma",
    detail: "Founder, UrbanNest Brands"
  },
  {
    text: "Professional, proactive, and always ahead of trends. Our campaigns have never looked better.",
    name: "Priya Verma",
    detail: "Head of Marketing, ZenoTech"
  },
  {
    text: "The team at iparx media delivers on every promise. Their strategies are innovative and results-driven.",
    name: "Rahul Singh",
    detail: "Brand Owner, FitFuel"
  },
  {
    text: "From concept to launch, iparx media made everything seamless and premium. Highly recommended!",
    name: "Sneha Patel",
    detail: "Creative Director, ModeX"
  },
  {
    text: "iparx media’s attention to detail and creative flair set them apart. Our digital presence is now truly world-class.",
    name: "Vikram Joshi",
    detail: "Co-Founder, LuxeLiving"
  },
  {
    text: "Every project with iparx media feels like a collaboration with true experts. The results speak for themselves.",
    name: "Megha Kapoor",
    detail: "Entrepreneur, StyleAura"
  },
  {
    text: "We saw a dramatic increase in engagement and sales after working with iparx media. Their work is simply premium.",
    name: "Suresh Nair",
    detail: "Owner, TechNest"
  },
  {
    text: "iparx media’s team is creative, responsive, and always delivers on time. Our go-to agency for all things digital.",
    name: "Ritika Jain",
    detail: "Brand Manager, GlowUp Cosmetics"
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: "spring" as const,
      bounce: 0.22,
    },
  }),
};

export default function PremiumTestimonials() {
  return (
    <section className="relative w-full py-28 px-4 md:px-0 bg-gradient-to-br from-[#181824] via-[#10101a] to-[#181824] flex flex-col items-center overflow-x-hidden">
      {/* Soft background glow */}
      <div className="absolute -z-10 left-1/2 -translate-x-1/2 top-0 w-[80vw] h-[40vw] max-w-4xl rounded-full blur-3xl bg-gradient-to-br from-pink-500/10 via-indigo-400/10 to-purple-400/10" />
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-pink-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Client Experiences
      </motion.h2>
      <motion.p
        className="text-lg md:text-2xl text-center mb-12 text-white/80 font-medium"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
      >
        What people say about our work
      </motion.p>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="relative group bg-gradient-to-br from-[#23233b] to-[#181824] rounded-3xl p-8 flex flex-col items-start justify-between min-h-[220px] shadow-2xl border-2 border-transparent hover:border-pink-400/70 transition-all duration-500 cursor-pointer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              y: -14,
              rotateX: 6,
              rotateY: -6,
              boxShadow: "0 8px 32px 0 #a78bfa99, 0 0 0 8px #fff1, 0 0 32px 8px #a78bfa44",
              borderColor: "#a78bfa",
              transition: { type: "spring", stiffness: 120, damping: 18 }
            }}
            style={{
              borderImage: "linear-gradient(120deg, #a78bfa 10%, #f472b6 90%) 1",
              boxShadow: "0 2px 16px 0 #a78bfa22, 0 0 0 2px #fff1"
            }}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-pink-400/20 group-hover:border-pink-400/80 transition-all duration-500 animate-pulse" style={{zIndex:0}} />
            <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
              <div className="text-white text-lg md:text-xl font-semibold mb-6 leading-relaxed">
                “{t.text}”
              </div>
              <div className="mt-4">
                <div className="font-bold text-pink-300 text-base">{t.name}</div>
                <div className="text-indigo-300 text-xs font-medium mt-1">{t.detail}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
