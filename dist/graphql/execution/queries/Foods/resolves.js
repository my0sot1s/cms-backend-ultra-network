'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getFoods = exports.getFood = undefined;var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _Foods = require('../../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var getFood = exports.getFood = function () {var _ref = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(function _callee(root, args, context) {return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              _Foods2.default.findById(args.id).exec());case 2:return _context.abrupt('return', _context.sent);case 3:case 'end':return _context.stop();}}}, _callee, undefined);}));return function getFood(_x, _x2, _x3) {return _ref.apply(this, arguments);};}();


var getFoods = exports.getFoods = function getFoods() {
  return _Foods2.default.find().exec();
};