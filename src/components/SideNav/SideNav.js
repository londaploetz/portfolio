import React from 'react';
import './sidenav.css';
import { Link, useLocation } from "react-router-dom";
import HomeNav from '../Portfolio/HomeNav';


const SideNav = (props) => {

  const location = useLocation();

  /// checks whether to display projects link
  if (location.pathname === "/projects") {
    return <HomeNav />
  } else {
    return (

      <div className='side-nav-bar'>
        <h1 className='londa'>
          londa <br />
          ploetz
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


        <div className="connect-links">
          <button className="btn-links" onClick={props.clickAboutMe}>about me</button>
          <button className="btn-links">
            <Link
              to="/projects"
              id="projects"
              className='btn-links-projects'>
              projects
            </Link></button>
          <button className="btn-links" onClick={props.clickResume}>resume</button>

        </div>
      </div>
    )
  }
};

export default SideNav;