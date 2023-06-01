import React from "react"
import { LuCupSoda } from "react-icons/lu"
import content from "./content.json"

const DrinksTab = () => {
  return (
    <div className="drink-container">
      <div className="section-title">
        <div className="icon">
          <LuCupSoda />
        </div>
        <h3>Drinks</h3>
        <div className="ball"></div>
        <h4>Cold</h4>
      </div>
      <div className="sizes">
        <h3>Small</h3>
        <h3>Medium</h3>
        <h3>Large</h3>
        <h3>Bottle</h3>
      </div>
      {content.menu.map((x) => {
        return (
          <div className="item">
            <h1>{x.name.en}</h1>
            <div className="prices">
              {x.sizes.map((y) => {
                return <span>{y.price}</span>
              })}
            </div>
            <h1>{x.name.ar}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default DrinksTab
