import React from "react";
import AboutMe from "./AboutMe";
import Awesome from "./Awesome";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Skill from "./Skill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Awesome></Awesome>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Skill></Skill>
    </div>
  );
};

export default Home;
