import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./about-section.css";
import about from "../../images/college.jpg";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "50px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="About__Us">About Us</h4>
              <p className="section__description">
              We are dedicated to empowering trainers, solopreneurs and organizations in their pursuit of excellence. The goal is to reinvent training methods which ensures exceptional outcomes in all areas of life.
              </p>
              <p className="section__description">
              We help everyone who come to us to flourish through outcome based training and coaching programs. We understand that language should not be a barrier to success which is why we have successfully delivered our program in 6 Indian regional languages across India. Our expert coaches and trainers offer supreme guidance, support and personalized attention to help our clients unlock their full potential.
              </p>
              <p className="section__description">
              Join us on our journey towards success and let School of Maters be the tool for your growth and transformation.
              </p>

              <div className="about__section-item d-flex align-items-center" style={{marginBottom:"40px"}}>
              <button className=" w-50 car__item-btn car__btn-details" >Learn More</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6"  >
      <div className="about__img">
        <img src={about} alt=""  />
      </div>
    </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
