import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import play from "../../images/Polygon 1.png";
import "./Header.css";

const Header = () => {
  return (
    <Container className="allHeader">
      <Row>
        <Col xs="6">
          <h3>Best Destinations around the world</h3>
          <h1>Travel, enjoy and live a new and full life</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="5">
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </Col>
        <Row className="buttons">
          <Col xs="2">
            <Button className="buttonHeader">Find out more</Button>
          </Col>
          <Col xs="1" className="text-center">
            <button class="redondo">
              <img src={play} className="playbutton" />
            </button>
          </Col>
          <Col xs="1">
            <span>Demo</span>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Header;
