

import Hero from "../components/Hero";
import WhatDefinesUs from "../components/WhatDefinesUs";
import PremiumImpactSection from "../components/PremiumImpactSection";
import ImpactSlider from "../components/ImpactSlider";

import Services from "../components/Services";
import YouTubeSliderSection from "../components/YouTubeSliderSection";

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
      <section id="about" className="w-full h-auto min-h-0 md:h-screen md:min-h-[300px] p-0 m-0 flex justify-center items-center animate-fade-in bg-black relative overflow-hidden">
        <video
          src="yourvideo.mp4" // Replace with your video path
          className="relative z-10 w-full h-auto aspect-video object-contain md:absolute md:top-0 md:left-0 md:w-full md:h-full md:object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      </section>

      {/* What Defines Us Section */}
      <section id="what-defines-us" className="animate-fade-in w-full max-w-full -mt-2 md:mt-0">
        <WhatDefinesUs />
      </section>


      {/* Premium Impact Section (moved up) */}
      <section id="impact" className="animate-fade-in w-full max-w-full">
        <PremiumImpactSection />
      </section>


      {/* Services Section (moved up) */}
      <Services />


      {/* YouTube Slider Section */}
      <YouTubeSliderSection />


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
