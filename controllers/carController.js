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
    db.Car.create(carInfo)
      .then(car => {
        console.log(car)
        res.json({car: car})
      })
      .catch(err => {
        console.log(err)
      });
  },
  findUserCar: function(req, res) {
    db.Car
      .find({ where: {username: req.body.username}})
      .then(userCar => res.json(userCar))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
