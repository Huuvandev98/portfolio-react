import React from "react";
import "./home.css";
import Me from "../../assets/avatar.jpg";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Nguyen Van</h1>
        <span className="home__education">
          I'm Van, a front-end developer.
        </span>
        <div className="btn__intro">
          <a href="#portfolio" className="btn">
            Portfolio
          </a>
          <a href="#about" className="btn">
            About
          </a>
        </div>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
