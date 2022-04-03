// import React from "react";

// export  default function RegistrationPage() {
//     return(<div>
//         <h1>RegistrationPage</h1>
//     </div>);
// }


import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../component/context";
import { Link } from "react-router-dom";
import LoginHooks from "../component/LoginHook";

export default function RegistrationPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setmsg] = useState("");
  const [FullName,setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Contact, setContact] = useState("");
//   const []

  const { signIn } = React.useContext(AuthContext);

  function validateForm() {
    return Email.length > 0 && Password.length > 0 && Password=== confirmPassword && FullName.length>0 && Contact.length>0 ;
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
            <Form onSubmit={handleSubmit} className="FormR">
              <h1>Sign Up</h1>
              <Form.Group controlId="fullName" size="lg">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                  type="text"
                  value={FullName}
                  className="textField"
                  onChange={(e) => setFullName(e.target.value)}
                  />
              </Form.Group>
              <Form.Group controlId="email" size="lg">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={Email}
                  className="textField"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Group controlId="Contact" size="lg">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                  type="text"
                  value={Contact}
                  className="textField"
                  onChange={(e) => setContact(e.target.value)}
                  />
              </Form.Group>
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
              <Form.Group controlId="confirmPassword" size="lg">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                  type="password"
                  value={confirmPassword}
                  className="textField"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                Sign Up
              </Button>
              {msg}
              <div style={{ textAlign: "right", marginTop: "10px" }}>
                Old User ?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Login Here
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
