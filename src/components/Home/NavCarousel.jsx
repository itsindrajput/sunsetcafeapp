import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NavCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="wrapper">
      <h1>We Are Known For :-</h1>
      <i id="left" className="fa-solid fa-angle-left" onClick={handlePrev}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </i>
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
      <i id="right" className="fa-solid fa-angle-right" onClick={handleNext}>
        <FontAwesomeIcon icon={faAngleRight} />
      </i>
    </div>
  );
};

// Data for carousel items
const carouselItems = [
  {
    title: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
    description:
      " Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.",
    image: "../menu-images/Chai-Infusion.jpg",
  },
  {
    title: "Sizzling Tandoori Platter: A Feast for the Senses",
    description:
      "Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated.. chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture.",
    image: "../menu-images/Sizzling-Tandoori-Platter.jpg",
  },
  {
    title: "Mango Curry Chicken",
    description:
      "Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
    image: "../menu-images/Mango-Curry.jpg",
  },
  {
    title: "Exquisite Extravaganza of Gourmet Spring Rolls",
    description:
      "Embark on a delightful journey of flavors with our Spring Roll Sensation at Sunset Cafe. Indulge in the crispiness of perfectly fried spring rolls, filled with a medley of fresh vegetables and your choice of succulent protein.",
    image: "../menu-images/Spring-roll.jpg",
  },
  {
    title: "Grilled Chicken Bliss: Sunset Delight Sandwich",
    description:
      "Savor the essence of Sunset Cafe with our Grilled Chicken Bliss Sandwich. Succulent grilled chicken, layered with crisp lettuce, juicy tomatoes, and a hint of zesty sauce, all embraced by soft, toasted bread.",
    image: "../menu-images/Grilled-Chicken-Sandwich.jpeg",
  },
  {
    title: "Noodle Soup Euphoria: Asian Fusion Elixir",
    description:
      "Warm your soul with the Noodle Soup Euphoria at Sunset Cafe. Immerse yourself in a bowl of steaming, flavorful broth, generously filled with slurp-worthy noodles and an array of fresh vegetables.",
    image: "../menu-images/noodle-soup.jpg",
  },
];

export default NavCarousel;
