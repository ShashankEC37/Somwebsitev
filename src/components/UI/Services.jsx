import React, { useEffect } from "react";
import "../../styles/services.css";
import EEP from "../../images/employee engagement.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card__inner");

    const handleHover = (event) => {
      event.currentTarget.classList.toggle("is-flipped");
    };

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleHover);
      card.addEventListener("mouseleave", handleHover);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleHover);
        card.removeEventListener("mouseleave", handleHover);
      });
    };
  }, []);

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
      program: "121 Performance Coaching",
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
  ];

  return (
    <div className="Container1">
      <div className="heading">
        <h2>Services</h2>
      </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card__inner">
              <div className="card__face card__face--front">
                <h2>{card.program}</h2>
                <button></button>
              </div>
              <div className="card__face card__face--back">
                <div className="card__content">
                  <div className="card__header">
                    <h2>{card.name}</h2>
                  </div>
                  <div className="card__body">
                    <p>{card.description}</p>
                    <Link to={card.path}>
                      <button className="know-more-link">Know More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
