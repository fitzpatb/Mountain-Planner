const db = require("../models");

module.exports = {
  signup: function(req, res) {
    const userInfo = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    db.Users.create(userInfo)
      .then(user => {
        res.json({
          user: user,
          isLoggedIn: true
        })
      })
      .catch(err => {
        console.log(err)
      });
  },
  getUser: (req, res, next) => {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  login: function(req, res) {
    // passport.authenticate should be used as middleware before this function
    if (req.user) {
      res.status(200).end();
    } else {
      res.status(401).end();
    }
  },


}

