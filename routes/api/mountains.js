const router = require("express").Router();
const mountainsController = require("../../controllers/mountainsController");

// Matches with "/api/books"
router.route("/")
  .get(mountainsController.findAll)
  //.post(booksController.create);

// Matches with "/api/books/:id"
//router
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);
"https://skimap.org/SkiMaps/view/${id}.xml"


module.exports = router;
