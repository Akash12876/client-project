
import Hero from "../components/Hero";
import WhatDefinesUs from "../components/WhatDefinesUs";
import PremiumImpactSection from "../components/PremiumImpactSection";
import ImpactSlider from "../components/ImpactSlider";
import Services from "../components/Services";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Home Section */}
      <section id="home" className="animate-fade-in">
        <Hero />
      </section>

      {/* About Section */}
      {/* Video Section (replaces About) */}
      <section id="about" className="w-full h-screen min-h-[300px] p-0 m-0 flex justify-center items-center animate-fade-in bg-black">
        <video
          src="your-video.mp4.mp4"
          className="w-full h-full object-cover absolute top-0 left-0 z-10"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          style={{objectFit: "cover"}}
        />
      </section>


      {/* What Defines Us Section */}
      <section id="what-defines-us" className="animate-fade-in">
        <WhatDefinesUs />
      </section>


      {/* Premium Impact Section (moved up) */}
      <section id="impact" className="animate-fade-in">
        <PremiumImpactSection />
      </section>

      {/* Services Section (moved up) */}
      <Services />

      {/* Impact Slider Section */}
      <section id="impact-slider" className="animate-fade-in">
        <ImpactSlider />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl mx-auto py-24 px-6 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-indigo-300">Projects</h2>
        <p className="max-w-2xl text-lg text-zinc-300 text-center mb-8">
          Explore some of our recent work and creative solutions for clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="glass rounded-xl p-8 shadow-lg border border-indigo-400 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">Project One</h3>
            <p>High-impact campaign for a leading brand.</p>
          </div>
          <div className="glass rounded-xl p-8 shadow-lg border border-pink-400 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 text-pink-400">Project Two</h3>
            <p>Innovative website and funnel for a startup.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-3xl mx-auto py-24 px-6 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-indigo-300">Contact</h2>
        <form className="flex flex-col gap-4 w-full max-w-md glass p-8 rounded-xl shadow-lg">
          <input type="text" placeholder="Your Name" className="bg-zinc-900/70 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" placeholder="Your Email" className="bg-zinc-900/70 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea placeholder="Your Message" rows={4} className="bg-zinc-900/70 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button type="submit" className="bg-gradient-to-r from-indigo-500 via-pink-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded transition-colors mt-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">Send Message</button>
        </form>
      </section>
    </div>
  );
}
