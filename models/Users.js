const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    index: { unique: true },
    required: true
  },
  email: {
    type: String,
    trim: true,
    index: { unique: true },
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
})

userSchema.methods.verifyPassword = async function verifyPassword(password) {
  if (this.password === password) {
    return true;
  } else {
    return false;
  }
}

const Users = mongoose.model("Users", userSchema);

module.exports = Users;