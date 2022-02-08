import React, { useReducer } from 'react';
import './Testimonial.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestiMonialsDetails from './TestiMonialsDetails ';
import userPic from '../../Images/user-one.png'
import { useEffect } from 'react';
import { useState } from 'react';

const Testimonial = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };
  //////////////////////

  useEffect(() => {
    const url = 'https://afternoon-plains-42822.herokuapp.com/testimonialCollection';
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const [datas, setData] = useState([]);

  return (
     <section>
      <div class="testimonials paralax-mf bg-image ">
        <section id="testimonial" className="testimonials pt-70 pb-70 coundown my-5">
          <div className="container mt-5">

            {/* <div className="text-center ">
              <h3 className="sectionTitle">What Our Clients are Saying?</h3>
            </div>
            <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                  {
                    datas.length === 0 ?
                     <h1>Data is Coming</h1>
                      :
                      datas.map(testiMonialDetail => {
                        return (
                          <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                        )
                      })
                  }
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

  );
};

export default Testimonial;
