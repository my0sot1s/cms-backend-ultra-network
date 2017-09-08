'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// import data from '../../data.json'

var Schemas = _mongoose2.default.Schema({
  text: { type: String },
  createdBy: { type: _mongoose2.default.SchemaTypes.ObjectId },
  dateCreate: { type: Date, default: Date.now() } });exports.default =


_mongoose2.default.model('Message', Schemas, 'Message');