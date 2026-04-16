"use client";

import { useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  type Variants,
} from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    desc:
      "Scale your business with data-driven ad campaigns designed to generate consistent, profitable returns not just clicks.",
    accent: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.18)",
    short: "Paid growth systems",
  },
  {
    title: "Social Media Marketing",
    desc:
      "Build a powerful online presence with strategies that grow your audience, boost engagement, and turn followers into customers.",
    accent: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.18)",
    short: "Audience compounding",
  },
  {
    title: "Creative Strategy & Content Production",
    desc:
      "We craft scroll-stopping content backed by strategy designed to capture attention and drive real conversions.",
    accent: "#34d399",
    glow: "rgba(52, 211, 153, 0.16)",
    short: "Creative that converts",
  },
  {
    title: "Video Editing & Graphic Design",
    desc:
      "High-quality video editing, YouTube thumbnails & creative designs that increase clicks, engagement, and retention.",
    accent: "#f472b6",
    glow: "rgba(244, 114, 182, 0.18)",
    short: "Retention-first visuals",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 52, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
  },
};

function GridBg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="services-grid" width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M 72 0 L 0 0 0 72" fill="none" stroke="white" strokeWidth="0.45" strokeOpacity="0.03" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#services-grid)" />
    </svg>
  );
}

function ServiceCard({
  service,
  idx,
  activeIdx,
  setActiveIdx,
  onOpen,
}: {
  service: (typeof services)[number];
  idx: number;
  activeIdx: number | null;
  setActiveIdx: (value: number | null) => void;
  onOpen: (index: number) => void;
}) {
  const numeral = ["I", "II", "III", "IV"][idx];
  const isActive = activeIdx === idx;

  return (
    <m.article
      variants={cardVariants}
      onHoverStart={() => setActiveIdx(idx)}
      onHoverEnd={() => setActiveIdx(null)}
      className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border p-7 md:p-8"
      style={{
        borderColor: `${service.accent}${isActive ? "4f" : "20"}`,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(5,5,8,0.92) 48%, rgba(2,2,4,0.98) 100%)",
        boxShadow: isActive
          ? `0 24px 80px ${service.glow}, inset 0 1px 0 rgba(255,255,255,0.09)`
          : "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      whileHover={{ y: -8, scale: 1.018 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      <m.div
        className="absolute -top-16 right-[-2.5rem] h-40 w-40 rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: isActive ? 0.55 : 0.15, scale: isActive ? 1.08 : 0.9 }}
        transition={{ duration: 0.35 }}
        style={{ background: service.glow }}
      />

      <m.div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
        animate={{ opacity: isActive ? 1 : 0.45, scaleX: isActive ? 1 : 0.74 }}
        transition={{ duration: 0.25 }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: service.accent, boxShadow: `0 0 10px ${service.accent}` }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: service.accent }}>
                {service.short}
              </span>
            </div>
            <h3 className="max-w-[15rem] text-xl font-bold leading-snug text-white md:text-2xl">{service.title}</h3>
          </div>

          <div className="text-5xl font-black leading-none text-white/8 md:text-6xl">{numeral}</div>
        </div>

        <p className="max-w-[18rem] text-sm leading-7 text-zinc-400 md:text-[15px]">{service.desc}</p>

        <div className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-zinc-600">
          <span>Strategy</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Execution</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Scale</span>
        </div>

        <div className="mt-auto pt-10">
          <m.button
            type="button"
            className="group/button relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border px-6 py-3.5 text-sm font-bold text-white sm:w-auto sm:min-w-[11.5rem]"
            style={{ borderColor: `${service.accent}55`, background: "rgba(255,255,255,0.03)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpen(idx)}
          >
            <m.span
              className="absolute inset-0"
              style={{ background: `linear-gradient(90deg, transparent, ${service.accent}20, transparent)` }}
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 1.25, repeat: Infinity, ease: "linear", delay: idx * 0.1 }}
            />

            <span
              className="absolute inset-x-[2px] bottom-[2px] top-[38%] rounded-full opacity-0 blur-xl transition-all duration-500 group-hover/button:opacity-100"
              style={{ background: `radial-gradient(circle at 50% 100%, ${service.accent}88 0%, ${service.accent}18 55%, transparent 100%)` }}
            />

            <span
              className="absolute inset-[2px] translate-y-[78%] rounded-full transition-transform duration-500 ease-out group-hover/button:translate-y-0"
              style={{ background: `linear-gradient(180deg, ${service.accent}18 0%, ${service.accent}92 100%)` }}
            />

            <span
              className="absolute inset-x-3 bottom-1 h-px opacity-0 transition-all duration-500 group-hover/button:bottom-[calc(100%-14px)] group-hover/button:opacity-100"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
            />

            <span className="relative z-10 flex min-h-[22px] items-center justify-center overflow-hidden">
              <span className="transition-all duration-300 group-hover/button:-translate-y-8 group-hover/button:opacity-0">
                Know More
              </span>
              <span className="absolute translate-y-8 opacity-0 transition-all duration-300 group-hover/button:translate-y-0 group-hover/button:opacity-100">
                Connect Now
              </span>
            </span>
          </m.button>
        </div>
      </div>
    </m.article>
  );
}

export default function Services() {
  const [openModalIdx, setOpenModalIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <section id="services" className="relative w-full overflow-hidden bg-black px-4 py-28 md:px-16">
        <GridBg />

        <m.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(167,139,250,0.08) 90deg, transparent 165deg, rgba(96,165,250,0.08) 255deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <m.div
          className="absolute inset-y-0 -left-1/2 w-1/2 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.12), transparent)" }}
          animate={{ x: ["0%", "300%"] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <m.div
            className="absolute left-[12%] top-20 h-[340px] w-[340px] rounded-full blur-[130px]"
            animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.08, 1] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "#a78bfa" }}
          />
          <m.div
            className="absolute bottom-0 right-[10%] h-[320px] w-[320px] rounded-full blur-[120px]"
            animate={{ opacity: [0.02, 0.07, 0.02], scale: [1, 1.06, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            style={{ background: "#60a5fa" }}
          />
        </div>

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <m.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a78bfa2e] bg-[#a78bfa0a] px-4 py-1.5">
              <m.span
                className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#a78bfa]">What We Do</span>
            </div>

            <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Services That{" "}
              <span
                style={{
                  background: "linear-gradient(100deg, #a78bfa 0%, #60a5fa 55%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Scale
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              Same core offerings, now presented with a sharper UX, faster motion, and a more premium visual system that matches the surrounding sections.
            </p>
          </m.div>

          <m.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {services.map((service, idx) => (
              <ServiceCard
                key={service.title}
                service={service}
                idx={idx}
                activeIdx={activeIdx}
                setActiveIdx={setActiveIdx}
                onOpen={setOpenModalIdx}
              />
            ))}
          </m.div>
        </div>

        <AnimatePresence>
          {openModalIdx !== null && (
            <m.div
              key="services-modal"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <m.div
                initial={{ y: 36, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 28, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d] p-8 shadow-2xl"
              >
                <m.div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${services[openModalIdx].accent}, transparent)` }}
                  animate={{ x: ["-40%", "40%"] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                />

                <button
                  className="absolute right-5 top-4 text-2xl font-bold text-white/70 transition hover:text-white"
                  onClick={() => setOpenModalIdx(null)}
                >
                  &times;
                </button>

                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: services[openModalIdx].accent, boxShadow: `0 0 10px ${services[openModalIdx].accent}` }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">Service Inquiry</span>
                </div>

                <h3 className="mb-3 max-w-[22rem] text-2xl font-bold text-white md:text-3xl">
                  {services[openModalIdx].title}
                </h3>
                <p className="mb-7 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
                  {services[openModalIdx].desc}
                </p>

                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
                    required
                  />
                  <textarea
                    placeholder={`Why are you interested in ${services[openModalIdx].title}?`}
                    rows={4}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
                    required
                  />
                  <m.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white"
                    style={{ background: `linear-gradient(90deg, ${services[openModalIdx].accent}, rgba(255,255,255,0.14))` }}
                  >
                    Send
                  </m.button>
                </form>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
}
