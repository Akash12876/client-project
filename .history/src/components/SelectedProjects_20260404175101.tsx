"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "AI Analytics Dashboard",
    desc: "Real-time insights for business growth.",
    img: "/placeholder1.jpg",
  },
  {
    name: "E-Commerce Redesign",
    desc: "Modern, scalable shopping experience.",
    img: "/placeholder2.jpg",
  },
  {
    name: "Social Campaign Engine",
    desc: "Automated campaigns for creators.",
    img: "/placeholder3.jpg",
  },
  {
    name: "Smart Home App",
    desc: "Control your home from anywhere.",
    img: "/placeholder4.jpg",
  },
  {
    name: "GenAI Content Studio",
    desc: "Create content with generative AI.",
    img: "/placeholder5.jpg",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.28,
      duration: 0.9,
      delay: i * 0.18,
    },
  }),
};

export default function SelectedProjects() {
  return (
    <section className="relative w-full py-28 px-4 md:px-0 bg-gradient-to-br from-[#181824] via-[#10101a] to-[#181824] overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          Selected Projects
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white/60 mb-14 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
        >
          A glimpse of what we’ve crafted
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="group relative bg-gradient-to-br from-[#23233b] to-[#181824] rounded-2xl shadow-2xl border border-white/10 p-0 flex flex-col items-center justify-between cursor-pointer transition-all duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={i}
              whileHover={{
                y: -12,
                rotateX: 8,
                rotateY: -8,
                boxShadow:
                  "0 8px 32px 0 #a78bfa99, 0 0 0 8px #fff1, 0 0 32px 8px #a78bfa44",
                borderColor: "#a78bfa",
                transition: { type: "spring", stiffness: 120, damping: 18 },
              }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                {/* Subtle overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="w-full flex flex-col items-start px-7 py-7">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-300">
                  {project.name}
                </h3>
                <p className="text-white/70 text-base mb-0">{project.desc}</p>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_32px_8px_#a78bfa55] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Subtle background glow */}
      <div className="absolute -z-10 left-1/2 -translate-x-1/2 bottom-0 w-[80vw] h-[40vw] max-w-4xl rounded-full blur-3xl bg-gradient-to-br from-purple-500/20 via-indigo-400/10 to-pink-400/10" />
    </section>
  );
}
