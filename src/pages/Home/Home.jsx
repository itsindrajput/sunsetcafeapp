import React from "react";
import Header from "../../components/Home/Header";
import About from "../../components/Home/About";
import Offer from "../../components/Home/Offer";
import Reservation from "../../components/Home/Reservation";
import Motivation from "../../components/Home/Motivation";
import "./AppDesktop.css";
import "./AppMobile.css";
import "./AppTablet.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Offer></Offer>
      <Reservation></Reservation>
      <Motivation></Motivation>
    </>
  );
};

export default Home;
