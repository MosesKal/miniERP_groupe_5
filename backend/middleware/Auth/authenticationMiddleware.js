const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const express_session = require("express-session");

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id, { include: Role })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});

passport.use(
  new localStrategy(function (username, password, done) {
    User.findOne({ where: { username: username } })
      .then((user) => {
        if (!user)
          return done(null, false, { message: "Mot de passe incorrect." });

        bcrypt.compare(password, user.dataValues.password, function (err, res) {
          if (err) return done(err);
          if (res === false)
            return done(null, false, { message: "Mot de passe incorrect." });

          return done(null, user);
        });
      })
      .catch((err) => {
        return done(err);
      });
  })
);