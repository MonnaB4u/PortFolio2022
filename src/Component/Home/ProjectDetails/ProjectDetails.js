import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FakeData from '../../Data';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const [data, setData] = useState([])
    const { ID } = useParams()
    useEffect(() => {
        const url = `https://afternoon-plains-42822.herokuapp.com/projectCollection/${ID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // const findData = FakeData.find(data => data.id.toString() === ID)
    // const finddata = data.find(data => data._id.toString() === ID)
    // console.log(finddata)
    return (
        <div class="mt-5 pt-3">

            <div class="hero hero-single route bg-image" style={{ backgroundImage: `url("https://i.ibb.co/Kw0WbNJ/overlay-bg.jpg")` }}>
                <h1></h1>
                <div class="overlay-mf"></div>
                <div class="hero-content display-table">
                    <div class="container ">
                        <h2 class="hero-title mb-4 mt-5" >Project Details</h2>
                        <ol class="breadcrumb d-flex justify-content-center">
                            <li class="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Project Details</li>
                        </ol>
                    </div>
                </div>
            </div>
            <main id="main">
                {/* ////////////////////////// */}
                <section id="portfolio-details" class="portfolio-details">
                    <div class="container">

                        <div class="row my-4">

                            <div class="col-lg-8 my-3">
                                <img src={data.img} class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Name</strong>: {data.name}</li>
                                        <li><strong >Technology:</strong >{data.tecnology}</li>
                                        <li><strong>Project URL</strong>: <a href={data.link}>{data.link}</a></li>
                                    </ul>
                                </div>
                                <div class="portfolio-description mb-5">
                                    <h2>Here is Project Details</h2>
                                    <p>
                                        {data.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProjectDetails;
