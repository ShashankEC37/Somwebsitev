import React, { useEffect } from "react";
import "../../styles/training.css"; // Import your custom CSS stylesheet
import training from "../../images/121.jpg"

import CourseDetails from "./CourseDetails";
const Training = () => {
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
        <h2>121 Personal Training</h2>
      </div>
      <div className="container">
        <div className="skew container-fluid clearfix">
          <div className="skew-image3"></div>
          <div className="row">
            <div className="skew-wrapper col-lg-6 col-md-8 col-xs-12">
              <div className="skew-content-bg"></div>
              <div className="skew-content">
               
                <p>
                At SOM, we offer comprehensive training programs for individuals designed to enhance their personal and professional growth.
                </p>
                <p>
                We understand that each individual faces unique challenges in their personal and professional space and we take a personalized approach in coaching them as per their specific needs.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
      <div className="container1">
      <div className="map">
        <div className="node core">Course Outcome   </div>
        <div className="node" style={{ '--i': 1 }}>Lifestyle Design</div>
        <div className="node" style={{ '--i': 2 }}>Unfolding Patterns of Growth</div>
        <div className="node" style={{ '--i': 3 }}>Identifying passion and perceiving it</div>
        <div className="node" style={{ '--i': 4 }}>Build a Self Brand</div>
        <div className="node" style={{ '--i': 5 }}>Creating Accountability Structure</div>
        <div className="node" style={{ '--i': 6 }}>Powerful conversations</div>
        <div className="node" style={{ '--i': 7 }}>Time Management</div>
        <div className="node" style={{ '--i': 8 }}>Work-Life Balance</div>
        
        	
        
              </div>
    </div>  
    <CourseDetails />
    </div>
    
  );
};

export default Training;
