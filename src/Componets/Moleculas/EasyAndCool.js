import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EasyAndCoolComponet from "../Atomos/EasyAndCoolComponet";
import Rectangule21 from "../../images/Rectangule21.png";
import Natacion from "../../images/Natacion.png";
import Taxi from "../../images/Taxi.png";
import CardEasyAndCool from "../Atomos/CardEasyAndCool";
import "./EasyAndCool.css";

const EasyAndCool = () => {
  return (
    <Container className="allEasyAndCool">
      <Row>
        <Col xs="6">
          <h3>Easy and cool</h3>
          <h2>Book Your Next Trip In 3 Easy Steps</h2>
          <EasyAndCoolComponet
            image={Rectangule21}
            titel="Choose Destination"
            body="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Urna, tortor tempus."
          ></EasyAndCoolComponet>
          <EasyAndCoolComponet
            image={Natacion}
            titel="Make Payment"
            body="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Urna, tortor tempus."
          ></EasyAndCoolComponet>
          <EasyAndCoolComponet
            image={Taxi}
            titel="Reach Airport on Selected Date"
            body="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Urna, tortor tempus."
          ></EasyAndCoolComponet>
        </Col>
        <Col xs="6">
          <CardEasyAndCool />
          <div className="fondcircule"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default EasyAndCool;
