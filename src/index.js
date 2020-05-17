//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currnetDate = new Date();
console.log(currnetDate);

// const hour = currnetDate.toLocaleString("en-US", {
//   hour: "numeric",
//   hour12: true
// });

const hour = currnetDate.getHours();

let customStyle = {
  color: "gray"
};

console.log(hour);

let greeting;

if (hour < "12") {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (hour < "15") {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else if (hour < "20") {
  greeting = "Good evening";
  customStyle.color = "blue";
} else {
  greeting = "Good night";
  // customStyle.color = "";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
