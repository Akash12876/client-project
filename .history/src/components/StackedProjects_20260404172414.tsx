"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    desc: "A real-time dashboard for business intelligence, featuring AI-driven insights and beautiful data visualizations.",
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "E-Commerce Platform Redesign",
    desc: "A modern, scalable e-commerce platform with seamless checkout, personalized recommendations, and mobile-first UI.",
    color: "from-blue-600 to-cyan-400",
  },
  {
    title: "Social Media Campaign Engine",
    desc: "Automated campaign manager for creators and brands, with analytics, scheduling, and AI content suggestions.",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Smart Home IoT App",
    desc: "A cross-platform app to control and monitor smart home devices, with voice assistant and automation routines.",
    color: "from-green-500 to-lime-400",
  },
  {
    title: "GenAI Content Generator",
    desc: "A generative AI tool for creating blog posts, social media content, and marketing copy in seconds.",
    color: "from-indigo-500 to-fuchsia-500",
  },
];

export default function StackedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { delay: i * 0.25, type: "spring", stiffness: 60, damping: 18 },
      }));
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="relative min-h-[600px] flex flex-col items-center justify-center py-32 bg-[#0a0a0a] overflow-visible">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
        Projects
      </h2>
      <div className="relative w-full max-w-2xl h-[420px] flex items-center justify-center">
        {projects.slice(0, 5).map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial={{
              y: 80 + i * 10,
              opacity: 0,
              rotate: -6 + i * 3,
            }}
            animate={controls}
            className={`absolute left-1/2 top-0 -translate-x-1/2 shadow-2xl rounded-3xl w-full h-[340px] p-10 flex flex-col justify-between border-2 border-white/10 bg-gradient-to-br ${project.color} z-${10 - i} origin-bottom`}
            style={{
              boxShadow: `0 8px 32px 0 rgba(80,80,120,0.18), 0 0 0 8px rgba(255,255,255,0.04)`,
              pointerEvents: i === projects.length - 1 ? "auto" : "none",
            }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-xl">
                {project.desc}
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
                Featured
              </span>
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
                {i + 1} / {projects.length}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
