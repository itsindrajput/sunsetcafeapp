import React from "react";

const Reservation = () => {
  return (
    <>
      <div className="reservation-container">
        <div className="reservation-img">
          <img
            src="../menu-images/Book-a-table.jpg"
            alt="Image Of A Men And Women Seating On A Table"
          />
        </div>
        <div className="reservation-form">
          <form action="#" method="post" id="form">
            <h3>Reservation</h3>
            <legend>BOOK A TABLE ONLINE</legend>
            <div className="input1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required="required"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="input2">
              <input
                type="datetime"
                name="datetime"
                placeholder="Date & Time"
                required=""
              />
              <input
                type="number"
                name="number"
                placeholder="No. of people"
                required=""
              />
            </div>
            <textarea
              name="comment"
              placeholder="Special Request"
              defaultValue={""}
            />{" "}
            <br />
            <button type="button" onclick="reservation()">
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
