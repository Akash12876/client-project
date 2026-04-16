"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export default function Signature3DScrollShowcase() {
  /* ── outer section: scroll measured from here ── */
  const outerRef = useRef<HTMLDivElement>(null);
  const [dir, setDir] = useState<1 | -1>(1);

  const { scrollY, scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? v;
    setDir(v > prev ? 1 : -1);
  });

  /* ── derived motion values ── */
  const rxRaw = useTransform(scrollYProgress, [0, 1], [22, -22]);
  const ryRaw = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const scRaw = useTransform(scrollYProgress, [0, 0.4, 1], [0.88, 1.0, 0.96]);
  const yRaw  = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const rx = useSpring(rxRaw, { stiffness: 70, damping: 18 });
  const ry = useSpring(ryRaw, { stiffness: 70, damping: 18 });
  const sc = useSpring(scRaw, { stiffness: 65, damping: 18 });
  const y  = useSpring(yRaw,  { stiffness: 65, damping: 18 });

  /* direction-sensitive Z tilt for kinetic feel */
  const rzTarget = dir === 1 ? 2.5 : -2.5;
  const rz = useSpring(rzTarget, { stiffness: 150, damping: 22 });

  /* floating glow x-shift */
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const stats = [
    { v: "5B+",  l: "Views" },
    { v: "200+", l: "Brands" },
    { v: "98%",  l: "Retention" },
    { v: "4.1x", l: "Avg ROAS" },
  ];

  return (
    /* ── scroll-measured wrapper: no height tricks, content drives height ── */
    <div ref={outerRef} className="relative w-full bg-black">

      {/* ── ambient glow behind card ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: glowX }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            x: glowX,
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.18) 0%, rgba(99,102,241,0.14) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* ── header ── */}
      <div className="relative z-10 px-5 pb-8 pt-16 text-center md:px-12">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Live Brand Energy
        </motion.p>
        <motion.h3
          className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Scroll Up · Scroll Down
          <span className="block text-cyan-300">Feel The Depth Move</span>
        </motion.h3>
      </div>

      {/* ── 3-D card ── */}
      <div
        className="relative z-10 mx-auto w-full px-4 pb-16 sm:px-8 md:px-14"
        style={{ perspective: "1800px", maxWidth: "1340px" }}
      >
        <motion.div
          style={{ rotateX: rx, rotateY: ry, rotateZ: rz, scale: sc, y }}
          className="relative w-full overflow-hidden rounded-[28px] border border-cyan-300/25
                     shadow-[0_40px_120px_rgba(6,182,212,0.20),0_0_0_1px_rgba(255,255,255,0.06)]
                     sm:rounded-[36px]"
        >
          {/* ── image ── */}
          <div className="relative h-[56vw] min-h-[260px] max-h-[680px] w-full">
            <Image
              src="/ourteam.webp"
              alt="IPARX Media team — growth in motion"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1340px"
            />
          </div>

          {/* colour-shift overlay reacting to scroll direction */}
          <motion.div
            style={{ rotateZ: rz }}
            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/18 via-transparent to-indigo-500/20"
          />

          {/* dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* ── floating stat chips — top row ── */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-7 sm:top-7">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-center backdrop-blur-md"
              >
                <span className="block text-base font-black leading-none text-white sm:text-lg">
                  {s.v}
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-cyan-200/80 sm:text-[10px]">
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* ── bottom content ── */}
          <div className="absolute bottom-0 w-full p-5 sm:p-8 md:p-10">
            <div className="flex flex-wrap gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80 sm:text-[10px]">
              {["3D Scroll Reactive", "Direction Sensitive", "Depth Motion"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cyan-300/35 bg-black/40 px-3 py-1 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <h4 className="mt-3 max-w-2xl text-xl font-black leading-snug text-white sm:text-2xl md:text-4xl">
              We Don&apos;t Just Run Campaigns.
              <span className="text-cyan-300"> We Build Growth Machines.</span>
            </h4>
            <a
              href="/#contact"
              className="mt-5 inline-block rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-black transition hover:bg-cyan-200 md:text-base"
            >
              Start Your Growth Plan →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
