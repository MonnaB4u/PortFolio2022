import React from 'react';
import img from '../../Images/172120862_1230387134045114_8560509450110327951_n (1).jpg'
import Navbar from '../Navbar/Navbar';
import './Aboutme.css'
const AboutMe = () => {
  return (
    <div>
      <Navbar></Navbar>
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container mt-3 p-4">
        <div class="row mt-4">
          <div class="col-sm-12">
            <div class="box-shadow-full mt-5">
              <div class="row">
                <div class="col-md-6">
                  <div class="row p-2">

                    <div class="col-sm-6 col-md-5">
                      <div class="about-img text-start">
                        <img src={img} class="img-fluid rounded b-shadow-3" alt="" />
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-7">
                      <div class="about-info text-start ">
                        <p><span class="title-s">Name:</span> <span>Moheuddin Monna</span></p>
                        <p><span class="title-s">Profile:</span> <span>Full stack developer</span></p>
                        <p><span class="title-s"> Email:</span> <span>Moheuddin.MonnaB4u@gmail.com</span></p>
                        <p><span class="title-s">Phone:</span> <span>+8801628628677</span></p>
                      </div>
                    </div>
                    <p class=" text-start title-left mx-3">Skill</p>
                    <div class=" d-flex flex-wrap text-start">
                      <span class="border-right border-success m-3 mx-3">JavaScript</span>
                      <span class="border-right border-success m-3 mx-3">React.js</span>
                      <span class="border-right border-dark m-3 mx-3">GitHub</span>
                      <span class="border-right border-dark m-3 mx-3">Html</span>
                      <span class="border-right border-dark m-3 mx-3">Css</span>
                      <span class="border-right border-dark m-3 mx-3">Tailwind Css</span>
                      <span class="border-right border-dark m-3 mx-3">Bootstrap</span>
                      <span class="border-right border-dark m-3 mx-3">Metarial UI</span>
                      <span class="border-right border-dark m-3 mx-3">Node.js</span>
                      <span class="border-right border-dark m-3 mx-3">Express.js</span>
                      <span class="border-right border-dark m-3 mx-3">MongoDb</span>
                      <span class="border-right border-dark m-3 mx-3">SQL</span>
                      <span class="border-right border-dark m-3 mx-3">PHP</span>
                      <span class="border-right border-dark m-3 mx-3">Python</span>
                      <span class="border-right border-dark m-3 mx-3">Java</span>



                    </div>


                  </div>

                </div>
                <div class="col-md-6 px-3">
                  <div class="about-me pt-4 pt-md-0 text-start">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        About me
                      </h5>
                    </div>
                    <p class="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan
                      id
                      imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt.
                    </p>
                    <p class="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    </p>
                    <p class="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      Nulla porttitor accumsan
                      tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutMe;
