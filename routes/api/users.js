const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");


router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
  console.log(req.user);
  res.json({
    isLoggedIn: true,
    user: req.user
  })
}, userController.login);
router.post("/signup", userController.signup);
router.get("/driver", userController.findUser);

module.exports = router;