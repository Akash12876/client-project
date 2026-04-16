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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? latest;
    if (latest === prev) return;
    setDirection(latest > prev ? 1 : -1);
  });

  const depthYRaw = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const depthRotateXRaw = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const depthRotateYRaw = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  const depthScaleRaw = useTransform(scrollYProgress, [0, 1], [1.2, 1.03]);

  const depthY = useSpring(depthYRaw, { stiffness: 80, damping: 20 });
  const depthRotateX = useSpring(depthRotateXRaw, { stiffness: 70, damping: 18 });
  const depthRotateY = useSpring(depthRotateYRaw, { stiffness: 70, damping: 18 });
  const depthScale = useSpring(depthScaleRaw, { stiffness: 75, damping: 18 });

  const directionTilt = useSpring(direction === 1 ? 7 : -7, {
    stiffness: 120,
    damping: 18,
  });

  const glowShiftX = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black px-5 py-14 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/90">
            Signature Motion Experience
          </p>
          <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Scroll To Feel The Brand Momentum
          </h3>
        </div>

        <div className="relative min-h-[210vh]">
          <div className="sticky top-24">
            <div style={{ perspective: 2000 }} className="relative mx-auto max-w-6xl">
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[36px] blur-3xl"
                style={{
                  x: glowShiftX,
                  background:
                    "radial-gradient(ellipse at center, rgba(34,211,238,0.26), rgba(99,102,241,0.18), transparent 70%)",
                }}
              />

              <motion.div
                style={{
                  y: depthY,
                  rotateX: depthRotateX,
                  rotateY: depthRotateY,
                  scale: depthScale,
                }}
                className="relative overflow-hidden rounded-[34px] border border-cyan-300/30 shadow-[0_30px_100px_rgba(6,182,212,0.22)]"
              >
                <motion.div
                  style={{ rotateZ: directionTilt }}
                  className="absolute inset-0 z-10 bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20"
                />

                <div className="relative h-[64vh] min-h-[460px] w-full">
                  <Image
                    src="/ourteam.webp"
                    alt="IPARX growth showcase"
                    fill
                    className="object-cover"
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                <div className="absolute bottom-0 z-30 w-full p-5 md:p-9">
                  <div className="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/85 md:text-xs">
                    <span className="rounded-full border border-cyan-300/40 bg-black/35 px-3 py-1.5">
                      3D Scroll Reactive
                    </span>
                    <span className="rounded-full border border-cyan-300/40 bg-black/35 px-3 py-1.5">
                      Direction Sensitive
                    </span>
                    <span className="rounded-full border border-cyan-300/40 bg-black/35 px-3 py-1.5">
                      Premium Depth Motion
                    </span>
                  </div>

                  <h4 className="mt-4 max-w-3xl text-2xl font-black text-white md:text-4xl">
                    Up Scroll, Down Scroll: The Visual Depth Breathes With User Intent
                  </h4>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
