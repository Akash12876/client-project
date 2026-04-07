"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function BrandHero() {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setHovered(true);
    controls.start({
      textShadow: "0 0 48px #ff7e3c, 0 0 128px #fff, 0 0 32px #ff7e3c",
      color: "#ff7e3c",
      transition: { duration: 0.4, type: "spring" },
    });
  };
  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({
      textShadow: "0 0 0 #000",
      color: "#181818",
      transition: { duration: 0.5, type: "spring" },
    });
  };

  return (
    <section className="w-full flex justify-center items-center py-20 px-0 bg-black">
      <motion.h1
        className="select-none w-full text-center font-black uppercase relative leading-[1.05]"
        style={{
          fontSize: "clamp(2.5rem,16vw,13vw)",
          WebkitTextStroke: "2.5px #444",
          color: hovered ? "#ff7e3c" : "transparent",
          transition: "color 0.4s cubic-bezier(.4,0,.2,1)",
          width: "100%",
          letterSpacing: "0.01em",
        }}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        initial={{ textShadow: "0 0 0 #000" }}
      >
        <span className="block w-full">Sheryians</span>
        <motion.span
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: hovered ? 0.18 : 0,
            filter: hovered ? "blur(16px)" : "blur(0px)",
          }}
          transition={{ duration: 0.4 }}
          style={{
            background:
              "radial-gradient(circle at 60% 60%, #ff7e3c 0%, transparent 70%)",
            zIndex: -1,
          }}
        />
      </motion.h1>
    </section>
  );
}
