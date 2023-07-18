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
        autoplaySpeed:2000,
        slidesToShow:1,
        slidesTOScroll:1,
        swipeToSlide:true
    }
    return <section >
        <div className="container">
            <div className="slider__content-top">
                    <h2 className="white">Testmonials</h2>
                    <h2>Trusted by more than <span className="white">500+ Clients</span></h2>
            </div>
            <div className="slider__wrapper">
            <Slider {...settings}>
            <div className="slider__item">
                <p className="description">School Of Masters was exceptional. Their expertise and practical approach made a significant impact on our team's performance</p>
                <div className="customer__details">
                        <div className="customer__img">
                            <img src={ava01} alt="" />
                        </div>
                        <div>
                            <h5 className="customer__name">Preethi</h5>
                            <div className="description">CEO, Preethi Industries</div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">School Of Masters was exceptional. Their expertise and practical approach made a significant impact on our team's performance</p>
                <div className="customer__details">
                        <div className="customer__img">
                            <img src={ava02} alt="" />
                        </div>
                        <div>
                            <h5 className="customer__name">Vijay</h5>
                            <div className="description">CEO, Vijay Industries</div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">School Of Masters was exceptional. Their expertise and practical approach made a significant impact on our team's performance</p>
                <div className="customer__details">
                        <div className="customer__img">
                            <img src={ava03} alt="" />
                        </div>
                        <div>
                            <h5 className="customer__name">Nandhi</h5>
                            <div className="description">CEO, Nandhi Industries</div>
                        </div>
                    </div> 
            </div>
        </Slider>
            </div>
        </div>
    </section>
}
    export default Team