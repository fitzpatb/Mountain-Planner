import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MountainCard from "../components/MountainCard";
import API from "../utils/API";


function Mountain(props) {
  const [ weatherArray, setWeatherArray ] = useState([])
  const [allTrips, setAllTrips] = useState([]);

  let hourlyWeather = [];

  let city = props.city
  useEffect(() => {
    loadWeather()
    handleTrips(city)
  }, []);

  function loadWeather() {
    let weatherData = [];
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + props.lat + "&lon=" + props.lon + "&exclude=minutely&units=imperial&appid=9057e02af26cff387f193be4d1eee3ae")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 1; i < data.daily.length; i++) {
          let day = new Date(data.daily[i].dt * 1000)
          let calendarDate = ((day.getMonth()+1)+"/"+day.getDate()+"/"+day.getFullYear());
          let high = data.daily[i].temp.max;
          let low = data.daily[i].temp.min;
          let description = data.daily[i].weather[0].description;
          let icon = data.daily[i].weather[0].icon;
          weatherData.push({
            calendarDate: calendarDate,
            high: high,
            low: low,
            description: description,
            icon: icon
          })
          console.log(weatherData);
        }
        setWeatherArray(weatherData)
        //console.log(date.getDate() + (date.getMonth() + 1) + date.getFullYear());
        hourlyWeather = data.daily;
        console.log(hourlyWeather)
      })
  }

  const handleTrips = (async (city) => {
    let tripsArray = [];
    await API.findAllTrips()
      .then(response => {
        console.log(response);
        const format = new Date(response.data.trips[0].date);
        console.log(format.toLocaleDateString);
        for (let i = 0; i < response.data.trips.length; i++) {
          if (response.data.trips[i].mountain === city) {
            tripsArray.push(response.data.trips[i]);
          }
        }
        setAllTrips(tripsArray);
      })
      .catch(err => {
        console.log(err)
      })
  })
  let bookLink;
  if (props.loggedIn === true){
    bookLink = <Link to="/day" style={{marginRight: "15px"}}>Book a trip.</Link>
  } else {
    bookLink = <Link to="/login" style={{marginRight: "15px"}}>Login to book a trip.</Link>
  }
  let buttonLink;
  if (props.loggedIn === true){
    buttonLink = <Link to="/profile">Go to your profile to join a trip.</Link>
  } else {
    buttonLink = <Link to="/login">Login to join a trip.</Link>
  }

  return (
    <div className="margin-pages">
      <Container fluid >
        <div className="card" style={{margin: "0 auto", width: "80%"}}>
          <h1>{props.city}</h1>
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
                    riders = ["No Passengers"]
                  } else  if (trip.passengers.length === 0) {
                    riders = ["No Passengers"]
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
                    </div>
                  )
                })}
                </ul>

              </div>
              <div className="card-footer">
                {bookLink}
                {buttonLink}
              </div>
          </div>
          <Row>

          </Row>
          <Row>
            <h1>
              7-Day Forecast:
            </h1>
          </Row>
          <Row>
            <Col size="md-10">
              <MountainCard
                city={city}
                hourlyWeather={hourlyWeather}
                weatherArray={weatherArray}
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/" onClick={props.resetCity}>← Back to Home</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>

    );
  }


export default Mountain;
