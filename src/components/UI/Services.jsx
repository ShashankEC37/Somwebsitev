import React, { useEffect } from "react";
import "../../styles/services.css";

import { Link } from "react-router-dom";

const Services = () => {
 
  const cardData = [
    {
      program: "Hospitals",
      name: "Hospitals",
      background: (
        <img
          src=""
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

export default Services;