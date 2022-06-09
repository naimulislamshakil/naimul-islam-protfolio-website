import React from "react";
import "./Banner.css";
import img from "../../img/avatar.png";

const Banner = () => {
  return (
    <div className="bg-image rounded-2xl">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} class="max-w-sm" alt="" />
          <div>
            <h5 className="text-2xl font-bold text-primary">Hello, I'm</h5>
            <h1 class="text-5xl font-bold text-secondary">Naimul Islam</h1>
            <h2 className="text-xl">
              A <span>Junior Front-End Web Developer</span> From{" "}
              <span>Bangladesh.</span>
            </h2>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
