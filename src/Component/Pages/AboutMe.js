import React from "react";
import "./Banner.css";

const AboutMe = () => {
  return (
    <div className="bg-about">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src="https://i.ibb.co/xXgcnyz/1.jpg" class="max-w-sm" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
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

export default AboutMe;
