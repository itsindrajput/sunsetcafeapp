import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div id="about-div">
        <div className="first-about-div">
          <h2>ABOUT US</h2>
          <h1>
            The story behind sunset.<span>..</span>
          </h1>
        </div>
        <div id="about-img1">
          <img
            className="about-img"
            src="../other-images/Chef.jpg"
            alt="Image Of Chef Andre"
          />
        </div>
        <div className="second-about-div">
          <p>
            Welcome to Sunset Café, where our journey began with Chef André's
            bold decision to depart from the world of haute cuisine and create a
            culinary sanctuary rooted in simplicity and heartfelt connection.{" "}
          </p>
          <p>
            <span>
              Inspired by a chance encounter with a charming café bathed in the
              warm glow of twilight, Chef André envisioned a place where genuine
              hospitality and exceptional flavors intertwine. At Sunset Café,
              each dish is a reflection of Chef André's dedication to crafting
              culinary experiences that nourish both body and soul.
            </span>
          </p>
          <button className="about-btn" type="button">
            READ MORE
          </button>
        </div>
      </div>
      <div id="about-img2">
        <img
          className="about-img"
          src="../other-images/Chef.jpg"
          alt="Image Of Chef Andre"
        />
      </div>
    </div>
  );
};

export default About;
