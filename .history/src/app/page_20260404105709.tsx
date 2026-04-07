import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const AutoSlider = dynamic(() => import("../components/AutoSlider"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Hero />
      <AutoSlider />
      {/* Add more animated sections/components here */}
    </div>
  );
}
