import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Awesome = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
        <div class="w-80 mx-auto mt-5">
          <figure>
            <div data-aos="fade-right">
              <img
                className="w-[100px] mx-auto"
                src="https://i.ibb.co/Ps2thXc/perfect.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div class="card-body">
            <div data-aos="fade-right">
              <h2 class="card-title justify-center">Pixel Perfect</h2>
            </div>
            <div data-aos="fade-right">
              <p className="dark-gray">
                Pixel perfect web development means “coding a website to match
                the web designs pixel by pixel”. In reality, this is achievable
                only for a fixed set of screen resolutions, so the general
                meaning of the term is “web development that follows the web
                designer's intent perfectly
              </p>
            </div>
          </div>
        </div>
        <div class="w-80 mx-auto mt-5">
          <figure>
            <div data-aos="fade-down">
              <img
                className="w-[100px] mx-auto"
                src="https://i.ibb.co/rcsGPB1/idea.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div class="card-body">
            <div data-aos="fade-up">
              <h2 class="card-title justify-center">Awesome Idea</h2>
            </div>
            <div data-aos="fade-up">
              <p className="dark-gray">
                Idea development is simply about implementing different ways of
                exploring ideas and composing solutions that best solve the
                problem in the most effective manner.
              </p>
            </div>
          </div>
        </div>
        <div class="w-80 mx-auto mt-5">
          <figure>
            <div data-aos="fade-left">
              <img
                className="w-[100px] mx-auto"
                src="https://i.ibb.co/CwQNdJY/high.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div class="card-body">
            <div data-aos="fade-left">
              <h2 class="card-title justify-center">High Quality</h2>
            </div>
            <div data-aos="fade-left">
              <p className="dark-gray">
                Professional development refers to continuing education and
                career training after a person has entered the workforce in
                order to help them develop new skills, stay up-to-date on
                current trends, and advance their career
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awesome;
