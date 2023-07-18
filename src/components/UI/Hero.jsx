import React from "react";
import '../../styles/hero.css'
import heroDarkImg from '../../images/video.jpg'

 
const Hero = () =>{
    return <section className="hero__section" id="home">
         <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                <div>
                    <h2>Empower Individual</h2>
                    <h2>Enriching Organisations</h2>
                    <h2 className="highlight">Investing in People Organisation and Strategy</h2>
                </div>
                <p className="description">we invite you to accelerate your performance through our programs</p>
                    <div className="hero__btns">
                        <button className="primary__btn">Lets Connect</button>
                        
                     </div>
            </div>
                <div className="hero__img">
                <img src={heroDarkImg} alt="hero-img" style={{ maxWidth: '100%', height: 'auto' }} />

                 
                    </div>
            </div>
         </div>
    </section>
        
}

export default Hero