import React from "react";
import "./Values.css";
import { Container, Row, Col } from 'react-bootstrap';

const Values = () => {
  return (
    <>
      <Container>
        <h4 className="Values">Values</h4>
        <Row>
          <Col xs={12} sm={6} md={3} style={{ borderRight: "1px solid #000000" }}>
            <div className="value-column">
              <h2>Quality and Precision</h2>
              <p>Our unwavering commitment to quality and precision ensures excellence in every product we manufacture.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} style={{ borderRight: "1px solid #000000" }}>
            <div className="value-column">
              <h2>Sustainability  </h2>
              <p>Embracing sustainability and social responsibility, we strive to create a positive impact on the environment and society.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} style={{ borderRight: "1px solid #000000" }}>
            <div className="value-column">
              <h2>Customer Satisfaction</h2>
              <p>Our relentless focus on customer satisfaction drives us to deliver products that exceed expectations.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="value-columnlast">
              <h2>Upgrading</h2>
              <p>With a culture of continuous improvement, we innovate and refine our processes to stay ahead in the industry.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Values;
