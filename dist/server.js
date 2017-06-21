'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _socket = require('socket.io');var _socket2 = _interopRequireDefault(_socket);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _models = require('./models');var models = _interopRequireWildcard(_models);
var _socket3 = require('./socket');
var _User = require('./models/User');var _User2 = _interopRequireDefault(_User);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var app = (0, _express2.default)();
var serve = _http2.default.Server(app);
var io = (0, _socket2.default)(serve);
serve.listen(process.env.PORT || 3001

//Set our static file directory to public
);app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

//Allow CORS
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.get('/', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/index.html'));
});
app.get('/socket', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/socket.html'));
});
app.get('/login/:user/:pass', function (req, res) {
  (0, _User.login)(req.params.user, req.params.pass, function (err, r, k) {
    if (r && !err)
    res.send(k);else
    res.send('Login failure');
  });
});
app.get('/fb', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/fb.html'));
});


(0, _socket3.socket)(io);