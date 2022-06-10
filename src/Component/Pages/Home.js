import React from "react";
import AboutMe from "./AboutMe";
import Awesome from "./Awesome";
import Banner from "./Banner";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Awesome></Awesome>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;
