import React from "react";
import { logo } from "../Assets";
import "../Footer/Footer.css";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

function Footer() {
  return (
    <Row>
      <Col className="footer_sec_1">
        <Row className="footer_sec1_child">
          <Col>
            <p>About Us</p>
          </Col>
          <Col>
            <p>Privacy Policy</p>
          </Col>
        </Row>
        <Col>
          <img
            src={logo}
            style={{
              height: "80px",
              width: "auto",
              objectFit: "scale-down",
            }}
            alt="website-logo"
            className="footer_logo"
          />
        </Col>
        <Col>
          <p>we love to hear from you</p>
        </Col>
      </Col>

      <div className="footer_sec_2">
        <p>2023 osmosis learn</p>
      </div>
    </Row>
  );
}

export default Footer;
