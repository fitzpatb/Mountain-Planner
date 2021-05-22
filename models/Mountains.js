const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MountainsSchema = new Schema({
  mountain: {
    type: String,
  },
  city: {
    type: String
  }
});

const Mountains = mongoose.model("Mountains", MountainsSchema);

module.exports = Mountains;