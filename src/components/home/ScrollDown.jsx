import React from "react";
import "./home.css";

const ScrollDown = () => {
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span className="home__scroll--name"> Scroll Down</span>
        <spas className="mouse">
          <span className="wheel"></span>
        </spas>
      </a>
    </div>
  );
};

export default ScrollDown;
