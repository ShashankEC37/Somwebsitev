import React from "react";
import "../../styles/team.css";
import sheetal from "../../images/10.png";
import Clients from "./Clients";
import naveen from "../../images/naveen.jpg"
import param from "../../images/param.jpg";
import deena from "../../images/deena.jpg"

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <Clients />
        <div className="team__content">
          <h2>
            <span style={{ color: "white" }}>Meet Our Core Team</span>
          </h2>
        </div>
        <div className="team__wrapper">
          <div className="team__item">
            <div className="team__img">
              <img src={sheetal} alt="" />
            </div>
            <div className="team__details">
              <h4>Sheetal Surana</h4>
              <p className="description" >
                Co-Founder & 
              </p>
              <p>CEO</p>
              <div className="team__member-social">
                <a href="https://www.linkedin.com/in/sheetal-surana-36625498/">
                <i className="ri-linkedin-box-fill" style={{ color: "#090238" }}></i>
                </a>
                <a href="mailto:sheetalsurana@schoolofmasters.co.in">
                <i className="ri-mail-line" style={{ color: "#090238" }}></i>
                </a>
              </div>
              <br></br>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src={param} alt="" />
            </div>
            <div className="team__details">
              <h4>Param Preeth</h4>
              <p className="description" >
                Founder & 
              </p>
              <p className="description" >
               Chief Technical Officer
              </p>
              <div className="team__member-social">
                {/* Empty links for LinkedIn and Email */}
                <a href="#">
                <i className="ri-linkedin-box-fill" style={{ color: "#090238" }}></i>
                </a>
                <a href="#">
                  <i className="ri-mail-line" style={{ color: "#090238" }}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src={naveen} alt="" />
            </div>
            <div className="team__details">
              <h4>Naveen Itta</h4>
              <p className="description" >
                Co-Founder &
              </p>
              <p className="description" >
                Strategic Advisor
              </p>
             <br></br>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src="" alt="" />
            </div>
            <div className="team__details">
              <h4>Shashank S Rao</h4>
              <p className="description">
                Master Trainer
              </p>
              <br></br>
              <br></br>
              <br></br>

            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src={deena} alt="" />
            </div>
            <div className="team__details">
              <h4>Deena C Rathod</h4>
              <p className="description">
                Master Trainer & 
              </p>
              <p className="description">
              Co-Facilitators 
              </p>
              
              <br></br>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
