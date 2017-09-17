"use strict";Object.defineProperty(exports, "__esModule", { value: true });var router = require("express").Router();
router.get('/graphql', require("../utils/middlewares").authenMiddleware, function (req, res) {
  res.render("graphql");
});exports.default =
router;