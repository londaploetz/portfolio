import React from 'react';
import EachProject from '../EachProject/EachProject';
import HomeNav from '../Portfolio/HomeNav';
import SideNav from '../SideNav/SideNav';
import Home from './Home';



const Projects = () => (
    <div className='projects'>
 <SideNav /> 
 <EachProject /> 
    </div>
);
export default Projects;