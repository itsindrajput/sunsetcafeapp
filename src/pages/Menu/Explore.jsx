import React from "react";
import Navbar from "../../components/Menu/Navbar";
import style from "./Explore.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  return (
    <>
      <Navbar></Navbar>
      {/*Html Code For Hero Section*/}
      <div className={style.menu_hero} />
      <menu style={{ backgroundColor: "#251a17" }}>
        <h1 className={style.menu_heading}>WHAT’S ON YOUR MIND?</h1>
        <div className={style.menu_item_container}>
          <div className={style.menu_item}>
            <a href="menu1.html">
              <img
                src="../../offer-images/burger.jpg"
                alt="Image Of Burger And Sandwiche"
              />
            </a>
            <h4>BURGER &amp; SANDWICHES</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu2.html">
              <img
                src="../../menu-images/chinese.jpg"
                alt="Image Of Chinese Cusine"
              />
            </a>
            <h4>CHINESE CUSINE</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu3.html">
              <img
                src="../../menu-images/Starters.jpg"
                alt="Image Of Starters"
              />
            </a>
            <h4>STARTERS</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu4.html">
              <img src="../../menu-images/sides.jpg" alt="Image Of Sides" />
            </a>
            <h4>SIDES</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu5.html">
              <img src="../../offer-images/Salad.jpeg" alt="Image Of Salads" />
            </a>
            <h4>SALADS</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu6.html">
              <img
                src="../../menu-images/deserts.jpg"
                alt="Image Of Dessert such as Ice-Cream"
              />
            </a>
            <h4>DESSERTS / ICE-CREAM</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu7.html">
              <img
                src="../../menu-images/main.jpg"
                alt="Image Of Main Course"
              />
            </a>
            <h4>MAIN COURSE</h4>
          </div>
          <div className={style.menu_item}>
            <a href="menu8.html">
              <img
                src="../../offer-images/banner3.png"
                alt="Image Of Value Combo"
              />
            </a>
            <h4>VALUE COMBO</h4>
          </div>
          <div className={style.menu_item}>
            <a href="#">
              <img
                src="../../menu-images/beverages.jpg"
                alt="Image Of Beverages"
              />
            </a>
            <h4>BEVERAGES</h4>
          </div>
          <div className={`${style.menu_item} ${style.item_ten}`}>
            <a href="#">
              <img
                src="../../menu-images/blueberry.jpeg"
                alt="Image Of Blueberry"
              />
            </a>
            <h4>BLUEBERRY</h4>
          </div>
        </div>
        <div className={style.see_more_btn}>
          <NavLink to="/menu1">
            <FontAwesomeIcon
              icon={faAngleDown}
              className={style.see_more_btn_i}
            />
          </NavLink>
          <span>See More</span>
        </div>
      </menu>
    </>
  );
};

export default Explore;
