import React, { useEffect } from "react";
import "../../styles/msme.css"; // Import your custom CSS stylesheet
import msme from "../../images/msme.jpg"
import msme2 from "../../images/msme2.jpg"
import { Container ,Row, Col} from 'react-bootstrap';
import Slider from "react-slick";

import "../../styles/CourseDetails.css"; 
const Msme = () => {

    const settings = {
      fade: true,
      speed: 2000,
      autoplaySpeed: 2000,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      dots: true, // Enable dots
    };
    return (
      <div>
      <Slider {...settings} className="hero__slider">
        <div className="slider__item msme-01 mt0">
          <Container>
            <div className="slider__content ">
             
             
  
              <button className="btn reserve__btn mt-4">
               
              </button>
            </div>
          </Container>
        </div>
  
        <div className="slider__item msme-02 mt0">
          <Container>
            <div className="slider__content ">
              
  
              <button className="btn reserve__btn mt-4">
              
              </button>
            </div>
          </Container>
        </div>
  
        <div className="slider__item msme-03 mt0">
          <Container>
            <div className="slider__content ">
            </div>
          </Container>
        </div>
  
        <div className="slider__item msme-04 mt0">
          <Container>
            <div className="slider__content ">
            </div>
          </Container>
        </div>
  
      </Slider>




    <div style={{backgroundColor:"white"}}>
    <div className="top-bar">
      <h2 style={{color:'white'}}>MSME</h2>
    </div>
      <div className="container1">
    <div className="skewed">
      <div className="text">
        <p>
        Training results in increased morale of employees because of reduction in dissatisfaction at work, reduced complaints, and reduced absenteeism, and increased interest in work during the post-training period. Heightened morale results in increased loyalty to the organization. It facilitates growth at a professional and personal level.
              </p>
            
        <a href="#"><strong>Read more &rarr;</strong></a>
      </div>
      <div className="image">
        <div>
          <img
            src={msme}
            alt="img"
          />
        </div>
      </div>
    </div>

    <div className="skewed skewed-left">
      <div className="image">
        <div>
          <img
            src={msme2}
            alt="img"
          />
        </div>
      </div>
      <div className="text">
        <p>We provide comprehensive training programs tailored specifically to meet the unique needs of Micro, Small and Medium Enterprises (MSME’s) in various sectors. Our team of experienced trainers are equipped with the knowledge and expertise to identify and address the specific challenges faced by MSME’s to design and deliver training programs that are customized to suit their individual needs.</p>
        <a href="#">Read more &rarr;</a>
      </div>
    </div>
    <div className="skewed">
      <div className="text">
        <p>
        At SOM, we are passionate about helping MSME’s achieve their full potential and we are dedicated in providing the highest quality training programs and support to ensure their success.

              </p>
               <p>
               Contact us today to learn more about how we can help your organization succeed.
              </p>
              <a href="/contact" className="dark-blue-button">
      Contact Us
    </a>
        
      </div>
      <div className="image">
        <div>
          <img
            src="https://cdn.elearningindustry.com/wp-content/uploads/2018/09/3-steps-to-better-healthcare-training-e1538384810968.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
      
  
    <div>
      <header>
       
        <h1 style={{color:'#000d6b'}}>Course Highlights </h1>
      </header>

      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
          
              <span className="time-wrapper">
                <span className="time">Organizational Vision Driven</span>
              </span>
            </div>
            
          </div>
        </li>

        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
             
              <span className="time-wrapper">
                <span className="time">Organization Culture and Values</span>
              </span>
            </div>
          
          </div>
        </li>

        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Your enrollment is our world of honour!</span>
              </span>
            </div>
           
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Accountability</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Time Management</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Language Proficiency</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Happiness Ratio</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Work-Life Balance</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Financial Freedom</span>
              </span>
            </div>
           
          </div>
        </li>
      </ul>
    </div>
    </div>
    </div>
    
  );
};

export default Msme;
