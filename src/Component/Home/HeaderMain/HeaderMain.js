import React, { useEffect, useState } from 'react';
import './HeaderMain.css'
import Typed from 'react-typed'
import img from '../../Images/bank-removebg-preview.png'
import fakeData from '../../Data/resume'
const HeaderMain = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = 'https://portfolio2022-database.vercel.app/allResume'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    })
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
                    {
                        data.length === 0
                            ?
                            <div className="">
                                <div class="d-flex justify-content-center my-5">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only w-75 h-75">hello</span>
                                    </div>
                                </div>
                            </div>
                            :
                            data.map((each, index) =>
                                <a className="btn mr-4" href={each.link}>
                                    <button className="btn btn-primary">Resume</button>
                                </a>
                            )
                    }

                </div>
            </div>
            <div className="col-md-6 text-center mt-5">
                <img className="img-re" src={img} alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;
