import React, { useEffect } from "react";
import "../../styles/services.css";
import  EEP from "../../images/employee engagement.jpg"
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
  }, []); // Empty dependency array ensures the effect runs only once

  const cardData = [
    {
   
      name: "Hospitals",
      program :"Hospitals",
      background: <img src={EEP} style={{ maxWidth:"250px", height: "250px"}}/>,
      description:
        "Level up your productivity and company culture with expertly curated programs "    },
    {
      name: "MSME",
      program: "MSME",
      title: " ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla.",
    },
    {
      program : "121 Performance Coaching",
      name: "121 Coaching",
      title: " ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla.",
    },
    {
        program: "Recruitment ",  
      name: "Recruitment ",
      title: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla.",
    },
  ];

  return (
    <div className="Container1">
       <div className="heading"><h2>Services</h2>
    <div className="card-container">
   
      {cardData.map((card, index) => (
        <div className="card" key={index} >
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
                </div>
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Services;