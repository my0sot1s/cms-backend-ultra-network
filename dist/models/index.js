'use strict';var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_mongoose2.default.Promise = require('bluebird');
//Connect to mongo DB database
var connectModel = function () {var _ref = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(function _callee() {return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              _mongoose2.default.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode?admin?replicaSet=ds159328",
              { useMongoClient: true }));case 2:return _context.abrupt('return', _context.sent);case 3:case 'end':return _context.stop();}}}, _callee, undefined);}));return function connectModel() {return _ref.apply(this, arguments);};}();


connectModel();
_mongoose2.default.connection.on('error', function (err) {
  console.log(err);
});
_mongoose2.default.connection.on('connected', function () {
  console.log('Mongoose default connection');
});