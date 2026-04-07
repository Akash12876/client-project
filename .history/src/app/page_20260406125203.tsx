

import Hero from "../components/Hero";
import WhatDefinesUs from "../components/WhatDefinesUs";
import PremiumImpactSection from "../components/PremiumImpactSection";
import ImpactSlider from "../components/ImpactSlider";
import Services from "../components/Services";
import SelectedProjects from "../components/SelectedProjects";

import BrandHero from "../components/BrandHero";
import ContactSection from "../components/ContactSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans w-full max-w-full overflow-x-hidden">
      {/* Home Section */}
      <section id="home" className="animate-fade-in">
        <Hero />
      </section>





      {/* Video Section (restored) */}
      <section id="about" className="w-full h-screen min-h-[300px] p-0 m-0 flex justify-center items-center animate-fade-in bg-black relative overflow-hidden">
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


      {/* Projects Section - Premium Modern Cards */}
      <SelectedProjects />

      {/* Brand Name Animated Section */}
      <BrandHero />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
