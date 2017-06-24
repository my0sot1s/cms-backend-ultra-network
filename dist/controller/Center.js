'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _Center = require('../models/Center');var _Center2 = _interopRequireDefault(_Center);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



var router = _express2.default.Router();

//ex:http://localhost:3001/api/stories?limit=2&page=2

router.get('/center', function (req, res) {
  var limit = Number(req.query.limit) || 5;
  var page = Number(req.query.page) || 0;
  (0, _Center.find)(limit, page, req.query.postId).exec(function (err, data) {
    if (!err && data) {
      res.json(data);
    }
  });
});exports.default =

router;