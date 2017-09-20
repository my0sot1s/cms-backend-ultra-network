'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _User = require('../models/User');var _User2 = _interopRequireDefault(_User);

var _jsonwebtoken = require('jsonwebtoken');var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var router = require("express").Router();
var cst = require("../utils/constants");
//ex:http://localhost:3001/api/stories?limit=2&page=2
router.post('/login', function (req, res) {var _req$body =
    req.body,username = _req$body.username,password = _req$body.password;
    (0, _User.login)(username, password, function (err, isLogin, user) {
        if (err || !isLogin) res.status(201).json({ err: err });
        _jsonwebtoken2.default.sign({ username: username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, function (err, token) {
            res.status(200).json({ login: "success", username: username, token: token });
        });
    });
});
router.post('/register', function (req, res) {var _req$body2 =
    req.body,username = _req$body2.username,password = _req$body2.password,email = _req$body2.email;
    (0, _User.register)({ username: username, password: password }, function (err, user) {
        if (err) res.status(201).json({ err: err });
        _jsonwebtoken2.default.sign({ username: username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, function (err, token) {
            res.status(200).json({ login: "success", username: username, token: token });
        });
    });
});exports.default =

router;