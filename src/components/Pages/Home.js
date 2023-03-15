import React from "react"; 
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import './pages.css';

function Home() {
  return (
    <div className="home" >
    <Brand />
    <Footer />
    </div>
  );
}

export default Home;
