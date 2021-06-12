const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const carSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  }
})


const Cars = mongoose.model("Car", carSchema);

module.exports = Cars;