import axios from "axios";

export default {
  // Gets all books
  getWeather: function(city) {
    return axios.get("api.openweathermap.org/data/2.5/forecast?q=" + city + ",co&appid=9057e02af26cff387f193be4d1eee3ae");
  },
  // Gets the book with the given id
  getMountains: function() {
    return axios.get("/api/mountains");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  login: function(username, password) {
    return axios.post("/api/users/login", { username, password });
  },
  signup: function(firstname, lastname, username, email, password) {
    return axios.post("/api/users/signup", { firstname, lastname, username, email, password});
  },


};
