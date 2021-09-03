import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import TestimonialsCard from "../Atomos/TestimonialsCard";
import Testimonial1 from "../../images/Testimonial2.png";
import Testimonial2 from "../../images/Testimonial1.png";
import "./Carousel.css";

const Carouseles = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <TestimonialsCard
          image={Testimonial2}
          body="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
          name="Mike taylor"
          city="Lahore, Rusia"
        ></TestimonialsCard>
      </Carousel.Item>
      <Carousel.Item>
        <TestimonialsCard
          image={Testimonial1}
          body="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
          name="Mike Contreras"
          city="Lahore, Rusia"
        ></TestimonialsCard>
      </Carousel.Item>
      <Carousel.Item>
        <TestimonialsCard
          image={Testimonial1}
          body="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
          name="Laura taylor"
          city="Lahore, Rusia"
        ></TestimonialsCard>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carouseles;
