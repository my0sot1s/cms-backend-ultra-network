'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;exports.

























save = save;exports.




findbyId = findbyId;exports.







deleted = deleted;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import data from '../../data.json'
var Schemas = _mongoose2.default.Schema({ link: { type: String }, tag: { type: String }, title: { type: String }, dateCreate: { type: Date, default: Date.now() }, content: { type: String } });var Model = _mongoose2.default.model('Blog', Schemas, 'Blog');var find = exports.find = function find(limit, page, params) {var postId = params ? { _id: _mongoose2.default.Types.ObjectId(params) } : {};var query = Model.find(postId).sort({ dateCreate: -1 }).skip(limit && page ? limit * page : 0).limit(limit || 5);return query;}; // for create field
async function save(params) {var result = new Model(params);return await result.save();}async function findbyId(id) {return await Model.findById(id, function (err, res) {return res;});} // find and update
async function deleted(_id) {return await Model.findByIdAndRemove(_id, function (err, kq) {if (err) return { err: err };else return { kq: kq };
    });
}exports.default =



Model;