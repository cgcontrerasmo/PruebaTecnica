import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CategoryCard.css";

const CategoryCard = ({ title, body, image }) => {
  return (
    <Container className="allCategoryCard">
      <Row>
        <Col className="text-center">
          <div className="imageCategoryCard">
            <img src={image} />
          </div>
          <h4>{title}</h4>
          <p>{body}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryCard;
