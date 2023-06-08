import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://burst.shopifycdn.com/photos/man-browsing-at-a-guitar-shop.jpg?width=925&format=pjpg&exif=1&iptc=1',
      title: 'Slide 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://burst.shopifycdn.com/photos/bass-guitar-in-hand.jpg?width=925&format=pjpg&exif=1&iptc=1',
      title: 'Slide 2',
      text: 'Vestibulum tincidunt ullamcorper consectetur.',
    },
    {
      id: 3,
      image: 'https://burst.shopifycdn.com/photos/playing-guitar-in-the-park.jpg?width=925&format=pjpg&exif=1&iptc=1',
      title: 'Slide 3',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
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
      <div className="relative h-[500px] border border-red-500">
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`carousel-slide ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500 absolute inset-0`}
    >
      <img src={slide.image} alt={slide.title} className="w-full object-cover h-[500px]" />
      <div className="carousel-content absolute border w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
        <p className="text-gray-200">{slide.text}</p>
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