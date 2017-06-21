'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schemas = _mongoose2.default.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: _mongoose2.default.SchemaTypes.ObjectId },
  post: { type: String },
  media: { type: Array } });exports.default =


_mongoose2.default.model('Post', Schemas, 'Post');