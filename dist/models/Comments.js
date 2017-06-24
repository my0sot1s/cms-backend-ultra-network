'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.find = undefined;
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schemas = _mongoose2.default.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userId: { type: _mongoose2.default.SchemaTypes.ObjectId },
  postId: { type: _mongoose2.default.SchemaTypes.ObjectId },
  content: {
    text: { type: String, default: '' },
    media: { type: Array } },

  isSubcomment: { type: Boolean, default: false },
  commentId: { type: _mongoose2.default.SchemaTypes.ObjectId } });



var Model = _mongoose2.default.model('Comments', Schemas, 'Comments');


// for (let i = 0; i < 10; i++) {
//   var d = {
//     userId: mongoose.Types.ObjectId('594795b17fe4e54f72daace9'),
//     postId: mongoose.Types.ObjectId('594cd8c35755a06d674eb1a1'),
//     content: {
//       text: 'comment số ' + i
//     },
//   }
//   new Model(d).save((e, r) => {
//     if (!e) {
//       console.log(r)
//     }
//   })
// }



var find = exports.find = function find(limit, page) {
  var query = Model.
  find({}).
  sort({ dateCreate: -1 }).
  skip(limit && page ? limit * page : 0).
  limit(limit || 5);
  return query;
};exports.default =


Model;