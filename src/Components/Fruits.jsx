import React from "react";
import leftFruits from "../assets/images/fruits-left.png";
import rightFruits from "../assets/images/fruits-right.png";

export const Fruits = () => {
  return (
    <div className="fruits-container">
      <div className="left">
        <img loading="lazy" className="fruit-image" src={leftFruits} alt="fruits" />
      </div>
      <div className="right">
        <img loading="lazy" className="fruit-image" src={rightFruits} alt="fruits" />
      </div>
    </div>
  );
};
