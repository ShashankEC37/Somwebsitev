import React, { useEffect } from "react";
import "../../styles/msme.css"; // Import your custom CSS stylesheet
import msme from "../../images/msme.jpg"


import CourseDetails from "./CourseDetails";
const Msme = () => {
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
        <h2>MSME</h2>
      </div>
      <div className="container">
        <div className="skew container-fluid clearfix">
          <div className="skew-image2" ></div>
          <div className="row">
            <div className="skew-wrapper col-lg-6 col-md-8 col-xs-12">
              <div className="skew-content-bg"></div>
              <div className="skew-content">
               
                <p>
                At SOM, we provide comprehensive training programs tailored specifically to meet the unique needs of Micro, Small and Medium Enterprises (MSME’s) in various sectors.
                </p>
                <p>
                Our programs are designed to facilitate growth, both at a professional and personal level, for employees and employers alike.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="container1" style={{marginTop: "40px"}}>
      <div className="map">
        <div className="node core">Course Outcome   </div>
        <div className="node" style={{ '--i': 1 }}>Organizational Vision Driven</div>
        <div className="node" style={{ '--i': 2 }}>Organization Culture and Values</div>
        <div className="node" style={{ '--i': 3 }}>Your enrollment is our world of honour!</div>
        <div className="node" style={{ '--i': 4 }}>Accountability</div>
        <div className="node" style={{ '--i': 5 }}>Time Management</div>
        <div className="node" style={{ '--i': 6 }}>Language Proficiency</div>
        <div className="node" style={{ '--i': 7 }}>Happiness Ratio</div>
        <div className="node" style={{ '--i': 8 }}>Work-Life Balance</div>
        <div className="node" style={{ '--i': 9 }}>	Financial Freedom</div>


      </div>
    </div>  
    <CourseDetails />
    </div>
    
  );
};

export default Msme;
