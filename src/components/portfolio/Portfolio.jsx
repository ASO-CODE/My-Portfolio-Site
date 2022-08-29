import React, { useState } from "react";
import "./portfolio.css";
import data from "./data";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(data);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioData.map((singleItem, index) => {
          const { img, title, github, live } = singleItem;
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={live}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
