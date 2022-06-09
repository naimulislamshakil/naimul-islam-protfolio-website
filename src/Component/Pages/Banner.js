import React from "react";
import "./Banner.css";
import img from "../../img/avatar.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import fb from "../../img/social/facebook.png";
import ln from "../../img/social/linkedin.png";
import gh from "../../img/social/github.png";

const Banner = () => {
  return (
    <div className="bg-image rounded-lg">
      <Navbar></Navbar>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} class="max-w-sm" alt="" />
          <div>
            <div className="mb-3">
              <div class="avatar">
                <div class="w-7 transition ease-in-out delay-150  hover:translate-y-2  hover:scale-100  duration-300">
                  <a
                    href="https://web.facebook.com/profile.php?id=100030513918924"
                    target="_blank"
                  >
                    <img src={fb} alt="" />
                  </a>
                </div>
              </div>
              <div class="avatar ml-3">
                <div class="w-7 transition ease-in-out delay-150  hover:translate-y-2  hover:scale-100  duration-300">
                  <a
                    href="https://www.linkedin.com/in/md-naimul-islam-134412226/"
                    target="_blank"
                  >
                    <img src={ln} alt="" />
                  </a>
                </div>
              </div>
              <div class="avatar ml-3">
                <div class="w-7 transition ease-in-out delay-150  hover:translate-y-2  hover:scale-100  duration-300">
                  <a
                    href="https://github.com/naimulislamshakil"
                    target="_blank"
                  >
                    <img src={gh} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-primary">Hello, I'm</h5>
            <h1 class="text-5xl font-bold text-secondary">Naimul Islam</h1>
            <h2 className="text-xl text-secondary">
              A{" "}
              <span className="text-primary">
                Junior Front-End Web Developer
              </span>{" "}
              From <span className="text-accent">Bangladesh.</span>
            </h2>
            <p class="py-6 text-secondary">
              I'm creative Developer based in Bangladesh, and I'm very
              passionate and dedicated to my work.
            </p>
            <div class="navbar-end">
              <button class="btn btn-outline btn-warning">
                Downlode Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
