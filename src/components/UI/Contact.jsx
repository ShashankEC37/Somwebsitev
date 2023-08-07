import React , { useEffect } from 'react';
import "../../styles/Contact.css";
import "../../styles/responsive.css";
import { RiLinkedinFill, RiMailFill, RiFacebookBoxFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';

import WebFont from 'webfontloader';

const ContactUs = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'],
      },
    });
  }, []);

  const email = "sheetal@schoolofmasters.co.in";
  const subject = "Enquire About -";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };
  const googleMapSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.13255325756126!2d77.53527252707755!3d12.903836053239713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fea27a3fc0b%3A0x77f636ca0bceceab!2sMAITREYI!5e0!3m2!1sen!2sin!4v1690733036853!5m2!1sen!2sin';
  return (
  <div className="container" style={{paddingTop:"30px"}}>
    
    <div className="contact-in">
  
      <div className="contact-form">
      <h1 className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
            Reach us at
          </h1>
          <p className="text-blk map-contactus-subhead">
            99, Jaya Apartments, 6th Cross Rd, Malleshwara, Bengaluru, Karnataka 560003
          </p>
          <div className="social-media-links mob">
            <a href="https://www.linkedin.com/company/school-of-masters-india/" target="_blank">
              <RiLinkedinFill  className='ri-linkedin-fill' />
            </a>
           
            <a  href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} onClick={handleEmailClick} target="_blank">
              <RiMailFill   className='ri-mail-fill'/>
            </a>
            <a href="https://www.facebook.com/people/SOM/100068256820872/" target="_blank">
              <RiYoutubeFill  className='ri-facebook-box-fill'/>
            </a>
            <a href="https://www.facebook.com/people/SOM/100068256820872/" target="_blank">
              <RiFacebookBoxFill  className='ri-facebook-box-fill'/>
            </a>
            <a href="https://www.instagram.com/schoolofmasters13/" target="_blank">
              <RiInstagramFill className='ri-instagram-fill' />
            </a>
            </div>
        
        <h1>
          Contact Us
        </h1>
        <form>
          <input type="text" placeholder='Name' className='contact-form-text'></input>
          <input type="text" placeholder='Phone No' className='contact-form-text'></input>
          <input type="text" placeholder='Email'className='contact-form-text'></input>
          <textarea placeholder='Message'className='contact-form-textarea'></textarea>
          <input type="Submit" name="Submit" className='contact-form-btn'></input>
       
        </form>
      
        
      </div>
      <div className="contact-map">
        <h1 style={{paddingBottom:"30px"}}>Our Office</h1>
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <iframe
          src={googleMapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  </div>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
