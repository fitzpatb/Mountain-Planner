const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {

  }
  car: {
    type: Schema.Types.ObjectId,
    ref: "Car"
  }

})