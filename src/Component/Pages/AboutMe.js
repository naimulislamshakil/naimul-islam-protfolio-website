import React from "react";
import "./Banner.css";
import AOS from "aos";
import arrow from "../../img/arrow.png";
import axios from "axios";
import "aos/dist/aos.css"; // You can also use <link> for styles
import fileDownload from "js-file-download";
// ..
AOS.init();

const AboutMe = () => {
  const downlode = (e) => {
    e.preventDefault();
    axios({
      url: "https://boiling-shore-42558.herokuapp.com/resume",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, "Naimul_Islam_Resume_For_Web_Developer.pdf");
    });
  };
  return (
    <div id="about" className="bg-about">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/xXgcnyz/1.jpg"
            className="md:max-w-xs max-w-[200px]"
            alt=""
          />
          <div>
            <div data-aos="fade-left">
              <h5 className="text-2xl font-bold text-secondary">
                I'm A Developer
              </h5>
            </div>
            <div data-aos="fade-left">
              <h1 className="text-4xl font-bold">
                I Can Devlop Anything <br /> You Want
              </h1>
            </div>
            <div data-aos="fade-left">
              <p className="py-6 text-gray-400 text-md">
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

              <div className="arrow-text">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  Interactive Front-End as per the design.
                </h3>
              </div>
              <div className="arrow-text">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  JavaScript & TypeScript.
                </h3>
              </div>
              <div className="arrow-text">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  Responsive web layout.
                </h3>
              </div>
              <div className="arrow-text">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  Firebase for React Authentication.
                </h3>
              </div>
              <div className="arrow-text">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  Building REST API.
                </h3>
              </div>
              <div className="arrow-text">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  Managing database
                </h3>
              </div>
            </div>
            <button
              onClick={downlode}
              data-aos="fade-up"
              className="btn btn-info mt-5"
            >
              Downlode My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
