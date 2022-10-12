import React from "react";
import "./skills.css";
import Image1 from "../../assets/skill1.png";
import Image2 from "../../assets/skill2.png";
import Image3 from "../../assets/skill3.png";
import Image4 from "../../assets/skill4.png";
import Image5 from "../../assets/skill5.png";
import Image6 from "../../assets/skill6.png";
import Image7 from "../../assets/skill7.png";
import Image8 from "../../assets/skill8.png";
import Image9 from "../../assets/skill9.png";
import Image10 from "../../assets/skill10.png";

const data = [
  {
    id: 1,
    image: Image2,
    title: "HTML",
  },
  {
    id: 2,
    image: Image1,
    title: "CSS",
  },
  {
    id: 3,
    image: Image3,
    title: "SASS",
    
  },
  {
    id: 4,
    image: Image4,
    title: "JAVASCRIPT",
    
  },
  {
    id: 5,
    image: Image5,
    title: "BOOTSTRAP",
    
  },
  {
    id: 6,
    image: Image6,
    title: "RESPONSIVE WEB DESIGN",
    
  },
  {
    id: 7,
    image: Image7,
    title: "REACT",
    
  },
  {
    id: 8,
    image: Image8,
    title: "GIT",
    
  },
  {
    id: 9,
    image: Image9,
    title: "FIGMA",
  },
  {
    id: 10,
    image: Image10,
    title: "PTS",
  },
];

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <div className="skills__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="skills__card" key={id}>
              <img src={image} alt="" className="skills__img" />
              <h3 className="skills__title">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
