import React from "react";
import SOM from "../../assets/SOM.png";
import "../../styles/footer.css";

const Footer = () => {
  const quickLinks01 = [
    {
      path: "#",
      display: "Hospitals",
    },
    {
      path: "#",
      display: "MSME",
    },
    {
      path: "#",
      display: "121 Performance Coaching",
    },
    {
      path: "#",
      display: "Recruitments",
    },
  ];

  const quickLinks02 = [
    {
      path: "#",
      display: "+91 8105404653",
    },
    {
      path: "#",
      display: "sheetal@schoolofmasters.co.in",
    },

  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <div className="logo">
              <img
                src={SOM}
                style={{ width: "150px", height: "auto" }}
                alt=""
              />
              <p style={{color:'#090238' ,paddingTop:"20px",paddingBottom:"5px", fontWeight:"510"}}>No. 99, Jaya Apartments,</p>
              <p style={{color:'#090238' ,paddingTop:"20px",paddingBottom:"5px", fontWeight:"510"}}>6th Cross Rd, Malleshwara,</p>
              <p style={{color:'#090238' ,paddingTop:"20px",paddingBottom:"5px", fontWeight:"510"}}>Bengaluru, Karnataka 560003</p>
            </div>
          </div>
          <div className="footer__quick-links">
            <div className="quick__links-title">Services</div>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Contact Us</div>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Connect with Us</div>
            <ul className="quick__links">
              <li className="quick__link-item">
              <a href="https://www.linkedin.com/company/school-of-masters-india/" target="_blank">
                <i
                  className="ri-linkedin-box-fill"
                  style={{ fontSize: "24px", color: "#090238" }}
                ></i>
                </a>
              </li>
              <li className="quick__sociallink-item">
              <a href="" target="_blank">
                <i
                  className="ri-youtube-fill"
                  style={{ fontSize: "24px", color: "#090238" }}
                ></i>
                </a>
              </li>
              <li className="quick__link-item">
              <a href="https://www.facebook.com/people/SOM/100068256820872/" target="_blank">
                <i
                  className="ri-facebook-circle-fill"
                  style={{ fontSize: "24px", color: "#090238" }}
                ></i>
                </a>
              </li>
              <li className="quick__link-item">
              <a href="https://www.instagram.com/schoolofmasters13/" target="_blank">
                <i
                  className="ri-instagram-line"
                  style={{ fontSize: "24px", color: "#090238" }}
                ></i>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
