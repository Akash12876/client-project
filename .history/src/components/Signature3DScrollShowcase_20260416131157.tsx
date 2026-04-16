"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Signature3DScrollShowcase() {
  const outerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  /* ── Avatar: enters from bottom, exits to top ── */
  const avatarYRaw = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    ["110%", "0%", "0%", "-110%"]
  );
  const avatarY = useSpring(avatarYRaw, { stiffness: 55, damping: 20 });

  /* Avatar 3D tilt driven by scroll */
  const avatarRXRaw = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const avatarRYRaw = useTransform(scrollYProgress, [0, 1], [-22, 22]);
  const avatarRX = useSpring(avatarRXRaw, { stiffness: 50, damping: 16 });
  const avatarRY = useSpring(avatarRYRaw, { stiffness: 50, damping: 16 });

  /* Avatar scale: subtle breathe */
  const avatarScaleRaw = useTransform(
    scrollYProgress,
    [0.1, 0.45, 0.85],
    [0.9, 1.04, 0.92]
  );
  const avatarScale = useSpring(avatarScaleRaw, { stiffness: 50, damping: 18 });

  /* ── Text phase 1: Hello — 0.10 → 0.30 ── */
  const t1Op = useTransform(scrollYProgress, [0.10, 0.19, 0.27, 0.34], [0, 1, 1, 0]);
  const t1Y  = useTransform(scrollYProgress, [0.10, 0.19], [50, 0]);

  /* ── Text phase 2: We Scale — 0.38 → 0.58 ── */
  const t2Op = useTransform(scrollYProgress, [0.38, 0.46, 0.54, 0.62], [0, 1, 1, 0]);
  const t2Y  = useTransform(scrollYProgress, [0.38, 0.46], [50, 0]);

  /* ── Text phase 3: We Build — 0.65 → 0.85 ── */
  const t3Op = useTransform(scrollYProgress, [0.65, 0.73, 0.80, 0.87], [0, 1, 1, 0]);
  const t3Y  = useTransform(scrollYProgress, [0.65, 0.73], [50, 0]);

  /* glow color shifts with scroll — unused now, keeping scroll-driven tilt only */

  const phases = [
    { op: t1Op, y: t1Y, tag: "01", heading: "Hello,",    sub: "We are IPARX MEDIA." },
    { op: t2Op, y: t2Y, tag: "02", heading: "We Scale.",  sub: "Brands. Creators. Revenue." },
    { op: t3Op, y: t3Y, tag: "03", heading: "We Build.",  sub: "Systems that grow with you." },
  ];

  return (
    /* 400vh tall track gives enough room for 3 scroll phases */
    <div ref={outerRef} className="relative w-full bg-black" style={{ height: "400vh" }}>

      {/* sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center">

        {/* ── LEFT: text panels ── */}
        <div className="relative flex-1 flex items-center justify-center md:justify-start
                        px-8 sm:px-12 md:pl-16 lg:pl-24 h-1/2 md:h-full">
          {phases.map(({ op, y, tag, heading, sub }) => (
            <motion.div
              key={tag}
              style={{ opacity: op, y }}
              className="absolute text-left"
            >
              <p className="text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.36em] mb-3">
                Phase {tag}
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02]">
                {heading}
              </h2>
              <p className="mt-4 text-zinc-400 text-lg sm:text-xl md:text-2xl font-medium">
                {sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── RIGHT: 3D avatar ── */}
        <div
          className="relative flex-1 flex items-center justify-center
                     h-1/2 md:h-full"
          style={{ perspective: "1400px" }}
        >
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute w-[340px] h-[480px] rounded-full blur-[90px] opacity-30"
            style={{
              background: "radial-gradient(ellipse, #22d3ee 0%, #6366f1 50%, transparent 80%)",
            }}
          />

          <motion.div
            style={{
              y: avatarY,
              rotateX: avatarRX,
              rotateY: avatarRY,
              scale: avatarScale,
            }}
            className="relative z-10
                       w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-[360px] lg:w-96 lg:h-[480px]"
          >
            {/* border glow ring */}
            <div className="absolute -inset-1 rounded-[34px] blur-md opacity-60"
              style={{ background: "linear-gradient(135deg, #22d3ee55, #6366f155)" }} />

            {/* image card */}
            <div className="relative w-full h-full rounded-[32px] overflow-hidden
                            border border-cyan-300/30
                            shadow-[0_32px_80px_rgba(34,211,238,0.22),0_0_0_1px_rgba(255,255,255,0.06)]">
              <Image
                src="/ourteam.webp"
                alt="IPARX Media"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 400px"
              />
              {/* bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

