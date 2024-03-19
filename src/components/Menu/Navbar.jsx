import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "../../pages/Authentication/Signup.module.css";

const Navbar = () => {
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
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logoHamburgerContainer}>
          <NavLink to="/" className={"nav-logo"}>
            <img
              src="../other-images/sunsetLogo1.png"
              alt="Image contains the logo of Sunset Cafe"
            />
          </NavLink>
          {/* Hamburger icon and a search icon */}
          <div className={"nav-icons"}>
            <div className={"search-icon"}>
              <NavLink to="/signup">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
            </div>
            <div className={"hamburger-icon"} onClick={myHamburger}>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </div>
        </div>
        <div className={"nav-drawer"} id={"navDrawer"}>
          <div className={"close-btn"} onClick={myHamburger}>
            Close ❌
          </div>
          <div className={"nav-logo-in-text"}>
            <h3>SUNSET</h3>
            <h2>CAFE</h2>
          </div>
          <div className={"nav-menu-list"}>
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
          <div className={style.searchinput}>
            <input
              type="search"
              name="search"
              id="search-icon"
              placeholder="🔍 Search Items"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
