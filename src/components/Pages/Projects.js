import React from 'react';
import EachProject from '../EachProject/EachProject';
import SideNav from '../SideNav/SideNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => (
    <div className='projects'>
       
         <Container>
             <SideNav />
             <Row> 
             <Col Col xs={12} md={12}> 
             <EachProject />
             </Col>
       </Row>
       </Container>
        
</div>
);
export default Projects;