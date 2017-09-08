'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getStoryContents = exports.getStoryContent = undefined;var _StoryContent = require('../../../../models/StoryContent');var _StoryContent2 = _interopRequireDefault(_StoryContent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var getStoryContent = exports.getStoryContent = async function getStoryContent(root, _ref, context) {var id = _ref.id;
  return await _StoryContent2.default.findById(id).exec();
};

var getStoryContents = exports.getStoryContents = async function getStoryContents() {
  return await _StoryContent2.default.find().exec();
};exports.default =

{ getStoryContent: getStoryContent, getStoryContents: getStoryContents };