import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MountainCard from "../components/MountainCard";


function Mountain(props) {
  const [ weatherArray, setWeatherArray ] = useState([])
  let hourlyWeather = [];

  let city = props.city
  useEffect(() => {
    loadWeather()
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
          weatherData.push({
            calendarDate: calendarDate,
            high: high,
            low: low,
            description: description
          })
          console.log(weatherData);
        }
        setWeatherArray(weatherData)
        //console.log(date.getDate() + (date.getMonth() + 1) + date.getFullYear());
        hourlyWeather = data.daily;
        console.log(hourlyWeather)
      })
  }

  return (
      <Container fluid>
        <Row>
          <h1>
            7-Day Forecast
          </h1>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
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
      </Container>
    );
  }


export default Mountain;
