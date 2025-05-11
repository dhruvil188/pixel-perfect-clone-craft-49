
import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProductShowcase } from "@/components/landing/ProductShowcase";

const Index: React.FC = () => {
  // In a real application, these would be actual image URLs
  const backgroundImageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/c3a2d694dbc2ee0a7e2936ca1c2cdb3ac1eb5c72?placeholderIfAbsent=true";
  const productShowcaseImageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/6bbdcfe5f88a2048f85919d98d71ba84a0fcc38e?placeholderIfAbsent=true";

  return (
    <main className="bg-white overflow-hidden">
      <div className="flex flex-col relative w-full items-center pt-3 px-20 max-md:max-w-full max-md:px-5">
        {/* Background Image */}
        <img
          src={backgroundImageUrl}
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        
        {/* Content Container */}
        <div className="relative flex w-full max-w-[1008px] flex-col items-stretch max-md:max-w-full">
          {/* Navigation */}
          <Navbar />
          
          {/* Hero Section */}
          <HeroSection />
          
          {/* Product Showcase */}
          <ProductShowcase imageSrc={productShowcaseImageUrl} />
        </div>
      </div>
    </main>
  );
};

export default Index;
