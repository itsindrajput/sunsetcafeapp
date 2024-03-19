import React from "react";

const Motivation = () => {
  return (
    <div className="motivation">
      <div id="slider-container">
        <h1>Motivation Being Our Hard Work</h1>
        <div id="slider">
          <div className="slide">
            <span>❝</span>
            <p>
              "I just had the best time at Sunset Cafe! It was so cozy and
              welcoming. The coffee smelled amazing, and the people there were
              so friendly. The food? Delicious! I can't wait to go back again
              and again. It's definitely my new favorite spot!"
            </p>
          </div>
          <div className="slide">
            <span>❝</span>
            <p>
              “Character cannot be developed in ease and quiet. Only through
              experience of trial and suffering can the soul be strengthened,
              vision cleared, ambition inspired and success achieved.”
            </p>
          </div>
          <div className="slide">
            <span>❝</span>
            <p>
              "You never know what's around the corner. It could be everything.
              Or it could be nothing. You keep putting one foot in front of the
              other, and then one day you look back and you've climbed a
              mountain."
            </p>
          </div>
        </div>
        <div id="prev">❮</div>
        <div id="next">❯</div>
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
