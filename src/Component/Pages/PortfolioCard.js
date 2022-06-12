import React from "react";
import "./Banner.css";

const PortfolioCard = ({ item }) => {
  const { img, titel } = item;
  return (
    <div>
      <div class="card w-80 bg-base-100 shadow-xl h-[350px]">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{titel}</h2>

          <div class="card-actions justify-end items">
            <button class="btn btn-secondary">Learn More!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
