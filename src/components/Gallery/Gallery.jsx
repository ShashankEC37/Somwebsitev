import React from "react";
import "./gallery.css"; // Import your custom CSS for styling
import hospital from "./images/hospital.jpg";
import Recruitent from "./images/WhatsApp Image 2023-07-15 at 8.29.02 PM (1) (1).jpeg";
import Colleges from "./images/college.jpeg";
import Delivery  from "./images/delivery.jpeg";
import Corporate from "./images/mnc.jpg";
import MSME from "./images/msme.jpg";
import Blue from "./images/JYOTHI GAS.jpeg"


const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="services-heading">
        <h1>Gallery</h1>
      </div>
      <div className="services">
        <div className="services-cell">
            
          <img src={hospital} alt="" className="services-cell_img" />
          <div className="services-cell_text">Hospitals</div>
        </div>
        <div className="services-cell">
          <img
            src={Recruitent}
            alt=""
            className="services-cell_img"
          />
          <div className="services-cell_text">Recruitent</div>
        </div>
        <div className="services-cell">
          <img src={Colleges} alt="" className="services-cell_img" />
          <div className="services-cell_text">Campus Recruitment</div>
        </div>
        <div className="services-cell">
          <img
            src={Delivery}
            alt=""
            className="services-cell_img"
          />
          <div className="services-cell_text">Delivery Executive Training</div>
        </div>
        <div className="services-cell">
          <img src={Corporate} alt="" className="services-cell_img" />
          <div className="services-cell_text">Corporate Training</div>
        </div>
        <div className="services-cell">
          <img src={MSME} alt="" className="services-cell_img" />
          <div className="services-cell_text">MSME</div>
        </div>
        <div className="services-cell">
          <img
            src={Blue}
            alt=""
            className="services-cell_img"
          />
          <div className="services-cell_text">Blue Collar Staff</div>
        </div>
    
      </div>
    </div>
  );
};

export default Gallery;
