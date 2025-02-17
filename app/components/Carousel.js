"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/icons/jima.jpg', alt: 'Jima' },
  { src: '/icons/toto.jpg', alt: 'Toto' },
  { src: '/icons/waterfall.jpg', alt: 'Manoa Falls' },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(goToNext, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[500px] h-[300px] overflow-hidden rounded-xl shadow-lg">
      <div
        className="w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={goToNext}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} hover:bg-gray-200`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
