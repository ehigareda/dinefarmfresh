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
    "images/home-image-1-min.jpg",
    "images/home-image-4-min.jpg",
    "images/home-image-6-min.jpg",
    "images/home-image-7-min.jpg",
  ];

  return (
    <>
      <section className="font-secondary flex flex-col items-center justify-start">
        <div className="w-full mx-auto">
          <img 
            className="w-full h-72 md:h-144 object-cover" 
            src="images/IMG_0884-2-min.jpg" 
            alt="The Farm Building Photo"
          />
        </div>
      </section>
      {/* <div className="w-full mx-auto">
      <img className="w-full h-72 md:h-108 object-cover" src="images/IMG_0884-2-min.jpg" alt="The Farm Building Photo"></img>

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
      </div> */}
    
    <section className="w-full bg-resedagreen text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-primary font-bold mb-4">
              Tucked Away in Palo Alto...
            </h2>
            <p className="text-lg leading-relaxed font-secondary">
              Discover a cozy corner in the heart of the city, where family and freshness are at the heart of everything we serve. Whether you're stopping by for a morning coffee or unwinding over a handcrafted pizza, The Farm brings a touch of home to every bite.
            </p>
          </div>
      
          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="images/IMG_0792-min.jpg"
              alt="The Farm café exterior"
              className="w-full h-auto max-h-132 md:max-h-188 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="images/IMG_0786-min.jpg"
              alt="Kitchen with coffee beans"
              className="w-full h-auto max-h-108 md:max-h-192 rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-primary font-bold mb-4">
              Farm to Filter
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-secondary">
              We proudly brew ALTImpact Coffee, a Bay Area-based roaster committed not only to high quality beans, but to a mission. All of our coffee is organic, ethically sourced, and deeply rooted in community impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}