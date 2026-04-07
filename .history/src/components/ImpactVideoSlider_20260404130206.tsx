import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ImpactVideoSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-16 px-4 md:px-0"
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
    >
      <div className="text-center mb-2">
        <span className="uppercase tracking-widest text-zinc-400 text-lg">Impact</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center leading-tight">
        How We Are Doing It Faster And Better<br />Than Others!
      </h2>
      <div className="relative w-full max-w-4xl mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={showVideo ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 20 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 w-full h-[420px] bg-black flex items-center justify-center"
        >
          <video
            src="/WhatsApp%20Video%202026-04-04%20at%2012.59.40%20PM.mp4"
            className="w-full h-full object-cover"
            autoPlay={showVideo}
            muted
            loop
            playsInline
            controls={false}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
