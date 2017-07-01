'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _queries = require('./queries');var query = _interopRequireWildcard(_queries);
var _mutations = require('./mutations');var muation = _interopRequireWildcard(_mutations);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}
var a = {
  Query: _extends({},
  require('./queries').default)

  // Mutation: {
  //   ...require('./mutations').default
  // }
};

console.log(a);exports.default =
a;