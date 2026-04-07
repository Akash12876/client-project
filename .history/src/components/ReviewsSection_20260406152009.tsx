"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const reviews = [
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

export default function ReviewsSection() {
  // Animation controls for each card
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  useEffect(() => {
    let topIndex = 0;
    let bottomIndex = 0;
    const topCards = document.querySelectorAll('.review-card-top');
    const bottomCards = document.querySelectorAll('.review-card-bottom');
    function animateTop() {
      topCards.forEach((card, i) => {
        (card as HTMLElement).style.opacity = i === topIndex ? '1' : '0';
        (card as HTMLElement).style.transform = i === topIndex ? 'scale(1.05)' : 'scale(0.95)';
      });
      topIndex = (topIndex + 1) % reviews.length;
    }
    function animateBottom() {
      bottomCards.forEach((card, i) => {
        (card as HTMLElement).style.opacity = i === bottomIndex ? '1' : '0';
        (card as HTMLElement).style.transform = i === bottomIndex ? 'scale(1.05)' : 'scale(0.95)';
      });
      bottomIndex = (bottomIndex + 1) % reviews.length;
    }
    animateTop();
    animateBottom();
    const topInterval = setInterval(animateTop, 2500);
    const bottomInterval = setInterval(animateBottom, 2500);
    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, []);

  return (
    <section className="relative w-full py-28 px-4 md:px-0 bg-black flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 tracking-widest text-pink-300 uppercase">
        HEAR FROM OUR CLIENTS
      </h2>
      <p className="text-xl md:text-2xl font-semibold text-center mb-8 text-white/80">
        Real feedback from brands and creators who trust iparx media to grow their business.
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-16 mt-12 items-center justify-center">
        {/* Top Row: single card, auto-loop, centered */}
        <div className="flex flex-row items-center justify-center min-h-[220px]">
          {reviews.map((review, idx) => (
            <div
              key={review.name + idx + "top"}
              className="review-card-top transition-all duration-700 absolute min-w-[340px] bg-[#181824] rounded-2xl shadow-2xl border border-white/10 p-7 flex flex-col items-start justify-between"
              style={{ opacity: 0, zIndex: 2 }}
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
        {/* Bottom Row: single card, auto-loop, centered */}
        <div className="flex flex-row items-center justify-center min-h-[220px]">
          {reviews.map((review, idx) => (
            <div
              key={review.name + idx + "bottom"}
              className="review-card-bottom transition-all duration-700 absolute min-w-[340px] bg-[#181824] rounded-2xl shadow-2xl border border-white/10 p-7 flex flex-col items-start justify-between"
              style={{ opacity: 0, zIndex: 2 }}
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
    </section>
  );
}
