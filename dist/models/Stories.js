'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;exports.




























save = save;exports.






update = update;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Schemas = _mongoose2.default.Schema({ titles: { type: String }, author: { type: String }, begin: { type: String }, views: { type: Number, default: 0 }, liked: { type: Number, default: 0 }, dateCreate: { type: Date, default: Date.now() }, userId: { type: _mongoose2.default.SchemaTypes.ObjectId }, banner: { type: Array } });var Model = _mongoose2.default.model('Stories', Schemas, 'Stories');var find = exports.find = function find(limit, page, params) {var postId = params ? { _id: _mongoose2.default.Types.ObjectId(params) } : {};var query = Model.find(postId).sort({ dateCreate: -1 }).skip(limit && page ? limit * page : 0).limit(limit || 5);return query;}; // for create field
async function save(params) {var result = await new Model(params).save();return result;} // find and update
async function update(_ref) {var _id = _ref._id,title = _ref.title,author = _ref.author,begin = _ref.begin,view = _ref.view,liked = _ref.liked,userId = _ref.userId,banner = _ref.banner;return await Model.findByIdAndUpdate({ _id: _id }, { $set: {
            title: title,
            author: author,
            begin: begin,
            view: view,
            liked: liked,
            userId: userId,
            banner: banner } });


}exports.default =


Model;