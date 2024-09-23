import React, { useState } from "react";
import "./Carousel.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { images } from "./../../dummyData/dummyData.js";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="carousel-container">
      <img src="\images\Vector.png" className="carousel-vector-image" />
      <h1 className="carousel-header">The history of the Brian Bell Group</h1>
      <p className="carousel-subtitle">
        Lorem ipsum dolor sit amet consectetur. Eu sit velit orci mi. Non odio
        massa <br />
        enim tortor magna sapien semper et.
      </p>
      <div className="carousel-wrapper">
        <button className="carousel-arrow left-arrow" onClick={handlePrev}>
          <IoIosArrowRoundBack />
        </button>

        <div className="carousel-content">
          <div className="carousel-item faded">
            <img src={images[prevIndex].src} alt="Previous slide" />
          </div>

          <div className="carousel-item active">
            <img src={images[currentIndex].src} alt="Current slide" />
            <div className="carousel-info">
              <h3 className="image-content-year">
                {images[currentIndex].year}
              </h3>
              <p className="image-content-data">
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          <div className="carousel-item faded">
            <img src={images[nextIndex].src} alt="Next slide" />
          </div>
        </div>

        <button className="carousel-arrow right-arrow" onClick={handleNext}>
          <IoIosArrowRoundForward />
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
