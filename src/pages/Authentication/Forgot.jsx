import React from "react";
import Navbar from "../../components/Menu/Navbar";
import style from "./Forgot.module.css";
import { NavLink } from "react-router-dom";

const Forgot = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className={style.forgot_form_container}>
        <div className={style.forgot_img}>
          <img
            src="../other-images/Forgot-password.png"
            alt="Image Of User Entering the Email address associated with your account to get a code."
          />
        </div>
        <div className={style.forgot_form}>
          <h1>Forgot Password?</h1>
          <form action="#" method="post" className={style.forgot__form}>
            <legend>
              Enter the Email address associated with your account to get a
              code.
            </legend>
            <div className={`${style.input} ${style.forgot__input}`}>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required="required"
              />
              <button type="button" onclick="generateOTP()">
                Send Code
              </button>
            </div>
            <h4>
              <NavLink to="/login">Back to Login</NavLink>
            </h4>
          </form>
        </div>
        <div className={style.forgot_img_mobile} id="forgot-img-mobile">
          <img
            src="../other-images/Forgot-password.png"
            alt="Image Of User Entering the Email address associated with your account to get a code."
          />
        </div>
      </main>
    </>
  );
};

export default Forgot;
