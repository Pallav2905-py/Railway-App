"use client";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection/HeroSection";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team/Team";
import Work from "@/components/Work";
import ComplaintForm from "./complaint/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <Features />
      <Services />
      <ComplaintForm />

      
      <Work />
      <Team />
      <Subscribe />
      
    </div>
  );
}
