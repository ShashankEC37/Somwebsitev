import React, { useEffect } from "react";
import "../../styles/msme.css"; // Import your custom CSS stylesheet

import Slider from "react-slick";

import "../../styles/CourseDetails.css"; 
const InstituteModel = () => {

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
          
        </div>
  
        <div className="slider__item msme-02 mt0">
         
        </div>
  
        <div className="slider__item msme-03 mt0">
          
        </div>
  
        <div className="slider__item msme-04 mt0">
          
        </div>
  
      </Slider>




    <div style={{backgroundColor:"white"}}>
    <div className="top-bar">
      <h2 style={{color:'white'}}>Institute Model</h2>
    </div>
      <div className="container1">
    <div className="skewed">
      <div className="text">
        <p>
        Institutional training means a systematic sequence of instruction designed to impart predeter mined skills, knowledge, information, attitudes, or abilities for a particular occupation or for designated educational objectives by an institutional training facility.

              </p>
            
      
      </div>
      <div className="image">
        <div>
          <img
            src=''
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
                <span className="time">Spoken English</span>
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
                <span className="time">Communication Skills</span>
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
                <span className="time">Public Speaking</span>
              </span>
            </div>
           
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Presentation Skills</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Interview Skills</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">General, Business and Dining Etiquette</span>
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

export default InstituteModel;
