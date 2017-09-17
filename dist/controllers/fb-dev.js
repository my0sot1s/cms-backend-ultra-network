"use strict";Object.defineProperty(exports, "__esModule", { value: true });var router = require("express").Router();
router.get('/facebook-dev', require("../utils/middlewares").authenMiddleware, function (req, res) {
  res.render("facebook");
});exports.default =
router;