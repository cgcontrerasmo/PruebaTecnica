import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carouseles from "./Carousel";
import Alitalia from "../../images/Alitalia.png";
import Axon from "../../images/Axon.png";
import Jetstar from "../../images/Jetstar.png";
import Expedia from "../../images/Expedia.png";
import Qantas from "../../images/Qantas.png";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Container className="allTestimonials">
      <Row>
        <Col xs="6">
          <h3>TESTIMONIALS</h3>
          <h2>What people say about Us.</h2>
        </Col>
        <Col xs="6">
          <Carouseles></Carouseles>
        </Col>
      </Row>
      <Row className="imagesTestimonials offset-1">
        <Col xs="2">
          <img src={Axon} className="image" />
        </Col>
        <Col xs="2">
          <img src={Jetstar} className="image" />
        </Col>
        <Col xs="2">
          <img src={Expedia} className="image" />
        </Col>
        <Col xs="2">
          <img src={Qantas} className="image" />
        </Col>
        <Col xs="2">
          <img src={Alitalia} className="image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
