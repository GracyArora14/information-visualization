import React from "react";
import Cards from "./Cards";
import "./Test.css";
const Test = () => {
  return (
    <>
      <div className="body">
        <div className="card">
          <h1 className="title">
            Enter the following Details
          </h1>
          <div class="inputGroup">
          <label for="Age">Age :</label>
          <input type="email" placeholder="Enter Age in Years" id="email"/>
        </div>
        <div class="inputGroup">
          <label for="password">RMT% :</label>
          <input type="number" placeholder="Enter RMT%" id="password"/>
        </div>
        <button class="button-29"><span>Submit</span></button>
        </div>
      </div>
    </>
  );
};

export default Test;
