'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _Foods = require('../../types/Foods');
var _Foods2 = require('../../../models/Foods');var _Foods3 = _interopRequireDefault(_Foods2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import { createTypeWithPagination } from 'graphql/utils'

var mutation = {
  type: _Foods.FoodsType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Foods.FoodsInputType) } },


  resolve: function resolve(root, params) {
    var newFood = new _Foods3.default(params.data);
    var doc = newFood.save();
    if (!doc) {
      return new Error('...Can\'n insert');
    } else
    return doc;
  } };exports.default =

mutation;