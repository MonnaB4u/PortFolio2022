import React from 'react';
import './Testimonial.css'
const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect text-dark">
                <img class="img-circle" src={img} />
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;
