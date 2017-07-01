'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.addFood = undefined;var _Foods = require('../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var addFood = exports.addFood = async function addFood(root, args) {
  var newFood = new _Foods2.default(params.input);
  var doc = await newFood.save();
  if (!doc) {
    return new Error('...Can\'n insert');
  } else
  {
    return doc;
  }
};