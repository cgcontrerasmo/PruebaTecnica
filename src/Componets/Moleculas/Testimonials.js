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
        <Col xs="5">
          <h3>TESTIMONIALS</h3>
          <h2>What people say about Us.</h2>
        </Col>
        <Col xs="7">
          <Carouseles></Carouseles>
        </Col>
      </Row>
      <div className="image">
        <Row className="imagesTestimonials">
          {/*  offset-1" */}
          <Col xs="2">
            <div className="Axon">
              <img src={Axon} />
            </div>
          </Col>
          <Col xs="3">
            <div className="Jetstart">
              <img src={Jetstar} />
            </div>
          </Col>
          <Col xs="3">
            <div className="Expedia">
              <img src={Expedia} />
            </div>
          </Col>
          <Col xs="2">
            <div className="Qantas">
              <img src={Qantas} />
            </div>
          </Col>
          <Col xs="2">
            <div className="Alitalia">
              <img src={Alitalia} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Testimonials;
