'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.StoryContentInputType = exports.StoryContentType = undefined;var _graphql = require('graphql');









var StoryContentType = exports.StoryContentType = new _graphql.GraphQLObjectType({
  name: 'StoryContentType',
  description: 'StoryContent Type',
  fields: function fields() {return {
      _id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },

      banner: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      images: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      postId: {
        type: _graphql.GraphQLID } };} });



var StoryContentInputType = exports.StoryContentInputType = new _graphql.GraphQLInputObjectType({
  name: 'StoryContentInputType',
  description: 'Create new StoyContent',
  fields: function fields() {return {
      banner: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      content: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      images: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
      postId: {
        type: _graphql.GraphQLID } };} });