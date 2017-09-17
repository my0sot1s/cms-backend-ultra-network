'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Stories = require('../../types/Stories');
var _Stories2 = require('../../../models/Stories');var _Stories3 = _interopRequireDefault(_Stories2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Stories.StoriesType,
  args: {
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  resolve: function resolve(root, params) {
    return _Stories3.default.findById(params.id).exec();
  } };