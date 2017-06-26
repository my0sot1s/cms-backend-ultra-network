'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.subscription = exports.subscriptionEvent = undefined;var _Foods = require('../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);
var _Foods3 = require('../../types/Foods');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


// sub event

var subscriptionEvent = exports.subscriptionEvent = function subscriptionEvent(ontions, args) {return {
    onSave: function onSave(food) {
      return food._id = args._id;
    } };};



var subscription = exports.subscription = {
  type: _Foods3.FoodsType,
  resolve: function resolve(item) {
    return item;
  } };