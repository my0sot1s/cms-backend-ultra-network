'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.pubsub = undefined;var _graphqlSubscriptions = require('graphql-subscriptions');
var _schema = require('../schema');var _schema2 = _interopRequireDefault(_schema);
var _subs = require('../mutations/Foods/subs');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();exports.default =

{
  onSaveFood: require('../mutations/Foods/subs').subscription };