import React from "react";
import "../../styles/CourseDetails.css"; // Import your CSS file with styles for the section

const CourseDetails = () => {
  return (
    <div>
      <header>
       
        <h1 style={{color:'#000d6b'}}>Course Timeline</h1>
      </header>

      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Orientation</span>
              <span className="time-wrapper">
                <span className="time">Week 1</span>
              </span>
            </div>
            <div className="desc">
            Introduction and overview of course 
            </div>
          </div>
        </li>

        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Communication and English </span>
              <span className="time-wrapper">
                <span className="time">Week 2 </span>
              </span>
            </div>
            <div className="desc">
            Trainers will be taught how to welcome the patients wormly and make them feel comfortable 
            </div>
          </div>
        </li>

        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Coordination and Team Building</span>
              <span className="time-wrapper">
                <span className="time">Week 3</span>
              </span>
            </div>
            <div className="desc">
              Group activity and games to build team coordination and harmony in workplace 
            </div>
          </div>
        </li>


        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa"></span>
              <span className="flag">Conclusion</span>
              <span className="time-wrapper">
                <span className="time">Week 5 </span>
              </span>
            </div>
            <div className="desc">
            Conclusion
            </div>
          </div>
        </li>
      </ul>
    </div>

    
  );
};

export default CourseDetails;