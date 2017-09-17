'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Blog = require('../../types/Blog');
var _Blog2 = require('../../../models/Blog');var _Blog3 = _interopRequireDefault(_Blog2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Blog.BlogType,
  args: {
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  resolve: function resolve(root, params) {
    return _Blog3.default.findById(params.id).exec();
  } };