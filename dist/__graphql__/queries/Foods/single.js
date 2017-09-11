'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');




var _Foods = require('../../types/Foods');
var _Foods2 = require('../../../models/Foods');var _Foods3 = _interopRequireDefault(_Foods2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  type: _Foods.FoodsType,
  args: {
    id: {
      name: 'ID',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  resolve: function resolve(root, params) {
    return _Foods3.default.findById(params.id).exec();
  } };