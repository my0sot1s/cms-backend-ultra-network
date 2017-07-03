'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}exports.default = {
  // Note : implement queries
  // Thực thi các truy vấn query
  Query: _extends({},
  require('./queries').default),

  // Note : implement mutations
  // Thực thi các truy vấn mutation
  Mutation: _extends({},
  require('./mutations').default),

  // Note : implement subscriptions
  // Thực thi subscription
  Subscription: _extends({},
  require('./mutations/Foods/resolves').default) };



var typeDefs = exports.typeDefs = [].concat(_toConsumableArray(


require('./types').default), _toConsumableArray(


require('./queries').queryDef), _toConsumableArray(


require('./mutations').mutationDef), [
// Note: get all define subscription
// Lấy các định nghĩa về truy vấn. subscription
require('./subscriptions').subscriptionsDef]);