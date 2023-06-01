import React from "react"
import { LuCupSoda, LuCoffee } from "react-icons/lu"
import { Cold } from "./Data/Drinks"

const DrinksTab = () => {
  return (
    <>
      <div className="drink-container-cold">
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
            {Cold.map((x) => {
              return (
                <tr className="item" key={x.id}>
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
      <div className="drink-container-hot">
        <div className="section-title">
          <div className="icon">
            <LuCoffee />
          </div>
          <h3>Drinks</h3>
          <div className="ball"></div>
          <h4>Hot</h4>
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
            {Cold.map((x) => {
              return (
                <tr className="item" key={x.id}>
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
    </>
  )
}

export default DrinksTab
