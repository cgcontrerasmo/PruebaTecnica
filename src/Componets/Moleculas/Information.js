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
import EsferasIzquierda from "../../images/EsferasIzquierda.png";
import EsferasDerecha from "../../images/EsferasDerecha.png";
import SendAzul from "../../images/SendAzul.png";

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
                <div className="imgEmail">
                  <img src={email} />
                </div>
              </InputGroup.Text>
              <FormControl
                placeholder="Your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col xs="4">
            <Button className="buttonSubscribe">Subscribe</Button>
          </Col>
        </Row>
      </div>
      <div className="imgEsferasIzquierda">
        <img src={EsferasIzquierda} />
      </div>
      <div className="imgEsferasDerecha">
        <img src={EsferasDerecha} />
      </div>
      <div className="imgSendAzul">
        <img src={SendAzul} />
      </div>
    </Container>
  );
};

export default Information;
