'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schemas = _mongoose2.default.Schema({
  banner: { type: Array },
  content: { type: Array },
  images: { type: Array },
  postId: { type: _mongoose2.default.SchemaTypes.ObjectId } });


var Model = _mongoose2.default.model('StoriesContent', Schemas, 'StoriesContent');


var find = exports.find = function find(limit, page) {
  var query = Model.
  find({}).
  sort({ dateCreate: -1 }).
  skip(limit && page ? limit * page : 0).
  limit(limit || 5);
  return query;
};exports.default =



Model;