import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home" className="LogoLink">
          <span>
            <img
              className="SkyRocketLogo"
              src={require("./Img/favicon-32x32.png")}
              alt=""
            />
            <h1>Skyrocket</h1>
          </span>
        </Navbar.Brand>

        {localStorage.getItem("userName") != null ? (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex justify-content-end Link1">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <div></div>
        )}
      </Container>
    </Navbar>
  );
}
