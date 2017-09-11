'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _Blog = require('../../types/Blog');
var _Blog2 = require('../../../models/Blog');var _Blog3 = _interopRequireDefault(_Blog2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: new _graphql.GraphQLList(_Blog.BlogType),
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
    var blog = _Blog3.default.
    find().
    sort().
    skip(_skip).
    limit(_limit).exec();
    if (!blog)
    return new Error('No items....');else

    return blog;
  } };