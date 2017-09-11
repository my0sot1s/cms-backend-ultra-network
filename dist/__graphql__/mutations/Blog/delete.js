'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Blog = require('../../types/Blog');
var _Blog2 = require('../../../models/Blog');var _Blog3 = _interopRequireDefault(_Blog2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Blog.BlogType,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  resolve: function resolve(root, params) {
    return _Blog3.default.findByIdAndRemove(params.id).
    then(function (data) {return _Blog3.default.findById(data.id).exec();}).
    catch(function (err) {return new Error('Not Success');});
  } };