import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { DateUtils } from "react-day-picker";

function Profile( props) {
  const [profile, setProfile] = useState({
    first: "",
    last: "",
    username: "",
    email: ""
  })
  const [car, setCar] = useState({
    make: "",
    model: "",
    color: "",
    year: "",
    seats: "",
  })
  const [allTrips, setAllTrips] = useState([]);

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("currentUser"));
    setProfile({
      first: userProfile.firstname,
      last: userProfile.lastname,
      username: userProfile.username,
      email: userProfile.email
    });
    handleCar(userProfile);
    handleTrips();
  }, []);

  const handleCar = ((userProfile) => {
    console.log(userProfile.username)
    const username = userProfile.username
    API.findUserCar(username)
      .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.userCar.length; i++) {
          if (response.data.userCar[i].username === username) {
            setCar({
              make: response.data.userCar[i].make,
              model: response.data.userCar[i].model,
              year: response.data.userCar[i].year,
              color: response.data.userCar[i].color,
              seats: response.data.userCar[i].seats
            })
          }
        }

      })
      .catch(err => {
        console.log(err)
      })
  })

  const handleTrips = (async () => {
    let tripsArray = [];
    await API.findAllTrips()
      .then(response => {
        console.log(response);
        const format = new Date(response.data.trips[0].date);
        console.log(format.toLocaleDateString);
        for (let i = 0; i < response.data.trips.length; i++) {

          console.log(response.data.trips[i]);
          tripsArray.push(response.data.trips[i]);
        }
        setAllTrips(tripsArray);
      })
      .catch(err => {
        console.log(err)
      })
  })

  const handleJoin = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    console.log(profile.username)
    API.joinTrip(event.target.value, profile.username)
      .then(response => {
        console.log(response)
        handleTrips();
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container fluid>
      <Row>
        <Col size="6">
          <img src="profile-image.png" />
        </Col>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              User Profile
            </div>
            <div className="card-body">
              <ul>
                <li>
                  Name: {profile.first} {profile.last}
                </li>
                <li>
                  Username: {profile.username}
                </li>
                <li>
                  Email: {profile.email}
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              User Car
            </div>
            <div className="card-body">
              <ul>
                <li>
                  Make: {car.make}
                </li>
                <li>
                  Model: {car.model}
                </li>
                <li>
                  Color: {car.color}
                </li>
                <li>
                  Year: {car.year}
                </li>
                <li>
                  Seats: {car.seats}
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="6">
          <div className="card">
            <Row>
              <div className="card-header">
                Available Resorts
              </div>
            </Row>
            <Row>
              <Col size="md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"  data-lon="-106.04335" data-lat="39.63026" onClick={props.handleCity}>A-Basin</li>
                  <li className="list-group-item" data-lon="-106.817543" data-lat="39.191101" onClick={props.handleCity}>Aspen</li>
                  <li className="list-group-item" data-lon="-106.038353" data-lat="39.481651" onClick={props.handleCity}>Breckenridge</li>
                  <li className="list-group-item" data-lon="-106.097519" data-lat="39.574429" onClick={props.handleCity}>Copper Mountain</li>
                  <li className="list-group-item" data-lon="-106.987823" data-lat="38.869709" onClick={props.handleCity}>Crested Butte</li>
                  <li className="list-group-item"
                  data-lon="-105.510834" data-lat="39.96138" onClick={props.handleCity}>Eldora</li>
                </ul>
              </Col>
              <Col size="md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" data-lon="-105.987244" data-lat="39.59943" onClick={props.handleCity}>Keystone</li>
                  <li className="list-group-item" data-lon="-105.074982" data-lat="40.397758" onClick={props.handleCity}>Loveland</li>
                  <li className="list-group-item" data-lon="-106.831718" data-lat="40.484982" onClick={props.handleCity}>Steamboat</li>
                  <li className="list-group-item" data-lon="-107.812286" data-lat="37.937489" onClick={props.handleCity}>Telluride</li>
                  <li className="list-group-item" data-lon="-106.374199" data-lat="39.640259" onClick={props.handleCity}>Vail</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col size="6">
          <div className="card">
            <Row>
              <div className="card-header">
                Upcoming Trips
              </div>
            </Row>
            <Row>
              <div className="card-body">
                <ul>
                {allTrips.map((trip, index) => {
                  const formatDate = new Date(trip.date);
                  console.log(formatDate.toLocaleDateString());
                  const correctDate = formatDate.toLocaleDateString();
                  console.log(trip.passengers);
                  let riders;
                  if (trip.passengers === null) {
                    riders = "No Passengers"
                  } else  if (trip.passengers.length === 0) {
                    riders = "No Passengers"
                  } else {
                    riders = trip.passengers;
                  }
                  return(
                    <div key={index}>
                      <li>{trip.driver}, {trip.mountain}, {correctDate}, Available Seats {trip.seats}</li>

                      <ul>
                        <li>{riders}</li>
                      </ul>
                      <button value={trip._id} className="btn btn-secondary" onClick={handleJoin}>Join trip</button>
                    </div>
                  )
                })}
                </ul>

              </div>
              <div className="card-footer">
                <Link to="/day">Book a trip</Link>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile;