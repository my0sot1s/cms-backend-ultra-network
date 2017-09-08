'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.publishEvent = exports.pubsub = undefined;var _graphqlSubscriptions = require('graphql-subscriptions');
var _schema = require('../schema');var _schema2 = _interopRequireDefault(_schema);
var _Foods = require('../types/Foods');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();

var publishEvent = exports.publishEvent = function publishEvent(event, doc) {
  pubsub.publish(event, doc);
};exports.default =
{
  onSaveFood: {
    type: _Foods.FoodsType,
    resolve: function resolve(payload, args, context, info) {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: function subscribe() {return pubsub.asyncIterator('onSaveFood');} } };