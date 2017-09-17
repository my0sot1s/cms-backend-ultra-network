"use strict";Object.defineProperty(exports, "__esModule", { value: true });var router = require("express").Router();
router.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'public/index.html'))
  res.render("index");
});exports.default =
router;