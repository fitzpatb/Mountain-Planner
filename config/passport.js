const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.Users.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      user.verifyPassword(password).then(() => {
        return done(null, user)
      }).catch((err) => {
        return done(err, false, { message: "password not matched"})
      })

    })
  }

));

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  db.Users.findOne({
    where: {id: id}
  }).then(user => {
    done(null, user);
  }).catch(err => done(err));
});


module.exports = passport;