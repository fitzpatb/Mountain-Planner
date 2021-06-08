import React, { useRef, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
//import { Link } from "react-router-dom";
import API from "../utils/API";

function Signup() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const handleSubmit = event => {
    event.preventDefault();

    if (!usernameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
        setError("Missing a required field.");
        passwordRef.current.value = "";
        return;
    }

    API.signup(firstnameRef.current.value, lastnameRef.current.value, usernameRef.current.value, emailRef.current.value, passwordRef.current.value)
        .then(response => {
            setError(null);
            console.log(response);
        })
        .catch(err => {
            if (!err.response) {
                setError("Unable to connect to the server.");
            } else if (err.response.data === "SequelizeValidationError") {
                setError("Please enter a valid email address.");
            } else if (err.response.data === "SequelizeUniqueConstraintError") {
                setError("This email address is already associated with an account.");
            } else {
                setError("An unknown error occurred.");
            }
            passwordRef.current.value = "";
            console.log(err);
        })
}

  return (
    <Container fluid>
      <Row>
        <Col size="md-10" className="rounded border border-secondary">
          <h2>Signup</h2>

          <form className="form signup-form">
            <div className="form-group">
              <label htmlFor="firstname-signup">First Name:</label>
              <input className="form-input" type="text" id="firstname-signup"  ref={firstnameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="lastname-signup">Last Name:</label>
              <input className="form-input" type="text" id="lastname-signup" ref={lastnameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="username-signup">Username:</label>
              <input className="form-input" type="text" id="username-signup" ref={usernameRef} />
            </div>
            <div className="form-group">
              <label htmlFor="email-signup">Email:</label>
              <input className="form-input" type="text" id="email-signup" ref={emailRef} />
            </div>
            <div className="form-group">
              <label htmlFor="password-signup">Password:</label>
              <input className="form-input" type="password" id="password-signup" ref={passwordRef} />
            </div>
            <div className="form-group">
              <button className="btn btn-secondary" type="submit" onClick={event => handleSubmit(event)} >Signup</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup;