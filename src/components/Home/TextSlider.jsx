import React, { useState } from "react";
import "./TextSlider.css";

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      quote:
        "\"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!\"",
    },
    {
      quote:
        "“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired and success achieved.”",
    },
    {
      quote:
        "\"You never know what's around the corner. It could be everything. Or it could be nothing. You keep putting one foot in front of the other, and then one day you look back and you've climbed a mountain.\"",
    },
  ];

  return (
    <div id="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <span>❝</span>
          <p>{slide.quote}</p>
        </div>
      ))}
      <button id="prev" onClick={prevSlide}>
        ‹
      </button>
      <button id="next" onClick={nextSlide}>
        ›
      </button>
      <div id="slider-nav-bar">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active-dot" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
