import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SellingCard from "../Atomos/SellingCard";
import Rome from "../../images/Rome.png";
import London from "../../images/London.png";
import Europe from "../../images/Europe.png";
import "./Selling.css";

const Selling = () => {
  return (
    <Container className="allselling text-center">
      <Row>
        <h3>TOP SELLING</h3>
        <h2>Top Destinations</h2>
      </Row>
      <Row>
        <Col xs="4">
          <SellingCard
            image={Rome}
            title="Rome, Italy"
            price="$5,2k"
            days="10 Days Trip"
          ></SellingCard>
        </Col>
        <Col xs="4">
          <SellingCard
            image={London}
            title="London, UK"
            price="$4,2k"
            days="21 Days Trip"
          ></SellingCard>
        </Col>
        <Col xs="4">
          <SellingCard
            image={Europe}
            title="Full Europe"
            price="$15k"
            days="28 Days Trip"
          ></SellingCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Selling;
