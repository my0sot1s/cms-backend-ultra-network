'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
  addFood: require('./Foods/resolves').addFood,
  editFood: require('./Foods/resolves').editFood,
  removeFood: require('./Foods/resolves').removeFood };


var mutationDef = exports.mutationDef = [
require('./Foods/mutationDef').default];