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

      
      {/* ------------------------------------------------------------------- */}


      <div className="about-us-section">
      <div className="two-column-container">
      <div className="column">
        <img src={missionImage} alt="Mission" className="section-image" />
      </div>
      <div className="column">
        <h2>Mission</h2>
        <p>
          School of Masters is committed to unlocking individual’s potential by connecting them with the right coaches. 
        </p>
        <p>We at SOM are also dedicated to deliver skills and knowledge that significantly increase our course participants on-the-job productivity, thereby enhancing their contributions to the goal of their organization.</p>
      </div>
    </div>
        <p>Our mission is threefold:</p>
          <p>Firstly, we strive to deliver customized coaching programs that cater to the unique requirements of each individual or group, in accordance with industry standards.</p>
          <p>
          Secondly, we aim to provide small and medium sized enterprises (SME’s) with information that shapes and guides their business paths with a focus on flexibility by offering a range of training packages to match their changing demands and ensure employee performance aligns with industry standards.
          </p>
          <p>Finally, we are dedicated to creating a learning environment with engaging activities that present new and interesting learning opportunities, empowering individuals to upgrade their skills and reach their full potential.</p>
          <p>At SOM we are committed to support our clients in every step, as they embark on their personal and career development.</p>
      </div>
      <div className="about-us-vision">
  <div className="section-image-container">
    <img src={visionImage} alt="Vision" className="section-image" />
  </div>
  <div className="section-text">
    <h2>Vision</h2>
    <p>
      At SOM, our vision is to positively impact 100 million individuals and organizations by creating a community of the world's best coaches. We believe that through our work, we can help create a world where everyone has the opportunity to lead a fulfilling and visionary life.
    </p>
  </div>
</div>

      {/* ------------------------------------------------------------------- */}


      <div className="about-us-section">
        <img src={valuesImage} alt="Values" className="section-image" />
        <h2>Our Values</h2>
        <ul>
          <li><p>Integrity</p></li>
          <p>Our priority is to be honest and clear to enhance our performance and achieve our goals.</p>
          <li><p>Authenticity</p></li>
          <p> At SOM, our commitment to work and clients is unwavering regardless of the type of work or status of the client.</p>
          <li><p>Accountability</p></li>
          <p> At SOM, accountability is the essence of the organization. We feel when there is accountability is where the organization will perform, progress and give timely deliver.</p>
 
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
