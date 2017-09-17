'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getStories = exports.getStory = undefined;var _Stories = require('../../../../models/Stories');var _Stories2 = _interopRequireDefault(_Stories);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var getStory = exports.getStory = async function getStory(root, _ref, context) {var id = _ref.id;
  return await _Stories2.default.findById(id).exec();
};

var getStories = exports.getStories = async function getStories() {
  return await _Stories2.default.find().exec();
};exports.default =

{ getStories: getStories, getStory: getStory };