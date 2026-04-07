import Hero from "../components/Hero";
import AutoSlider from "../components/AutoSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Hero />
      <AutoSlider />
      {/* Add more animated sections/components here */}
    </div>
  );
}
