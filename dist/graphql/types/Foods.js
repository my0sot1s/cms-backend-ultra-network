'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.FoodsInputType = exports.FoodsType = undefined;var _graphql = require('graphql');








var FoodsType = exports.FoodsType = new _graphql.GraphQLObjectType({
  name: 'Foods',
  description: 'Foods Type',
  fields: {
    _id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },

    link: {
      type: _graphql.GraphQLString },

    title: {
      type: _graphql.GraphQLString },

    price: {
      type: _graphql.GraphQLInt },

    fomular: {
      type: _graphql.GraphQLString } } });



var FoodsInputType = exports.FoodsInputType = new _graphql.GraphQLInputObjectType({
  name: 'FoodsInput',
  description: 'Create New Food',
  fields: {
    link: {
      type: _graphql.GraphQLString },

    title: {
      type: _graphql.GraphQLString },

    price: {
      type: _graphql.GraphQLInt },

    fomular: {
      type: _graphql.GraphQLString } } });