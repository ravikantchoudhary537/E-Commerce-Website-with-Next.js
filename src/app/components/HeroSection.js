
"use client";
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { IoMdArrowForward } from "react-icons/io";
import Wrapper from './Wrapper';

const slides = [
  { src: '/slide-1.png', text: 'Shop now' },
  { src: '/slide-2.png', text: 'Shop now' },
  { src: '/slide-3.png', text: 'Shop now' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Wrapper className={"p-[30px]  mx-auto "}>
    <div className="relative text-white  text-[20px]  w-[85%] mx-auto">
      <div className="relative">
        <img
          src={slides[currentIndex].src}
          className="aspect-[16/10] md:aspect-auto object-cover w-full h-auto"
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="px-[5px] md:px-[30px] ml-2 py-[1px] text-xs md:py-[15px] font-oswald bg-white absolute bottom-[10px] md:bottom-[50px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90">
          {/* {slides[currentIndex].text} */}
          Shop now
          
        </div>
        <div
          onClick={handlePrev}
          className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
        >
          <BiArrowBack className="text-sm md:text-lg" />
        </div>
        <div
          onClick={handleNext}
          className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
        >
          <IoMdArrowForward className="text-sm md:text-lg" />
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default HeroSection;

