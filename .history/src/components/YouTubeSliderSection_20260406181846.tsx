"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// You must add your API key in .env.local as NEXT_PUBLIC_YOUTUBE_API_KEY=your_key_here
const CHANNEL_ID = "UCYgu3qmmhgovLZtoT1tx00g";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyACYZF1GIaEMsDZiU2i6xO1mtreyMto2ns";

export default function YouTubeSliderSection() {
  const [videos, setVideos] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
      );
      const data = await res.json();
      const videoItems = (data.items || []).filter(
        (item) => item.id.videoId
      );
      setVideos(videoItems);
    }
    fetchVideos();
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (videos.length === 0) return;
    const interval = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % videos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [videos]);

  return (
    <section className="bg-black py-16">
      <div className="text-center mb-12">
        <span className="text-orange-400 uppercase tracking-widest text-sm">YouTube</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          All Videos & Shorts from ParasDecodes
        </h2>
      </div>
      <div
        className="flex flex-nowrap gap-8 justify-center items-center px-4"
        style={{ overflow: "hidden" }}
        onMouseLeave={() => setActiveIdx(-1)}
      >
        {videos.map((video, idx) => {
          const isHovered = activeIdx === idx;
          const isAnyHovered = activeIdx !== -1;
          return (
            <motion.a
              key={video.id.videoId}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-zinc-900 rounded-xl shadow-lg w-80 p-4 cursor-pointer transition-transform duration-300 no-underline ${
                isHovered
                  ? "scale-105 z-20"
                  : isAnyHovered
                  ? "blur-sm opacity-60 scale-95 z-10"
                  : "scale-100 z-10"
              }`}
              whileHover={{ scale: 1.08 }}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="rounded-lg overflow-hidden mb-4 h-44 bg-zinc-800 flex items-center justify-center">
                <img
                  src={`https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`}
                  alt={video.snippet.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="text-white text-lg font-semibold mb-2 truncate">
                {video.snippet.title}
              </div>
              <div className="text-zinc-400 text-sm flex gap-4">
                <span>{video.snippet.channelTitle}</span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
