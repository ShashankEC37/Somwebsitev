import React, { useEffect } from "react";
import "../../styles/training.css"; // Import your custom CSS stylesheet
import training from "../../images/121.jpg"


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
      <h2 style={{color:'white'}}>121 Performance Coaching</h2>
    </div>
      <div className="container1">
    <div className="skewed">
      <div className="text">
        <p>
        When individuals undergo training, it enhances their understanding and knowledge. This improves their performance and make them work more efficiently and effectively in personal and professional life.
              </p>
              <p>
              We offer comprehensive training programs for individuals designed to enhance their personal and professional growth.
              </p>
            
        <a href="#"><strong>Read more &rarr;</strong></a>
      </div>
      <div className="image">
        <div>
          <img
            src={training}
            alt="img"
          />
        </div>
      </div>
    </div>

    <div className="skewed skewed-left">
      <div className="image">
        <div>
          <img
            src={training}
            alt="img"
          />
        </div>
      </div>
      <div className="text">
        <p> We understand that each individual faces unique challenges in their personal and professional space so we take a personalized approach in coaching them as per their specific needs. </p>
        <a href="#">Read more &rarr;</a>
      </div>
    </div>
    <div className="skewed">
      <div className="text">
        <p>
        Our individual training programs cover a wide range of areas, including leadership development, communication skills, conflict resolution, time management and stress management among others.

              </p>
               <p>
               Contact us today to learn more about our individual training programs and how to achieve your goals.
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
                <span className="time">Lifestyle Design</span>
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
                <span className="time">Unfolding Patterns of Growth</span>
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
                <span className="time">Identifying passion and perceiving it</span>
              </span>
            </div>
           
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Build a Self Brand</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Creating Accountability Structure</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Powerful conversations</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="time-wrapper">
                <span className="time">Time Management</span>
              </span>
            </div>
           
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
           
              <span className="time-wrapper">
                <span className="time">Work-Life Balance</span>
              </span>
            </div>
           
          </div>
        </li>

        
      </ul>
    </div>
    </div>
    
  );
};

export default Training;