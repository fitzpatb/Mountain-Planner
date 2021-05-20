const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  driver: {
    type:
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  year: {
    type: Number,

  },
  seats: {
    type: Number
  }
})