const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


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
  }
})

userSchema.methods.verifyPassword = function verifyPassword(password) {
  console.log(password)
  console.log(this.password)
  return new Promise((resolve, reject) => {
    bcrypt.compareSync(password, this.password, (err, result) => {
      if (err) {reject(err)}
      resolve()
    })
  })
  //let result = await bcrypt.compareSync(password, this.password);
  //console.log(result)
  //return result;
}

const Users = mongoose.model("Users", userSchema);

module.exports = Users;