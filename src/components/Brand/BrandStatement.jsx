import React from 'react';
import './brand.css';
import AmazingIMG from "./images.js"; 


const BrandStatement = () => {
  


return (
    <div>
        <div className='brand-statement'>
            Let's Create Something
        </div>

           
            <img className="amazing-imgs" 
          
            src = {AmazingIMG.image}
            />
        
     
 
    </div>
)};
export default BrandStatement;