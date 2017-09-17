'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.storiesResolvers = undefined;var _StoryContent = require('../../../models/StoryContent');var _StoryContent2 = _interopRequireDefault(_StoryContent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = '\ntype Stories {\n  _id: ID!\n  titles: String\n  author: String\n  begin: String\n  views: Int\n  liked: Int\n  userId: ID\n  banner: [String]\n  dateCreate: String\n  content: StoryContent\n}\ninput StoriesInput {\n titles: String\n author: String\n begin: String\n views: String\n liked: String\n userId: String\n banner: String\n}\n';

























var storiesResolvers = exports.storiesResolvers = {
  content: async function content(_ref) {var _id = _ref._id;
    console.log(_id);
    return await _StoryContent2.default.findOne({ postId: _id }).exec();
  } };