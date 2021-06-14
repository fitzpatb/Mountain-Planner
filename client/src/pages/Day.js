import React, { useState, useEffect } from "react";
import { DateUtils } from "react-day-picker";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useHistory } from "react-router-dom";
import { Container } from "../components/Grid";
import API from "../utils/API";

function Day() {

  const [selectedDay, setSelectedDay] = useState(undefined);
  const [mountain, setMountain] = useState("");

  const history = useHistory();


  useEffect(() => {
    storeCar()
  }, [])

  const handleDayChange = ((day) => {

    setSelectedDay(day)
  });

  const handleMountain = (event) => {
    setMountain(event.target.value);
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mountain);
    console.log(selectedDay);
    if (mountain === "" || !selectedDay) {
      alert("must select both a date and mountain");
      return;
    } else if (DateUtils.isFutureDay(selectedDay) === false) {
      alert("cannot select a date that has already happened");
      return;
    } else {
      handleBooking(mountain, selectedDay);
    }
  }

  const handleBooking = (mountain, selectedDay) => {
    const userProfile = JSON.parse(localStorage.getItem("currentUser"));
    const username = userProfile.username;
    const userCar = JSON.parse(localStorage.getItem("currentCar"));
    console.log(userCar);
    const carSeats = userCar.seats;
    API.bookTrip(username, mountain, selectedDay, carSeats)
      .then(() => {
        console.log("check database trip should book");
        history.push("/profile");
      })
      .catch(err => {
        console.log(err)
      });
  }

  const storeCar = () => {
    API.findUserCar()
      .then(response => {
        console.log(response)
        const userProfile = JSON.parse(localStorage.getItem("currentUser"));
        const username = userProfile.username;
        console.log(username);
        for (let i = 0; i < response.data.userCar.length; i++) {
          if (response.data.userCar[i].username === username) {
            let currentCar = {
              username: response.data.userCar[i].username,
              make: response.data.userCar[i].make,
              model: response.data.userCar[i].model,
              year: response.data.userCar[i].year,
              color: response.data.userCar[i].color,
              seats: response.data.userCar[i].seats
            }
            console.log(currentCar);

            localStorage.setItem('currentCar', JSON.stringify(currentCar));
          }
        }

      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <div className="margin-pages">
      <Container fluid>
        <div className="card col-6" style={{margin: "0 auto"}}>
          <h2>Plan a trip</h2>

          <form className="form signup-form">
            <div className="form-group">
              <label htmlFor="day-trip">What Day?:</label>
              <DayPickerInput id="day-trip" onDayChange={handleDayChange} />
            </div>
            <div className="form-group">
              <label htmlFor="mountains-trip">What Mountain?:</label>
              <select className="form-control" id="mountains-trip" name="mountains" onChange={handleMountain} >
                <option value="A-Basin">A-Basin</option>
                <option value="Aspen">Aspen</option>
                <option value="Breckenridge">Breckenridge</option>
                <option value="Copper Mountain">Copper Mountain</option>
                <option value="Crested Butte">Crested Butte</option>
                <option value="Eldora">Eldora</option>
                <option value="Keystone">Keystone</option>
                <option value="Loveland">Loveland</option>
                <option value="Steamboat">Steamboat</option>
                <option value="Telluride">Telluride</option>
                <option value="Vail">Vail</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-secondary" type="submit" onClick={event => handleSubmit(event)} >Book</button>
            </div>
          </form>
        </div>
      </Container>
    </div>

  )
}

export default Day;