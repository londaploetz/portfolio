import React from 'react';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



const HomeNav = () => {

/// homenav with link back to home page
      return (
            <Container fluid>
                  
            <div className="homeNav_container1">
                  <Row className="homeNav_container">
                        <Col lg={10} sm={10}>  </Col>
                  <Col lg={2} sm={2} > 
                  <Link
                        to="/home"
                        id="home-text"
                        className='project-home'>
                        home
                  </Link>
                  </Col> 
                  </Row> 
     
            </div> 
            </Container>
      )
}



export default HomeNav;