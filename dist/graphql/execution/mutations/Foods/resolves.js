'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.removeFood = exports.editFood = exports.addFood = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _Foods = require('../../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);
var _subscriptions = require('../../subscriptions');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// Note : insert food to mongo
var addFood = exports.addFood = function () {var _ref = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(function _callee(root, _ref2) {var input = _ref2.input;var newFood, doc;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            newFood = new _Foods2.default(input);_context.next = 3;return (
              newFood.save());case 3:doc = _context.sent;if (
            doc) {_context.next = 8;break;}return _context.abrupt('return',
            new Error('...Can\'n insert'));case 8:


            _subscriptions.pubsub.publish('onSaveFood', doc);return _context.abrupt('return',
            doc);case 10:case 'end':return _context.stop();}}}, _callee, undefined);}));return function addFood(_x, _x2) {return _ref.apply(this, arguments);};}();


// Note : update food to mongo
var editFood = exports.editFood = function editFood(root, _ref3) {var id = _ref3.id,input = _ref3.input;
  var editedFood = _Foods2.default.findByIdAndUpdate(id, {
    $set: (0, _extends3.default)({},
    input) }).


  then(function (data) {return _Foods2.default.findById(id).exec();}).
  catch(function (err) {return new Error('Not Success');});
};
// Note : delete food to mongo
var removeFood = exports.removeFood = function removeFood(root, _ref4) {var id = _ref4.id;
  var deletedFood = _Foods2.default.findByIdAndRemove(id).
  then(function () {return { state: { state: 'done' } };}).
  catch(function () {return { state: { state: "can't delete" } };});
};