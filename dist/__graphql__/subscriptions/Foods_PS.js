'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _Foods = require('../types/Foods');exports.default =
function (pubsub) {return {
    onSaveFood: {
      type: _Foods.FoodsType,
      resolve: function resolve(payload, args, context, info) {
        // Manipulate and return the new value
        return payload;
      },
      subscribe: function subscribe() {return pubsub.asyncIterator('onSaveFood');} } };};