"use client";


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const Image = [
  '/icons/jima.jpg',
  '/icons/toto.jpg',
  '/icons/waterfall.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Image.length);
  };

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.navButton} onClick={goToPrev}>❮</button>
      <div className={styles.imageContainer}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Image.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
          ))}
        </div>
      </div>
      <button className={styles.navButton} onClick={goToNext}>❯</button>
    </div>
  );
};

export default Carousel;