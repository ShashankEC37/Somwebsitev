import React, { useEffect } from "react";
import "../../styles/hospital.css"; // Import your custom CSS stylesheet
import hospital from "../../images/hospital2.jpg"
import hospital2 from "../../images/hospital.jpg"



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
              src="https://cdn.elearningindustry.com/wp-content/uploads/2018/09/3-steps-to-better-healthcare-training-e1538384810968.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
           
               
          
     
      <div className="container1">
      <div className="map">
        <div className="node core">Course Outcome   </div>
        <div className="node" style={{ '--i': 1 }}>Escorting them to lead a robust life again</div>
        <div className="node" style={{ '--i': 2 }}>Empowering them! Keeps their fear at bay</div>
        <div className="node" style={{ '--i': 3 }}>Your enrollment is our world of honour!</div>
        <div className="node" style={{ '--i': 4 }}>Right guidance builds secure zone</div>
        <div className="node" style={{ '--i': 5 }}>Motivation is a key to heal faster</div>
        <div className="node" style={{ '--i': 6 }}>Creating oneness with joy again</div>
      </div>
    </div>  
    <CourseDetails />
    </div>
    
  );
};

export default Hospital;
