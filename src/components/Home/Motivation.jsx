import React from "react";
import TextSlider from "./TextSlider";

const Motivation = () => {
  return (
    <div className="motivation">
      <div id="slider-container">
        <h1>Motivation Being Our Hard Work</h1>
        <TextSlider></TextSlider>
        <div id="slider-nav-bar" />
      </div>
      <div className="subscribe">
        <h2>Subscribe To Newsletter,</h2>
        <h2>And Get - 20% off</h2>
        <p>
          Your Gateway to Serenity, Culinary Delights, and Unforgettable
          Moments.
        </p>
        <input
          type="email"
          name="email"
          id="input-email"
          placeholder="Enter email address..."
        />
        <button className="submit-btn" type="submit">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Motivation;
