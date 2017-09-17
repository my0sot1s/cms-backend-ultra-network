"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _passport = require("passport");var _passport2 = _interopRequireDefault(_passport);

var _User = require("../models/User");var User = _interopRequireWildcard(_User);
var _jsonwebtoken = require("jsonwebtoken");var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var router = require("express").Router();
var cst = require("../utils/constants");

router.post("/register", function (req, res, next) {

});
router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/login-app", function (req, res, next) {var _req$body =
  req.body,username = _req$body.username,password = _req$body.password;
  User.login(username, password, function (err, isLogin, user) {
    if (err || !isLogin) res.status(201).json({ err: err });
    _jsonwebtoken2.default.sign({ username: username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, function (err, token) {
      res.status(200).json({ username: username, token: token });
    });
  });
});

router.post("/login", _passport2.default.authenticate('local',
{
  failureRedirect: '/dashboard/login',
  successRedirect: '/dashboard' }));


router.get("/logout", function (req, res, next) {
  req.logout();
  req.session.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/dashboard/login');
  });
});exports.default =

router;