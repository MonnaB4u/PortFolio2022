import React, { useState } from 'react';
import FakeData from '../../Data';
import Navbar from '../Navbar/Navbar';

import './Projects.css'
const Projects = () => {

    const [data, setData] = useState(FakeData)
    const sliceData = data.slice(0, 6)
    console.log(sliceData)

    return (
        <div>
            <Navbar></Navbar>
            <div class="row my-5">
                <div class="col-sm-12">
                    <div class="title-box text-center ">
                        <h3 class="title-a ">
                            MY PROJECTS
                        </h3>
                        <p class="subtitle-a ">
                            Here some of my successful projects.

                        </p>
                        <div className="d-flex justify-content-center ">
                            <div className="border-bottom w-25 text-bottom border-info"></div>
                        </div>


                        <div class="line-mf"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        sliceData.map((each, index) =>
                            <>
                                <div class="col-md-4 ">
                                    <div class="work-box border border-info w-85">
                                        <a href={each.img} data-gallery="portfolioGallery" class="portfolio-lightbox">
                                            <div class="work-img">
                                                <img src={each.img} alt="" class="img-fluid" />
                                            </div>
                                        </a>
                                        <div class="work-content">
                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <h2 class="w-title">{each.name}</h2>
                                                    <div class="w-more">
                                                        <span class="w-ctegory">Tecnology Used:  {each.tecnology}</span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="w-like">
                                                        <a href="portfolio-details.html">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="46" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
