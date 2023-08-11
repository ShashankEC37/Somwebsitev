import React, { useEffect } from "react";
import college from "../../../images/HOSPITALS/10.jpg"
import { Container ,Row, Col} from 'react-bootstrap';
const MsmeKM = () => {
    return (
<section className="about__page-section1">
<div className="top-bar">
      <h2 style={{color:'white'}}>MSME Staff Training</h2>
    </div>
      <div className='container1'>
 
        <Row>
       
          <Col lg="4" md="4">
            <div className="about__section-content" >
           
            <h4 className="Values" style={{ textAlign: "center", fontSize:"50px" }}>Course Description</h4>

              <p className="Mission" style={{paddingTop:"50px" , marginRight:"30px",paddingBottom:"20px"}}>
                
             <strong style={{fontWeight:"600" }}> School of Masters </strong>SOM is a training provider that offers customized training programs to Micro, Small and Medium Enterprises (MSME’s) through its Employee Enhancement Program. We understand that MSME’s operate in a dynamic and challenging environment and our training programs are tailored to help them overcome the hurdles they face. Our Employee Enhancement Program covers a broad range of topics such as effective communication, leadership, management skills, digital marketing, finance and human resource management, all of which are essential for the success of MSME’s. We also provide our participants with practical assignments and case studies that enable them to apply the skill learnt in their work environment.

              </p>
              <p className="Mission"style={{paddingTop:"20px", marginRight:"30px"}}>At SOM, we understand that time is a valuable resource for MSME’s and we provide flexible training schedules that fit the unique needs of organization. We also ensure that our training programs are affordable and accessible, making it possible for MSME’s to provide their employees with quality training without straining their budgets.
</p>
              <p className="Mission" style={{paddingTop:"20px" , marginRight:"30px"}}>In conclusion, SOM offers an ideal platform for MSME’s to enhance the performance of their employees and their grow their business. With our flexible and affordable training schedules, MSME’s can provide their employees with quality training without compromising their operations.

</p>
             
              <div className="about__section-item d-flex align-items-center" style={{ marginBottom: '40px' }}></div>
            </div>
          </Col>
          <Col lg="8" md="8">
            <div className="mission__img">
              <img src={college} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
     );

}


export default MsmeKM;