import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Fatkedata from '../../Data/Blog';
const AllBlog = () => {
    const [datas, setData] = useState([])
    useEffect(() => {
        const url = 'https://portfolio2022-database.vercel.app/allBlog';
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    const data = [...datas];
    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    shuffle(data);

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
                <section id="blog" class="blog-mf sect-pt4 route d-flex justify-content-center my-4 ">

                    <div className="row m-3 p-3">
                        {
                            data.length === 0
                                ?
                                <div className="">
                                    <div class="d-flex justify-content-center my-5">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only w-75 h-75">hello</span>
                                        </div>
                                        <h1>Data IS Coming</h1>
                                    </div>
                                </div>
                                :
                                data.map((each, index) =>
                                    <Card style={{ width: '28rem' }} className="m-3 text-center ">
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

            </div>
        </div>

    );
};

export default AllBlog;
