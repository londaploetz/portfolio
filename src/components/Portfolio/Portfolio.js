import React from 'react';
import './portfolio.css';



///display mapped projcets

const Portfolio = ({ imageP, title, text, link }) => (
<div>
  <div className="portfolios-container__portfolio">
    <div className="portfolios-container__portfolio-title">
      <h1>{title}</h1>

      <img className='images' src={imageP} />
    </div>
    <div className="portfolios-container_portfolio-text">
      <p>{text}</p> 
      <a className='btn_github_prg' 
        href = {`${link}`}
       > View Project in Github </a>
    </div>
  
  </div>
  </div>
);

export default Portfolio;