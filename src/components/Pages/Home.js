import React from "react"; 
import Brand from "../Brand/Brand";
import SideNav from "../SideNav/SideNav";
import './pages.css';

function Home() {
  return (
    <div className="home" >

    <Brand />

    <SideNav />
    
    </div>
  );
}

export default Home;
