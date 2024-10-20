"use client";

import React, { useState, useEffect } from 'react';

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
    }, 3500); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  return (
    <div className="carousel" style={{ position: 'relative', width: '200px', height: '250px', overflow: 'hidden' }}>
      <div className="carousel-images">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Add fixed size and objectFit
        />
      </div>
    </div>
  );
};

export default CustomCarousel;
