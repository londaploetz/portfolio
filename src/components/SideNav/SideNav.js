import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"
import {useState} from "react"; 



const SideNav = (props) => {
  
const [aboutMe, setAboutMe] = useState(false)
const [resume, setResume] = useState(false)

function clickAboutMe () {
setAboutMe(true)
}
function closeButton () {
  setAboutMe(false)
}

return (
<div className='connect-links'>
    <img className='email-img'
    src={email} 
    />  
    <button className="email-link"onClick={() => window.location = 'mailto:lploetz@hotmail.com'}> let's connect</button>


   <div className="side-nav-bar">
    <button className="about" onClick={clickAboutMe}>About Me</button> 
    <button className="project">Projects</button> 
    <button className="resume" >Resume</button> 
   
  </div> 
  

  {aboutMe != true ? null : <div id = {aboutMe} className="about-Me">
  <button type="button" onClick={closeButton}>x</button> 
  <div className='about-me-txt'>
      <p> all about mee yay</p>
  </div>
</div> }


</div>
)
};
export default SideNav;