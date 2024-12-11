import React, { useState,useEffect } from 'react';
import "../css/Carousel.css"
import i1 from "../assets/images/iphone.jpeg"
import i2 from "../assets/images/SmartTv1.jpg"
import i4 from "../assets/images/AirdopesV2.jpg"
import i5 from "../assets/images/boat1.png"
import i6 from "../assets/images/tv.jpeg"
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [
    { src: i1, description: 'Description 1' },
    { src: i6, description: 'Description 2' },
    { src: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147487947/images/6c17b0e-f6a-0b01-a055-e31f68b034_MacBook_Air_M2_15-inch.jpg", description: 'Description 3' },
    { src: i5, description: 'Description 4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setFade(false);
      }, 100); // Match this timing with the CSS transition
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false);
    }, 100);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 100);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-control prev">❮</button>
      <div className={`carousel-inner ${fade ? 'fade' : ''}`}>
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} className="carousel-image" />
        {/* <div className="carousel-description">{images[currentIndex].description}</div> */}
      </div>
      <button onClick={handleNext} className="carousel-control next">❯</button>
    </div>
  );
};

export default Carousel;
