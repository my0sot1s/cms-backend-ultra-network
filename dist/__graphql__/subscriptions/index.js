'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.publishEvent = exports.pubsub = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _graphqlSubscriptions = require('graphql-subscriptions');
var _schema = require('../schema');var _schema2 = _interopRequireDefault(_schema);
var _Blog_PS = require('./Blog_PS');var _Blog_PS2 = _interopRequireDefault(_Blog_PS);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();

var publishEvent = exports.publishEvent = function publishEvent(event, doc) {
  pubsub.publish(event, doc);
};exports.default = _extends({},

(0, _Blog_PS2.default)(pubsub),
(0, _Blog_PS2.default)(pubsub));