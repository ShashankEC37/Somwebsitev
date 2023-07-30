import React, { useEffect } from "react";
import "./servicespage.css";
import EEP from "../../images/employee engagement.jpg";
import { Link } from "react-router-dom";

const ServicesPage = () => {
 
  const cardData = [
    {
      program: "Hospitals",
      name: "Hospitals",
      background: (
        <img
          src={EEP}
          alt="Employee Engagement Program"
          style={{ maxWidth: "250px", height: "250px" }}
        />
      ),
      description:
        "",
      path: "/hospital",
    },
    {
      program: "MSME",
      name: "MSME",
      description:
        "",
      path: "/msme",
    },
    {
      program: "121 / Accountability Coaching",
      name: "121 Coaching",
      title: " ",
      description:
        "",
      path: "/personaltraining",
    },
    {
      program: "Recruitment",
      name: "Recruitment",
      title: "",
      description:
        "",
      path: "/recruitment",
    },
    {
      program: "Blue Collar Staff",
      name: "Blue Collar Staff",
      title: "",
      description:
        "",
      path: "/blue-collar-staff",
    },
    {
      program: "Institute Model",
      name: "Institute Model",
      title: "",
      description:
        "",
      path: "/Institute-Model",
    },
  ];

  return (
    <div className="Container1">
    <div className="heading">
      <h2>Services</h2>
      <h4>SOM is a distinguished training organization that caters to the unique needs of hospitals, MSME’s and individuals.
      Our team comprises of highly experienced trainers who specialize in diverse subjects, ensuring that we offer top-notch solution for all your training needs. </h4>
    <h4>We believe that training is an investment in people and we are committed to delivering the best return on our client’s investment and growth in revenue or performance of an individual.</h4>
    <h4>We cover hospitals, MSME industries, blue collar staff and personal development.</h4>
    
    </div>
    
    <div className="card-grid">
      
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <a href={card.path}>
            <div className="card__inner">
              <div className="card__face card__face--front">
                <h2>{card.program}</h2>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ServicesPage;