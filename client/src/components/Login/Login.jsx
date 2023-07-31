import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import { logo } from "../Assets";
import Alert from "react-bootstrap/Alert";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", {
        username: name,
        password: password,
      });
      if (res.data) {
        console.log("Logged in successfully!");
        setSuccess(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
    setName("");
    setPassword("");
  };
  return (
    <Container className="parent">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {success && (
          <Alert variant="success">LogIn successful, Redirecting to home</Alert>
        )}
        <Col md="8" lg="4" sm="12">
          <h3>LogIn</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Not having an account? <NavLink to="/signup">Sign Up</NavLink>
            <img
              style={{ height: "60px", width: "auto", objectFit: "scale-down" }}
              src={logo}
              alt="company_logo"
            />
          </div>
          <Form onSubmit={submitHandler}>
            <Form.Group className="form_group">
              <Form.Control
                className="input_1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="enter user name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="input_2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="enter password"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
