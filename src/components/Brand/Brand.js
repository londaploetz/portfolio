import React from 'react';
import SideNav from '../SideNav/SideNav';
import Footer from '../Footer/Footer';
import './brand.css';
import { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from "../../Assets/Documents/resume2023.pdf";


const Brand = (props) => {

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
          <Document file={resumePDF}>
            <Page pageNumber={1} />
          </Document>
        <button className="close-btn-resume" type="button" onClick={closeButton}>x</button>
      </div>
       </div>
      }
<Footer />

    </div>
  )
};
export default Brand;