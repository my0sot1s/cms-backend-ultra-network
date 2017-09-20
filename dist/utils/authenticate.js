'use strict';var _passport = require('passport');var _passport2 = _interopRequireDefault(_passport);


var _User = require('../models/User');var _ = _interopRequireWildcard(_User);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var LocalStrategy = require('passport-local').Strategy;



_passport2.default.use('local', new LocalStrategy(
function (username, password, done) {
    _.login(username, password, function (errKey, isDone, user) {
        if (!errKey && isDone) {
            return done(errKey, user);
        } else {
            // throw new Error('invalid username or password');
            return done(errKey, isDone);
        }
    });
}));

_passport2.default.serializeUser(function (user, done) {
    done(null, user.id);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});
_passport2.default.deserializeUser(function (id, done) {
    _.default.findById(id, function (err, user) {
        return done(err, user);
    });
});