'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql = require('graphql');





var _Foods = require('../../types/Foods');
var _Foods2 = require('../../../models/Foods');var _Foods3 = _interopRequireDefault(_Foods2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// import { pubsub } from '../../subscriptions'
// import { createTypeWithPagination } from 'graphql/utils'
var mutation = { type: _Foods.FoodsType,
  args: {
    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Foods.FoodsInputType) } },


  resolve: async function resolve(root, params, _ref) {var pubsub = _ref.pubsub;
    var newFood = new _Foods3.default(params.data);
    var doc = newFood.save();
    if (!doc) {
      return new Error('...Can\'n insert');
    } else
    {
      if (pubsub) {
        pubsub.publish('onSaveFood', doc);
      }
      return doc;
    }
  } };exports.default =

mutation;