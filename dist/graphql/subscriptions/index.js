'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.subscriptionManager = undefined;var _graphqlSubscriptions = require('graphql-subscriptions');
var _schema = require('../schema');var _schema2 = _interopRequireDefault(_schema);
var _subs = require('../mutations/Foods/subs');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var pubsub = new _graphqlSubscriptions.PubSub();

var subscriptionManager = exports.subscriptionManager = new _graphqlSubscriptions.SubscriptionManager({
  schema: _schema2.default,
  pubsub: pubsub });