'use strict';Object.defineProperty(exports, "__esModule", { value: true });var path = require("path");
/**
                                                                                                        * Các hằng số hệ thống.
                                                                                                        */

var LOCAL_PORT = exports.LOCAL_PORT = 3001;
var PORT = exports.PORT = process.env.PORT || LOCAL_PORT;
var SESSION_SECRET = exports.SESSION_SECRET = '3223g41T';
var DEVELOPMENT = exports.DEVELOPMENT = 'development';
var PRODUCTION = exports.PRODUCTION = 'production';
var STATIC_PATH = exports.STATIC_PATH = path.join(__dirname, '../../public');
var STATIC_VIEWS = exports.STATIC_VIEWS = __dirname + '../../public/views';

/**
                                                                             * Some config
                                                                             */
var PRODUCTION_HOST = exports.PRODUCTION_HOST = 'baseserver.herokuapp.com';
var DEVELOPMENT_HOST = exports.DEVELOPMENT_HOST = 'localhost:' + LOCAL_PORT;
var DEVELOPMENT_WS = exports.DEVELOPMENT_WS = 'ws://' + DEVELOPMENT_HOST + '/subscriptions';
var PRODUCTION_WSS = exports.PRODUCTION_WSS = 'wss://' + PRODUCTION_HOST + '/subscriptions';

/**
                                                                                              * Hằng số database
                                                                                              */
var DB = exports.DB = {
  "dbnode": {
    "host": "ds159328.mlab.com",
    "port": 59328,
    "url": "mongodb://dev:1223@ds159328.mlab.com:59328/dbnode",
    "database": "dbnode",
    "password": "1223",
    "name": "dbnode",
    "user": "dev",
    "connector": "mongodb" }



  /**
                              * khóa token
                              */ };

var STATIC_SECRET_TOKEN = exports.STATIC_SECRET_TOKEN = "aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzAuYW5oc2FuZy4w";