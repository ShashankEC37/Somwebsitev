import React from 'react';
import Slider from "react-slick";
import { Container ,Row, Col} from 'react-bootstrap';
import {  } from "reactstrap";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vision from "../../images/vision.png"
import { Link } from "react-router-dom";
import "../../styles/about.css";
import Values from "./Values";
import Authenticity from "./authenticity.png";
import integraty from "./integraty.jpeg";
import accountability from "./accountability.png"
import AboutSection from "./AboutSection";
import college from "../../images/interviewCollege.jpg"
import './about-section.css'

import selfie from "../../images/selfie.jpg"
const AboutPage  = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true, // Enable dots
  };
  return (
    <div >
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
           
           

            <button className="btn reserve__btn mt-4">
              <Link to="/">About US</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            

            <button className="btn reserve__btn mt-4">
            <Link to="/">About US</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
           
       

            <button className="btn reserve__btn mt-4">
            <Link to="/">About US</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>








    <section className="about__page-section1">
      <div className='container1'>
       
        <Row>
          <Col lg="10" md="10">
            
              <img src={vision} alt="" style={{height:"250px" , width:"250px"}} />
         
          </Col>
          <Col lg="2" md="2">
          <h4 className="Values" style={{ textAlign: "center"  }}>Vision</h4>
            <div className="about__section-content">
            
              <p className="Vision">
              At SOM, our vision is to positively impact 100 million individual and organizations by creating a community of the world’s best coaches. We believe that through our work, we can help create a world where everyone has the opportunity to lead a fulfilling and visionary life.
              </p>
              <div className="about__section-item d-flex align-items-center" style={{ marginBottom: '40px' }}></div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
   



    <section className="about__page-section2">
      <Container>
        <h4 className="Values" style={{ textAlign: "center" , justifyContent:"center"}}>Our Values</h4>
        <div className="cards-container1">
          <div className="card1">
            <img src={integraty} alt="Image 1" />
            <p className="card-text1">Integrity </p>
            <p className="card-text">Our priority is to be honest and clear to enhance our performance and achieve our goals.</p>
          </div>
          <div className="card1">
            <img src={Authenticity} alt="Image 2" />
            <p className="card-text1">Authenticity  </p>
            <p className="card-text" >Our commitment to work and clients is unwavering regardless of the type of work or status of the client.</p>
          </div>
          <div className="card1">
            <img src={accountability} alt="Image 3" />
            <p className="card-text1">Accountability   </p>
            <p className="card-text"> Accountability is the essence of the organization. We feel organization will perform, progress and give timely deliver when there is accountability.</p>
          </div>
        </div>
      </Container>
    </section>




 <section className="about__page-section1">
      <div className='container1'>

        <Row>
          
          <Col lg="4" md="4">
            <div className="about__section-content" >
            <h4 className="Values" style={{ textAlign: "center", fontSize:"50px" }}>Our Mission</h4>

              <p className="Mission" style={{paddingTop:"50px" , marginRight:"30px",paddingBottom:"20px"}}>
                
             <strong style={{fontWeight:"600" }}> School of Masters </strong>is committed to unlocking individual’s potential by connecting them with the right coaches. We at SOM are also dedicated to deliver skills and knowledge that significantly increase our course participants on-the-job productivity, thereby enhancing their contributions to the goal of their organization.
              </p>
              <p className="Mission"><strong style={{paddingTop:"20px",fontWeight:"600",paddingTop:"50px" }} > Our mission is threefold:</strong></p>
              <p className="Mission"style={{paddingTop:"20px", marginRight:"30px"}}><strong style={{fontWeight:"600"}}> Firstly,</strong> we strive to deliver customized coaching programs that cater to the unique requirements of each individual or group, in accordance with industry standards.</p>
              <p className="Mission" style={{paddingTop:"20px" , marginRight:"30px"}}><strong style={{fontWeight:"600"}}> Secondly,</strong> we aim to provide small and medium sized enterprises (SME’s) with information that shapes and guides their business paths with a focus on flexibility by offering a range of training packages to match their changing demands and ensure employee performance aligns with industry standards.</p>
              <p className="Mission"style={{paddingTop:"20px" , marginRight:"30px"}}><strong style={{fontWeight:"600"}}> Finally,</strong> we are dedicated to creating a learning environment with engaging activities that present new and interesting learning opportunities, empowering individuals to upgrade their skills and reach their full potential.</p>
              <p className="Mission" style={{paddingTop:"20px" , marginRight:"30px"}}> SOM we are committed to support our clients in every step, as they embark on their personal and career development.</p>
              <div className="about__section-item d-flex align-items-center" style={{ marginBottom: '40px' }}></div>
            </div>
          </Col>
          <Col lg="8" md="8">
            <div className="mission__img">
              <img src={college} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>


    <section className="about__page-section1">
    
      <div className='container1'>
     


        <Row>
      
          <Col lg="4" md="4">
          <h4 className="Values" style={{ textAlign: "center" }}>About Us</h4>
            <div className="about__section-content">
              <p className="Mission" style={{paddingTop:"50px", paddingRight:"30px", paddingBottom:"20px"}}>
              We are dedicated to empowering trainers, solopreneurs and organizations in their pursuit of excellence. The goal is to reinvent training methods which ensures exceptional outcomes in all areas of life.
              </p>
              <p  className="Mission" style={{ paddingRight:"30px", paddingBottom:"20px"}}>We help everyone who come to us to flourish through outcome based training and coaching programs. We understand that language should not be a barrier to success which is why we have successfully delivered our program in 6 Indian regional languages across India. Our expert coaches and trainers offer supreme guidance, support and personalized attention to help our clients unlock their full potential.</p>
              <p className="Mission" style={{ paddingRight:"30px", paddingBottom:"20px"}}>Join us on our journey towards success and let School of Maters be the tool for your growth and transformation.</p>
              
            </div>
          </Col>
          <Col lg="8" md="8">
            <div className="mission__img">
              <img src={selfie} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>




    </div>

    

    
  );
};

export default AboutPage ;
