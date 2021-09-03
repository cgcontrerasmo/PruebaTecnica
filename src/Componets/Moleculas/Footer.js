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
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="allFooter">
      <Row className="justify-content-end">
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
              <div className="imgFacebook">
                <img src={Facebook} />
              </div>
            </Col>
            <Col xs="4">
              <div>
                <img src={Instagram} />
              </div>
            </Col>
            <Col xs="4">
              <div className="imgTwitter">
                <img src={Twitter} />
              </div>
            </Col>
          </Row>
          <Row>
            <h2>Discover our app</h2>
          </Row>
          <Row className="justify-content-end g-0">
            <Col xs="5" className="justify-content-center">
              <div className="imgGooglePlay">
                <img src={GooglePlay} />
              </div>
            </Col>
            <Col xs="7">
              <div className="imgAppleStore d-flex">
                <img src={AppleStore} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div></div>
      <div className="correoContact">
        <p>techTest@test.co</p>
      </div>
    </Container>
  );
};

export default Footer;
