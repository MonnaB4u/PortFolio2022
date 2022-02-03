import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Clock from '../Clock/Clock';
import Projects from '../Projects/Projects';
import Testimonial from '../Testimonial/Testimonial';
import Header from './Header';

const Header2 = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Clock></Clock>
            <Projects></Projects>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Header2;
