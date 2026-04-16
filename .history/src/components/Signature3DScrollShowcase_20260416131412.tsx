"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ── SVG Avatar (no external asset) ── */
function Avatar3D({
  rotateX,
  rotateY,
  scale,
  y,
}: {
  rotateX: ReturnType<typeof useSpring>;
  rotateY: ReturnType<typeof useSpring>;
  scale: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) {
  return (
    <motion.div
      style={{ rotateX, rotateY, scale, y }}
      className="relative z-10 w-52 sm:w-64 md:w-72 lg:w-80 select-none"
    >
      {/* outer glow ring */}
      <div
        className="absolute -inset-4 rounded-full blur-2xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #6366f1 0%, #22d3ee 50%, transparent 80%)",
        }}
      />

      <svg
        viewBox="0 0 320 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        <defs>
          {/* skin gradient */}
          <radialGradient id="skin" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#fcd5ae" />
            <stop offset="100%" stopColor="#e8a87c" />
          </radialGradient>
          {/* shirt gradient */}
          <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          {/* hair */}
          <radialGradient id="hair" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#3b1a06" />
            <stop offset="100%" stopColor="#1a0a00" />
          </radialGradient>
          {/* glow circle behind */}
          <radialGradient id="bgGlow" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#6366f133" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* background circle glow */}
        <ellipse cx="160" cy="340" rx="130" ry="60" fill="url(#bgGlow)" />

        {/* ── BODY / SHIRT ── */}
        <path
          d="M60 320 Q60 260 100 240 L160 260 L220 240 Q260 260 260 320 L260 420 L60 420 Z"
          fill="url(#shirt)"
        />
        {/* collar */}
        <path
          d="M130 240 L160 260 L190 240 Q180 230 160 232 Q140 230 130 240 Z"
          fill="#fff"
          opacity="0.25"
        />

        {/* ── NECK ── */}
        <rect x="143" y="210" width="34" height="38" rx="14" fill="url(#skin)" />

        {/* ── HEAD ── */}
        <ellipse cx="160" cy="170" rx="74" ry="82" fill="url(#skin)" />

        {/* ── HAIR ── */}
        <path
          d="M86 150 Q82 90 160 86 Q238 90 234 150
             Q210 110 160 108 Q110 110 86 150 Z"
          fill="url(#hair)"
        />
        {/* side hair */}
        <ellipse cx="88" cy="170" rx="12" ry="26" fill="url(#hair)" />
        <ellipse cx="232" cy="170" rx="12" ry="26" fill="url(#hair)" />

        {/* ── EYES ── */}
        {/* eye whites */}
        <ellipse cx="136" cy="172" rx="16" ry="13" fill="white" />
        <ellipse cx="184" cy="172" rx="16" ry="13" fill="white" />
        {/* irises */}
        <circle cx="138" cy="173" r="9" fill="#2d3a8c" />
        <circle cx="182" cy="173" r="9" fill="#2d3a8c" />
        {/* pupils */}
        <circle cx="139" cy="174" r="5" fill="#111" />
        <circle cx="183" cy="174" r="5" fill="#111" />
        {/* eye shine */}
        <circle cx="141" cy="171" r="2.5" fill="white" />
        <circle cx="185" cy="171" r="2.5" fill="white" />
        {/* eyebrows */}
        <path d="M122 157 Q136 150 150 155" stroke="#3b1a06" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M170 155 Q184 150 198 157" stroke="#3b1a06" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* ── NOSE ── */}
        <path d="M160 178 Q154 196 148 202 Q160 208 172 202 Q166 196 160 178 Z"
          fill="#d4956a" opacity="0.6" />

        {/* ── SMILE ── */}
        <path d="M140 218 Q160 232 180 218"
          stroke="#c0724a" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* ── EARS ── */}
        <ellipse cx="87" cy="178" rx="10" ry="14" fill="url(#skin)" />
        <ellipse cx="233" cy="178" rx="10" ry="14" fill="url(#skin)" />

        {/* ── ARMS ── */}
        <path d="M60 270 Q30 300 36 350 Q50 360 62 340 L80 280 Z" fill="url(#shirt)" />
        <path d="M260 270 Q290 300 284 350 Q270 360 258 340 L240 280 Z" fill="url(#shirt)" />
        {/* hands */}
        <ellipse cx="44" cy="360" rx="16" ry="14" fill="url(#skin)" />
        <ellipse cx="276" cy="360" rx="16" ry="14" fill="url(#skin)" />

        {/* ── badge / logo on shirt ── */}
        <rect x="140" y="285" width="40" height="22" rx="6" fill="white" opacity="0.18" />
        <text x="160" y="300" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold" fontFamily="sans-serif">
          IPARX
        </text>

        {/* ── shadow under body ── */}
        <ellipse cx="160" cy="418" rx="90" ry="10" fill="#000" opacity="0.25" />
      </svg>
    </motion.div>
  );
}

export default function Signature3DScrollShowcase() {
  const outerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  /* ── Avatar Y: slides in from bottom, exits to top ── */
  const avatarYRaw = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    ["110%", "0%", "0%", "-110%"]
  );
  const avatarY = useSpring(avatarYRaw, { stiffness: 55, damping: 20 });

  /* 3D tilt */
  const avatarRX = useSpring(
    useTransform(scrollYProgress, [0, 1], [18, -18]),
    { stiffness: 50, damping: 16 }
  );
  const avatarRY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-22, 22]),
    { stiffness: 50, damping: 16 }
  );

  /* scale breathe */
  const avatarScale = useSpring(
    useTransform(scrollYProgress, [0.1, 0.45, 0.85], [0.88, 1.05, 0.9]),
    { stiffness: 50, damping: 18 }
  );

  /* ── Text phases ── */
  const t1Op = useTransform(scrollYProgress, [0.10, 0.18, 0.27, 0.34], [0, 1, 1, 0]);
  const t1Y  = useTransform(scrollYProgress, [0.10, 0.18], [50, 0]);

  const t2Op = useTransform(scrollYProgress, [0.38, 0.46, 0.54, 0.62], [0, 1, 1, 0]);
  const t2Y  = useTransform(scrollYProgress, [0.38, 0.46], [50, 0]);

  const t3Op = useTransform(scrollYProgress, [0.65, 0.72, 0.80, 0.87], [0, 1, 1, 0]);
  const t3Y  = useTransform(scrollYProgress, [0.65, 0.72], [50, 0]);

  const phases = [
    { op: t1Op, y: t1Y, tag: "01", heading: "Hello,",    sub: "We are IPARX MEDIA." },
    { op: t2Op, y: t2Y, tag: "02", heading: "We Scale.",  sub: "Brands. Creators. Revenue." },
    { op: t3Op, y: t3Y, tag: "03", heading: "We Build.",  sub: "Systems that grow with you." },
  ];

  return (
    <div ref={outerRef} className="relative w-full bg-black" style={{ height: "400vh" }}>
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

        {/* ── RIGHT: custom SVG avatar ── */}
        <div
          className="relative flex-1 flex items-center justify-center h-1/2 md:h-full"
          style={{ perspective: "1400px" }}
        >
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute w-72 h-96 rounded-full blur-[80px] opacity-35"
            style={{
              background:
                "radial-gradient(ellipse, #6366f1 0%, #22d3ee 55%, transparent 80%)",
            }}
          />

          <Avatar3D
            rotateX={avatarRX}
            rotateY={avatarRY}
            scale={avatarScale}
            y={avatarY}
          />
        </div>

      </div>
    </div>
  );
}


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

