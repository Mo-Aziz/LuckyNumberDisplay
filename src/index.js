import React from "react";
import ReactDOM from "react-dom";

const name = "Max";
const luckyNum = Math.floor(Math.random() * 10);
ReactDOM.render(
<div>
  <h1>Hello {name}!</h1>
  <p> Your lucky number is {luckyNum} </p>
</div>, 
document.getElementById("root"));
