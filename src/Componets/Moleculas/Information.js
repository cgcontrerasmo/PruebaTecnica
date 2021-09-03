import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import email from "../../images/email.png";
import "./Information.css";

const Information = () => {
  return (
    <Container className="allInformation">
      <Row>
        <div className="infoH3">
          <h3>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h3>
        </div>
      </Row>
      <div className="form">
        <Row>
          <Col xs="8">
            <InputGroup className="input">
              <InputGroup.Text id="basic-addon1">
                <img src={email} />
              </InputGroup.Text>
              <FormControl
                placeholder="Your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col xs="4">
            <Button>Subscribe</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Information;
