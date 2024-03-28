import React from "react";
import Header from "../../components/Home/Header";
import About from "../../components/Home/About";
import Reservation from "../../components/Home/Reservation";
import Motivation from "../../components/Home/Motivation";
import "./AppDesktop.css";
import "./AppMobile.css";
import "./AppTablet.css";
import OffersCarousel from "../../components/Home/OffersCarousel";

const Home = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <OffersCarousel></OffersCarousel>
      <Reservation></Reservation>
      <Motivation></Motivation>
    </>
  );
};

export default Home;
