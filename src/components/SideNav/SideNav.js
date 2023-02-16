import React from 'react';
import './sidenav.css';
import email from "../../Assets/email.png"
import { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from "../../Assets/Documents/resume2023.pdf";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import Projects from '../Pages/Projects';

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


      <div className="side-nav-bar">
        <button className="btn-links" onClick={clickAboutMe}>About Me</button>
        <button className="btn-links" onClick={(e) => {
          e.preventDefault();
          window.location.href = "/projects";
        }} > Projects </button>
        <button className="btn-links" onClick={clickResume}>Resume</button>

      </div>

      {aboutMe != true ? null : <div className='wrapper-sqr-about-me'>
        <div id="true" className="about-me-bg">

          <button className="close-btn " type="button" onClick={closeButton}>x</button>
          <div className='about-me-txt'>
            <p> A front-end developer who loves to engineer creative, fun, and innovative projects.
              Bachelor’s Degree of Fine Arts brings an important understanding of communication and collaboration,
              thriving in a teamwork setting.
              With years spent teaching, take a great deal of patience and quick problem-solving skills.
              Ready to bring my creativity and a passion for coding to the next level,
              adding value by providing creative solutions.</p>

          </div>
        </div>
      </div>}

      {resume != true ? null : <div id="true" className="resume_container">

        <div className='pdf-container'>
          <div className='wrapper-sqr'></div>
          <div className='top-sqr'></div>
          <div className='btm-sqr'></div>

          <div className='v-line'></div>
          <div className='v-line2'></div>
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