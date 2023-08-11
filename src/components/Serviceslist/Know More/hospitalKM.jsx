import React, { useEffect } from "react";
import college from "../../../images/HOSPITALS/10.jpg"
import { Container ,Row, Col} from 'react-bootstrap';
import "../Know More/HospitalKnowMore.css"
const HospitalKM = () => {
    return (
<section className="about__page-section1">
<div className="top-bar">
      <h2 style={{color:'white'}}>Hospital Staff Training</h2>
    </div>
      <div className='container1'>
 
        <Row>
       
          <Col lg="12" md="12">
            <div className="about__section-content" >
           
            <h4 className="Values" style={{ textAlign: "center", fontSize:"50px" }}>Course Description</h4>

              <p className="Mission" style={{paddingTop:"50px" , marginRight:"30px",paddingBottom:"20px"}}>
                
             <strong style={{fontWeight:"600" }}> School of Masters </strong>is a leading provider of training programs for the healthcare industry, specifically designed for administrative and nursing staff. Our training programs focus on improving customer relationships, creating a better work environment, and enhancing hospital sales.
              </p>
              <p className="Mission"style={{paddingTop:"20px", marginRight:"30px"}}>We cater to hospitals of all sizes and work closely with them to understand the challenges faced by employees in their day-to-day operations. Our training programs are designed to address these challenges, ensuring that employees can perform their best both personally and professionally.</p>
              <p className="Mission" style={{paddingTop:"20px" , marginRight:"30px"}}>Our training programs cover a range of topics including effective communication, conflict resolution, time management and customer service. We also provide training and technical skills such as medical billing and coding, compliance with regulatory requirements and electronic health record management. Our trainers are experts in their respective fields and use practical and hands on approaches to ensure that participants can apply what they learn in their work environment.
</p>
              <p className="Mission"style={{paddingTop:"20px" , marginRight:"30px"}}>We also work with hospitals to create a better work environment, which leads to increased employee morale, motivation and productivity. Our training programs equip employees with their necessary skills to work collaboratively, promote a culture of respect and enhance the patient’s experience.
</p>
              <p className="Mission" style={{paddingTop:"20px" , marginRight:"30px"}}>In conclusion, SOM is an ideal partner for hospitals seeking to improve their employees’ performance and enhance the patient’s experience. Our training programs are designed to address the unique challenges faced by administrative and nursing staff. With our practical and hands-on approach, we equip employees with the necessary skills to perform at their best, both personally and professionally.
</p>
              <div className="about__section-item d-flex align-items-center" style={{ marginBottom: '40px' }}></div>
            </div>
          </Col>
         
        </Row>
      </div>
    </section>
     );

}


export default HospitalKM;