import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Home Section */}
      <section id="home" className="animate-fade-in">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl mx-auto py-24 px-6 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-indigo-300">About</h2>
        <p className="max-w-2xl text-lg text-zinc-300 text-center bg-zinc-900/60 rounded-xl p-6 shadow-lg">
          I am Paras Sharma, founder of iparx media. We create immersive digital experiences with a focus on performance, creativity, and innovation. Our team blends strategy, design, and technology to deliver impactful results.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-5xl mx-auto py-24 px-6 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-indigo-300">Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <li className="glass rounded-xl p-8 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">Performance Marketing</h3>
            <p>Maximize ROI with data-driven campaigns and real-time optimization.</p>
          </li>
          <li className="glass rounded-xl p-8 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-pink-400">Social Media Marketing</h3>
            <p>Grow your brand and engage audiences across all major platforms.</p>
          </li>
          <li className="glass rounded-xl p-8 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Creative Strategy & Content Production</h3>
            <p>Stand out with original content, storytelling, and creative campaigns.</p>
          </li>
          <li className="glass rounded-xl p-8 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-green-400">Website & Funnel Development</h3>
            <p>Design and develop high-converting websites and sales funnels.</p>
          </li>
        </ul>
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
