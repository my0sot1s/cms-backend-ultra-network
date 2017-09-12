import passport from 'passport';
let LocalStrategy = require('passport-local').Strategy;

import * as _ from './models/User'



passport.use('local', new LocalStrategy(
  function (username, password, done) {
    _.login(username, password, (errKey, isDone, user) => {
      if (!errKey && isDone) {
        return done(errKey, user);
      } else {
        // throw new Error('invalid username or password');
        return done(errKey, isDone)
      }
    });
  }
));
passport.serializeUser(function (user, done) {
  done(null, user.id);
  // if you use Model.id as your idAttribute maybe you'd want
  // done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  var M = _.default;
  M.findById(id, (err, user) => {
    return done(err, user);
  });
});