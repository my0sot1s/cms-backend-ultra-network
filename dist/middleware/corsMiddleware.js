'use strict';Object.defineProperty(exports, "__esModule", { value: true });var whitelist = ['baseserver.herokuapp.com', 'localhost:3001', 'localhost:3002'];exports.default =
function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true // reflect (enable) the requested origin in the CORS response
    };} else {
    corsOptions = { origin: false // disable CORS for this request
    };}
  callback(null, corsOptions); // callback expects two parameters: error and options
};