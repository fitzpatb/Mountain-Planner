import React, { useRef } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link, useHistory } from "react-router-dom";
import API from "../utils/API";

function Car() {
  const makeRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const seatsRef = useRef();

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user.username);
    console.log(modelRef.current.value)


    API.signupCar(user.username, makeRef.current.value, modelRef.current.value, yearRef.current.value, colorRef.current.value, seatsRef.current.value)
      .then(response => {
        console.log(response)
        let currentCar = {
          username: response.data.car.username,
          make: response.data.car.make,
          model: response.data.car.model,
          year: response.data.car.year,
          color: response.data.car.color,
          seats: response.data.car.seats
        }
        console.log(currentCar);

        localStorage.setItem('currentCar', JSON.stringify(currentCar));
        history.push("/profile");
      })
      .catch(err => {})
  }

  return(
    <Container fluid>
      <Row>
        <Col size="md-10" className="rounded border border-secondary">
          <h2>Car Information</h2>

          <form className="form car-form">
            <div className="form-group">
              <label htmlFor="car-make">Make:</label>
              <input className="form-input" type="text" id="car-make" ref={makeRef} />
            </div>
            <div className="form-group">
              <label htmlFor="car-model">Model:</label>
              <input className="form-input" type="text" id="car-model" ref={modelRef} />
            </div>
            <div className="form-group">
              <label htmlFor="car-year">Year:</label>
              <input className="form-input" type="text" id="car-year" ref={yearRef} />
            </div>
            <div className="form-group">
              <label htmlFor="car-color">Color:</label>
              <input className="form-input" type="text" id="car-color" ref={colorRef} />
            </div>
            <div className="form-group">
              <label htmlFor="car-seats">How many seats in your car (including the drivers seat):</label>
              <select className="form-control" id="car-seats" name="seats" ref={seatsRef} >
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