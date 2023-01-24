import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"


const SideNav = () => (
<div className='connect-links'>
    <img className='email-img'
    src={email} 
    /> let's connect

   <div className="side-nav-bar">
    <a href="#AboutMe">About Me</a> 
    <a href="#Projects">Projects</a>
    <a href="#Resume">Resume</a>
      
  </div>   
</div>
);
export default SideNav;