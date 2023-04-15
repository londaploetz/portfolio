import React from 'react';
import './portfolio.css';



///display mapped projcets

const Portfolio = ({ imageP, title, text, link, live }) => (
<div>
  <div className="portfolios-container__portfolio">
    <div className="portfolios-container__portfolio-title">
      <h1>{title}</h1>
      <a className='btn_github_prg' 
        href = {`${live}`}
       > Live Website </a>
      <a className='btn_github_prg' 
        href = {`${link}`}
       > GitHub Repository </a>
      <img className='images' src={imageP} />
    </div>
    <div className="portfolios-container_portfolio-text">
      <p>{text}</p>  
   
       
    </div>
  
  </div>
  </div>
);

export default Portfolio;