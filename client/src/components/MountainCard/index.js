import React from "react";

function MountainCard(props) {

  return (
    <div className="container-fluid">
      <div className="row">
        {props.weatherArray.map((day, index) => {
          let iconUrl = "http://openweathermap.org/img/wn/" + day.icon + "@2x.png"
          return (
            <div key={index} className="col-lg-1.5 col-md-3 col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{day.calendarDate}</h5>
                  <p className="card-text">High: {day.high}</p>
                  <p className="card-text">Low: {day.low}</p>
                  <p className="card-text">{day.description}</p>
                  <img src={iconUrl} alt="weather icon"></img>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MountainCard;