'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');
var _Blog = require('../../types/Blog');
var _Blog2 = require('../../../models/Blog');var _Blog3 = _interopRequireDefault(_Blog2);

var _subscriptions = require('../../subscriptions');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Blog.BlogType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Blog.BlogInputType) } },


  resolve: async function resolve(root, params) {
    var newBlog = new _Blog3.default(params.data);
    var doc = await newBlog.save();
    if (!doc) {
      return new Error('...Can\'n insert');
    } else
    {
      (0, _subscriptions.publishEvent)('onSaveBlog', doc);
      return doc;
    }
  } }; // import { pubsub } from '../../schema'