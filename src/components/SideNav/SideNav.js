import React from 'react';
import './sidenav.css';
import { Link, useLocation } from "react-router-dom";
import HomeNav from '../Portfolio/HomeNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNav = (props) => {

  const location = useLocation();

  /// checks whether to display projects link
  if (location.pathname === "/projects") {
    return <HomeNav />
  } else {
    return (

      <Container fluid className='navbar-container'>
        <Row className="navbar-row">
          <Col lg={6} sm={12}> </Col>
          <Col lg={2} sm={12} className='nav-btn' >  <button className="btn-links" onClick={props.clickAboutMe}>about me</button> </Col>
          <Col lg={2} sm={12} className='nav-btn'>  <button className="btn-links">
            <Link
              to="/projects"
              id="projects"
              className='btn-links'>
              projects
            </Link></button>
          </Col>
          <Col lg={2} sm={12} className='nav-btn' >
            <button className="btn-links" onClick={props.clickResume}>resume</button>
          </Col>
  
          {/* <Col lg={1} sm={12}>
            <a href='mailto:lploetz@hotmail.com'
              target="_blank"
              className="email-img"
              rel="noopener noreferrer"
            ></a> </Col>
          <Col lg={1} sm={12}>
            <a href="https://github.com/londaploetz"
              target="_blank"
              className="github-img"
              rel="noopener noreferrer"
            ></a> </Col>
          <Col lg={1} sm={12}>
            <a href="https://linkedin.com/in/londa-ploetz"
              target="_blank"
              className="linkedin-img"
              rel="noopener noreferrer"
            ></a> </Col> */}
        </Row>
      </Container>


    )
  }
};

export default SideNav;