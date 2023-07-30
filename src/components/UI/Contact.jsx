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

  const email = "jsr.shashank@gmail.com";
  const subject = "Enquire About -";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };
  return (
  <div className="container">
    
    <div className="contact-in">
      <div className="contact-map">
        <h1 style={{paddingBottom:"30px"}}>Our Office</h1>
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.395078976548!2d77.5675837!3d12.9974951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16267bcefa45%3A0xd7112d379b898576!2z4LKu4LOI4LKk4LON4LKw4LK_IOCyh-CyqOCzjeCyq-CysOCzjeCyruCzh-Cyt-CyqOCzjSDgsrjgsr_gsrjgs43gsp_gsq7gs43gsrjgs40g4LKq4LK_4LK14LK_4LKf4LK_LiDgso7gsrLgs43igIzgsp_gsr_gsqHgsr8!5e0!3m2!1skn!2sin!4v1690703229753!5m2!1skn!2sin"
      width="100%"
      height="auto"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
      </div>
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
          <input type="text" placeholder='Email'className='contact-form-text'></input>
          <textarea placeholder='Message'className='contact-form-textarea'></textarea>
          <input type="Submit" name="Submit" className='contact-form-btn' ></input>
       
        </form>
      
        
      </div>

    </div>
  </div>
  );
};

export default ContactUs;
