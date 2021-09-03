import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./MiNavbar.css";

const MiNavbar = () => {
  return (
    <div className="MiNavbar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav className="ms-auto">
              <Nav.Link>Desitnations</Nav.Link>
              <Nav.Link>Hotels</Nav.Link>
              <Nav.Link>Flights</Nav.Link>
              <Nav.Link>Bookings</Nav.Link>
              <Nav.Link>Login</Nav.Link>
              <Button className="button-secondary">Sign up</Button>
              <NavDropdown title="ES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MiNavbar;
