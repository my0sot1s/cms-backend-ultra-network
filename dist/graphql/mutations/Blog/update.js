'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




// import { createTypeWithPagination } from 'graphql/utils'
var _graphql = require('graphql');var _Blog = require('../../types/Blog');
var _Blog2 = require('../../../models/Blog');var _Blog3 = _interopRequireDefault(_Blog2);
var _subscriptions = require('../../subscriptions');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Blog.BlogType,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },

    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Blog.BlogInputType) } },


  resolve: function resolve(root, params) {
    return _Blog3.default.findByIdAndUpdate(params.id, {
      $set: _extends({},
      params.data) }).


    then(async function (data) {
      var doc = await _Blog3.default.findById(data.id).exec();
      (0, _subscriptions.publishEvent)('onUpdateBlog', doc);
      return doc;
    }).
    catch(function (err) {return new Error('Not Success');});
  } };