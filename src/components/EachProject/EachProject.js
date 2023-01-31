import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './eachproject.css';
import {projectImg01, projectImg02} from './imports.js';


const projectData = [
  {
    title: 'News 6 Meet the Team',
    text: 'Welcome to News 6 WOWT, meet the team. Created this application for API usgae, non production work this is a learning application.',
    imageP: projectImg01
},
  {
    title: 'Polka-Dot',
    text: 'Polka Dots is a small but full of life salon. We want you to relax, laugh and have fun whilst being looked after and getting a great service at the same time. Created this application for dynamic table usage, non production work this is a learning application.',
    imageP: projectImg02
  },
  {
    title: 'Why Londa needs the frog Squashmallow',
    text: 'To achieve max cuteness.',
  },
  {
    title: 'Why Londa needs cold hard cash',
    text: 'Because she is poor.',
  },
];

const EachProject = () => (
  <div className="eachProject_section__padding" id="projects">
  
    <div className="each-project-container">
      {projectData.map((item, index) => (
        <Portfolio title={item.title} text={item.text} imageP={item.imageP} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default EachProject;