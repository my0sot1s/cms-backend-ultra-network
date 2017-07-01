'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getFoods = exports.getFood = undefined;var _Foods = require('../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var getFood = exports.getFood = async function getFood(root, args, context) {
  return await _Foods2.default.findById(args.id).exec();
};

var getFoods = exports.getFoods = function getFoods() {
  return _Foods2.default.find();
};