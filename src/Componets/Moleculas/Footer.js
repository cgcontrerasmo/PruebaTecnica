import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import AppleStore from "../../images/AppleStore.png";
import GooglePlay from "../../images/GooglePlay.png";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs="2">
          <h3>Company</h3>
          <h4>About</h4>
          <h4>Careers</h4>
          <h4>Mobile</h4>
        </Col>
        <Col xs="2">
          <h3>Contact</h3>
          <h4>Help/FAQ</h4>
          <h4>Press</h4>
          <h4>Affilates</h4>
        </Col>
        <Col xs="2">
          <h3>More</h3>
          <h4>Airlinefees</h4>
          <h4>Airline</h4>
          <h4>Low fare tips</h4>
        </Col>
        <Col xs="3">
          <Row>
            <Col xs="4">
              <img src={Facebook} />
            </Col>
            <Col xs="4">
              <img src={Instagram} />
            </Col>
            <Col xs="4">
              <img src={Twitter} />
            </Col>
          </Row>
          <Row>
            <h2>Discover our app</h2>
          </Row>
          <Row>
            <Col xs="6">
              <img src={GooglePlay} />
            </Col>
            <Col xs="6">
              <img src={AppleStore} />
            </Col>
          </Row>
        </Col>
      </Row>
      <p>techTest@test.co</p>
    </Container>
  );
};

export default Footer;
