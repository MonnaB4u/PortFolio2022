
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
const Blog = () => {

    const [datas, setData] = useState([])
    useEffect(() => {
        const url = 'https://afternoon-plains-42822.herokuapp.com/allBlog';
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    },[])

const data = datas.slice(0, 3)


    const navigate = useNavigate()
    return (
        <div>
            <div className="">
            </div>
            <div class="mt-5 pt-5">
                <div class="col-sm-12 ">
                    <div class="title-box text-center ">
                        <h3 class="title-a">
                            MY Blog
                        </h3>
                        <p class="subtitle-a ">
                            Here some of my articles about development

                        </p>
                        <div className="d-flex justify-content-center ">
                            <div className="border-bottom w-25 text-bottom border-info"></div>
                        </div>


                        <div class="line-mf"></div>
                    </div>
                </div>
                <section id="blog" class=" blog-mf sect-pt4 route d-flex justify-content-center my-4">

                    <div className="row">
                        {
                            data.length === 0
                                ?
                                <div className=" ">
                                    <div class="d-flex justify-content-center my-5">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only w-75 h-75">hello</span>
                                        </div>
                                         <h1>Data IS Coming</h1>
                                    </div>
                                </div>
                                :
                                data.map((each, index) =>
                                    <Card style={{ width: '28rem' }} className="mx-3 text-center">
                                        <Card.Img variant="top" className="mt-3" src={each.img} />
                                        <Card.Body>
                                            <Card.Title>{each.title}</Card.Title>
                                            <a variant="primary" type="button" className="btn btn-primary" href={each.view}>Go somewhere</a>
                                        </Card.Body>
                                    </Card>

                                )
                        }
                    </div>
                </section>
                <div className="text-center mb-5">
                    <button onClick={() => navigate('/blog')} className="btn btn-primary w-25">See more</button>
                </div>
            </div>
        </div>

    );
};

export default Blog;
