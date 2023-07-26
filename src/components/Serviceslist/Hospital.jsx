import React, { useEffect } from "react";
import "../../styles/hospital.css"; // Import your custom CSS stylesheet
import hospital from "../../images/hospital2.jpg"
import hospital2 from "../../images/hospital.jpg"
import hospital3 from "../../images/hospital3.jpg"
import "../../styles/CourseDetails.css"; // Import your



import CourseDetails from "./CourseDetails";
const Hospital = () => {
    useEffect(() => {
        const maps = document.querySelectorAll('.map');
    
        maps.forEach((map) => {
          const nodes = map.querySelectorAll('.node');
          map.style.setProperty('--node-count', nodes.length - 1);
          map.style.setProperty('--tan', Math.tan(Math.PI / nodes.length));
        });
      }, []);
  return (
    <div style={{backgroundColor:"white"}}>
      <div className="top-bar">
        <h2 style={{color:'white'}}>Hospitals</h2>
      </div>
        <div className="container1">
      <div className="skewed">
        <div className="text">
          <p>
          Training and development of hospital staff is crucial for providing high-quality patient care, increasing efficiency and productivity, expanding services and revenue, maintaining compliance and accreditation and retaining top talent.
                </p>
                 <p>
                Our training programs focus on building strong customer relationships as well as fostering a positive work culture.
                </p>
              
          <a href="#"><strong>Read more &rarr;</strong></a>
        </div>
        <div className="image">
          <div>
            <img
              src={hospital}
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="skewed skewed-left">
        <div className="image">
          <div>
            <img
              src={hospital2}
              alt="img"
            />
          </div>
        </div>
        <div className="text">
          <p>At SOM, we offer specialized training programs for hospitals, specifically designed to enhance the skills and capabilities of both administrative and nursing staff. Our training programs focus on building strong customer relationships as well as fostering a positive work culture.</p>
          <a href="#"><strong>Read more &rarr;</strong></a>
        </div>
      </div>
      <div className="skewed">
        <div className="text">
          <p>
          We understand that every hospital has unique challenges and goals, which is why we customize our training programs to address specific issues faced by both employees and employers. Our training programs cover a broad range of topics, including effective communication, conflict resolution, team building and leadership development.

                </p>
                 <p>
                 Contact us today to learn more about how we can help your hospital succeed.
                </p>

              
                <a href="/contact" className="dark-blue-button">
      Contact Us
    </a>
        </div>
        <div className="image">
          <div>
            <img
              src={hospital3}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
           
               
       


    <div>
      <header>
       
        <h1 style={{color:'#000d6b'}}>Course Highlights </h1>
      </header>

      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
          
              <span className="time-wrapper">
                <span className="time">Escorting them to lead a robust life again</span>
              </span>
            </div>
            
          </div>
        </li>

        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
             
              <span className="time-wrapper">
                <span className="time">Empowering them! Keeps their fear at bay </span>
              </span>
            </div>
          
          </div>
        </li>

        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Your enrollment is our world of honour!</span>
              </span>
            </div>
           
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Right guidance builds secure zone</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Motivation is a key to heal faster</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Creating oneness with joy again</span>
              </span>
            </div>
           
          </div>
        </li>

      </ul>
    </div>
    </div>
    
  );
};

export default Hospital;
