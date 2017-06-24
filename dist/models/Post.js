'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schemas = _mongoose2.default.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: _mongoose2.default.SchemaTypes.ObjectId },
  post: { type: String },
  media: { type: Array } });


var Model = _mongoose2.default.model('Post', Schemas, 'Post');

// const post = {
//   userId: mongoose.Types.ObjectId('594795b17fe4e54f72daace9'),
//   post: `Xin phép a thắng và mod duyệt giúp e :(E có ipad mini cho đứa cháu chơi , chủ yếu là bật YouTube xem mấy chương trình con nít mà vô tình bị chủ iCloud khoá! Máy e mua cũng 3-4 năm ở FPT, lúc e mua xong e có restore bình thường, đến tuần trước đi thay mặt kính do cháu làm vỡ thì thay gần 1 tiếng ở đường 3/2 Q10. Thay xong e thấy không có iCloud nhưng e chưa restore thử do không biết có bị cài iCloud ẩn không! Thì sáng ra thấy như hình! E up nhờ ae giúp e hay đi bẻ khoá`
// }
// new Model(post).save((e, r) => {
//   if (!e) {
//     console.log(r)
//   }
// })
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