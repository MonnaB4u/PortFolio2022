import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FakeData from '../../Data/ProjectData';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const [data, setData] = useState([])
    const { ID } = useParams()

    useEffect(() => {
        const url = `https://portfolio2022-database.vercel.app/projectCollection/${ID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // const data = findData.find(findData => findData._id === ID)
    // console.log(findData)
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
                                {
                                    data.img != undefined ? <img src={data.img} class="img-fluid" alt="" /> :
                                        <iframe id="ViostreamIframe" width="760" height="315" frameborder="0"
                                            allowfullscreen="" src={`https://www.youtube.com/embed/${data.video}`}>
                                        </iframe>
                                }

                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Name</strong>: {data.name}</li>
                                        <li><strong >Technology:</strong >{data.tecnology}</li>
                                        <li><strong>Project URL</strong>: <a href={data.link}>{data.link}</a></li>
                                        <li><strong>Github Link</strong>: {data.gitLink === undefined ? <a href="">Link Coming Soon</a> : <a href={data.gitLink}>{data.gitLink} </a>}</li>
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
