import React from "react";
import "../../styles/testmonials.css"
import Slider from "react-slick";


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
                <p className="description">Shalini Mukund, founder of Voive-O-Magic and a Public Speaker herself recommends SOM for the services they provide. I found value for  SOM’s training program which helps align goals with vision and create a step-by-step strategy.

         
                </p>       
                <p className="description">
                Sheetal is friendly but very professional in her work. Sheetal provides the tools and techniques to clients to achieve the best of their goals. I recommends all trainers and coaches to avail the service of SOM to relook at their vision and proceed accordingly in the best path.
                       </p> <div>
                            <h5 className="customer__name">Shalini Mukund</h5>
                            <div className="Company"> Voice-O-Magic</div>
                    
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">SOM’s 121 performance coaching according to Parampreeth is amazing. They understand individuals strengths and weaknesses and give them a proper way of facing challenges. They take utmost care on performance. 
</p>
<p className="description">Thanks to SOM coaches, he is able to connect with his business associates and focus on growing the business.</p>
                <div className="customer__details">
                     
                        <div>
                            <h5 className="customer__name">Parampreeth</h5>
                            <div className="Company">Creative Digital Media</div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">According to Bina Mehta, Ms. Sheetal Surana’s business networking class was a great learning experience. Sheetal was patient and helped her understand the skeels and new ways to do networking .</p>
                <p className="description">Sheetal’s positive aura made her believe and be positive about herself. She strongly recommends Som to others for personal and professional growth</p>
                <div className="customer__details">
                    
                      <div>
                            <h5 className="customer__name">Bina Mehta</h5>
                            <div className="Company">  <div className="Company">Company Name</div></div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">According to Piyush Lunia, Ms. Sheetal’s quick and effective training at School of Masters was amazing.</p>
                <p className="description"> He was skeptical at first, but 20 mins into the training made him realize they are short simple points that can make a big difference in his output.  I can still see the benefits of training even after 9 months.</p>
                <p className="description"> Thank you Ms. Sheetal.</p>
                <div className="customer__details">
                    
                      <div>
                            <h5 className="customer__name">Piyush Lunia</h5>
                            <div className="Company">Company Name</div>
                        </div>
                    </div> 
            </div>

            <div className="slider__item">
                <p className="description">According to Supreeth, Ms. Sheetal SUrana’s training at School of Masters has helped Rooth Jacklin, Business owner of SJ Venture in various ways.</p>           
                     <p className="description"> I strongly recommend all business owners to get their staff trained by SOM trainers.  </p>    
                    <p className="description"> Thank you for the amazing work.</p>
                <div className="customer__details">
                    
                      <div>
                            <h5 className="customer__name">Supreeth </h5>
                            <div className="Company">Company Name</div>
                        </div>
                    </div> 
            </div>
        </Slider>
            </div>
        </div>
    </section>
}
    export default Team