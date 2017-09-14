'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Blog = require('../../types/Blog');
var _Blog2 = require('../../../models/Blog');var _Blog3 = _interopRequireDefault(_Blog2);
var _subscriptions = require('../../subscriptions');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Blog.BlogType,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  resolve: function resolve(root, params) {
    return _Blog3.default.findByIdAndRemove(params.id).
    then(function (data) {
      var doc = { _id: params.id };
      (0, _subscriptions.publishEvent)('onDeleteBlog', doc);
      return doc;
    }).
    catch(function (err) {return new Error('Not Success');});
  } };