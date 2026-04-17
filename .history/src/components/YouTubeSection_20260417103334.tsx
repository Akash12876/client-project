"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
  };
}

interface YouTubeSearchResponse {
  items?: YouTubeVideo[];
  error?: string;
}

export default function YouTubeSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data: YouTubeSearchResponse = await res.json();

        if (!res.ok) {
          throw new Error(data.error || `YouTube feed error: ${res.status}`);
        }

        const videoItems = (data.items || []).filter((item: YouTubeVideo) => Boolean(item.id?.videoId));
        setVideos(videoItems);
        setError(null);
      } catch (requestError) {
        const message = requestError instanceof Error ? requestError.message : "Failed to load YouTube videos.";
        setError(message);
      }
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">All Videos & Shorts from ParasDecodes</h2>
      </div>
      {error ? (
        <div className="text-center text-red-400 text-lg font-semibold py-8">{error}</div>
      ) : videos.length === 0 ? (
        <div className="text-center text-zinc-400 text-lg font-semibold py-8">Loading videos...</div>
      ) : (
        <div className="flex flex-nowrap overflow-x-auto gap-8 justify-center items-center px-4">
          {videos.map((video, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.a
                key={video.id.videoId}
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-zinc-900 rounded-xl shadow-lg w-80 p-4 cursor-pointer transition-transform duration-300 no-underline ${
                  isActive ? "scale-105 z-20" : "scale-95 z-10 blur-sm opacity-60"
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
      )}
    </section>
  );
}
