import React from "react";

const Awesome = () => {
  return (
    <div className="mt-16 bg-neutral">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
        <div class="w-80 mx-auto mt-5">
          <figure>
            <img
              className="w-[100px] mx-auto"
              src="https://i.ibb.co/Ps2thXc/perfect.png"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title mx-auto">Pixel Perfect</h2>
            <p>
              Pixel perfect web development means “coding a website to match the
              web designs pixel by pixel”. In reality, this is achievable only
              for a fixed set of screen resolutions, so the general meaning of
              the term is “web development that follows the web designer's
              intent perfectly
            </p>
          </div>
        </div>
        <div class="w-80 mx-auto mt-5">
          <figure>
            <img
              className="w-[100px] mx-auto"
              src="https://i.ibb.co/rcsGPB1/idea.png"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title mx-auto">Awesome Idea</h2>
            <p>
              Idea development is simply about implementing different ways of
              exploring ideas and composing solutions that best solve the
              problem in the most effective manner.
            </p>
          </div>
        </div>
        <div class="w-80 mx-auto mt-5">
          <figure>
            <img
              className="w-[100px] mx-auto"
              src="https://i.ibb.co/CwQNdJY/high.png"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title mx-auto">High Quality</h2>
            <p>
              Professional development refers to continuing education and career
              training after a person has entered the workforce in order to help
              them develop new skills, stay up-to-date on current trends, and
              advance their career
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awesome;
