import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'banner-1.png',
      title: 'Unlock Your Musical Potential with the Piano',
      text: 'Immerse yourself in the enchanting world of piano melodies. From beginner to advanced, our expert instructors will guide you on a journey to master this timeless instrument.',
      titleColor: '#ffdab5', // Red color
      textColor: '#ffdab5', // Green color
    },
    {
      image: 'banner-2.png',
      title: 'Discover the Ethereal Magic of Flute',
      text: 'Let the hauntingly beautiful notes of the flute transport you to new musical heights. Our dedicated flute instructors will help you cultivate your skills and explore the enchanting repertoire',
      titleColor: '#ff4564', // Blue color
      textColor: 'grey', // Yellow color
    },
    {
      image: 'banner-3.png',
      title: 'Strum Your Way to Musical Greatness with the Power of Guitar',
      text: 'Unleash your inner rockstar or serenade with soulful melodies. Our experienced guitar teachers will teach you everything from classic chords to advanced techniques, empowering you to create music that resonates with your heart.',
      titleColor: '#ffdab5', // Magenta color
      textColor: '#ffdab5', // Black color
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 absolute inset-0`}
          >
            <img src={slide.image} alt={slide.title} className="w-full object-cover h-[500px]" />
            <div className="carousel-content absolute w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <h2
                className="text-5xl font-avail font-bold mb-4 w-1/2"
                style={{ color: slide.titleColor }}
              >
                {slide.title}
              </h2>
              <p className="text-gray-200 w-1/2" style={{ color: slide.textColor }}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-75"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-75"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
