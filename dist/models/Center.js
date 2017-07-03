'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;exports.
































save = save;exports.






update = update;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import data from '../../data.json'
var Schemas = _mongoose2.default.Schema({ link: { type: String }, tag: { type: String }, title: { type: String }, dateCreate: { type: Date, default: Date.now() } });var Model = _mongoose2.default.model('Center', Schemas, 'Center'); // for (let i = 0; i < data.length; i++) {
//   new Model(data[i]).save((e, r) => {
//     if (!e) {
//       console.log(r)
//     }
//   })
// }
var find = exports.find = function find(limit, page, params) {var postId = params ? { _id: _mongoose2.default.Types.ObjectId(params) } : {};var query = Model.find(postId).sort({ dateCreate: -1 }).skip(limit && page ? limit * page : 0).limit(limit || 5);return query;}; // for create field
async function save(params) {var result = await new Model(params).save();return result;} // find and update
async function update(_ref) {var _id = _ref._id,link = _ref.link,tag = _ref.tag,title = _ref.title;return await Model.findByIdAndUpdate({ _id: _id }, { $set: { link: link, tag: tag, title: title } });}exports.default =

Model;