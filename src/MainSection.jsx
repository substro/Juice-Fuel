import React from "react";
import DrinksTab from "./DrinksTab";
import { Schedule } from "./Schedule";
import { IceCream } from "./IceCream";
import { Brunch } from "./Brunch";
import { Saj } from "./Saj";
import { useState } from "react";

export const MainSection = () => {
  const [activePage, setActivePage] = useState("Drinks");
  return (
    <>
      <div className="menu-title">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <h2>Menu</h2>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>

      <div className="main-section">
        <div className="nav-buttons">
          <button
            className="main-nav-btn"
            onClick={() => setActivePage("Drinks")}
          >
            Drinks
          </button>
          <button
            className="main-nav-btn"
            onClick={() => setActivePage("Ice-Cream")}
          >
            Ice-Cream
          </button>
          <button
            className="main-nav-btn"
            onClick={() => setActivePage("Crepes & Waffles")}
          >
            Crepes & Waffles
          </button>
          <button className="main-nav-btn" onClick={() => setActivePage("Saj")}>
            Saj
          </button>
        </div>
        {activePage === "Drinks" && <DrinksTab />}
        {activePage === "Ice-Cream" && <IceCream />}
        {activePage === "Crepes & Waffles" && <Brunch />}
        {activePage === "Saj" && <Saj />}
        <Schedule />
        <DrinksTab />
      </div>
    </>
  );
};
