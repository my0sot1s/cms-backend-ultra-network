'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schemas = _mongoose2.default.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: _mongoose2.default.SchemaTypes.ObjectId },
  postId: { type: _mongoose2.default.SchemaTypes.ObjectId },
  content: {
    text: { type: String, default: '' },
    media: { type: Array } },

  isSubcomment: { type: Boolean, default: false },
  commentId: { type: _mongoose2.default.SchemaTypes.ObjectId } });exports.default =



_mongoose2.default.model('Comments', Schemas, 'Comments');