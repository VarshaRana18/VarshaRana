import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import HeroSection from "@/src/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center flex-1 w-full">
        <HeroSection />
        <Skills />
        <About />
      </div>
    </>
  );
}
