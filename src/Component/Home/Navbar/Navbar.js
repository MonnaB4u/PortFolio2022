import React, { useState } from 'react';
import './Navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../Images/male.a82ab1cd.png'
const Navbar = () => {

// const [color,setColor]=useState("home")


    return (

               <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/"> <img className="logo" src={img} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mlauto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link`} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutMe">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/allProject">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link" href="/achivement">Achivement</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
