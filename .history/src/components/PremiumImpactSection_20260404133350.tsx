import { useEffect, useRef, useState } from "react";
import Particles from "./Particles";

function useCountUp(target: number, duration = 2, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        <Particles />
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-2xl text-indigo-200 mt-3 mb-12 text-center z-10 font-medium"
      >
        Real results. Real growth.
      </motion.p>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {impactData.map((item, idx) => {
          const count = useCountUp(item.value, 2, inView);
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + idx * 0.2 }}
              whileHover={{ scale: 1.07, boxShadow: "0 0 32px 0 #a78bfa, 0 0 0 8px #6366f1" }}
              className="group bg-gradient-to-br from-[#232046]/80 to-[#181826]/90 rounded-3xl p-10 flex flex-col items-center justify-center shadow-2xl border border-indigo-700/40 hover:border-indigo-400/80 transition-all duration-300 cursor-pointer"
            >
              <span className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-glow group-hover:text-indigo-400 transition-colors duration-300 flex items-end">
                {count}
                <span className="text-3xl md:text-4xl font-bold ml-1 text-indigo-400 group-hover:text-pink-400 transition-colors duration-300">
                  {item.suffix}
                </span>
              </span>
              <span className="text-xl md:text-2xl font-bold text-indigo-200 mt-2 mb-2 text-center">
                {item.label}
              </span>
              <span className="text-base md:text-lg text-indigo-300 text-center">
                {item.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
      {/* Subtle animated particles (client-only to avoid hydration error) */}
      <Particles />



    // Client-only animated particles to avoid hydration mismatch
    import { useMemo } from "react";

    function Particles() {
      const [mounted, setMounted] = useState(false);
      const positions = useMemo(
        () =>
          Array.from({ length: 18 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            y: Math.random() * 40 - 20,
            x: Math.random() * 40 - 20,
            duration: 6 + Math.random() * 4,
          })),
        []
      );
      useEffect(() => {
        setMounted(true);
      }, []);
      if (!mounted) return null;
      return (
        <div className="pointer-events-none absolute inset-0 z-0">
          {positions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-indigo-400/40"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                filter: "blur(2px)"
              }}
              animate={{
                y: [0, p.y, 0],
                x: [0, p.x, 0],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      );
    }
    </section>
  );
}
