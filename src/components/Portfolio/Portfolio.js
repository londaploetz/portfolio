import React from 'react';
import './portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
///display mapped projcets

const Portfolio = ({ imageP, title, text, link, live }) => (


  <div className="portfolios-container__portfolio">

    <div className="portfolios-container__portfolio-title">
      <h1>{title} </h1>
      <Container>
        <Row>
          <Col >
            <li className='btn_github_prg'
              href={`${live}`}
            > Live Website </li>
          </Col>
          <Col >
            <li className='btn_github_prg'
              href={`${link}`}
            > GitHub Repository </li>
          </Col>
        </Row>
      </Container>
      <img className='images' src={imageP} />
    </div>
    <div className="portfolios-container_portfolio-text">
      <p>{text}</p>


    </div>

  </div>


);

export default Portfolio;