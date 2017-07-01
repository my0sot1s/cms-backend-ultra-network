'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _Foods = require('../../types/Foods');
var _Foods2 = require('../../../models/Foods');var _Foods3 = _interopRequireDefault(_Foods2);

var _subscriptions = require('../../subscriptions');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var mutation = {
  type: _Foods.FoodsType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Foods.FoodsInputType) } },


  resolve: async function resolve(root, params) {
    var newFood = new _Foods3.default(params.data);
    var doc = await newFood.save();
    if (!doc) {
      return new Error('...Can\'n insert');
    } else
    {
      (0, _subscriptions.publishEvent)('onSaveFood', doc);
      return doc;
    }
  } }; // import { pubsub } from '../../schema'
// import { createTypeWithPagination } from 'graphql/utils'
exports.default = mutation;