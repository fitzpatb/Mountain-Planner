const router = require("express").Router();
const mountainsRoutes = require("./mountains");
const userRoutes = require("./users");

// Book routes
router.use("/mountains", mountainsRoutes);
router.use("/users", userRoutes);

module.exports = router;
