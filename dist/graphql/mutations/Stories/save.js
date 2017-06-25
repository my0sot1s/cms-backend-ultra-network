'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _Stories = require('../../types/Stories');
var _Stories2 = require('../../../models/Stories');var _Stories3 = _interopRequireDefault(_Stories2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import { createTypeWithPagination } from 'graphql/utils'

var mutation = {
  type: _Stories.StoriesType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Stories.StoriesInputType) } },


  resolve: function resolve(root, params) {
    var newStory = new _Stories3.default(params.data);
    var doc = newStory.save();
    if (!doc) {
      return new Error('...Can\'n insert');
    } else
    return doc;
  } };exports.default =

mutation;