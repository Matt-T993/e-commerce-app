import React from "react";
import "./card.css";

const Card = ({ title, img }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          img +
          ")",
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
