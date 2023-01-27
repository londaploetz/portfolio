import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"
import {useState} from "react"; 
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from "../../amazing/resume2023.pdf"; 


const SideNav = () => {
  
const [aboutMe, setAboutMe] = useState(false)
const [resume, setResume] = useState(false)

function clickAboutMe () {
setAboutMe(true)
setResume(false)
}

function clickResume () {
  setResume(true)
  setAboutMe(false)
}

function closeButton () {
  setAboutMe(false)
  setResume(false)
}

return (
<div className='connect-links'>
    <img className='email-img'
    src={email} 
    />  
    <button className="email-link"onClick={() => window.location = 'mailto:lploetz@hotmail.com'}> let's connect</button>


   <div className="side-nav-bar">
    <button className="btn-links" onClick={clickAboutMe}>About Me</button> 
    <button className="btn-links" > Projects</button> 
    <button className="btn-links" onClick={clickResume}>Resume</button> 
   
  </div> 

  {aboutMe != true ? null : <div id = "true" className="about-me-bg">
  <button className="close-btn "type="button" onClick={closeButton}>x</button> 
  <div className='about-me-txt'>
      <p> all about mee yay</p>
  </div>
</div> }

{resume != true ? null : <div id = "true" className="about-me-bg">

    <div className='pdf-container'>
      <Document file= {resumePDF}>
        <Page pageNumber={1} /> 
          </Document>{console.log(resume)}
    </div>

  <button className="close-btn-resume"type="button" onClick={closeButton}>x</button> 
</div>
}
</div>
)
};
export default SideNav;