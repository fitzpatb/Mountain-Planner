import axios from "axios";

export default {
  // Gets all books
  getMountains: function(city) {
    return axios.get("api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9057e02af26cff387f193be4d1eee3ae");
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
