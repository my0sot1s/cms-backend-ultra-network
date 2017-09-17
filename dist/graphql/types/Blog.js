'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.BlogInputType = exports.BlogType = undefined;var _graphql = require('graphql');








var BlogType = exports.BlogType = new _graphql.GraphQLObjectType({
  name: 'Blog',
  description: 'Blog Type',
  fields: function fields() {return {
      _id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },

      link: {
        type: _graphql.GraphQLString },

      title: {
        type: _graphql.GraphQLString },

      tag: {
        type: _graphql.GraphQLString },

      content: {
        type: _graphql.GraphQLString },

      dateCreate: {
        type: _graphql.GraphQLString } };} });



var BlogInputType = exports.BlogInputType = new _graphql.GraphQLInputObjectType({
  name: 'BlogInput',
  description: 'Create New Blog',
  fields: function fields() {return {
      link: {
        type: _graphql.GraphQLString },

      title: {
        type: _graphql.GraphQLString },

      tag: {
        type: _graphql.GraphQLString },

      content: {
        type: _graphql.GraphQLString },

      dateCreate: {
        type: _graphql.GraphQLString } };} });