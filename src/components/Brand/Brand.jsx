import React from 'react';
import './brand.css';
import BrandStatement from './BrandStatement';

const Brand = (props) => (
    <div className='brand-container'>
        <div className='top-square'>
            <BrandStatement />
            <div className='bottom-square'>
            </div>
            <a className="left-top-border"/>
            <a className="right-bottom-border"/>
            
        </div>
        <h1 className='londa'>Londa Ploetz</h1>
    </div>
);
export default Brand;