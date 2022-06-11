import React, { useEffect, useState } from "react";
import "./Banner.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/portfolio")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  console.log(items);

  const showAll = () => {
    console.log("click");
  };
  const specife = (value) => {
    console.log("click", value);
  };
  return (
    <div className="bg-portfolio">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Portfolio
      </h2>
      <h1 className="text-4xl font-bold text-center">My Amazing Works</h1>
      <p className="text-center my-5 text-lg">
        Here is a collaction of my best Amazing works!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 justify-evenly mt-5">
        <button
          onClick={showAll}
          className="font-bold hover:btn-primary btn p-5 w-3/4"
        >
          Show All
        </button>
        <button
          onClick={() => specife("ReactJs")}
          className="font-bold hover:btn-primary btn p-5 w-3/4"
        >
          ReactJs
        </button>
        <button
          onClick={() => specife("Express")}
          className="font-bold hover:btn-primary btn p-5 w-3/4"
        >
          Express
        </button>
        <button
          onClick={() => specife("MongoDB")}
          className="font-bold hover:btn-primary btn p-5 w-3/4"
        >
          MongoDB
        </button>
        <button
          onClick={() => specife("TypeScript")}
          className="font-bold hover:btn-primary btn p-5 w-3/4"
        >
          TypeScript
        </button>
        <button
          onClick={() => specife("JavaScript")}
          className="font-bold hover:btn-primary btn p-5 w-3/4"
        >
          JavaScript
        </button>
      </div>
      <div>
        {items.map((item) => (
          <PortfolioCard key={item._id} item={item}></PortfolioCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
