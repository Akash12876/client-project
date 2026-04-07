"use client";


// Top row reviews (right-to-left, unique)
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
];

// Bottom row reviews (left-to-right, unique)
const reviewsBottom = [
  {
    name: "Arjun Malhotra",
    role: "Tech Entrepreneur",
    rating: 4.8,
    review:
      "iparx media’s digital expertise helped us launch our SaaS product with a bang. The team is always available and proactive!",
  },
  {
    name: "Neha Sood",
    role: "Marketing Manager",
    rating: 4.7,
    review:
      "We saw a 3x increase in leads after working with iparx media. Their creative approach is top-notch!",
  },
  {
    name: "Karan Bedi",
    role: "D2C Brand Owner",
    rating: 4.9,
    review:
      "iparx media’s paid ads and content strategy gave us a real edge in a crowded market. Highly recommended!",
  },
  {
    name: "Simran Kaur",
    role: "Influencer",
    rating: 4.8,
    review:
      "The iparx team helped me grow my audience and monetize my content. They truly understand influencer marketing!",
  },
  {
    name: "Rohit Shetty",
    role: "Restaurant Owner",
    rating: 4.7,
    review:
      "iparx media’s campaigns brought us more footfall and online orders. Great ROI and creative ideas!",
  },
  {
    name: "Pooja Deshmukh",
    role: "Fitness Coach",
    rating: 4.9,
    review:
      "iparx media’s social media strategy helped me build a loyal client base. Their team is super responsive!",
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
    <section className="relative w-full py-28 bg-black flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 tracking-widest text-pink-300 uppercase">
        HEAR FROM OUR CLIENTS
      </h2>
      <p className="text-xl md:text-2xl font-semibold text-center mb-8 text-white/80">
        Real feedback from brands and creators who trust iparx media to grow their business.
      </p>
      <div className="w-full flex flex-col gap-16 mt-12 items-center justify-center">
        {/* Top Row: right-to-left infinite scroll, unique reviews */}
        <div className="relative w-full flex items-center justify-between overflow-hidden min-h-[220px]">
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
            onMouseEnter={() => setPaused(true, "top")}
            onMouseLeave={() => setPaused(false, "top")}
          >
            {reviewListTop.map((review, idx) => (
              <div
                key={review.name + idx + "top"}
                className="w-full min-w-[320px] bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-7 flex flex-col items-start justify-between hover:z-10 border-none"
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
        {/* Bottom Row: left-to-right infinite scroll, unique reviews */}
        <div className="relative w-full flex items-center justify-between overflow-hidden min-h-[220px]">
          <div
            ref={bottomRowRef}
            style={{
              display: "flex",
              gap: "2rem",
              minWidth: "100vw",
              width: `${CARD_WIDTH * reviewListBottom.length}px`,
              animation: `scrollRight ${DURATION}s linear infinite`,
              animationPlayState: "running"
            }}
            onMouseEnter={() => setPaused(true, "bottom")}
            onMouseLeave={() => setPaused(false, "bottom")}
          >
            {reviewListBottom.map((review, idx) => (
              <div
                key={review.name + idx + "bottom"}
                className="w-full min-w-[320px] bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-7 flex flex-col items-start justify-between hover:z-10 border-none"
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
          100% { transform: translateX(-${CARD_WIDTH * reviewListTop.length}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${CARD_WIDTH * reviewListBottom.length}px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
