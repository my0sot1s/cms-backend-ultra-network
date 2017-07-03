'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;exports.
























save = save;exports.






update = update;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Schemas = _mongoose2.default.Schema({ banner: { type: Array }, content: { type: Array }, images: { type: Array }, postId: { type: _mongoose2.default.SchemaTypes.ObjectId } });var Model = _mongoose2.default.model('StoriesContent', Schemas, 'StoriesContent');var find = exports.find = function find(limit, page, params) {var postId = params ? { postId: _mongoose2.default.Types.ObjectId(params) } : {};var query = Model.find(postId).sort({ dateCreate: -1 }).skip(limit && page ? limit * page : 0).limit(limit || 5);return query;}; // for create field
async function save(params) {var result = await new Model(params).save();return result;} // find and update
async function update(_ref) {var _id = _ref._id,banner = _ref.banner,content = _ref.content,images = _ref.images,postId = _ref.postId;return await Model.findByIdAndUpdate({ _id: _id }, { $set: {
      banner: banner,
      content: content,
      images: images,
      postId: postId } });


}exports.default =


Model;