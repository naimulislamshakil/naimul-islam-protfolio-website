import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const PortfolioCard = ({ item }) => {
  const { img, titel, _id } = item;
  const navigate = useNavigate();

  const navigates = (id) => {
    navigate(`/portfolio/${id}`);
  };
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl h-[350px] mx-auto">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titel}</h2>

          <div className="card-actions justify-end items">
            <button
              onClick={() => navigates(_id)}
              className="btn btn-secondary"
            >
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
