import React, { useEffect } from "react";
import "../../styles/hospital.css"; // Import your custom CSS stylesheet
import hospital from "../../images/hospital2.jpg"


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
        <h2>Hospitals</h2>
      </div>
      <div className="container">
        <div className="skew container-fluid clearfix">
          <div className="skew-image1" ></div>
          <div className="row">
            <div className="skew-wrapper col-lg-6 col-md-8 col-xs-12">
              <div className="skew-content-bg"></div>
              <div className="skew-content">
               
                <p>
                At SOM, we offer specialized training programs for hospitals, specifically designed to enhance the skills and capabilities of both administrative and nursing staff.
                </p>
                <p>
                Our training programs focus on building strong customer relationships as well as fostering a positive work culture.
                </p>
              
              </div>
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
