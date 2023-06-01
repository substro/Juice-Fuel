import React from "react"

export const MainSection = () => {
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
          <button className="main-nav-btn">Drinks</button>
          <button className="main-nav-btn">Ice-Cream</button>
          <button className="main-nav-btn">Crepes & Waffles</button>
          <button className="main-nav-btn">Saj</button>
        </div>
      </div>
    </>
  )
}
