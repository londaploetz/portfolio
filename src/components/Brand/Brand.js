import React from 'react';
import SideNav from '../SideNav/SideNav';
import './brand.css';
import { useState } from "react";
import mepic from "../../Assets/Images/mepic1.png"
import peace from "../../Assets/Images/peace.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <Container fluid className='banner'>
      <Row className="banner-nav">
        <Col>
          <SideNav
            clickAboutMe={clickAboutMe}
            clickResume={clickResume}
          />
        </Col>
      </Row>
      <Row className="name-pic">
        <Col lg={6} md={5} sm={12} className='tagline'>
          <h1 className='londa'>LONDA <br></br>  PLOETZ</h1>
          <Row className='circle-links'>
            <Col >
              <a href='mailto:lploetz@hotmail.com'
                target="_blank"
                className="email-img"
                rel="noopener noreferrer"
              ></a> </Col>
            <Col  >
              <a href="https://github.com/londaploetz"
                target="_blank"
                className="github-img"
                rel="noopener noreferrer"
              ></a> </Col>
            <Col  >
              <a href="https://linkedin.com/in/londa-ploetz"
                target="_blank"
                className="linkedin-img"
                rel="noopener noreferrer"
              ></a> </Col>
          </Row>
        </Col>


        {aboutMe != true ? null : <Col lg={6} md={7} sm={12} className='about-me'>

          <h2 className='about-me-title'>
            <Col>  about me</Col>
            <Col> <button className="close-btn " type="button" onClick={closeButton}>X</button>
            </Col>
          </h2>

          <div id="true" className="about-me-bg">
            <h2 className='about-me-title-lg'> about me
              <button className="close-btn-lg " type="button" onClick={closeButton}>X</button>
            </h2>


            <div className='about-me-txt'>
              <p> A front-end developer who loves to engineer creative, fun, and innovative projects.
                Bachelor’s Degree of Fine Arts brings an important understanding of communication and collaboration,
                thriving in a teamwork setting.
                With years spent teaching, take a great deal of patience and quick problem-solving skills.
                Ready to bring my creativity and a passion for coding to the next level,
                adding value by providing creative solutions.</p>
            </div>
          </div>
        </Col>}

        {resume != true ? null : <Col lg={6} md={7} sm={12} xs={12}  className='resume-true'>
          <div id="true" className="resume_container">
            <h1 className='resume-top'> resume <button className="close-btn-lg" type="button" onClick={closeButton}>X</button>
            </h1>
            <embed className="pdf-resume"
              src={require("../../Assets/Documents/resume2023.pdf")} width="800px" height="700px" />
            <Col Col lg={6} md={7} sm={12} xs={12}  className='small-download'>
              <p class="mobile-download">Looks like you're looking at this screen on mobile. Download the PDF
                <br></br>
                <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/12N943zZQlYcDx3bUVrzcxCSp4YP6hs8v/view?usp=sharing" >here</a>
              </p>
           
                <img
                  src={peace}
                  className="peace"
                  alt="peace hand img"
                />

      
            </Col>
          </div>
        </Col>

        }

        <Col lg={6} md={7} sm={12} xs={12} >
          <img
            src={mepic}
            className="mepic1"
            alt="a drawing of Londa"
          />
        </Col>
      </Row>
    </Container>

  )
};

{/* 
 <Container fluid>
        <Row>

          <Col md={4}>
            <SideNav
              clickAboutMe={clickAboutMe}
              clickResume={clickResume}
            />
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <div className='brand-statement'>
              <div className="bubble">
                <h1 className='brand-txt'> let's create something </h1>
                <div className="bg_img_change">
                </div>
              </div>
            </div>
          </Col>

          {aboutMe != true ? null : <div className='wrapper-sqr-about-me'>
            <h2 className='about-me-title'> about me
              <button className="close-btn " type="button" onClick={closeButton}>X</button>
            </h2>

            <div id="true" className="about-me-bg">
              <h2 className='about-me-title-lg'> about me
                <button className="close-btn-lg " type="button" onClick={closeButton}>X</button>
              </h2>


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
            <h2 className='resume-title'> resume  <button className="close-btn-resume" type="button" onClick={closeButton}>x</button> </h2>
            <div id="true" className="resume_container">
              <h2 className='resume-title-lg'> resume  <button className="close-btn-resume-lg" type="button" onClick={closeButton}>x</button> </h2>
              <embed className="pdf-resume"
                src={require("../../Assets/Documents/resume2023.pdf")} width="800px" height="700px" />
              <p class="mobile-download">Looks like you're looking at this screen on mobile. Download the PDF
                <br></br>
                <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/12N943zZQlYcDx3bUVrzcxCSp4YP6hs8v/view?usp=sharing" >here</a>
              </p>
              <img
                src={peace}
                className="peace"
                alt="peace hand img"
              />
            </div>
          </div>

          }
          <Col md={{ span: 6, offset: 3 }}>
            <img
              src={mepic}
              className="mepic"
              alt="a drawing of Londa"
            />
          </Col>
        </Row>
      </Container>  */}



//   )
// };
export default Brand;