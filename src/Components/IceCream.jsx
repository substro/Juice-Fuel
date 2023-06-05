import React from "react";
import { IoIosIceCream } from "react-icons/io";
import { flavours } from "../Data/IceCream";

export const IceCream = () => {
  return (
    <>
      <div className="section-title">
        <div className="icon">
          <IoIosIceCream />
        </div>
        <h3>Arabic Ice Cream</h3>
      </div>
      <div className="ice-cream-container">
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
              </td>
              <td>
                <h1></h1>
              </td>
            </tr>
          </thead>

          <tbody>
            {flavours.map((x) => {
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
    </>
  );
};
