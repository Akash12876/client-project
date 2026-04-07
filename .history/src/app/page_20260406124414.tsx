

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
