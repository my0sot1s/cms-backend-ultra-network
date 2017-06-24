'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schemas = _mongoose2.default.Schema({
  link: { type: String },
  tag: { type: String },
  title: { type: String },
  price: { type: Number, default: 0 },
  fomular: { type: String },
  dateCreate: { type: Date, default: Date.now() } });


var Model = _mongoose2.default.model('Foods', Schemas, 'Foods');


var find = exports.find = function find(limit, page, params) {
  var postId = params ? { _id: _mongoose2.default.Types.ObjectId(params) } : {};
  var query = Model.
  find(postId).
  sort({ dateCreate: -1 }).
  skip(limit && page ? limit * page : 0).
  limit(limit || 5);
  return query;
};exports.default =



Model;