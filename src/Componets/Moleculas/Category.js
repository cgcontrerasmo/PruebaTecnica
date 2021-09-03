import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../Atomos/CategoryCard";
import satelite from "../../images/Satelite.png";
import Avion from "../../images/Avion.png";
import Microfono from "../../images/Microfono.png";
import Pinnon from "../../images/Pinnon.png";
import "./Category.css";

const Category = () => {
  return (
    <Container className="allcategory text-center">
      <Row>
        <h3>CATEGORY</h3>
        <h2>We Offer Best Services</h2>
      </Row>
      <Row className="categorycards">
        <Col xs="3">
          <CategoryCard
            image={satelite}
            title="Calculated Weather"
            body="Built Wicket longer admire do barton vanity itself do in it."
          ></CategoryCard>
        </Col>
        <Col xs="3">
          <div className="divAvion">
            <CategoryCard
              image={Avion}
              title="Best Flights"
              body="Engrossed listening. Park gate sell they west hard for the."
              className="cardavion"
            ></CategoryCard>
          </div>
        </Col>
        <Col xs="3">
          <CategoryCard
            image={Microfono}
            title="Local Events"
            body="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          ></CategoryCard>
        </Col>
        <Col xs="3">
          <CategoryCard
            image={Pinnon}
            title="Customization"
            body="We deliver outsourced
            aviation services for
            military customers"
          ></CategoryCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
