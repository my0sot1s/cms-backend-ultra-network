'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.UserType = undefined;var _graphql = require('graphql');








var UserType = exports.UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: function fields() {return {
      // _id: {
      //   type: new GraphQLNonNull(GraphQLID),
      // },
      username: {
        type: _graphql.GraphQLString },

      cause: {
        type: _graphql.GraphQLString },

      login: {
        type: _graphql.GraphQLString },

      access_token: {
        type: _graphql.GraphQLString

        // passWord: {
        //   type: GraphQLString,
        // },
        // displayName: {
        //   type: GraphQLString
        // },
        // email: {
        //   type: GraphQLString
        // }
      } };} });