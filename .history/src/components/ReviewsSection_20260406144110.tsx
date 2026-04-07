"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "pradum_k",
    role: "MERN Stack Developer",
    rating: 4.8,
    avatar: "/avatars/avatar1.png",
    review:
      "Sheriyans Coding School Is An Amazing Place To Learn Coding! The Mentors Are Highly Skilled, Explain Every Concept In A Simple Way.",
  },
  {
    name: "Honey Atalkar",
    role: "Software Engineering Student",
    rating: 4.2,
    avatar: "/avatars/avatar2.png",
    review:
      "Sheriyans Coding School – Best Place To Learn Coding Offline! The Teachers Explain Every Topic Step By Step.",
  },
  {
    name: "Parth gup Ta",
    role: "Frontend Developer",
    rating: 4.7,
    avatar: "/avatars/avatar3.png",
    review:
      "Learning At Sheriyans Coding School Was An Amazing Experience! The Mentors Explained Everything Clearly.",
  },
  {
    name: "Fahad Husain",
    role: "Systems Engineer",
    rating: 4.4,
    avatar: "/avatars/avatar4.png",
    review:
      "Best Coding Coaching Class In Bhopal. The Teachers Are Very Supportive And Knowledgeable.",
  },
  {
    name: "Akash Warade",
    role: "MERN Stack Student",
    rating: 4.9,
    avatar: "/avatars/avatar5.png",
    review:
      "I Am A Student Of MERN-15 Batch And I Am Giving This Review After Completing The Course. It Was Worth It!",
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
  return (
    <section className="relative w-full py-28 px-4 md:px-0 bg-black flex flex-col items-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        We Help Learners Become Industry-Ready Developers.
      </motion.h2>
      <motion.div
        className="w-full max-w-6xl flex flex-col gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top Row: left to right */}
        <motion.div
          className="flex flex-row gap-8 overflow-x-auto pb-2"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          {reviews.slice(0, 3).map((review) => (
            <motion.div
              key={review.name}
              className="min-w-[340px] bg-[#181824] rounded-2xl shadow-2xl border border-white/10 p-7 flex flex-col items-start justify-between"
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 8px 32px 0 #a78bfa99" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                  {review.avatar ? (
                    <Image src={review.avatar} alt={review.name} width={48} height={48} />
                  ) : (
                    <span className="text-xl font-bold text-white">{review.name[0]}</span>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-white text-base leading-tight">{review.name}</div>
                  <div className="text-zinc-400 text-xs leading-tight">{review.role}</div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 font-bold mr-2">{review.rating}</span>
                <span className="flex items-center">{getStars(review.rating)}</span>
              </div>
              <div className="text-white/80 text-base mt-2">{review.review}</div>
            </motion.div>
          ))}
        </motion.div>
        {/* Bottom Row: right to left */}
        <motion.div
          className="flex flex-row gap-8 overflow-x-auto pb-2"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          {reviews.slice(3).map((review) => (
            <motion.div
              key={review.name}
              className="min-w-[340px] bg-[#181824] rounded-2xl shadow-2xl border border-white/10 p-7 flex flex-col items-start justify-between"
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 8px 32px 0 #a78bfa99" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                  {review.avatar ? (
                    <Image src={review.avatar} alt={review.name} width={48} height={48} />
                  ) : (
                    <span className="text-xl font-bold text-white">{review.name[0]}</span>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-white text-base leading-tight">{review.name}</div>
                  <div className="text-zinc-400 text-xs leading-tight">{review.role}</div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 font-bold mr-2">{review.rating}</span>
                <span className="flex items-center">{getStars(review.rating)}</span>
              </div>
              <div className="text-white/80 text-base mt-2">{review.review}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
