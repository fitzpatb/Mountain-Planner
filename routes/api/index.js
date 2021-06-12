const router = require("express").Router();
const carRoutes = require("./cars");
const userRoutes = require("./users");
const tripRoutes = require("./trips");

// Book routes
router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
