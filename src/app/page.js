"use client";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection/HeroSection";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team/Team";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <Features />
      <Services />

      
      <Work />
      <Team />
      <Subscribe />
      
    </div>
  );
}
