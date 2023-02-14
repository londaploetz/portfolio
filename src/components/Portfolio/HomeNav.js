import React from 'react';
import { Link } from "react-router-dom";


const HomeNav = () => {

    return (
        <div className="homeNav_container">
            <h1 className='londa_home'> 
                Londa Ploetz
            </h1>
            <Link
                to="/home"
                id="home-text"
                className='project-home'>
                Home
            </Link>
            
        </div>
    )
};
export default HomeNav;