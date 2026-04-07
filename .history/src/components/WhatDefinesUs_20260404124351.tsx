import Image from "next/image";

export default function WhatDefinesUs() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-16 bg-black">
      {/* Left: Heading and Content */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full">
        <h2 className="text-6xl md:text-7xl font-extrabold text-purple-300 mb-6 leading-tight">What<br />Defines Us</h2>
        <p className="text-white text-lg md:text-2xl font-semibold mb-8">
          We craft compelling narratives and build strong, impactful partnerships that set new standards in the Indian creator economy.
        </p>
        <button className="bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all text-lg">
          Dive Into Our Culture
        </button>
      </div>
      {/* Right: Speech bubble and image placeholder */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative mt-12 md:mt-0">
        {/* Speech bubble */}
        <div className="bg-purple-500 text-white text-2xl md:text-3xl font-bold rounded-3xl px-8 py-8 mb-8 max-w-lg w-full shadow-lg z-10">
          We are the mapmakers of the content realm, navigating the digital landscape since its wild west days.
        </div>
        {/* Image placeholder (replace src with your image) */}
        <div className="relative w-full max-w-lg h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/your-image.jpg"
            alt="Our Team"
            fill
            className="object-cover rounded-3xl"
            style={{objectFit: "cover"}}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Decorative circle */}
        <div className="absolute right-0 -top-8 w-12 h-12 bg-white rounded-full border-4 border-purple-300 z-0" />
        {/* Decorative dashed line (optional, can be improved with SVG for more accuracy) */}
        <div className="absolute left-1/2 top-1/2 w-0.5 h-16 bg-dashed bg-white opacity-50 z-0" />
      </div>
    </section>
  );
}
