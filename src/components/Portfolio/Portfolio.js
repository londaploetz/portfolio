import React from 'react';
import './portfolio.css';



const Portfolio = ({ imageP, title, text }) => (
  <div className="portfolios-container__portfolio">
    <div className="portfolios-container__portfolio-title">
      <div />
      <h1>{title}</h1>
      <img className='images' src={imageP} />
    </div>
    <div className="portfolios-container_portfolio-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Portfolio;