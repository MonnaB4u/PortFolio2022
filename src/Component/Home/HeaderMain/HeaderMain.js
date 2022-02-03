import React from 'react';
import './HeaderMain.css'
import Typed from 'react-typed'
import img from '../../Images/bank-removebg-preview.png'
const HeaderMain = () => {
    return (
        <div style={{ height: '550px' }} className="row d-flex align-items-center mx-5 ">
            <div className="col-md-4 offset-md-1 mt-5 text-start">
                <h1 className="mt-5" >Hello! I am<br /> Moheuddin Monna</h1>
                <Typed
                    className="typed-text text-primary "
                    strings={["Full Stack Developer", "React Developer", "MERN Stack Developer", "Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="my-4">
                    <a href="https://www.linkedin.com/in/moheuddin-monnab4u/" target="_blank">
                        <button className="btn btn-primary">Hire Me</button>
                    </a>
                    <a className="btn mr-4"href="https://drive.google.com/uc?export=download&id=1RIUN0VscdRVynEbBS6cdOsObRUs8OnuW">
                        <button className="btn btn-primary">Resume</button>
                    </a>
                </div>
            </div>
            <div className="col-md-6 text-center mt-5">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;
