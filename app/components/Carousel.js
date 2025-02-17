import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const images = [
  '/icons/jima.jpg',
  '/icons/toto.jpg',
  '/icons/waterfall.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              width={600}
              height={400}
              className={styles.carouselImage}
            />
          ))}
        </div>
      </div>
      <button className={styles.navButton} onClick={goToNext}>❯</button>
    </div>
  );
};

export default Carousel;
