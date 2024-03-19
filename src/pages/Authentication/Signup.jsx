import React from "react";
import style from "./Signup.module.css";
import Navbar from "../../components/Menu/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className={style.register}>
        <h1>Register</h1>
        <div className={style.reservationform}>
          <form action="#" method="post" id="form">
            <legend>Signup now and get full access to our app.</legend>
            <div class={style.input_register}>
              <input
                type="text"
                name="fname"
                placeholder="Firstname"
                required="required"
              />
              <input
                type="text"
                name="lname"
                placeholder="Lastname"
                required="required"
              />
            </div>
            <div class={style.input_register}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div class={style.input_register}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div class={style.input_register}>
              <input
                type="password"
                name="cnf-password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div class={style.input_register}>
              <button type="button" onclick="registerMain()">
                Submit
              </button>
            </div>
            <div class={style.input_sign}>
              <span>Already have an Acount? </span>
              <a href="../html/login.html"> Sign In</a>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
