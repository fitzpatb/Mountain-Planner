const router = require("express").Router();
const carRoutes = require("./cars");
const userRoutes = require("./users");

// Book routes
router.use("/cars", carRoutes);
router.use("/users", userRoutes);

module.exports = router;
