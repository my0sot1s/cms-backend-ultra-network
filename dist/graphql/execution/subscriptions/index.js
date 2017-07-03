'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.subscriptionsDef = exports.pubsub = undefined;var _graphqlSubscriptions = require('graphql-subscriptions');
var pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();exports.default =

{
  onSaveFood: {
    subscribe: function subscribe() {return pubsub.asyncIterator('onSaveFood');} } };



var subscriptionsDef = exports.subscriptionsDef = require('./subscriptionsDef').default;