import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { NavLink } from "react-router-dom";
import { logo } from "../Assets";

function NavMenu() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/">
                <img style={{ height: "50px", width:"auto", objectFit:"scale-down" }} src={logo} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{display:"flex", gap:"10px", justifyContent:"flex-end"}} className="me-auto">
                <NavLink style={{ textDecoration: "none" }} to="/">
                    Home
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    LogIn
                  </NavLink>
                  
                  <NavLink style={{ textDecoration: "none" }} to="/signup">Sign Up</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavMenu;
