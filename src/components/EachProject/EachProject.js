import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import {projectImg01, projectImg02, projectImg03} from './imports.js';

///save project information to easily change when needed
const projectData = [
  {
    title: 'To-Do',
    text: 'My todo list is helpful tool to help you keep track of important tasks, using CRUD. This app uses persistant local storage, and has a toggle feature that is persistant through MySQL database. You can create, read, update, and delete both locally and from the databse.',
    imageP: projectImg03, 
    link: "https://github.com/londaploetz/to-do", 
    live: "https://todo-database-local-switch.herokuapp.com/" ,
  }, 
  {
    title: 'News 6 Meet the Team',
    text: 'Welcome to News 6 WOWT, meet the team. Created this application for API usgae, non production work this is a learning application.',
    imageP: projectImg01, 
    link: "https://github.com/londaploetz/news-meet-the-team", 
    live: "https://londaploetz.github.io/news-meet-the-team/" , 
},
  {
    title: 'Polka-Dot',
    text: 'Polka Dots is a small but full of life salon. We want you to relax, laugh and have fun whilst being looked after and getting a great service at the same time. Created this application for dynamic table usage, non production work this is a learning application.',
    imageP: projectImg02, 
    link: "https://github.com/londaploetz/polkadot", 
    live: "https://londaploetz.github.io/polkadot/" ,
  }
];

const EachProject = () => (
  
  /// display each project's title, text, image, link, live website link
    <div className="each-project-container">
      {projectData.map((item, index) => (
        <Portfolio title={item.title} text={item.text} imageP={item.imageP} link={item.link} live ={item.live} key={item.title + index} />
      ))} 
    {}
  </div>
);

export default EachProject;