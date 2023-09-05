import React, { useState, useEffect } from 'react';
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import './pages.css';

function Home() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

    return (
 
      <div className="spinner-container">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
    <div className="home" >
    <Brand />
    {/* <Footer /> */}
    </div>
    )}
</div>

  );
}

export default Home;
