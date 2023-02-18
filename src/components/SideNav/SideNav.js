import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"
import { useState } from "react";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import { Link, useLocation } from "react-router-dom";

const SideNav = (props) => {

  // const [whichPage, setWhichPage] = useState('home');

  // function switchNav() {
  //   if (whichPage === 'home') {
  //     setWhichPage("projects")
  //   } else if (whichPage === "projects") {
  //     setWhichPage()
  //   }
  // }
  return (
    <div className='side-nav-bar'>
      <h1 className='londa'>
        Londa Ploetz
      </h1>
      <img className='email-img'
        src={email}
        type="button"
        onClick={() => window.location = 'mailto:lploetz@hotmail.com'}
      />
      <img className='github-img'
        src={github}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://github.com/londaploetz";
        }}

      />
      <img className='linkedin-img'
        type="button"
        src={linkedin}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://linkedin.com/in/londa-ploetz";
        }}
      />


      <div className="connect-links">
        {/* <button onClick= {switchNav}> {whichPage === 'home' ? : "switch to local"} </button> */}
        <button className="btn-links" onClick={props.clickAboutMe}>About Me</button>
        <button className="btn-links" onClick={(e) => {
          e.preventDefault();
          window.location.href = "/projects";
        }} > Projects </button>
        <button className="btn-links" onClick={props.clickResume}>Resume</button>

      </div>
    </div>
  )
};
export default SideNav;