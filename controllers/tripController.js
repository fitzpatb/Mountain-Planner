const db = require("../models");

// Defining methods for the booksController
module.exports = {
  bookTrip: function(req, res) {
    console.log(req.body);
    let availableSeats = req.body.seats - 1;
    const tripInfo = {
      driver: req.body.username,
      mountain: req.body.mountain,
      date: req.body.date,
      seats: availableSeats
    }
    db.Trips.create(tripInfo)
      .then(trip => {
        console.log(trip)
        res.json({trip: trip})
      })
      .catch(err => {
        console.log(err)
      });
  },
  addPassenger: function(req, res) {

  },
  findAllTrips: function(req, res) {
    db.Trips.find()
      .then(trips => {
        res.json({trips: trips})
      })
      .catch(err => res.status(422).json(err));
  },

  joinTrip: function(req, res) {
    console.log(req.body)
    console.log(req.params)
    let available;
    db.Trips.findById({_id: req.params.id})
      .then(trip => {

        if (trip.driver === req.body.username) {
          console.log("cannot join a ride where you are the driver");
          res.status(403).end();
        } else if (trip.passengers.includes(req.body.username) === true) {
          console.log("cannot join a ride where you are already a passenger");
          res.status(403).end()
        } else {
          available = trip.seats - 1;
          db.Trips.findByIdAndUpdate({_id: req.params.id},{passengers: req.body.username, seats: available}, function (error, success) {
            if (error) {
              console.log(error)
            } else {
              console.log(success)
            }
          });
        }
      })

  }

  // findTrips: function(req, res) {
  //   db.Trips.find
  // }
}