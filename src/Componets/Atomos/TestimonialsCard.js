import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TestimonialsCard = ({ image, body, name, city }) => {
  return (
    <Container>
      <img src={image} />
      <p>{body}</p>
      <h3>{name}</h3>
      <p>{city}</p>
    </Container>
  );
};

export default TestimonialsCard;
