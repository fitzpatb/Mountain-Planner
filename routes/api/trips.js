const router = require("express").Router();
const tripController = require("../../controllers/tripController");

router.post("/book", tripController.bookTrip);
router.get("/all", tripController.findAllTrips);
router.put("/:id", tripController.joinTrip);


module.exports = router