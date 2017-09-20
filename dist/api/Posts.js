'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _Comments = require('../models/Comments');var _Comments2 = _interopRequireDefault(_Comments);
var _Post = require('../models/Post');var _Post2 = _interopRequireDefault(_Post);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var router = require("express").Router();

router.get('/post/:postId?', function (req, res) {
    var limit = Number(req.query.limit) || 5;
    var page = Number(req.query.page) || 0;
    var post = req.params.postId;
    (0, _Post.find)(limit, 0, post).exec(function (err, data) {
        if (!err && data) {

            (0, _Comments.find)(limit, page, data[0]._id).exec(function (err2, data2) {
                if (!err2 && data2) {
                    res.json({ post: data[0], comments: data2 });
                } else
                res.send(err2);
            });
        } else
        res.send(err);
    });
});exports.default =

router;