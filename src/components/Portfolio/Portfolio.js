import React from 'react';
import './portfolio.css';
import HomeNav from "./HomeNav"
import { Link } from 'react-router-dom';




const Portfolio = ({ imageP, title, text, link }) => (
<div>
  <div className="portfolios-container__portfolio">
    <div className="portfolios-container__portfolio-title">
      <h1>{title}</h1>

      <img className='images' src={imageP} />
    </div>
    <div className="portfolios-container_portfolio-text">
      <p>{text}</p> 
      <button className='btn_github_prg' type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `${link}`;
        }}> View Project in Github</button>
    </div>
  
  </div>
  </div>
);

export default Portfolio;