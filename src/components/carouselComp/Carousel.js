import React, { useState } from "react";
import "./Carousel.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1726758254279-6a39c11bdcd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
      year: 1954,
      description:
        "Sir Brian Bell studied pharmacy in Australia at the Brisbane Central Technical College now Queensland University of Technology. He moved to Port Moresby, Papua New Guinea in 1954 as a pharmaceutical chemist in the Bulk Medical Store before establishing the first electrical outlet creating the nowinfamous Brian Bell promise to ‘service what we sell.’",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1726706805887-0ac0e0d3a721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
      year: 1960,
      description:
        "Sir Brian Bell studied pharmacy in Australia at the Brisbane Central Technical College now Queensland University of Technology. He moved to Port Moresby, Papua New Guinea in 1954 as a pharmaceutical chemist in the Bulk Medical Store before establishing the first electrical outlet creating the nowinfamous Brian Bell promise to ‘service what we sell.’",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
      year: 1970,
      description:
        "Sir Brian Bell studied pharmacy in Australia at the Brisbane Central Technical College now Queensland University of Technology. He moved to Port Moresby, Papua New Guinea in 1954 as a pharmaceutical chemist in the Bulk Medical Store before establishing the first electrical outlet creating the nowinfamous Brian Bell promise to ‘service what we sell.’",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1726609196460-f2f6c9a04859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D",
      year: 1970,
      description:
        "Sir Brian Bell studied pharmacy in Australia at the Brisbane Central Technical College now Queensland University of Technology. He moved to Port Moresby, Papua New Guinea in 1954 as a pharmaceutical chemist in the Bulk Medical Store before establishing the first electrical outlet creating the nowinfamous Brian Bell promise to ‘service what we sell.’",
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1726217054110-b5282320fd84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
      year: 1970,
      description:
        "Sir Brian Bell studied pharmacy in Australia at the Brisbane Central Technical College now Queensland University of Technology. He moved to Port Moresby, Papua New Guinea in 1954 as a pharmaceutical chemist in the Bulk Medical Store before establishing the first electrical outlet creating the nowinfamous Brian Bell promise to ‘service what we sell.’",
    },
    {
      id: 6,
      src: "https://plus.unsplash.com/premium_photo-1726678139904-7f64a6416851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D",
      year: 1970,
      description:
        "Sir Brian Bell studied pharmacy in Australia at the Brisbane Central Technical College now Queensland University of Technology. He moved to Port Moresby, Papua New Guinea in 1954 as a pharmaceutical chemist in the Bulk Medical Store before establishing the first electrical outlet creating the nowinfamous Brian Bell promise to ‘service what we sell.’",
    },
  ];

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
              <h3 style={{ color: "#EC2E40" }}>{images[currentIndex].year}</h3>
              <p style={{ color: "#262626" }}>
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
