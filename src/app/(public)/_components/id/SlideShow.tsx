"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

interface SlideShowProps {
  images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow relative w-full  mx-auto rounded-3xl overflow-hidden">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[75vh] flex-shrink-0 relative overflow-hidden"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill" // Ensures the image fills the parent div
                objectFit="cover" // Prevents image distortion
                priority // Loads the image ASAP for performance
                className="w-full h-full overflow-hidden select-none"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center absolute bottom-6 right-6 gap-3.5">
        <button
          onClick={prevSlide}
          className="transform -translate-y-1/2 p-3.5 rounded-full backdrop-blur-md bg-white/20 text-white flex justify-center items-center text-sm font-light leading-[120%] transition-colors duration-300 hover:bg-white/30 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2 p-3.5 rounded-full backdrop-blur-md bg-white/20 text-white flex justify-center items-center text-sm font-light leading-[120%] transition-colors duration-300 hover:bg-white/30 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
