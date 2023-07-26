import React, { useEffect } from "react";
import "../../styles/msme.css"; // Import your custom CSS stylesheet
import msme from "../../images/msme.jpg"
import msme2 from "../../images/msme2.jpg"


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
      <h2 style={{color:'white'}}>MSME</h2>
    </div>
      <div className="container1">
    <div className="skewed">
      <div className="text">
        <p>
        Training results in increased morale of employees because of reduction in dissatisfaction at work, reduced complaints, and reduced absenteeism, and increased interest in work during the post-training period. Heightened morale results in increased loyalty to the organization. It facilitates growth at a professional and personal level.
              </p>
            
        <a href="#"><strong>Read more &rarr;</strong></a>
      </div>
      <div className="image">
        <div>
          <img
            src={msme}
            alt="img"
          />
        </div>
      </div>
    </div>

    <div className="skewed skewed-left">
      <div className="image">
        <div>
          <img
            src={msme2}
            alt="img"
          />
        </div>
      </div>
      <div className="text">
        <p>We provide comprehensive training programs tailored specifically to meet the unique needs of Micro, Small and Medium Enterprises (MSME’s) in various sectors. Our team of experienced trainers are equipped with the knowledge and expertise to identify and address the specific challenges faced by MSME’s to design and deliver training programs that are customized to suit their individual needs.</p>
        <a href="#">Read more &rarr;</a>
      </div>
    </div>
    <div className="skewed">
      <div className="text">
        <p>
        At SOM, we are passionate about helping MSME’s achieve their full potential and we are dedicated in providing the highest quality training programs and support to ensure their success.

              </p>
               <p>
               Contact us today to learn more about how we can help your organization succeed.
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
