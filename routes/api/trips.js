const router = require("express").Router();
const tripController = require("../../controllers/tripController");

router.post("/book", tripController.bookTrip);
router.get("/all", tripController.findAllTrips);
router.post("/:id", tripController.joinTrip);
router.delete("/:id", tripController.deleteTrip);
router.put("/:id", tripController.removePassenger);


module.exports = router