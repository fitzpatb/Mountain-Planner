const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require("./config/passport.js");
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 3001;
const SESSION_SECRET = process.env.SESSION_SECRET || "sample secret";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// process.env.MONGODB_URI ||
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mountains", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});