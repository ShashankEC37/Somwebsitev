import React from "react";
import '../../styles/hero.css'
import heroDarkImg from '../../images/video2.jpg'

 
const Hero = () =>{
    const phoneNumber = '918105404653'; // Replace with the phone number you want to send the message to
  
    const handleWhatsAppClick = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, '_blank');
    };
    return <section className="hero__section" id="home">
         <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                <div>
                    <h2>Empower Individuals</h2>
                    <h2>Enriching Organisations,</h2>
                    <h2 className="highlight"> People, Operations and Strategy</h2>
                </div>
                <p className="description" style={{fontFamily:"sans-serif", fontWeight:"100"}}>we invite you to accelerate your performance through our programs</p>
                <div className="hero__btns">
        <button className="primary__btn" onClick={handleWhatsAppClick}>
          Let's Connect <i className="ri-whatsapp-fill" style={{ fontSize: '24px', marginLeft: '5px' }}></i>
        </button>
      </div>
            </div>
            <div className="hero__img">
              <picture>
  <img
    src={heroDarkImg}
    alt="hero-img"
    style={{ maxWidth: '100%', height: 'auto' }}
    loading="lazy"
  />
  </picture>
</div>

            </div>
         </div>
    </section>
        
}

export default Hero