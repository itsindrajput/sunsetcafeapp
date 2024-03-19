import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  function myHamburger() {
    let navDrawer = document.getElementById("navDrawer");
    let body = document.body;

    navDrawer.classList.toggle("open");
    body.classList.toggle("no-scroll");

    if (navDrawer.classList.contains("open")) {
      navDrawer.style.left = "0";
    } else {
      navDrawer.style.left = "-100%";
    }
  }

  window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");

    if (window.scrollY > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  return (
    <header>
      <nav>
        <div className="logo-hamburger-container">
          <NavLink to="/" className="nav-logo">
            <img
              src="../other-images/sunsetLogo1.png"
              alt="Image contains the logo of Sunset Cafe"
            />
          </NavLink>
          {/* Hamburger icon and a search icon */}
          <div className="nav-icons">
            <div className="search-icon">
              <NavLink to="/signup">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
            </div>
            <div className="hamburger-icon" onClick={myHamburger}>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </div>
        </div>
        <div className="nav-drawer" id="navDrawer">
          <div className="close-btn" onClick={myHamburger}>
            Close ❌
          </div>
          <div className="nav-logo-in-text">
            <h3>SUNSET</h3>
            <h2>CAFE</h2>
          </div>
          <div className="nav-menu-list">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="user-info-container">
            <div className="nav-user-info">
              <ul>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li id="user-line">|</li>
                <li>
                  <NavLink to="/login">Log In</NavLink>
                </li>
                <li className="nav-account">
                  <NavLink to="/account">Account</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-cart-btn">
              <ul>
                <li>
                  <NavLink to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart" className="my-cart">
                    My Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/*Html code for Content On Header Begins Here */}
      <section className="nav-hero-container" style={{ height: "100vh" }}>
        <div className="nav-hero-content">
          <h1>WELCOME</h1>
          <p id="hero-paragraph1">
            Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite
            Unveils a Symphony of Flavors and Moments.
          </p>
          <h3>Gateway to Serenity, Culinary Delights,</h3>
          <p id="hero-paragraph2">
            Step into a World Where Ambiance, Flavor, and Warmth Converge—A
            Haven Where Every Visit Feels Like Coming Home.
          </p>
          <button type="button">Order Now</button>
        </div>
        <div className="wrapper">
          <h1>We Are Known For :-</h1>
          <i id="left" className="fa-solid fa-angle-left">
            <FontAwesomeIcon icon={faAngleLeft} />
          </i>
          <ul className="carousel">
            <li className="card">
              <div className="img">
                <img
                  src="../menu-images/Chai-Infusion.jpg"
                  alt="Image contains the picture of chai infusion."
                  draggable="false"
                />
              </div>
              <h3>Chai Infusion Dessert: Cardamom Chai Panna Cotta</h3>
              <p>
                Experience the sweet finale of your meal with our Chai Infusion
                Dessert - Cardamom Chai Panna Cotta.{" "}
                <span>
                  This delectable creation melds the velvety smoothness of
                  Italian panna cotta with the aromatic allure of Indian chai.
                </span>
              </p>
              <h6>Find out more ➝</h6>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src="../../menu-images/Sizzling-Tandoori-Platter.jpg"
                  alt="Image contains the picture of Sizzling Tandoori Platter."
                  draggable="false"
                />
              </div>
              <h3>Sizzling Tandoori Platter: A Feast for the Senses</h3>
              <p>
                Transport your taste buds to the streets of India with our
                Sizzling Tandoori Platter. Succulent morsels of marinated..{" "}
                <span>
                  chicken, paneer, and lamb are grilled to perfection in our
                  traditional tandoor, imparting a smoky flavor and tender
                  texture.
                </span>
              </p>
              <h6>Find out more ➝</h6>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src="../../menu-images/Mango-Curry.jpg"
                  alt="Image contains the picture of Mango Curry Chicken."
                  draggable="false"
                />
              </div>
              <h3>
                Mango Curry <br />
                Chicken
              </h3>
              <p>
                Indulge in the rich flavors of our Seasonal Spice Delight -
                Mango Curry Chicken. A symphony of succulent chicken pieces
                bathed in a luscious curry{" "}
                <span>infused with the sweetness of ripe mangoes.</span>
              </p>
              <h6 style={{ paddingTop: 15 }}>Find out more ➝</h6>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src="../../menu-images/Spring-roll.jpg"
                  alt="Image contains the picture of Spring Roll."
                  draggable="false"
                />
              </div>
              <h3>Exquisite Extravaganza of Gourmet Spring Rolls</h3>
              <p>
                Embark on a delightful journey of flavors with our Spring Roll
                Sensation at Sunset Cafe.{" "}
                <span>
                  Indulge in the crispiness of perfectly fried spring rolls,
                  filled with a medley of fresh vegetables and your choice of
                  succulent protein.
                </span>{" "}
              </p>
              <h6>Find out more ➝</h6>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src="../../menu-images/Grilled-Chicken-Sandwich.jpeg"
                  alt="Image contains the picture of Grilled Chicken Sandwich."
                  draggable="false"
                />
              </div>
              <h3>Grilled Chicken Bliss: Sunset Delight Sandwich</h3>
              <p>
                Savor the essence of Sunset Cafe with our Grilled Chicken Bliss
                Sandwich.{" "}
                <span>
                  Succulent grilled chicken, layered with crisp lettuce, juicy
                  tomatoes, and a hint of zesty sauce, all embraced by soft,
                  toasted bread.{" "}
                </span>
              </p>
              <h6 style={{ paddingTop: 15 }}>Find out more ➝</h6>
            </li>
            <li className="card">
              <div className="img">
                <img
                  src="../../menu-images/noodle-soup.jpg"
                  alt="Image contains the picture of Noodle Soup."
                  draggable="false"
                />
              </div>
              <h3>Noodle Soup Euphoria: Asian Fusion Elixir</h3>
              <p>
                Warm your soul with the Noodle Soup Euphoria at Sunset Cafe.
                Immerse yourself in a bowl of steaming,{" "}
                <span>
                  flavorful broth, generously filled with slurp-worthy noodles
                  and an array of fresh vegetables.
                </span>{" "}
              </p>
              <h6 style={{ paddingTop: 15 }}>Find out more ➝</h6>
            </li>
          </ul>
          <i id="right" className="fa-solid fa-angle-right">
            <FontAwesomeIcon icon={faAngleRight} />
          </i>
        </div>
      </section>
    </header>
  );
};

export default Header;
