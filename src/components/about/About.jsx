import React from "react";
import "./about.css";
import ImgAbout from "../../assets/avatar.jpg";
import Cv from "../../assets/NGUYEN-HUU-VAN-FRONT-END-CV.pdf"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={ImgAbout} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Van, a front-end developer. Although I am just a fresher and
              my experience is limited. However, I believe with my effort and
              capability, I will try my best to complete any new projects.
            </p>
            <ul className="about__list">
              <li>
                <span >Name:</span> <span>Nguyen Huu Van</span>
              </li>
              <li>
                <span>Address:</span> <span>Lien Chieu, Da Nang</span>
              </li>
              <li>
                <span>Phone: </span> <span><a href="tel:0325962200">+8432 596 2200</a></span>
              </li>
              <li>
                <span>Email:</span> <span>nguyenvanqt.dev@gmail.com</span>
              </li>
              <li>
                <span>Github: </span> <span><a href="https://github.com/Huuvandev98">github.com/Huuvandev98</a></span>
              </li>
            </ul>
            <a href={Cv} className="btn" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
