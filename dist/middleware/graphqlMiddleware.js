'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

[
_bodyParser2.default.json(),
_bodyParser2.default.text({ type: 'application/graphql' }),
function (req, res, next) {
  if (req.is('application/graphql')) {
    req.body = { query: req.body };
  }
  next();
}];