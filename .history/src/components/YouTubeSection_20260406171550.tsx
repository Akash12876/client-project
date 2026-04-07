"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual YouTube video IDs
const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Build a Portfolio Website from Scratch',
    views: '82k Views',
    likes: '3.4k Likes',
  },
  {
    id: 'eBGIQ7ZuuiU',
    title: 'How to Get Placed in Tech in 2025 (No Luck, Just Skills)',
    views: '43k Views',
    likes: '2.8k Likes',
  },
  {
    id: '9bZkp7q19f0',
    title: 'Complete Web Developer Roadmap 2025',
    views: '128k Views',
    likes: '6.2k Likes',
  },
];

export default function YouTubeSection() {
  return (
    <section className="bg-black py-16">
      <div className="text-center mb-12">
        <span className="text-orange-400 uppercase tracking-widest text-sm">YouTube</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">200+ Free Coding Tutorials On<br />Sheryians</h2>
      </div>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {videos.map((video, idx) => (
          <motion.a
            key={idx}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 rounded-xl shadow-lg w-80 p-4 cursor-pointer hover:scale-105 transition-transform duration-300 no-underline"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg overflow-hidden mb-4 h-44 bg-zinc-800 flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="text-white text-lg font-semibold mb-2">{video.title}</div>
            <div className="text-zinc-400 text-sm flex gap-4">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.likes}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
