import React, { useState } from "react";
import Menu from "./Menu";
import "./portfolio.css";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title"> My Portfolio</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() => filterItem("css/javascript")}>Css/Javascript</span>
        <span className="work__item" onClick={() => filterItem("scss/react")}>Scss/React</span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt=" " className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" rel='noreferrer'>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
