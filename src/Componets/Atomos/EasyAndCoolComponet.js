import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./EasyAndCoolComponet.css";

const EasyAndCoolComponet = ({ image, titel, body }) => {
  return (
    <Container className="allEasyAndCoolComponet">
      <Row>
        <Col xs="2">
          <div className="images">
            <img src={image} />
          </div>
        </Col>
        <Col xs="9">
          <Row>
            <p className="title">{titel}</p>
          </Row>
          <Row>
            <div className="body">
              <p>{body}</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EasyAndCoolComponet;
