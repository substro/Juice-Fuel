import React from "react";
import { GiFullPizza } from "react-icons/gi";
import { schedules } from "../Data/Schedule";

export const Saj = () => {
  return (
    <>
      <div className="section-title">
        <div className="icon">
          <GiFullPizza />
        </div>
        <h3>Saj </h3>
        <div className="ball"></div>
        <h4>{schedules.saj}</h4>
      </div>
    </>
  );
};
