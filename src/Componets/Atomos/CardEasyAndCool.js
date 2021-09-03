import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Greece from "../../images/Greece.png";
import LEAF from "../../images/LEAF.png";
import Map from "../../images/Map.png";
import SendGreece from "../../images/sendGreece.png";
import Build from "../../images/Build.png";
import Heart from "../../images/Heart.png";
import "./CardEasyAndCool.css";
import Ongoing from "./Ongoing";

const CardEasyAndCool = () => {
  return (
    <Container className="allCardEasyAndCool">
      <div className="imageGreece">
        <img src={Greece} />
      </div>
      <h3>Trip To Greece</h3>
      <p>14-19 June | by Walter W</p>
      <div className="images">
        <Row>
          <Col xs="2" className="lEAF">
            <img src={LEAF} />
          </Col>
          <Col xs="2" className="map">
            <img src={Map} />
          </Col>
          <Col xs="2" className="sendGreece">
            <img src={SendGreece} />
          </Col>
        </Row>
        <Row>
          <Col xs="1">
            <div className="build">
              <img src={Build} />
            </div>
          </Col>
          <Col xs="6">
            <p>44 people going</p>
          </Col>
          <Col xs="1" className="heart">
            <img src={Heart} />
          </Col>
        </Row>
      </div>
      <div className="ongoingClass">
        <Ongoing />
      </div>
    </Container>
  );
};

export default CardEasyAndCool;
