'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.changePassword = exports.changeInfor = exports.login = exports.register = undefined;var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _crypto = require('crypto');var _crypto2 = _interopRequireDefault(_crypto);
var _promise = require('promise');var _promise2 = _interopRequireDefault(_promise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//Create a schema for chat
var Schema = _mongoose2.default.Schema({
    dateCreate: { type: Date, default: Date.now() },
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    firstName: { type: String },
    lastName: { type: String },
    displayName: { type: String, default: 'Unknowed!!' },
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
                                                               * @param {String} password 
                                                               * @param {String} hashPass 
                                                               * @param {String} salt 
                                                               */
var hash = function hash(password, hashPass, salt) {
    console.log(hashPass, salt);
    return new _promise2.default(function (resolve, reject) {
        _crypto2.default.pbkdf2(password, salt.toHexString(), 1000, 16, 'sha512', function (err, derivedKey) {
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
    _crypto2.default.pbkdf2(doc.password, doc.salt.toHexString(), 1000, 16, 'sha512', function (err, derivedKey) {
        if (err) cb(err, null);else
        {
            doc.password = derivedKey.toString('hex');
            var user = new Model(doc);
            user.save(function (err, doc) {
                if (err) cb(err, null);else
                cb(null, doc);
            });
        }
    });
};
/**
    * 
    * @param {String} username 
    * @param {String} passWord 
    * @param {Function} cb 
    * @return {object.}
    */
var login = exports.login = function login(username, password, cb) {
    Model.find({ username: username }, function (err, resp) {
        if (err) throw new Error(err);else
        {
            if (resp.length === 0) {
                cb('Wrong username', false);
            } else
            hash(password, resp[0].password, resp[0].salt).
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

var changeInfor = exports.changeInfor = function changeInfor(username, password, cb) {

};
var changePassword = exports.changePassword = function changePassword(oldPw, newPw, cb) {

};

//Create a model from the chat schema
exports.default = Model;