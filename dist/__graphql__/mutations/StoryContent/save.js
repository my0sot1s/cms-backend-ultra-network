'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _StoryContent = require('../../types/StoryContent');
var _StoryContent2 = require('../../../models/StoryContent');var _StoryContent3 = _interopRequireDefault(_StoryContent2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import { createTypeWithPagination } from 'graphql/utils'

var mutation = {
  type: _StoryContent.StoryContentType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_StoryContent.StoryContentInputType) } },


  resolve: function resolve(root, params) {
    var newContent = new _StoryContent3.default(params.data);
    var doc = newContent.save();
    if (!doc) {
      return new Error('...Can\'n insert');
    } else
    return doc;
  } };exports.default =

mutation;