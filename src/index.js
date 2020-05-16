//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const fName = "ANIL";
const lName = "Hegde";
const luckyNum = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>My lucky number {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
