"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full flex justify-center items-center min-h-[70vh] py-20 px-2 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full max-w-5xl bg-[#111] rounded-[3rem] shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-stretch p-10 md:p-20 gap-10 relative border-2 border-zinc-800"
      >
        <div className="flex-1 flex flex-col gap-8 justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white leading-tight">
              Elevate Your Influence with <span className="text-[#a78bfa]">IPrAX!</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 mt-2 mb-8">
              Explore, <span className="text-[#a78bfa]">Collaborate</span>, <span className="text-[#a78bfa]">Innovate</span>, and Achieve
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.08, boxShadow: "0 0 32px #a78bfa88" }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-[#a78bfa] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
            >
              Let's Collaborate
            </motion.a>
          </div>
          <div className="mt-12">
            <div className="font-bold text-lg mb-2">Work with us<br /><span className="font-normal">Be a part of the team</span></div>
            <div className="text-white/90 font-semibold mb-2">
              Metro Station–Saket, 241, Westend Marg, Saidulajab, Butterfly Park, Mittal Garden, Saket, New Delhi, Delhi
            </div>
            <div className="text-white/90 font-semibold">
              110030 1st Floor, Peninsula Park, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400047
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 min-w-[260px] justify-between h-full items-end md:items-start">
          <div>
            <div className="font-bold mb-1">CONTACT US</div>
            <div className="text-white/90 mb-6">Contact@iplix.in</div>
            <div className="font-bold mb-1">FOLLOW US</div>
            <div className="flex gap-4 mt-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -10, backgroundColor: "#a78bfa22" }}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#18181b] border-2 border-[#a78bfa] text-[#a78bfa] text-2xl shadow-md"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#a78bfa22" }}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#18181b] border-2 border-[#a78bfa] text-[#a78bfa] text-2xl shadow-md"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="hidden md:block absolute right-12 bottom-12"
            style={{ width: 120, height: 120 }}
          >
            {/* Replace with your SVG logo */}
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="30" width="80" height="60" rx="24" fill="#fff" />
              <rect x="20" y="30" width="80" height="20" rx="10" fill="#18181b" />
              <circle cx="100" cy="30" r="8" fill="#fff" />
              <rect x="60" y="60" width="30" height="20" rx="8" fill="#18181b" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
