import React from 'react';
import "../../styles/Contact.css";
import "../../styles/responsive.css";
import { RiLinkedinFill, RiMailFill, RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';



const ContactUs = () => {
  return (
    <div className="contact_us_6">
    <div className="responsive-container-block container">
      <form className="form-box">
        <div className="container-block form-wrapper">
          <div className="mob-text">
            <p className="text-blk contactus-head">
              Get in Touch
            </p>
           
          </div>
          <div className="responsive-container-block" id="i2cbk">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
              <p className="text-blk input-title">
                FIRST NAME
              </p>
              <input className="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
              <p className="text-blk input-title">
                EMAIL
              </p>
              <input className="input" id="ipmgh-3" name="Email" placeholder="Please enter email..." />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
              <p className="text-blk input-title">
                PHONE NUMBER
              </p>
              <input className="input" id="imgis-3" name="PhoneNumber" placeholder="Please enter phone number..." />
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
              <p className="text-blk input-title">
                WHAT DO YOU HAVE IN MIND ?
              </p>
              <textarea className="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
            </div>
          </div>
          <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
            Submit
          </button>
        </div>
      </form>
      <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
        <div className="map-part">
          <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
            Reach us at
          </p>
          <p className="text-blk map-contactus-subhead">
            99, Jaya Apartments, 6th Cross Rd, Malleshwara, Bengaluru, Karnataka 560003
          </p>
          <div className="social-media-links mob">
            <a href="https://www.linkedin.com/company/school-of-masters-india/" target="_blank">
              <RiLinkedinFill  className='ri-linkedin-fill' />
            </a>
            <a href="Mail Link" target="_blank">
              <RiMailFill   className='ri-mail-fill'/>
            </a>
            <a href="https://www.facebook.com/people/SOM/100068256820872/" target="_blank">
              <RiFacebookBoxFill  className='ri-facebook-box-fill'/>
            </a>
            <a href="https://www.instagram.com/schoolofmasters13/" target="_blank">
              <RiInstagramFill className='ri-instagram-fill' />
            </a>
          </div>
          <a href="https://www.google.com/maps/dir//99,+Jaya+Apartments,+6th+Cross+Rd,+Malleshwara,+Bengaluru,+Karnataka+560003/@12.9974857,77.4975432,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae16267bcefa45:0xd7112d379b898576!2m2!1d77.5675836!2d12.9974936?entry=ttu" >
      <div className="map-box container-block">
     
      </div>
    </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
