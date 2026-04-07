"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reviewsTop = [
  {
    name: "Amit Sharma",
    role: "Digital Marketing Lead",
    rating: 4.9,
    review:
      "iparx media helped us scale our brand presence with innovative strategies and flawless execution. Highly recommended for anyone serious about digital growth!",
  },
  {
    name: "Priya Verma",
    role: "Startup Founder",
    rating: 4.8,
    review:
      "The iparx team is creative, responsive, and truly understands the digital landscape. Our campaigns have never performed better!",
  },
  {
    name: "Rahul Singh",
    role: "E-commerce Manager",
    rating: 4.7,
    review:
      "From content to paid ads, iparx media delivers results. Their reporting and transparency set them apart.",
  },
  {
    name: "Sneha Patel",
    role: "Brand Strategist",
    rating: 4.9,
    review:
      "iparx media’s creative team brought our vision to life. The ROI on our campaigns exceeded expectations!",
  },
  {
    name: "Vikram Joshi",
    role: "Small Business Owner",
    rating: 4.8,
    review:
      "Professional, proactive, and always on time. iparx media is our go-to for all things digital.",
  },
  {
    name: "Megha Kapoor",
    role: "Content Creator",
    rating: 4.7,
    review:
      "The iparx team understands influencer marketing like no one else. My audience and engagement have grown massively!",
  },
  {
    name: "Suresh Nair",
    role: "App Developer",
    rating: 4.8,
    review:
      "iparx media’s strategies helped us launch our app to a wider audience. Great communication and support throughout.",
  },
  {
    name: "Ritika Jain",
    role: "Fashion Entrepreneur",
    rating: 4.9,
    review:
      "Our online sales skyrocketed after partnering with iparx media. Their creative approach is unmatched!",
  },
  // More unique reviews for top row
  {
    name: "Deepak Mehra",
    role: "SEO Specialist",
    rating: 4.8,
    review:
      "iparx media’s SEO strategies brought us to the first page of Google. Our traffic and leads have doubled!",
  },
  {
    name: "Anjali Rao",
    role: "Brand Consultant",
    rating: 4.7,
    review:
      "The creative team at iparx media is a powerhouse. Our brand identity is now stronger than ever!",
  },
  {
    name: "Manish Gupta",
    role: "Retail Chain Owner",
    rating: 4.8,
    review:
      "iparx media’s campaigns brought us new customers every week. Highly recommended for retail businesses!",
  },
  {
    name: "Shalini Desai",
    role: "Content Strategist",
    rating: 4.9,
    review:
      "From blogs to social media, iparx media’s content always delivers value and engagement.",
  },
];

const reviewsBottom = [
  {
    name: "Karan Malhotra",
    role: "UI/UX Designer",
    rating: 4.8,
    review:
      "iparx media’s design team is world-class. Our website looks stunning and converts better than ever!",
  },
  {
    name: "Neha Sood",
    role: "Social Media Manager",
    rating: 4.7,
    review:
      "iparx media’s social campaigns grew our followers and engagement by 300%. Amazing results!",
  },
  {
    name: "Ravi Kumar",
    role: "Startup Founder",
    rating: 4.9,
    review:
      "The iparx team is innovative, reliable, and always delivers on time. Our launch was a huge success!",
  },
  {
    name: "Pooja Shah",
    role: "Marketing Analyst",
    rating: 4.8,
    review:
      "iparx media’s analytics and reporting helped us optimize every campaign for maximum ROI.",
  },
  {
    name: "Arjun Patel",
    role: "E-commerce Director",
    rating: 4.7,
    review:
      "iparx media’s paid ads strategy brought us record-breaking sales months in a row!",
  },
  {
    name: "Simran Kaur",
    role: "Influencer",
    rating: 4.9,
    review:
      "iparx media helped me grow my audience and land brand deals. Super creative and supportive team!",
  },
  {
    name: "Harshita Singh",
    role: "Business Coach",
    rating: 4.8,
    review:
      "iparx media’s workshops and webinars are packed with actionable insights. My clients love them!",
  },
  {
    name: "Devansh Joshi",
    role: "Tech Blogger",
    rating: 4.7,
    review:
      "iparx media’s PR and outreach got my blog featured on top sites. Great for digital creators!",
  },
  // More unique reviews for bottom row
  {
    name: "Tanvi Agarwal",
    role: "Brand Owner",
    rating: 4.8,
    review:
      "iparx media’s branding and design work is simply stunning. Our new look is getting rave reviews!",
  },
  {
    name: "Siddharth Jain",
    role: "Ad Campaign Manager",
    rating: 4.9,
    review:
      "Our ad spend is finally delivering real results thanks to iparx media’s expertise.",
  },
  {
    name: "Meera Nair",
    role: "Content Creator",
    rating: 4.8,
    review:
      "iparx media’s video team made my content go viral. The editing and ideas are next-level!",
  },
  {
    name: "Yash Mehta",
    role: "Startup CTO",
    rating: 4.7,
    review:
      "iparx media’s launch strategy helped us get thousands of users in our first month!",
  },
];

function getStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <svg key={i} width="18" height="18" fill="#FFD700" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36"/></svg>
      );
    } else if (rating > i - 1) {
      stars.push(
        <svg key={i} width="18" height="18" fill="#FFD700" viewBox="0 0 20 20"><defs><linearGradient id={`half${i}`}><stop offset="50%" stopColor="#FFD700"/><stop offset="50%" stopColor="#222"/></linearGradient></defs><polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" fill={`url(#half${i})`}/></svg>
      );
    } else {
      stars.push(
        <svg key={i} width="18" height="18" fill="#222" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36"/></svg>
      );
    }
  }
  return stars;
}

import { useRef } from "react";

export default function ReviewsSection() {
  // Animation settings
  const CARD_WIDTH = 380;
  const DURATION = 28; // slower
  const reviewListTop = [...reviewsTop, ...reviewsTop];
  const reviewListBottom = [...reviewsBottom, ...reviewsBottom];

  // Pause on hover logic
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Helper to pause/resume animation
  function setPaused(paused: boolean, row: "top" | "bottom") {
    const el = row === "top" ? topRowRef.current : bottomRowRef.current;
    if (el) {
      el.style.animationPlayState = paused ? "paused" : "running";
    }
  }

  return (
    <section className="relative w-full py-28 px-4 md:px-0 bg-black flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 tracking-widest text-pink-300 uppercase">
        HEAR FROM OUR CLIENTS
      </h2>
      <p className="text-xl md:text-2xl font-semibold text-center mb-8 text-white/80">
        Real feedback from brands and creators who trust iparx media to grow their business.
      </p>
      <div className="w-full max-w-6xl flex flex-col gap-16 mt-12 items-center justify-center">
        {/* Top Row: left to right infinite scroll, no side space */}
        <div className="relative w-full flex items-center justify-start overflow-hidden min-h-[220px]">
          <div
            ref={topRowRef}
            style={{
              display: "flex",
              gap: "2rem",
              minWidth: "100vw",
              width: `${CARD_WIDTH * reviewListTop.length}px`,
              animation: `scrollLeft ${DURATION}s linear infinite`,
              animationPlayState: "running"
            }}
          >
            {reviewListTop.map((review, idx) => (
              <div
                key={review.name + idx + "top"}
                className="min-w-[340px] max-w-[380px] bg-[#181824] rounded-2xl shadow-2xl border border-white/10 p-7 flex flex-col items-start justify-between hover:z-10"
                onMouseEnter={() => setPaused(true, "top")}
                onMouseLeave={() => setPaused(false, "top")}
              >
                <div className="flex flex-col gap-1 mb-2">
                  <div className="font-semibold text-white text-base leading-tight">{review.name}</div>
                  <div className="text-zinc-400 text-xs leading-tight">{review.role}</div>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 font-bold mr-2">{review.rating}</span>
                  <span className="flex items-center">{getStars(review.rating)}</span>
                </div>
                <div className="text-white/80 text-base mt-2">{review.review}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Row: right to left infinite scroll, no side space, seamless loop */}
        <div className="relative w-full flex items-center justify-start overflow-hidden min-h-[220px]">
          <div
            ref={bottomRowRef}
            style={{
              display: "flex",
              gap: "2rem",
              minWidth: "100vw",
              width: `${CARD_WIDTH * reviewListBottom.length * 2}px`,
              animation: `scrollRight ${DURATION * 2}s linear infinite`,
              animationPlayState: "running"
            }}
          >
            {[...reviewListBottom, ...reviewListBottom].map((review, idx) => (
              <div
                key={review.name + idx + "bottom"}
                className="min-w-[340px] max-w-[380px] bg-[#181824] rounded-2xl shadow-2xl border border-white/10 p-7 flex flex-col items-start justify-between hover:z-10"
                onMouseEnter={() => setPaused(true, "bottom")}
                onMouseLeave={() => setPaused(false, "bottom")}
              >
                <div className="flex flex-col gap-1 mb-2">
                  <div className="font-semibold text-white text-base leading-tight">{review.name}</div>
                  <div className="text-zinc-400 text-xs leading-tight">{review.role}</div>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 font-bold mr-2">{review.rating}</span>
                  <span className="flex items-center">{getStars(review.rating)}</span>
                </div>
                <div className="text-white/80 text-base mt-2">{review.review}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Keyframes for infinite scroll */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${CARD_WIDTH * reviewsTop.length}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(${CARD_WIDTH * reviewsBottom.length * 2}px); }
        }
      `}</style>
    </section>
  );
}
