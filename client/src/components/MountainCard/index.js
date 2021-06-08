import React from "react";

function MountainCard(props) {

  return (
    <div className="container-fluid">
      <h1>{props.city}</h1>
      <div className="row">
        {props.weatherArray.map((day, index) => {
          return (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{day.calendarDate}</h5>
                  <p className="card-text">High: {day.high}</p>
                  <p className="card-text">Low: {day.low}</p>
                  <p className="card-text">{day.description}</p>
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