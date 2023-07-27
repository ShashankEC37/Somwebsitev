import React from "react";
import "../../styles/testmonials.css"
import Slider from "react-slick";

import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'

const Team = () =>{
    const settings={
        dots: false,
        infinite: true,
        speed: 1000,
        
        autoplay: true,
        autoplaySpeed:7000,
        slidesToShow:1,
        slidesTOScroll:1,
        swipeToSlide:true
    }
    return <section >
        <div className="container">
            <div className="slider__content-top">
                 
                    <h2> <span className="white">Trusted by more than500 + Clients</span></h2>
            </div>
            <div className="slider__wrapper">
            <Slider {...settings}>
            <div className="slider__item">
                <p className="description">Shalini Mukund, founder of Voive-O-Magic and a Public Speaker herself recommends SOM for the services they provide. Shalini found value for herself in SOM’s training program which helps align goals with vision and create a step-by-step strategy</p>
                <div className="customer__details">
                        <div className="customer__img">
                     
                        </div>
                        <div>
                            <h5 className="customer__name">Shalini Mukund</h5>
                            <div className="description"> Voice-O-Magic</div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">SOM’s 121 performance coaching according to Parampreeth is amazing. They understand individuals strengths and weaknesses and give them a proper way of facing challenges.</p>
                <div className="customer__details">
                        <div className="customer__img">
                            <img src={ava02} alt="" />
                        </div>
                        <div>
                            <h5 className="customer__name">Parampreeth</h5>
                            <div className="description">Creative Digital Media</div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">Ms. Sheetal Surana’s business networking class was a great learning experience. Sheetal was patient and helped her understand the skills and new ways to do networking</p>
                <div className="customer__details">
                        <div className="customer__img">
                            <img src={ava03} alt="" />
                        </div>
                        <div>
                            <h5 className="customer__name">Bina Mehta</h5>
                            <div className="description"></div>
                        </div>
                    </div> 
            </div>
        </Slider>
            </div>
        </div>
    </section>
}
    export default Team