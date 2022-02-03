import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Clock from '../Clock/Clock';
import ContactWithME from '../ContactWithME/ContactWithME';
import Projects from '../Projects/Projects';
import Testimonial from '../Testimonial/Testimonial';
import Header from './Header';
import './Header.css'
const Header2 = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Clock></Clock>
            <Projects></Projects>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <ContactWithME></ContactWithME>
        </div>
    );
};

export default Header2;
