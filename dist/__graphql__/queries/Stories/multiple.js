'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Stories = require('../../types/Stories');
var _Stories2 = require('../../../models/Stories');var _Stories3 = _interopRequireDefault(_Stories2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: new _graphql.GraphQLList(_Stories.StoriesType),
  resolve: function resolve() {
    var stories = _Stories3.default.find().exec();
    if (!stories)
    return new Error('No items....');else

    return stories;
  } };