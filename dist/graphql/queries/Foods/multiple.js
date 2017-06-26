'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _Foods = require('../../types/Foods');
var _Foods2 = require('../../../models/Foods');var _Foods3 = _interopRequireDefault(_Foods2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var query = {
  type: new _graphql.GraphQLList(_Foods.FoodsType),
  args: {
    page: {
      type: _graphql.GraphQLInt },

    limit: {
      type: _graphql.GraphQLInt } },


  resolve: function resolve(root, params) {var
    page = params.page,limit = params.limit;
    var _page = !page || isNaN(page) ? 0 : page;
    var _limit = !limit || isNaN(limit) ? 5 : limit;
    var _skip = _limit * _page;
    var foods = _Foods3.default.find().sort().skip(_skip).limit(_limit).exec();
    if (!foods)
    return new Error('No items....');else

    return foods;
  } };exports.default =


query;