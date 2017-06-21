'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.Comments = exports.User = exports.Chat = undefined;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _Chat = require('./Chat');var _Chat2 = _interopRequireDefault(_Chat);
var _User = require('./User');var _User2 = _interopRequireDefault(_User);
var _Comments = require('./Comments');var _Comments2 = _interopRequireDefault(_Comments);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//Connect to mongo DB database
_mongoose2.default.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode");


var doc = {
  userName: 'admin',
  passWord: 'admin',
  email: 'manhte231@gmail.com',
  borned: '2/3/2000',
  lastName: 'Hoang',
  firstName: 'Nguyen',
  avatar: 'http://i.imgur.com/Fm78yn7.jpg',
  salt: _mongoose2.default.Types.ObjectId() };

console.log(doc
// register(doc, d => {
//   console.log(d)
// })
);(0, _User.login)('admin', 'admin', function (err, i, info) {
  console.log(err, i);
  if (i) {
    console.log(info);
  }
});exports.
Chat = _Chat2.default;exports.User = _User2.default;exports.Comments = _Comments2.default;