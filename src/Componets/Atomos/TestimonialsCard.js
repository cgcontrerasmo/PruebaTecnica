import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TestimonialsCard.css";

const TestimonialsCard = ({ image, body, name, city }) => {
  return (
    <Container className="allTestimonialsCard">
      <div className="imageTestimonialsCard">
        <img src={image} />
      </div>
      <p className="body">{body}</p>
      <h3>{name}</h3>
      <p>{city}</p>
    </Container>
  );
};

export default TestimonialsCard;
