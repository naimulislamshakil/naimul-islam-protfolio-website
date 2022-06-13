import React, { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const subscribe = () => {
    fetch(`https://boiling-shore-42558.herokuapp.com/post/${email}`, {
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
      <div className="hero bg-blue-500 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex">
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <button onClick={subscribe} className="btn btn-primary">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Subscribe Now</h1>
            <h1 className="text-4xl font-bold text-white">Get My Newsletter</h1>
            <p className="py-6 text-white">
              Get latest news, updates, tips and trics in your inbox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
