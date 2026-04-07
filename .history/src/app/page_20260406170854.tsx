

import Hero from "../components/Hero";
import WhatDefinesUs from "../components/WhatDefinesUs";
import PremiumImpactSection from "../components/PremiumImpactSection";
import ImpactSlider from "../components/ImpactSlider";

import Services from "../components/Services";
import YouTubeSection from "../components/YouTubeSection";

import BrandComparison from "../components/BrandComparison";
import ReviewsSection from "../components/ReviewsSection";




import BrandHero from "../components/BrandHero";
import ContactSection from "../components/ContactSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans w-full max-w-full overflow-x-hidden">
      {/* Home Section */}
      <section id="home" className="animate-fade-in w-full max-w-full">
        <Hero />
      </section>

      {/* Video Section (scrollable, full width/height for section only) */}
      <section id="about" className="w-full h-screen min-h-[300px] p-0 m-0 flex justify-center items-center animate-fade-in bg-black relative overflow-hidden">
        <video
          src="yourvideo.mp4" // Replace with your video path
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
      <section id="what-defines-us" className="animate-fade-in w-full max-w-full">
        <WhatDefinesUs />
      </section>


      {/* Premium Impact Section (moved up) */}
      <section id="impact" className="animate-fade-in w-full max-w-full">
        <PremiumImpactSection />
      </section>


      {/* Services Section (moved up) */}
      <Services />

      {/* YouTube Section */}
      <YouTubeSection />


      {/* Impact Slider Section */}
      <section id="impact-slider" className="animate-fade-in w-full max-w-full">
        <ImpactSlider />
      </section>

      {/* Brand Comparison Section */}

      <BrandComparison />



      <ReviewsSection />

      {/* Brand Name Animated Section */}
      <BrandHero />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
