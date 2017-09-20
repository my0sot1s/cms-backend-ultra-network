"use strict";Object.defineProperty(exports, "__esModule", { value: true });var router = require("express").Router();
router.get('/socket', require("../utils/middlewares").authenMiddleware, function (req, res) {
    res.render("socket");
});exports.default =
router;