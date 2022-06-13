import React from "react";
import AboutMe from "./AboutMe";
import Awesome from "./Awesome";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Skill from "./Skill";
import Subscribe from "./Subscribe";
import Tastmonial from "./Tastmonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Awesome></Awesome>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Skill></Skill>
      <Tastmonial></Tastmonial>
      <Subscribe></Subscribe>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
