'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _socket = require('socket.io');var _socket2 = _interopRequireDefault(_socket);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _models = require('./models');var models = _interopRequireWildcard(_models);
var _socket3 = require('./socket');
var _User = require('./models/User');var _User2 = _interopRequireDefault(_User);
var _controller = require('./controller');var _controller2 = _interopRequireDefault(_controller);
var _Comments = require('./models/Comments');var a = _interopRequireWildcard(_Comments);
var _middleware = require('./middleware');
var _schema = require('./graphql/schema');var _schema2 = _interopRequireDefault(_schema);
var _expressGraphql = require('express-graphql');var _expressGraphql2 = _interopRequireDefault(_expressGraphql);
var _graphql = require('graphql');
var _subscriptionsTransportWs = require('subscriptions-transport-ws');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server
var app = (0, _express2.default)();
var serve = _http2.default.Server(app);
var io = (0, _socket2.default)(serve);
var PORT = process.env.PORT || 3001;

//Set our static file directory to public
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
// help express can read param with ?
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(require('cors')());
//Allow CORS
app.all('*', _middleware.headerConfig);

app.get('/', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/index.html'));
});

// api send with controller

var len = _controller2.default.length;
for (var i = 0; i < len; i++) {
  app.use('/api', _controller2.default[i]);
}


app.use('/graphql', (0, _expressGraphql2.default)(function () {return {
    schema: _schema2.default,
    graphiql: true,
    pretty: true };}));



// app.get('/fb', (req, res) => {
//   res.sendfile(path.join(__dirname, 'public/fb.html'))
// })
// idiot
// app.get('/socket', (req, res) => {
//   res.sendfile(path.join(__dirname, 'public/socket.html'))
// })
serve.listen(PORT, function () {
  console.log('started...');
});

// const subscriptions = new SubscriptionServer({
//   execute,
// })

(0, _socket3.socket)(io);