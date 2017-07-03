'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphqlTools = require('graphql-tools');
var _execution = require('./execution');var _execution2 = _interopRequireDefault(_execution);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// console.log(typeDefs)
// Note: generate schema from typeDef and resolver
// tạo schemas
exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _execution.typeDefs,
  resolvers: _execution2.default,
  logger: { log: function log(e) {return console.log(e);} } });