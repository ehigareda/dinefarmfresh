"use client";

import { NavLink } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export default function Home() {
  const tempImages = [
    "images/TempImg1.jpg",
    "images/TempImg2.jpg",
    "images/TempImg3.jpg",
    "images/TempImg4.jpg",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-start py-8">
      <div className="bg-opacity-50 rounded-lg text-center mb-8">
        <h1 className="text-4xl md:text-6xl text-black font-bold mb-4">
          The Farm
        </h1>
        <Button
          asChild
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          <NavLink to="/menu">See Menu</NavLink>
        </Button>
      </div>
      
      {/* Width-limited carousel */}
      {/* <div className="w-full max-w-3xl mx-auto px-4"> */}
      {/* Width takes up screen carousel */}
      <div className="w-full mx-auto">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 6000 })]}
          className="overflow-hidden"
        >
          <CarouselContent>
            {tempImages.map((src, index) => (
              <CarouselItem key={index} className="h-64 md:h-96">
                <img 
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="py-2" />
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="mt-8 w-full max-w-3xl mx-auto px-4">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Website under construction
        </h2>
        </div>
      </div>
      <div className="mt-8 w-full max-w-3xl mx-auto px-4">
        <h2 className="text-2xl text-black font-semibold mb-4">
          About Our Restaurant
        </h2>
        <p className="text-gray-700">
        Welcome to The Farm, a family-owned café where fresh ingredients and a warm, inviting atmosphere come together. We’re passionate about serving delicious, handcrafted pizzas and unique custom drinks made with care. Whether you’re here for a quiet morning coffee, a relaxed lunch, or a cozy dinner, The Farm offers a space to unwind and enjoy the taste of fresh, quality food. Rooted in family values and community spirit, our goal is to make every visit feel like home.        </p>
      </div>
    </section>
  );
}