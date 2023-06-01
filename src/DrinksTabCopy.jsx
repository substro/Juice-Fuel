import React from "react"
import { LuCupSoda } from "react-icons/lu"
import content from "./content.json"

const DrinksTabCopy = () => {
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
      <table>
        <thead>
          <tr className="sizes">
            <th></th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
            <th>Bottle</th>
          </tr>
        </thead>

        <tbody>
          {content.menu.map((x) => {
            return (
              <tr className="item">
                <td>
                  <h1>{x.name.en}</h1>
                </td>

                <td className="prices">
                  {x.sizes.map((y, index) => {
                    return <span key={index}>{y.price}</span>
                  })}
                </td>

                <td>
                  <h1>{x.name.ar}</h1>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DrinksTabCopy
