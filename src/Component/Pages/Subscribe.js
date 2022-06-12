import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const subscribe = () => {
    fetch(`http://localhost:5000/post/${email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.upsertedCount === 1) {
          toast.success(`Thanks ${email} for Subscribe Me.`);
        } else {
          toast.warning(`${email} You Alrady Add.`);
        }
      });
  };
  return (
    <div>
      <div class="hero bg-blue-500 rounded-xl">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="flex">
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
              class="input input-bordered input-info w-full max-w-xs"
            />
            <button onClick={subscribe} class="btn btn-primary">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Subscribe Now</h1>
            <h1 class="text-4xl font-bold text-white">Get My Newsletter</h1>
            <p class="py-6 text-white">
              Get latest news, updates, tips and trics in your inbox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
