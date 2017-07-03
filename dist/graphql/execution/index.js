'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.typeDefs = undefined;var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = {
  // Note : implement queries
  // Thực thi các truy vấn query
  Query: (0, _extends3.default)({},
  require('./queries').default),

  // Note : implement mutations
  // Thực thi các truy vấn mutation
  Mutation: (0, _extends3.default)({},
  require('./mutations').default),

  // Note : implement subscriptions
  // Thực thi subscription
  Subscription: (0, _extends3.default)({},
  require('./mutations/Foods/resolves').default) };



var typeDefs = exports.typeDefs = [].concat((0, _toConsumableArray3.default)(


require('./types').default), (0, _toConsumableArray3.default)(


require('./queries').queryDef), (0, _toConsumableArray3.default)(


require('./mutations').mutationDef), [
// Note: get all define subscription
// Lấy các định nghĩa về truy vấn. subscription
require('./subscriptions').subscriptionsDef]);