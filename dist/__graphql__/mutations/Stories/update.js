'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




// import { createTypeWithPagination } from 'graphql/utils'
var _graphql = require('graphql');var _Stories = require('../../types/Stories');
var _Stories2 = require('../../../models/Stories');var _Stories3 = _interopRequireDefault(_Stories2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var mutation = {
  type: _Stories.StoriesType,
  args: {
    id: {
      name: 'id',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },

    data: {
      name: 'data',
      type: new _graphql.GraphQLNonNull(_Stories.StoriesInputType) } },


  resolve: function resolve(root, params) {
    return _Stories3.default.findByIdAndUpdate(params.id, {
      $set: _extends({},
      params.data) }).


    then(function (data) {return _Stories3.default.findById(data.id).exec();}).
    catch(function (err) {return new Error('Not Success');});
  } };exports.default =


mutation;