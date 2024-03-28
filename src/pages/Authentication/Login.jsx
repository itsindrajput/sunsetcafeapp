import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Menu/Navbar";
import style from "./Login.module.css";

const Login = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className={style.login_main}>
        <div className={style.login_form}>
          <h1>Login Here!</h1>
          <form action="#" method="post" id="form" className={style.form}>
            <legend>Log in to your Account</legend>
            <div className={style.input}>
              <input
                type="email"
                name="username"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className={style.input}>
              <input
                type="password"
                name="login-password"
                placeholder="Password"
                required="required"
              />
            </div>
            <h4>
              <NavLink to="/forgot">Forgot Password?</NavLink>
            </h4>
            <div className={style.submit_btn}>
              <button type="button" onclick="loginMain()">
                Submit
              </button>
            </div>
            <div className={style.input_login}>
              <span>If you don't have an acount.</span>
              <NavLink to="/signup">Sign up</NavLink>
            </div>
          </form>
        </div>
        <div className={style.login_img}>
          <img
            src="../other-images/Computer-login.png"
            alt="Image Of User Login to Computer"
          />
        </div>
      </main>
    </>
  );
};

export default Login;
