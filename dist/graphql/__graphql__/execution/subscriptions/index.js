'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.subscriptionsDef = exports.publishEvent = exports.pubsub = undefined;var _graphqlSubscriptions = require('graphql-subscriptions');
var pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();

var publishEvent = exports.publishEvent = function publishEvent(event, doc) {
  pubsub.publish(event, doc);
};exports.default =
{
  onSaveFood: {
    resolve: function resolve(payload, args, context, info) {
      // Manipulate and return the new value
      return payload;
    },
    subscribe: function subscribe() {return pubsub.asyncIterator('onSaveFood');} } };


var subscriptionsDef = exports.subscriptionsDef = require('./subscriptionsDef').default;