import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ongoingimage from "../../images/Ongoingimage.png";
import Progresse from "../../images/Progresse.png";
import "./Ongoing.css";

const Ongoing = () => {
  return (
    <Container className="allOngoing">
      <Row>
        <Col xs="3">
          <div className="ongoingimg">
            <img src={Ongoingimage} />
          </div>
        </Col>
        <Col xs="9">
          <h4>Ongoing</h4>
          <h3>Trip To Rome</h3>
          <span>48%</span>
          <span>completed</span>
          <div>
            <img src={Progresse} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ongoing;
