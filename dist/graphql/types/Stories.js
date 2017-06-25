'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.StoriesInputType = exports.StoriesType = undefined;var _graphql = require('graphql');








var _StoryContent = require('./StoryContent');
var _StoryContent2 = require('../../models/StoryContent');var _StoryContent3 = _interopRequireDefault(_StoryContent2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var StoriesType = exports.StoriesType = new _graphql.GraphQLObjectType({
  name: 'Stories',
  description: 'Stories Type',
  fields: {
    _id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },

    titles: {
      type: _graphql.GraphQLString },

    author: {
      type: _graphql.GraphQLString },

    begin: {
      type: _graphql.GraphQLString },

    views: {
      type: _graphql.GraphQLInt },

    liked: {
      type: _graphql.GraphQLInt },

    userId: {
      type: _graphql.GraphQLID },

    banner: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    content: {
      type: new _graphql.GraphQLList(_StoryContent.StoryContentType),
      resolve: function resolve(story) {var
        _id = story._id;
        var res = _StoryContent3.default.find({ postId: _id }).exec();
        if (!res) return new Error('No story');else
        return res;
      } } } });



var StoriesInputType = exports.StoriesInputType = new _graphql.GraphQLInputObjectType({
  name: 'StoriesInput',
  description: 'Create New Story',
  fields: {
    titles: {
      type: _graphql.GraphQLString },

    author: {
      type: _graphql.GraphQLString },

    begin: {
      type: _graphql.GraphQLString },

    views: {
      type: _graphql.GraphQLInt },

    liked: {
      type: _graphql.GraphQLInt },

    userId: {
      type: _graphql.GraphQLID },

    banner: { type: new _graphql.GraphQLList(_graphql.GraphQLString) } } });