import React, { useState } from "react";

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="wrapper" id="wrapper">
        <h1>We Are Known For :-</h1>
        <ul className="carousel">
          {carouselItems.map((item, index) => (
            <li
              className={`card ${index === currentIndex ? "active" : ""}`}
              key={index}
            >
              <div className="img">
                <img
                  src={item.image}
                  alt={`Image contains the picture of ${item.title}.`}
                  draggable="false"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h6>Find out more ➝</h6>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// Data for carousel items
const carouselItems = [
  {
    title: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
    description:
      " Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta...",
    image: "../menu-images/Chai-Infusion.jpg",
  },
  {
    title: "Sizzling Tandoori Platter: A Feast for the Senses",
    description:
      "Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated...",
    image: "../menu-images/Sizzling-Tandoori-Platter.jpg",
  },
  {
    title: "Mango Curry Chicken",
    description:
      "Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces...",
    image: "../menu-images/Mango-Curry.jpg",
  },
  {
    title: "Exquisite Extravaganza Spring Rolls",
    description:
      "Embark on a delightful journey of flavors with our Spring Roll Sensation at Sunset Cafe. Indulge in the crispiness of ...",
    image: "../menu-images/Spring-roll.jpg",
  },
  {
    title: "Grilled Chicken Bliss: Sunset Delight Sandwich",
    description:
      "Savor the essence of Sunset Cafe with our Grilled Chicken Bliss Sandwich. Succulent grilled chicken, layered with crisp ...",
    image: "../menu-images/Grilled-Chicken-Sandwich.jpeg",
  },
  {
    title: "Noodle Soup Euphoria: Asian Fusion Elixir",
    description:
      "Warm your soul with the Noodle Soup Euphoria at Sunset Cafe. Immerse yourself in a bowl of steaming, flavorful broth, ...",
    image: "../menu-images/noodle-soup.jpg",
  },
];

export default MobileCarousel;
