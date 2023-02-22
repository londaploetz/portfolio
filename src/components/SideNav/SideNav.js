import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"
import { useState } from "react";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import { Link, useLocation } from "react-router-dom";
import HomeNav from '../Portfolio/HomeNav';

const SideNav = (props) => {

  const location = useLocation();

  if (location.pathname === "/projects") {

    return <HomeNav />
} else {

return (


  // const [whichPage, setWhichPage] = useState('home');

  // function switchNav() {
  //   if (whichPage === 'home') {
  //     setWhichPage("projects")
  //   } else if (whichPage === "projects") {
  //     setWhichPage()
  //   }
  // }

    <div className='side-nav-bar'>
      <h1 className='londa'>
        Londa Ploetz
      </h1>
<div className='circle-links'>
      <a href= 'mailto:lploetz@hotmail.com' 
         target = "_blank" 
         className = "email-img" 
         rel="noopener noreferrer"
         ></a> 
     <a href= "https://github.com/londaploetz"
         target = "_blank" 
         className = "github-img" 
         rel="noopener noreferrer"
         ></a> 
        <a href= "https://linkedin.com/in/londa-ploetz"
         target = "_blank" 
         className = "linkedin-img" 
         rel="noopener noreferrer"
         ></a> 
     </div>


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
}
};

export default SideNav;