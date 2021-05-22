const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/"
);

const mountainSeed = [
  {
    mountain: "Aspen",
    city: "Aspen"
  }
];

db.Mountains
  .remove({})
  .then(() => db.Mountains.collection.insertMany(mountainSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })