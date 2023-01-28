import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"
import { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from "../../Assets/Documents/resume2023.pdf";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";

const SideNav = () => {

  const [aboutMe, setAboutMe] = useState(false)
  const [resume, setResume] = useState(false)

  function clickAboutMe() {
    setAboutMe(true)
    setResume(false)
  }

  function clickResume() {
    setResume(true)
    setAboutMe(false)
  }

  function closeButton() {
    setAboutMe(false)
    setResume(false)
  }

  return (
    <div className='connect-links'>
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


      <div className="side-nav-bar">
        <button className="btn-links" onClick={clickAboutMe}>About Me</button>
        <button className="btn-links" > Projects</button>
        <button className="btn-links" onClick={clickResume}>Resume</button>

      </div>

      {aboutMe != true ? null : <div id="true" className="about-me-bg">
        <button className="close-btn " type="button" onClick={closeButton}>x</button>
        <div className='about-me-txt'>
          <p> all about mee yay</p>
        </div>
      </div>}

      {resume != true ? null : <div id="true" className="about-me-bg">

        <div className='pdf-container'>
          <Document file={resumePDF}>
            <Page pageNumber={1} />
          </Document>{console.log(resume)}
        </div>

        <button className="close-btn-resume" type="button" onClick={closeButton}>x</button>
      </div>
      }
    </div>
  )
};
export default SideNav;