import React from "react";
import { GiFullPizza } from "react-icons/gi";
import { schedules } from "../Data/Schedule";
import { saj } from "../Data/Saj";

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
      <saj-container>
        <table>
          <thead>
            <tr className="item size">
              <td>
                <h1></h1>
              </td>
              <td>
                <h1>مناقيش</h1>
              </td>
            </tr>
          </thead>

          <tbody>
            {saj.map((x) => {
              return (
                <tr className="item" key={x.id}>
                  <td className="prices">{x.price}</td>
                  <td>
                    <h1>{x.name}</h1>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </saj-container>
    </>
  );
};
