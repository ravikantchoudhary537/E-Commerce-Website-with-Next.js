"use client";
import React, { useState } from 'react';

const images = [
  "/p2.png",
  "/p3.png",
  "/p4.png",
  "/p5.png",
  "/p6.png",
  "/p7.png"
];

const ProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-white text-[20px] w-[80%] max-w-[1360px] mx-auto sticky top-[50px]">
      <div className="productCarousel ">
        <div className="carousel  w-[80%] ">
          <div className="carousel-slider bg-red-500">
            <div className="slider-wrapper h-[400px] " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index}`} className="slide" />
              ))}
            </div>
            <button onClick={prevSlide} className="control-arrow prev-arrow">❮</button>
            <button onClick={nextSlide} className="control-arrow next-arrow">❯</button>
          </div>
          <div className=" flex">
            {images.map((src, index) => (
              <div
                key={index}
                className={`thumb ${currentIndex === index ? "selected" : ""} w-[100px]`}
                onClick={() => setSlide(index)}
              >
                <img src={src} alt={`Thumbnail ${index}`} className='w-[100px]' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .productCarousel {
          display: flex;
          flex-direction: row-reverse;
          gap: 15px;
        }
        .carousel {
          width: auto;
        }
        .carousel-slider {
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .slider-wrapper {
          display: flex;
          transition: transform 0.3s ease;
          border-radius: 10px;
        }
        .slide {
          width: 100%;
          flex-shrink: 0;
        }
        .thumbs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .thumb {
          height: 60px;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .thumb:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .thumb.selected,
        .thumb:hover {
          border: 0;
        }
        .thumb:hover:after,
        .thumb.selected:after {
          opacity: 0.2;
        }
        .control-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 2rem;
          color: white;
          cursor: pointer;
          z-index: 1;
        }
        .prev-arrow {
          left: 10px;
        }
        .next-arrow {
          right: 10px;
        }
        @media screen and (max-width: 767px) {
          .productCarousel {
            flex-direction: column;
          }
          .thumb {
            border: 0;
            padding: 0;
          }
        }
        @media screen and (min-width: 768px) {
          .thumbs-wrapper {
            transform: none !important;
            flex-direction: column;
            display: flex;
            gap: 10px;
          }
          .thumb {
            border: 0;
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;
