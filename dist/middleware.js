'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.headerConfig = headerConfig;function headerConfig(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE,OPTIONS');
  res.set('Access-Control-Expose-Headers', 'Content-Length');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
}
var whitelist = ['baseserver.herokuapp.com', 'localhost:3001', 'localhost:3002'];
var corsOptions = exports.corsOptions = {
  origin: function origin(_origin, callback) {
    if (whitelist.indexOf(_origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  } };


var setPubsubMiddleware = exports.setPubsubMiddleware = function setPubsubMiddleware(pubsub) {return function (req, res, next) {
    req.pubsub = pubsub;
    next();
  };};