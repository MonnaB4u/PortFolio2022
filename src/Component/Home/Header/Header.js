import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import ParticlesBg from 'particles-bg'
const Header = () => {
    return (
        <div className="header">
             <Navbar></Navbar>
            <ParticlesBg  type="cobweb" bg={true} />
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
