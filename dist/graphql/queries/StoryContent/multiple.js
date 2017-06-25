'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _StoryContent = require('../../types/StoryContent');
var _StoryContent2 = require('../../../models/StoryContent');var _StoryContent3 = _interopRequireDefault(_StoryContent2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var query = {
  type: new _graphql.GraphQLList(_StoryContent.StoryContentType),
  resolve: function resolve() {
    var content = _StoryContent3.default.find().exec();
    if (!content)
    return new Error('No items....');else

    return content;
  } };exports.default =


query;