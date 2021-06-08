import React, { useRef } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import API from "../utils/API";

function Car() {
  const makeRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const seatsRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
  }

  return(
    <Container fluid>
      <Row>
        <Col size="md-10" className="rounded border border-secondary">
          <h2>Car Information</h2>

          <form className="form login-form">
            <div className="form-group">
              <label htmlFor="email-login">Make:</label>
              <input className="form-input" type="text" id="email-login" ref={makeRef} />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Model:</label>
              <input className="form-input" type="password" id="password-login" ref={modelRef} />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Year:</label>
              <input className="form-input" type="number" id="password-login" ref={yearRef} />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Color:</label>
              <input className="form-input" type="password" id="password-login" ref={colorRef} />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">How many seats in your car (including the drivers seat):</label>
              <select class="form-control" id="seats" name="seats" ref={seatsRef} >
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-secondary" onClick={event => handleSubmit(event)}>Submit</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Car;