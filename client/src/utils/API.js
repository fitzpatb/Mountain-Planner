import axios from "axios";

export default {
  // Gets all books
  getWeather: function(city) {
    return axios.get("api.openweathermap.org/data/2.5/forecast?q=" + city + ",co&appid=9057e02af26cff387f193be4d1eee3ae");
  },

  bookTrip: function(username, mountain, date, seats) {
    return axios.post("/api/trips/book", { username, mountain, date, seats });
  },
  findAllTrips: function() {
    return axios.get("/api/trips/all");
  },
  findUserCar: function() {
    return axios.get("/api/cars/usercar");
  },
  joinTrip: function(id, username) {
    return axios.put("/api/trips/" + id, {username: username})
  },
  // Saves a book to the database
  signupCar: function(username, make, model, year, color, seats) {
    return axios.post("/api/cars/register", { username, make, model, year, color, seats });
  },
  login: function(username, password) {
    return axios.post("/api/users/login", { username, password });
  },
  signup: function(firstname, lastname, username, email, password) {
    return axios.post("/api/users/signup", { firstname, lastname, username, email, password});
  },


};
