
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import blog0 from '../../Images/basic.jpg'
import blog1 from '../../Images/important.png';
import blog2 from '../../Images/tips.png';
import Navbar from '../Navbar/Navbar';
const Blog = () => {
    const blogData = [
        {
            title: 'Ten Basic JavaScript Topics',
            img: blog0,
            view: 'https://samiul-sheikh.medium.com/ten-basic-javascript-topics-7a287a3b926d'
        },
        {
            title: 'Important JS Topics',
            img: blog1,
            view: 'https://samiul-sheikh.medium.com/ten-important-javascript-topics-cf724326e70f'
        },
        {
            title: 'JavaScript Tips and Tricks',
            img: blog2,
            view: 'https://samiul-sheikh.medium.com/useful-javascript-tips-and-tricks-e24beb540941'
        }
    ]

    const [data, setData] = useState(blogData)
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

                <div className="row ">
                    {
                        data.map((each, index) =>
                            <Card style={{ width: '28rem' }} className="mx-3 text-center">
                                <Card.Img variant="top" className="mt-3" src={each.img} />
                                <Card.Body>
                                    <Card.Title>{each.title}</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
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

export default Blog;
