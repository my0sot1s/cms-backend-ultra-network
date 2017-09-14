'use strict';var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_mongoose2.default.Promise = require('bluebird');
//Connect to mongo DB database
var connectModel = async function connectModel() {
  return await _mongoose2.default.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode?admin?replicaSet=ds159328",
  { useMongoClient: true });

};
connectModel();
_mongoose2.default.connection.on('error', function (err) {
  console.log("Không có kết nối mạng tới clouds db");
});
_mongoose2.default.connection.on('connected', function () {
  console.log('Mongoose default connection');
});