import React from "react";
import { LuCupSoda } from "react-icons/lu";
import { cold } from "./Data/Drinks";

export const Cold = () => {
  return (
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
          <tr className="item size">
            <td>
              <h1></h1>
            </td>
            <td className="sizes">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
              <span>Bottle</span>
            </td>
            <td>
              <h1></h1>
            </td>
          </tr>
        </thead>

        <tbody>
          {cold.map((x) => {
            return (
              <tr className="item" key={x.id}>
                <td>
                  <h1>{x.name.en}</h1>
                </td>

                <td className="prices">
                  {x.sizes.map((y, index) => {
                    return <span key={index}>{y.price}</span>;
                  })}
                </td>

                <td>
                  <h1>{x.name.ar}</h1>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
