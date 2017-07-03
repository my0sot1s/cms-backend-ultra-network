'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.removeFood = exports.editFood = exports.addFood = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _Foods = require('../../../../models/Foods');var _Foods2 = _interopRequireDefault(_Foods);
var _subscriptions = require('../../subscriptions');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// Note : insert food to mongo
var addFood = exports.addFood = async function addFood(root, _ref) {var input = _ref.input;
  var newFood = new _Foods2.default(input);
  var doc = await newFood.save();
  if (!doc) {
    return new Error('...Can\'n insert');
  } else
  {
    _subscriptions.pubsub.publish('onSaveFood', doc);
    return doc;
  }
};
// Note : update food to mongo
var editFood = exports.editFood = function editFood(root, _ref2) {var id = _ref2.id,input = _ref2.input;
  var editedFood = _Foods2.default.findByIdAndUpdate(id, {
    $set: _extends({},
    input) }).


  then(function (data) {return _Foods2.default.findById(id).exec();}).
  catch(function (err) {return new Error('Not Success');});
};
// Note : delete food to mongo
var removeFood = exports.removeFood = function removeFood(root, _ref3) {var id = _ref3.id;
  var deletedFood = _Foods2.default.findByIdAndRemove(id).
  then(function () {return { state: { state: 'done' } };}).
  catch(function () {return { state: { state: "can't delete" } };});
};