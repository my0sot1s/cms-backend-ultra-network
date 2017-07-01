'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _models = require('./models');var models = _interopRequireWildcard(_models);
var _controller = require('./controller');var _controller2 = _interopRequireDefault(_controller);
var _middleware = require('./middleware');
var _schema = require('./graphql/schema');var _schema2 = _interopRequireDefault(_schema);
var _subscriptions = require('./graphql/subscriptions');
var _graphql = require('graphql');
var _subscriptionsTransportWs = require('subscriptions-transport-ws');
var _graphqlServerExpress = require('graphql-server-express');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}
// http://dev.apollodata.com/tools/graphql-subscriptions/setup.html#subscription-server

console.log('Running...');
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3001;

//  ex https://medium.com/@simontucker/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11


// create server ws for graphql suubscrition

var wsServe = (0, _http.createServer)(app);

//Set our static file directory to public
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
// help express can read param with ?
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(require('cors')(_middleware.middleware.cors));
//Allow CORS
app.all('*', _middleware.middleware.header);

app.get('/', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/index.html'));
});
app.get('/graphql', function (req, res) {
  res.send('Opp can\'t support now!!!  \u2267\u25C9\u25E1\u25C9\u2266 ');
});

// api send with controller

var len = _controller2.default.length;
for (var i = 0; i < len; i++) {
  app.use('/api', _controller2.default[i]);
}

app.use.apply(app, ['/graphql'].concat(_toConsumableArray(_middleware.middleware.graphql), [(0, _graphqlServerExpress.graphqlExpress)({ schema: _schema2.default })]));

app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql',
  subscriptionEnpoint:
  // process.env.NODE_ENV === 'development'
  //   ? `ws://localhost:3001/subscriptions`
  'ws://https://baseserver.herokuapp.com/subscriptions' }));

wsServe.listen(PORT, function () {
  console.log('*** started at ' + PORT + ' ***');
  new _subscriptionsTransportWs.SubscriptionServer({
    execute: _graphql.execute,
    subscribe: _graphql.subscribe,
    schema: _schema2.default },
  {
    server: wsServe,
    path: '/subscriptions' });

  console.log('+*******************************+');
});