'use strict';Object.defineProperty(exports, "__esModule", { value: true });var path = require("path");
/**
                                                                                                        * Các hằng số hệ thống.
                                                                                                        */

var LOCAL_PORT = exports.LOCAL_PORT = 3001;
var PORT = exports.PORT = process.env.PORT || LOCAL_PORT;
var SESSION_SECRET = exports.SESSION_SECRET = '3223g41T/Kai0shin][Sama';
var DEVELOPMENT = exports.DEVELOPMENT = 'development';
var PRODUCTION = exports.PRODUCTION = 'production';
var STATIC_PATH = exports.STATIC_PATH = path.join(__dirname, '../../public');
var STATIC_VIEWS = exports.STATIC_VIEWS = __dirname + '../../public/views';


/**
                                                                             * Hằng số database
                                                                             */


/**
                                                                                 * khóa token
                                                                                 */

var STATIC_SECRET_TOKEN = exports.STATIC_SECRET_TOKEN = "aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzAuYW5oc2FuZy4w";