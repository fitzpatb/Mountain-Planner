import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link} from "react-router-dom";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal"

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
  const [ modalDriver, setModalDriver ] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: ""
  });
  const [ modalCar, setModalCar ] = useState({
    make: "",
    model: "",
    year: "",
    color: ""
  });

  const [modalShow, setModalShow] = useState(false);
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
    let carObj = {};
    console.log(userProfile.username)
    const username = userProfile.username
    API.findUserCar(username)
      .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.userCar.length; i++) {
          if (response.data.userCar[i].username === username) {
            carObj = {
              make: response.data.userCar[i].make,
              model: response.data.userCar[i].model,
              year: response.data.userCar[i].year,
              color: response.data.userCar[i].color,
              seats: response.data.userCar[i].seats
            }
          }
        }
        setCar(carObj)
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
          tripsArray.push(response.data.trips[i]);
        }
        setAllTrips(tripsArray);
      })
      .catch(err => {
        console.log(err)
      })
  })

  const handleJoin = (event) => {
    console.log(event.target.value);
    console.log(profile.username)
    API.joinTrip(event.target.value, profile.username)
      .then(response => {
        console.log(response)

      })
      .catch(err => {
        console.log(err)
        alert("You are already included on this trip")
      })
      window.location.reload();
  }

  const handleCancel = (event) => {
    API.deleteTrip(event.target.value)
      .then(response => {
        console.log('deleted');
        alert("Trip has been deleted")
      })
      .catch(err => {
        console.log(err)
        alert("was unable to delete trip")
      })
      window.location.reload();
  }

  const handleRemove = (event) => {
    API.removePassenger(event.target.value, profile.username)
      .then(response => {
        console.log("removed");
        alert("You have been removed from this trip")
      })
      .catch(err => {
        console.log(err)
        alert("Was unable to remove you from the trip")
      })
      window.location.reload();
  }

  const handleModalDriver = (event) => {

    console.log(event.target.value)
    const username = event.target.value;
    API.findUser(event.target.value)
      .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].username === username) {
            setModalDriver({
              firstname: response.data[i].firstname,
              lastname: response.data[i].lastname,
              username: response.data[i].username,
              email: response.data[i].email
            })
            console.log(modalDriver)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
    handleModalCar(username);
  }

  const handleModalCar = (driver) => {
    const username = driver;
    API.findUserCar(username)
      .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.userCar.length; i++) {
          if (response.data.userCar[i].username === username) {
            setModalCar({
              make: response.data.userCar[i].make,
              model: response.data.userCar[i].model,
              year: response.data.userCar[i].year,
              color: response.data.userCar[i].color
            })
            console.log(modalCar)
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
      setModalShow(true);

  }
  // await API.findUserCar(event.target.value)
  //     .then(response => {
  //       console.log(response)
  //       for (let i = 0; i < response.data.userCar.length; i++) {
  //         if (response.data[i].userCar.username === event.target.value) {
  //           setModalCar({
  //             make: response.data[i].make,
  //             model: response.data[i].model,
  //             year: response.data[i].year,
  //             color: response.data[i].color
  //           })
  //         }
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

  return (
    <Container fluid>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalDriver={modalDriver}
        modalCar={modalCar}
      />
      <Row>
        <Col size="6">
          <img src="profile-image.png" alt="placeholder" />
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
          <div className="card-title user-trips">
            User Trips:
            <br></br>
            <Link id="user-book" to="/day">Book a trip</Link>
          </div>
          <Col size="6">
            <div className="card mx-auto" id="driving-trips">
              <div className="card-header">
                Driving
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                {allTrips.map((trip, index) => {
                  const formatDate = new Date(trip.date);
                  const correctDate = formatDate.toLocaleDateString();
                  let riders;
                  if (trip.passengers === null) {
                    riders = "No Passengers"
                  } else  if (trip.passengers.length === 0) {
                    riders = "No Passengers"
                  } else {
                    riders = trip.passengers;
                  }
                  if (trip.driver === profile.username) {
                    return (
                      <div key={index}>
                        <li><strong>{trip.driver}</strong>, <em><u>{trip.mountain}</u></em>, {correctDate}, Available Seats: {trip.seats}</li>
                        <ul>
                        {riders.map((rider, index) => {
                          return(
                            <li key={index}>{rider}</li>
                          )
                        })}
                        </ul>
                        <button value={trip._id} className="btn btn-secondary trip-btn" onClick={handleCancel}>Cancel Trip</button>
                      </div>
                    )
                  }
                })}
                </ul>
              </div>
            </div>
          </Col>
          <Col size="6">
            <div className="card mx-auto" id="passenger-trips">
              <div className="card-header">
                Passenger
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                {allTrips.map((trip, index) => {
                  const formatDate = new Date(trip.date);
                  const correctDate = formatDate.toLocaleDateString();
                  let riders = trip.passengers;
                  if (trip.passengers.includes(profile.username)) {
                    return (
                      <div key={index}>
                        <li><strong>{trip.driver}</strong>, <em><u>{trip.mountain}</u></em>, {correctDate}, Available Seats: {trip.seats}</li>
                        <ul>
                        {riders.map((rider, index) => {
                          return(
                            <li key={index}>{rider}</li>
                          )
                        })}
                        </ul>
                        <button value={trip._id} className="btn btn-secondary trip-btn" onClick={handleRemove}>Remove from Ride</button>
                      </div>
                    )
                  }
                })}
                </ul>
              </div>
            </div>
          </Col>
      </Row>
      <Row>
        <Col size="6">
          <div className="card">
              <div className="card-header">
                Available Resorts
              </div>
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
              <div className="card-header">
                Upcoming Trips
              </div>
              <div className="card-body">
                <ul>
                {allTrips.map((trip, index) => {
                  const formatDate = new Date(trip.date);

                  const correctDate = formatDate.toLocaleDateString();

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
                      <li><strong>{trip.driver}</strong>, <em><u>{trip.mountain}</u></em>, {correctDate}, Available Seats {trip.seats}</li>

                      <ul>
                      {riders.map((rider, index) => {
                        return(
                          <li key={index}>{rider}</li>
                        )
                      })}
                      </ul>
                      <button value={trip._id} className="btn btn-secondary trip-btn" onClick={handleJoin}>Join trip</button>
                      <button value={trip.driver} className="btn btn-secondary trip-btn" onClick={handleModalDriver}>View Driver Information</button>
                    </div>
                  )
                })}
                </ul>

              </div>
              <div className="card-footer">
                <Link to="/day">Book a trip</Link>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile;