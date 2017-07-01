'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphqlTools = require('graphql-tools');

var _schemaStr = require('./schemaStr');var _schemaStr2 = _interopRequireDefault(_schemaStr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var resolvers = {
  Query: {
    getFoods: function getFoods() {
      return [{
        _id: "ádas",
        title: "ádasdasd",
        link: "ádasasd" }];

    },
    getFood: function getFood(root, _ref) {var id = _ref.id;
      return {
        _id: "ádas",
        title: "ádasdasd",
        link: "ádasasd" };

    } } }; // import resolvers from './resolvers';
exports.default =


(0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _schemaStr2.default,
  resolvers: resolvers });