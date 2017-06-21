'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _StoryContent = require('../models/StoryContent');var _StoryContent2 = _interopRequireDefault(_StoryContent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = _express2.default.Router();


router.get('/storycontent', function (req, res) {
  var limit = Number(req.query.limit) || 5;
  var page = Number(req.query.page) || 0;
  (0, _StoryContent.find)(limit, page, req.query.postId).exec(function (err, data) {
    if (!err && data) {
      res.json(data);
    }
  });
});exports.default =

router;