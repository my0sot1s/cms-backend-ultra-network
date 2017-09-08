'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _Blog = require('../models/Blog');var _Blog2 = _interopRequireDefault(_Blog);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



var router = _express2.default.Router();

//ex:http://localhost:3001/api/stories?limit=2&page=2

router.get('/blog', function (req, res) {
  var limit = Number(req.query.limit) || 5,
  page = Number(req.query.page) || 0,
  id = req.query.id;
  if (id) {
    (0, _Blog.findbyId)(id).then(function (data) {
      res.send(data);
    });
  } else
  (0, _Blog.find)(limit, page, req.query.postId).exec(function (err, data) {
    if (!err && data) {
      res.json(data);
    } else
    res.send(err);
  });
});

// insert post

router.post('/blog', function (req, res) {
  // debugger
  (0, _Blog.save)(req.body).then(function (succ) {
    res.send(succ);
  });

});exports.default =

router;