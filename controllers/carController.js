const db = require("../models");

// Defining methods for the booksController
module.exports = {
  signupCar: function(req, res) {

    const carInfo = {
      username: req.body.username,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      seats: req.body.seats
    }
    db.Cars.create(carInfo)
      .then(car => {
        console.log(car)
        res.json({car: car})
      })
      .catch(err => {
        console.log(err)
      });
  },
  findUserCar: function(req, res) {
    db.Cars.find()
      .then(userCar => {
        res.json({userCar: userCar})
      })
      .catch(err => res.status(422).json(err));
  },

};
