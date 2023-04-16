import React from 'react';
import SideNav from '../SideNav/SideNav';
import './brand.css';
import { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from "../../Assets/Documents/resume2023.pdf";
import mepic from "../../Assets/Images/mepic.png"

const Brand = () => {

  const [aboutMe, setAboutMe] = useState(false)
  const [resume, setResume] = useState(false)

  /// changes state based on which link is cliked
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
    <div className="banner">
      <SideNav
        clickAboutMe={clickAboutMe}
        clickResume={clickResume}
      />

      <div className='brand-statement'>
        <div className="bubble">
          <h1 className='brand-txt'> let's create something </h1>

          <div className="bg_img_change">

          </div>
        </div>
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

      {resume != true ? null : <div className='wrapper-sqr-about-me'>
        <div id="true" className="resume_container">
          <button className="close-btn-resume" type="button" onClick={closeButton}>x</button>
          <embed className="pdf-resume" 
          src={require("../../Assets/Documents/resume2023.pdf")} width="800px" height="700px" />
          <p class="mobile-download">Looks like you're looking at this screen on mobile. Download the PDF  
          <br></br>
          <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/12N943zZQlYcDx3bUVrzcxCSp4YP6hs8v/view?usp=sharing" >here</a>
          </p>
        </div>
      </div>

      }
      <img
        src={mepic}
        className="mepic"
        alt="a drawing of Londa"
      />

    </div>
  )
};
export default Brand;