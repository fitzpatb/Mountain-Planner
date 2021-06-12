const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  driver: {
    type: String,
    required: true
  },
  passengers: [
    {
      type: String,
      required: false
    }
  ],
  mountain: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  seats: {
    type: Number,
    required: true
  }
})


const Trips = mongoose.model("Trips", TripSchema);

module.exports = Trips;