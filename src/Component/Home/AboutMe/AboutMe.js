import React, { useEffect, useState } from 'react';
import img from '../../Images/172120862_1230387134045114_8560509450110327951_n (1).jpg'
import Navbar from '../Navbar/Navbar';
import './Aboutme.css'
const AboutMe = () => {

  const [data, setData] = useState([])
  // console.log(Projectdata)
  useEffect(() => {
    const url = 'https://afternoon-plains-42822.herokuapp.com/Skills'
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  })


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

                      <div class="col-sm-6 col-md-4">
                        <div class="about-img text-start" >
                          <img style={{"max-width":"60%"}} src='https://i.ibb.co/CJnNpT0/21741073-381735508910285-4575410023495529145-o.jpg' class="img-fluid rounded b-shadow-3 mx-4" alt="" />
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-7">
                        <div class=" text-start mx-1">
                          <p><span class="title-s">Name:</span> <span>Moheuddin Monna</span></p>
                          <p><span class="title-s">Profile:</span> <span>Full stack developer</span></p>
                          <p><span class="title-s"> Email:</span> <span>Moheuddin.MonnaB4u@gmail.com</span></p>
                          <p><span class="title-s">Phone:</span> <span>+8801628618677</span></p>
                        </div>
                      </div>

                      <div class=" text-start mx-3">
                        <h2 class="title-left">Education</h2>
                        <h4 class="mt-4">Graduation</h4>
                        <h5>North Unversity of China (NUC)</h5>
                        <h5>B.Sc in Computer Science | 2017-2021</h5>

                        <h4 class="mt-3">HSC</h4>
                        <h5>Juranpur Adarsha University College, Daudkandi,Cumilla </h5>
                        <h5>Higher Secondary Certificate | Science | 2016 </h5>

                        <h4 class="mt-3">SSC</h4>
                        <h5>Sundalpur High School, Daudkandi,Cumilla</h5>
                        <h5>Secondary School Certificate | Science | 2014 </h5>

                      </div>


                    </div>

                  </div>
                  <div class="col-md-6 px-3">
                    <div class=" about-me pt-4 pt-md-0 text-start">
                      <div class="title-box-2">
                        <h5 class="title-left mx-2">
                          About me
                        </h5>
                      </div>
                      <p class="lead mx-2">
                        Doing a job in the IT sector has been my dream for many years. I want to nurture this passion to thrive in my expertise. Through my dedication, I will make it possible to benefit both my company and the people associated with it
                      </p>


                      <p class=" text-start title-left mx-3">Skill</p>
                      <div className="row my-5">

                        {
                          data.length === 0 ?
                            <div className=" ">
                              <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                  <span class="sr-only w-75 h-75"></span>
                                </div>
                                 <h1>Data IS Coming</h1>
                              </div>
                            </div>
                            :
                            data.map((each, index) =>
                              <div class=" mx-2 col-3 flex-warp">
                                <div className="">
                                  <div class="">
                                    <p>{each.name} </p>

                                  </div>
                                </div>

                              </div>
                            )
                        }
                      </div>


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
