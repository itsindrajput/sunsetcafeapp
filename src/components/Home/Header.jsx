import React from "react";
import { NavLink } from "react-router-dom";
import NavCarousel from "./NavCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import MobileCarousel from "./MobileCarousel";

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
    <>
      <header>
        <nav>
          <div className="logo-hamburger-container">
            <NavLink to="/" className="nav-logo">
              <img
                src="../other-images/sunsetLogo1.png"
                alt="Sunset Cafe Logo"
              />
            </NavLink>
            {/* Hamburger icon and a search icon */}
            <div className="nav-icons">
              <div className="search-icon">
                <NavLink to="/">
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
              Discover Culinary Elegance at Café Sunset: Where Every Sip and
              Bite Unveils a Symphony of Flavors and Moments.
            </p>
            <h3>Gateway to Serenity, Culinary Delights,</h3>
            <p id="hero-paragraph2">
              Step into a World Where Ambiance, Flavor, and Warmth Converge—A
              Haven Where Every Visit Feels Like Coming Home.
            </p>
            <button type="button">Order Now</button>
          </div>
          <NavCarousel></NavCarousel>
        </section>
      </header>
      <MobileCarousel></MobileCarousel>
    </>
  );
};

export default Header;
