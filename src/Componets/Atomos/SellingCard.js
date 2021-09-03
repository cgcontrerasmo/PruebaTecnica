import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SellingCard.css";
import Send from "../../images/send.png";

const SellingCard = ({ title, image, price, days }) => {
  return (
    <Container className="allSellingCard">
      <Row>
        <div className="cardimage">
          <img src={image} />
        </div>
      </Row>
      <Container className="description">
        <Row>
          <Col xs="6" className="titel">
            <p>{title}</p>
          </Col>
          <Col xs="6" className="price">
            <p>{price}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="1">
            <img src={Send} />
          </Col>
          <Col xs="6" className="days">
            <p>{days}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SellingCard;
