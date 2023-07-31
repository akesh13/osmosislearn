import React, { useReducer, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from "react-bootstrap/Alert";
import { NavLink } from "react-router-dom";
import { logo } from "../Assets";
import "../Signup/Signup.css";

const default_state = {
  name: "",
  email: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return default_state;
    default:
      return state;
  }
};

function Signup() {
  const [formData, dispatch] = useReducer(formReducer, default_state);
  const [success, setSuccess] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", field: name, value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const res = await axios.post("http://localhost:8080/create_user", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });
      if (res.data) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }

    dispatch({ type: "RESET" });
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
        <Col md="8" lg="4" sm="12">
          <h3>SignUp</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Already have an account? <NavLink to="/login">Login</NavLink>
            <img
              style={{ height: "60px", width: "auto", objectFit: "scale-down" }}
              src={logo}
              alt="company_logo"
            />
          </div>
          {success && (
            <Alert variant="success">
              Sign up successful, Redirecting to logIn
            </Alert>
          )}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Control
                className="input_1"
                type="text"
                name="name"
                value={formData.name}
                onChange={changeHandler}
                placeholder="enter user name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="input_2"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="input_2"
                type="password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
