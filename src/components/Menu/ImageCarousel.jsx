import React, { useState } from "react";
import style from "./imageCarousel.module.css";

const ImageCarousel = () => {
  const [startSlide, setStartSlide] = useState(0);
  const totalSlides = 7; // Update this with the total number of slides

  const changeSlide = (direction) => {
    let newStartSlide = startSlide + direction;

    if (newStartSlide < 0) {
      newStartSlide = totalSlides - 3;
    } else if (newStartSlide > totalSlides - 3) {
      newStartSlide = 0;
    }

    setStartSlide(newStartSlide);
  };

  return (
    <>
      <div className={style.carouselContainer}>
        <button
          className={`${style.carouselBtn} ${style.prevBtn}`}
          onClick={() => changeSlide(-1)}
        >
          &#x276E;
        </button>
        <button
          className={`${style.carouselBtn} ${style.nextBtn}`}
          onClick={() => changeSlide(1)}
        >
          &#x276F;
        </button>
        <div className={style.image_carousel}>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <img
              key={startSlide + index}
              src={`../../../offer-images/banner${startSlide + index + 1}.png`}
              alt={`Image ${startSlide + index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
