import axios from "axios";

export default {
  // Gets all books
  getMountains: function() {
    return axios.get("http://api.worldweatheronline.com/premium/v1/ski.ashx?key=12f65e292c304598b2015425212005&q=47.12,13.13&format=json");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
