import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div class="hero bg-blue-500 rounded-xl">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-info w-full max-w-xs"
          />
          <div>
            <h1 className="text-xl font-bold text-white">Subscribe Now</h1>
            <h1 class="text-4xl font-bold text-white">Get My Newsletter</h1>
            <p class="py-6 text-white">
              Get latest news, updates, tips and trics in your inbox
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
