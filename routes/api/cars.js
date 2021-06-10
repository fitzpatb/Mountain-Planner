const router = require("express").Router();
const carController = require("../../controllers/carController");

// Matches with "/api/books"
router.post("/register", carController.signupCar);

router.get("/usercar", carController.findUserCar);
  //.get(mountainsController.findAll)
  //.post(booksController.create);

// Matches with "/api/books/:id"
//router
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);
//"https://skimap.org/SkiMaps/view/${id}.xml"


module.exports = router;
