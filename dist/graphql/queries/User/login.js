'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphql = require('graphql');



var _bluebird = require('bluebird');var _bluebird2 = _interopRequireDefault(_bluebird);
var _User = require('../../types/User');
var _User2 = require('../../../models/User');var _User3 = _interopRequireDefault(_User2);
var _jsonwebtoken = require('jsonwebtoken');var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var cst = require("../../../utils/constants"); // login
exports.default = {
  type: _User.UserType,
  args: {
    username: {
      name: "username",
      type: _graphql.GraphQLString },

    password: {
      name: "password",
      type: _graphql.GraphQLString } },


  resolve: function resolve(root, params) {
    (async function () {
      await (0, _User2.login)(params.username, params.password, function (err, isLogin, user) {
        if (err || !isLogin) return { login: "false" };
        _jsonwebtoken2.default.sign({ username: user.username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, function (err, token) {
          if (err) return { login: "false", cause: "Can not set token" };
          return {
            login: "successfull",
            user: user.username,
            access_token: token };

        });
      });
    });
  } };