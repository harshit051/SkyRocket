import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../component/context";
import { Link } from "react-router-dom";
import LoginHooks from "../component/LoginHook";

export default function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setmsg] = useState("");

  const { signIn } = React.useContext(AuthContext);

  function validateForm() {
    return Email.length > 0 && Password.length > 0;
  }

  function handleSubmit() {}

  return (
    <div>
      <Header />
      <Container>
        <Row className="formAndImageContainer">
          <Col md="auto">
            <img
              className="LogoImg"
              alt=""
              src={require("../component/Img/android-chrome-512x512.png")}
            />
          </Col>
          <Col md="auto">
            <Form onSubmit={handleSubmit} className="Form">
              <h1>Log In</h1>
              <Form.Group controlId="email" size="lg">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={Email}
                  className="textField"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password" size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={Password}
                  className="textField"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                block
                size="lg"
                type="submit"
                // variant="success"
                // isLoading={isLoading}
                disabled={!validateForm()}
              >
                Sign In
              </Button>
              {msg}
              <div style={{ textAlign: "right", marginTop: "10px" }}>
                New User ?{" "}
                <Link to="/registration" style={{ textDecoration: "none" }}>
                  Registred Here
                </Link>
              </div>
              <hr/>
              <LoginHooks/>
              
              {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
