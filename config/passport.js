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
      try {
        const login = user.verifyPassword(password)
        console.log(login);
        if (login) {
         return done(null, user, {message: "successful login"});
        } else {
          return done(null, false, {message: "invalid password"});
        }
      } catch (err) {
        console.log("something wrong on backend");
      }
      //   .then((response) => {
      //   console.log("line 15", response);
      //   return done(null, user)
      // }).catch((er) => {
      //   return done(er)
      // })

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