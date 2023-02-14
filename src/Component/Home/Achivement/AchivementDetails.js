import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Achivement.css'
import fakeData from '../../Data/Achivement'


const AchivementDetails = () => {
    const [datas, setData] = useState(fakeData)
    const [server,setServer]=useState([])
    const { ID } = useParams()

    useEffect(() => {
        const url = `https://portfolio2022-database.vercel.app/allAchivement/${ID}`
        fetch(url)
            .then(res => res.json())
            .then(datass => setServer(datass))
    }, [])

    const data = datas.find(datas => datas.id.toString() === ID)
    const Serverdata = datas.find(datas => server._id.toString() === ID)
    return (
        <div class="mt-5 pt-3">

            <div class="hero hero-single route bg-image" style={{ backgroundImage: `url("https://i.ibb.co/Kw0WbNJ/overlay-bg.jpg")` }}>
                <h1></h1>
                <div class="overlay-mf"></div>
                <div class="hero-content display-table">
                    <div class="container ">
                        <h2 class="hero-title mb-4 mt-5" >Achivement Details</h2>
                        <ol class="breadcrumb d-flex justify-content-center">
                            <li class="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Achivement Details</li>
                        </ol>
                    </div>
                </div>
            </div>
            <main id="main">
                {/* ////////////////////////// */}
                <section id="portfolio-details" class="portfolio-details">
                    <div class="container">

                        <div class="row ">

                            <div class="col-lg-6 m-5">
                                <img src={data.img} class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-4">
                                <div class="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Achivement</li>
                                        <li><strong>Name</strong>: {!server.name ? data.name:server.name}</li>
                                    </ul>
                                </div>
                                <div class="portfolio-description mb-5">
                                    <h2>Here is Achivement Details</h2>
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

export default AchivementDetails;
