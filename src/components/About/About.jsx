import React from "react";
import "../../styles/about.css"; // Import your custom CSS stylesheet
import missionImage from "../../images/mission.png";
import visionImage from "../../images/vision.png";
import valuesImage from "../../images/values.png";

const AboutUs = () => {
  return (
    <div className="container">
    <div className="about-us-container">
      <div className="about-us-section">
      <h1>About US</h1>
        <h2>Welcome to School of Masters.</h2>
        <p>
        We are dedicated to empowering trainers, solopreneurs and organizations in their pursuit of excellence. The goal is to reinvent training methods which ensures exceptional outcomes in all areas of life.
        </p>
        <p>
        We help everyone who come to us to flourish through outcome based training and coaching programs. We understand that language should not be a barrier to success which is why we have successfully delivered our program in 6 Indian regional languages across India. Our expert coaches and trainers offer supreme guidance, support and personalized attention to help our clients unlock their full potential.
        </p>
        <p>
       <h3>Join us </h3> on our journey towards success and let School of Maters be the tool for your growth and transformation.
        </p>
      </div>
      <div className="about-us-section">
        <img src={missionImage} alt="Mission" className="section-image" />
        <h2>Mission</h2>
        <ol>
          <p>To deliver customized coaching programs that cater to the unique requirements of each individual or group.</p>
          <p>
            To provide SME’s with information that shapes and guides their business path; to offer training packages to
            match changing demands.
          </p>
          <p>We are dedicated to creating a learning environment to empower individuals to upgrade their skills and reach their full potential.</p>
        </ol>
      </div>
      <div className="about-us-section">
        <img src={visionImage} alt="Vision" className="section-image" />
        <h2>Vision</h2>
        <p>
          Our vision is to positively impact 100 million individuals and organizations by building a community of the
          world’s best coaches.
        </p>
      </div>
      <div className="about-us-section">
        <img src={valuesImage} alt="Values" className="section-image" />
        <h2>Our Values</h2>
        <ul>
          <li><p>Integrity</p></li>
          <li><p>Authenticity</p></li>
          <li><p>Accountability</p></li>
          <li><p>Distinction Driven</p></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
