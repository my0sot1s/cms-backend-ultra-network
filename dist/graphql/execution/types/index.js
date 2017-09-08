'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = [
require('./Foods').default,
require('./State').default,
require('./Stories').default,
require('./StoryContent').default,

// Channel chat room
require('./Message').default,
require('./User').default,
require('./Channel').default];


var typeResolves = exports.typeResolves = {
  Stories: require('./Stories').storiesResolvers };