import React from "react";
import { MdBrunchDining } from "react-icons/md";
import { addOns, brunch } from "../Data/Brunch";

export const Brunch = () => {
  return (
    <>
      <div className="section-title">
        <div className="icon">
          <MdBrunchDining />
        </div>
        <h3>Crepes & waffles</h3>
      </div>
      <div className="main-container">
        <div className="brunch">
          <h4>Sweet Crepes:</h4>
          <ul className="items">
            {brunch.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}{" "}
                {item.extra && `- Extra: ${item.extra}`}
              </li>
            ))}
          </ul>
        </div>
        <div className="add-ons">
          <h4>Add-ons:</h4>
          <ul className="items">
            {addOns.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
