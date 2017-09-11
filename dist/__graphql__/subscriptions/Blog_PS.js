'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _Blog = require('../types/Blog');exports.default =

function (pubsub) {return {
    onSaveBlog: {
      type: _Blog.BlogType,
      resolve: function resolve(payload, args, context, info) {
        // Manipulate and return the new value
        return payload;
      },
      subscribe: function subscribe() {return pubsub.asyncIterator('onSaveBlog');} } };};