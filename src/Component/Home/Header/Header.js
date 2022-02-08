import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import ParticlesBg from 'particles-bg'
const Header = () => {
    return (
        <div className="header">
            <ParticlesBg type="cobweb" bg={true} />
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
