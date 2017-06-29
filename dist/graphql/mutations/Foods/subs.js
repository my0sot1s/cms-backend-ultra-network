'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.subscription = exports.subscriptionEvent = undefined;var _Foods = require('../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);
var _Foods3 = require('../../types/Foods');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


// sub event

var subscriptionEvent = exports.subscriptionEvent = function subscriptionEvent(ontions) {return {
    onSaveFood: function onSaveFood(food) {
      console.log({ food: food });
      return food;
    } };};



var subscription = exports.subscription = {
  type: _Foods3.FoodsType,
  // resolve: item => item,
  start: function start(a, b, c) {
    debugger;
  },
  stop: function stop() {
    debugger;
  } };