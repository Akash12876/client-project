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

  const rxRaw = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const ryRaw = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  const scRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.02, 0.94]);
  const yRaw  = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const rx = useSpring(rxRaw, { stiffness: 60, damping: 18 });
  const ry = useSpring(ryRaw, { stiffness: 60, damping: 18 });
  const sc = useSpring(scRaw, { stiffness: 55, damping: 18 });
  const y  = useSpring(yRaw,  { stiffness: 55, damping: 18 });

  const rzRaw = dir === 1 ? 2 : -2;
  const rz = useSpring(rzRaw, { stiffness: 160, damping: 24 });

  return (
    /* tall scroll track — image sticks while user scrolls through */
    <div ref={outerRef} className="relative w-full bg-black" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: "1600px" }}>
        <motion.div
          style={{ rotateX: rx, rotateY: ry, rotateZ: rz, scale: sc, y }}
          className="absolute inset-0"
        >
          <Image
            src="/ourteam.webp"
            alt="IPARX Media"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* subtle vignette only — no text overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        </motion.div>
      </div>
    </div>
  );
}
