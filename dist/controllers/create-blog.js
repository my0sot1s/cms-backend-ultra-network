"use strict";Object.defineProperty(exports, "__esModule", { value: true });var router = require("express").Router();
router.get('/create-blog', require("../utils/middlewares").authenMiddleware, function (req, res) {
    res.render("blog");
});exports.default =

router;