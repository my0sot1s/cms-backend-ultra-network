"use strict";var _mongoose = require("mongoose");var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//Connect to mongo DB database
_mongoose2.default.connect("mongodb://dev:1223@ds159328.mlab.com:59328/dbnode");