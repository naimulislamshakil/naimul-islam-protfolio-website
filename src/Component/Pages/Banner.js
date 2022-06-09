import React from "react";
import "./Banner.css";
import img from "../../img/avatar.png";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="bg-image rounded-lg">
      <Navbar></Navbar>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} class="max-w-sm" alt="" />
          <div>
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
