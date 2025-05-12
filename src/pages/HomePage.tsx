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
    <section className="min-h-screen bg-columbiablue flex flex-col items-center justify-start py-8">
      <div className="bg-opacity-50 rounded-lg text-center mb-8">
        <h1 className="text-4xl md:text-6xl text-lapislazuli font-bold mb-4">
          Dine Farm Fresh
        </h1>
        <Button
          asChild
          className="bg-lapislazuli text-white px-6 py-3 rounded-full font-semibold hover:bg-lapislazuli transition"
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
      </div>
      <div className="mt-8 w-full max-w-3xl mx-auto px-4">
        <h2 className="text-2xl text-lapislazuli font-semibold mb-4">
          About Our Restaurant
        </h2>
        <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}