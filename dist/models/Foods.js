'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.update = exports.save = exports.find = undefined;var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);





































// for create field
var save = exports.save = function () {var _ref = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(
  function _callee(params) {var result;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              new Model(params).save());case 2:result = _context.sent;return _context.abrupt('return',
            result);case 4:case 'end':return _context.stop();}}}, _callee, this);}));return function save(_x) {return _ref.apply(this, arguments);};}();


// find and update
var update = exports.update = function () {var _ref2 = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(
  function _callee2(_ref3) {var _id = _ref3._id,link = _ref3.link,tag = _ref3.tag,title = _ref3.title,price = _ref3.price,fomular = _ref3.fomular;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
              Model.findByIdAndUpdate({ _id: _id }, {
                $set: {
                  link: link,
                  tag: tag,
                  title: title,
                  fomular: fomular,
                  price: price } }));case 2:return _context2.abrupt('return', _context2.sent);case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));return function update(_x2) {return _ref2.apply(this, arguments);};}();var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import data from '../../data.json'
var Schemas = _mongoose2.default.Schema({ link: { type: String }, tag: { type: String }, title: { type: String }, price: { type: Number, default: 0 }, fomular: { type: String }, dateCreate: { type: Date, default: Date.now() } });var Model = _mongoose2.default.model('Foods', Schemas, 'Foods'); // for (let i = 0; i < data.length; i++) {
//   new Model(data[i]).save((e, r) => {
//     if (!e) {
//       console.log(r)
//     }
//   })
// }
var find = exports.find = function find(limit, page, params) {var postId = params ? { _id: _mongoose2.default.Types.ObjectId(params) } : {};var query = Model.find(postId).sort({ dateCreate: -1 }).skip(limit && page ? limit * page : 0).limit(limit || 5);return query;};exports.default = Model;