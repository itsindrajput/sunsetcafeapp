import React from "react";
import style from "./Categories.module.css";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className={style.categoriesHeading}>
        <h1>OTHER CATEGORIES</h1>
      </div>
      <div className={style.categoriesCardContainer}>
        <div className={style.batchOne}>
          <img
            src="../../../offer-images/burger.jpg"
            alt="IMAGES OF BURGER & SANDWICHES"
          />
          <h4>BURGER &amp; SANDWICHES</h4>
        </div>
        <div className={style.batchTwo}>
          <img src="../../../offer-images/Salad.jpeg" alt="IMAGES OF SALADS" />
          <h4>SALADS</h4>
        </div>
        <div className={style.batchTwo}>
          <img
            src="../../../offer-images/past.jpg"
            alt="IMAGES OF DESSERTS / ICE-CREAM"
          />
          <h4>DESSERTS / ICE-CREAM</h4>
        </div>
        <div className={style.batchOne}>
          <img
            src="../../../offer-images/Value.png"
            alt="IMAGES OF VALUE COMBO"
          />
          <h4>VALUE COMBO</h4>
        </div>
      </div>
      <div className={style.exploreBtn}>
        <NavLink to="/menu/explore">EXPLORE</NavLink>
      </div>

      <div className={style.offerContainer}>
        <div className={style.categoriesHeading}>
          <h1
            style={{
              padding: "15px 0px",
              lineHeight: "24px",
            }}
          >
            BEST OFFERS <i className="fa-solid fa-gifts" />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Categories;
