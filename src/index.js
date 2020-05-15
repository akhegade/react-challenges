//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const name = "ANIL HEGDE";
const luckyNum = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>My lucky number {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
