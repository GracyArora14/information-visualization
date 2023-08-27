// import React from "react";
import "./Hero.css";
import Cards from "./Cards";
// import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="">
        {/* <div className=" left-side-gradient-div"> </div> */}
        <div className=" right-side-gradient-div"> </div>
        <div className="hero-div">
          <h1 className="hero-title">
            Information <br></br> Visualization
          </h1>
          <h3 className=" hero-text">Kanupriya Johari (RA2111026010373)</h3>
          <h3 className=" hero-text">Gracy Arora (RA2111026010390) </h3>
          <h3 className=" hero-text">Sharad Asawa (RA2111026010365)</h3>
          <h2 className="hero-desc">
            Hey !! We are Computer Science Undergraduate pursuing 
            B.tech CSE with specialization in Artificial Intelligence and Machine Learning.We belong from U2 section.
          </h2>

          {/* <Link to="/test" className="hero-button">
            <p className="mr-2">Get Started</p>
            <i className="fa-solid fa-arrow-right "></i>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
