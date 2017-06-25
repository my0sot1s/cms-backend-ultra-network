'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Foods = require('../../types/Foods');
var _Foods2 = require('../../../models/Foods');var _Foods3 = _interopRequireDefault(_Foods2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var query = {
  type: new _graphql.GraphQLList(_Foods.FoodsType),
  resolve: function resolve() {
    var foods = _Foods3.default.find().exec();
    if (!foods)
    return new Error('No items....');else

    return foods;
  } };exports.default =


query;