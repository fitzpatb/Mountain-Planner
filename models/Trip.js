const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  driver: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  passengers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
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