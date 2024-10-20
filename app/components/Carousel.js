"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CustomCarousel = () => {
  const images = [
    { src: '/icons/jima.jpg', alt: 'Jima' },
    { src: '/icons/toto.jpg', alt: 'Toto' },
    { src: '/icons/waterfall.jpg', alt: 'Manoa Falls' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3500);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel" style={{ position: 'relative', width: '500px', height: '300px', overflow: 'hidden' }}>
      <div className="carousel-images" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"  // Ensures the image covers the whole container
        />
        <button className="carousel-button prev" onClick={goToPrevious}>
            &#10094;
        </button>
        <button className="carousel-button next" onClick={goToNext}>
            &#10095;
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;


