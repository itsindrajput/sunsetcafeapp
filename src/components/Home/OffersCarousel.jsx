import React, { useState, useEffect } from "react";

const OffersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + itemsPerPage) % offers.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      title: "FLAT ₹75 OFF",
      description: "ON ORDER ABOVE ₹399",
      code: "FGU87",
      imageSrc: "../offer-images/image1.png",
      altText: "This is an image of Burger",
    },
    {
      title: "FLAT ₹100 OFF",
      description: "ON ORDER ABOVE ₹599",
      code: "RTH23",
      imageSrc: "../offer-images/image2.png",
      altText: "This is an image of Cheese Pizza",
    },
    {
      title: "FLAT ₹50 OFF",
      description: "ON ORDER ABOVE ₹299",
      code: "RKS123",
      imageSrc: "../offer-images/image3.png",
      altText: "This is an image of Cheese Sandwich",
    },
    {
      title: "FLAT ₹100 OFF",
      description: "ON ORDER ABOVE ₹499",
      code: "UPI57",
      imageSrc: "../offer-images/image4.png",
      altText: "This is an image of Momos",
    },
    {
      title: "FLAT ₹25 OFF",
      description: "ON ORDER ABOVE ₹199",
      code: "VKS01",
      imageSrc: "../offer-images/image5.png",
      altText: "This is an image of Chaumin",
    },
    {
      title: "FLAT ₹40 OFF",
      description: "ON ORDER ABOVE ₹99",
      code: "FGU87",
      imageSrc: "../offer-images/image6.png",
      altText: "This is an image of Microni",
    },
    {
      title: "FLAT ₹65 OFF",
      description: "ON ORDER ABOVE ₹599",
      code: "OKS36",
      imageSrc: "../offer-images/image7.png",
      altText: "This is an image of Cold Coffee",
    },
    {
      title: "FLAT ₹75 OFF",
      description: "ON ORDER ABOVE ₹999",
      code: "RRD45",
      imageSrc: "../offer-images/image8.png",
      altText: "This is an image of Ice-creem",
    },
  ];

  const showItem = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-for-offer">
      <legend>DEALS AND OFFERS</legend>
      {offers
        .slice(currentIndex, currentIndex + itemsPerPage)
        .map((offer, index) => (
          <div
            key={currentIndex + index}
            className={`carousel__item ${
              index === 0 ? "carousel__item--selected" : ""
            }`}
          >
            <div className="carousel-item-container">
              {/* First Offer */}
              <div className="offer-card">
                <div className="offer-text">
                  <h4>FLAT</h4>
                  <h2>{offer.title}</h2>
                  <h3>{offer.description}</h3>
                  <button className="offer-btn" type="button">
                    <span>Use Code</span> {offer.code}
                  </button>
                </div>
                <div className="offer-img">
                  <img src={offer.imageSrc} alt={offer.altText} />
                </div>
              </div>
              {/* Second Offer */}
              {offers[currentIndex + 1] && (
                <div className="offer-card">
                  <div className="offer-text">
                    <h4>FLAT</h4>
                    <h2>{offers[currentIndex + 1].title}</h2>
                    <h3>{offers[currentIndex + 1].description}</h3>
                    <button className="offer-btn" type="button">
                      <span>Use Code</span> {offers[currentIndex + 1].code}
                    </button>
                  </div>
                  <div className="offer-img">
                    <img
                      src={offers[currentIndex + 1].imageSrc}
                      alt={offers[currentIndex + 1].altText}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      <div className="carousel__nav">
        {Array.from({ length: offers.length / itemsPerPage }, (_, index) => (
          <span
            key={index}
            className={`carousel__button ${
              index * itemsPerPage === currentIndex
                ? "carousel__button--selected"
                : ""
            }`}
            onClick={() => showItem(index * itemsPerPage)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;
