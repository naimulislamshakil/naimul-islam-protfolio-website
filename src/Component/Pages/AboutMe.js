import React from "react";
import "./Banner.css";
import AOS from "aos";
import arrow from "../../img/arrow.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (
    <div className="bg-about">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src="https://i.ibb.co/xXgcnyz/1.jpg" class="max-w-sm" alt="" />
          <div>
            <div data-aos="fade-left">
              <h5 className="text-2xl font-bold text-secondary">
                I'm A Developer
              </h5>
            </div>
            <div data-aos="fade-left">
              <h1 class="text-4xl font-bold">
                I Can Design Anything <br /> You Want
              </h1>
            </div>
            <div data-aos="fade-left">
              <p class="py-6 dark-gray">
                Hello there! I'm a Web Developer, and I'm very passionate and
                dedicated to my work. I have acquired the skills and knowledge
                necessary to make your project a success. I enjoy every step of
                the Developer process, from discussion and collaboration.
              </p>
            </div>

            <div>
              <h2 data-aos="fade-left" className="text-xl font-bold">
                Here are a Few Highlights:
              </h2>
              <h3>
                <img src={arrow} alt="" />
              </h3>
            </div>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
