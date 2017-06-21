'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.login = exports.register = undefined;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _crypto = require('crypto');var _crypto2 = _interopRequireDefault(_crypto);
var _promise = require('promise');var _promise2 = _interopRequireDefault(_promise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//Create a schema for chat
var Schema = _mongoose2.default.Schema({
  dateCreate: { type: Date, default: Date.now() },
  userName: { type: String, default: '' },
  passWord: { type: String, default: '' },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  borned: { type: String },
  gender: { type: Number, default: 1 }, //0 gái,1 trai,2 khác
  avatar: { type: String, default: 'https://s3.amazonaws.com/wll-community-production/images/no-avatar.png' },
  salt: { type: _mongoose2.default.SchemaTypes.ObjectId } });


Schema.virtual('fullName').
get(function () {
  return undefined.firstName.concat(' ', undefined.lastName);
}).
set(function (name) {
  var split = name.split('*');
  undefined.lastName = split[1];
  undefined.firstName = split[0];
});

var Model = _mongoose2.default.model('User', Schema, 'User');

/**
                                                               * 
                                                               * @param {String} passWord 
                                                               * @param {String} hashPass 
                                                               * @param {String} salt 
                                                               */
var hash = function hash(passWord, hashPass, salt) {
  console.log(hashPass, salt);
  return new _promise2.default(function (resolve, reject) {
    _crypto2.default.pbkdf2(passWord, salt.toHexString(), 1000, 16, 'sha512', function (err, derivedKey) {
      if (err) reject(err);else
      {
        derivedKey.toString('hex') === hashPass ? resolve(null, true) : resolve('Wrong Password', false);
      }
    });
  });
};
/**
    * 
    * @param {Object} doc 
    * @param {Function} cb 
    */
var register = exports.register = function register(doc, cb) {
  _crypto2.default.pbkdf2(doc.passWord, doc.salt.toHexString(), 1000, 16, 'sha512', function (err, derivedKey) {
    if (err) throw new Error(err);else
    {
      doc.passWord = derivedKey.toString('hex');
      var user = new Model(doc);
      user.save(function (err, doc) {
        if (err) throw new Error(err);else
        cb(doc);
      });
    }
  });
};
/**
    * 
    * @param {String} userName 
    * @param {String} passWord 
    * @param {Function} cb 
    */
var login = exports.login = function login(userName, passWord, cb) {
  Model.find({ userName: userName }, function (err, resp) {
    if (err) throw new Error(err);else
    {
      if (resp.length === 0) {
        cb('Wrong userName', false);
      } else
      hash(passWord, resp[0].passWord, resp[0].salt).
      then(function (err, res) {
        if (err) {
          cb(err, false);
        } else {cb(null, true, resp[0]);}
      }).
      catch(function (err) {
        console.log(err);
        cb('System', false);
      });
    }
  });
};
//Create a model from the chat schema
exports.default = Model;