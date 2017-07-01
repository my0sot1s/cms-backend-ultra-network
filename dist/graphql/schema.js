'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');var graphql = _interopRequireWildcard(_graphql);
var _mutations = require('./mutations');var _mutations2 = _interopRequireDefault(_mutations);
var _subscriptions = require('./subscriptions');var _subscriptions2 = _interopRequireDefault(_subscriptions);
var _queries = require('./queries');var _queries2 = _interopRequireDefault(_queries);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}
// import { subscriptions } from './subscriptions'

var genky = new graphql.GraphQLObjectType({
  name: 'Subscription',
  fields: function fields() {return _subscriptions2.default;} });

// console.log(genky)

// export const resolvers = {
//   Subscription: {
//     ...subscription
//   },
// }
exports.default =
new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: function fields() {return _queries2.default;} }),

  mutation: new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: function fields() {return _mutations2.default;} }),

  subscription: genky });