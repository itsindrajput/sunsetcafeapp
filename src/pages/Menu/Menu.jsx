import React from "react";
import Navbar from "../../components/Menu/Navbar";
import Beverages from "../../components/Menu/Beverages";
import style from "./menu.module.css";
import Categories from "../../components/Menu/Categories";
import ImageCarousel from "../../components/Menu/ImageCarousel";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#251A1A" }}>
        <div className={style.sunsetLogo}>
          <h1>SUNSET</h1>
          <h2>CAFE</h2>
        </div>
        <Beverages />
        <Categories />
        <ImageCarousel />
      </div>
    </>
  );
};

export default Menu;
