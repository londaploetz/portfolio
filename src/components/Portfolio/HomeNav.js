import React from 'react';
import { Link, useLocation } from "react-router-dom";

const HomeNav = () => {


      return (
            <div className="homeNav_container">
                  <h1 className='londa'>
                        Londa Ploetz
                  </h1>
                  <div className='circle-links'>
                        <a href='mailto:lploetz@hotmail.com'
                              target="_blank"
                              className="email-img"
                              rel="noopener noreferrer"
                        ></a>
                        <a href="https://github.com/londaploetz"
                              target="_blank"
                              className="github-img"
                              rel="noopener noreferrer"
                        ></a>
                        <a href="https://linkedin.com/in/londa-ploetz"
                              target="_blank"
                              className="linkedin-img"
                              rel="noopener noreferrer"
                        ></a>
                  </div>
                  <Link
                        to="/home"
                        id="home-text"
                        className='project-home'>
                        Home
                  </Link>

            </div>
      )
}



export default HomeNav;