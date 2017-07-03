'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;exports.


























save = save;exports.






update = update;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //Create a schema for chat
var Schema = _mongoose2.default.Schema({ dateCreate: { type: Date, default: Date.now() }, content: { type: String, default: '' }, username: { type: String, default: '' }, room: { type: String, default: '' } }); //Create a model from the chat schema
var Model = _mongoose2.default.model('Chats', Schema, 'Chats');var find = exports.find = function find(limit, page) {var query = Model.find({}).sort({ dateCreate: -1 }).skip(limit && page ? limit * page : 0).limit(limit || 5);return query;}; // for create field
async function save(params) {var result = await new Model(params).save();return result;} // find and update
async function update(_ref) {var _id = _ref._id,content = _ref.content,room = _ref.room;return await Model.findByIdAndUpdate({ _id: _id }, { $set: { content: content, room: room } });


}exports.default =



Model;