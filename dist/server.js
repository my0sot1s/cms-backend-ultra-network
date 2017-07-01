'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _cors = require('cors');var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _Foods = require('./models/Foods');var _Foods2 = _interopRequireDefault(_Foods);
require('./models');
var _controller = require('./controller');var _controller2 = _interopRequireDefault(_controller);
var _index = require('./middleware/index');


var _schema = require('./graphql/schema');var _schema2 = _interopRequireDefault(_schema);
var _subscriptions = require('./graphql/subscriptions');
var _graphql = require('graphql');
var _subscriptionsTransportWs = require('subscriptions-transport-ws');
var _graphqlServerExpress = require('graphql-server-express');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}} // import 'express-graphql'
// import { corsOptions, headerConfig, setPubsubMiddleware } from './middleware'
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
// app.use(cors())
app.use(require('cors')());
//Allow CORS
app.all('*', _index.middleware.header);
// app.all('*', middleware.)

app.get('/', function (req, res) {
  res.sendfile(_path2.default.join(__dirname, 'public/index.html'));
});
// app.get('/graphql', (req, res) => {
//   res.send(`Opp can't support now!!!  ≧◉◡◉≦ `)
// })

// api send with controller

var len = _controller2.default.length;
for (var i = 0; i < len; i++) {
  app.use('/api', (0, _cors2.default)(_index.middleware.cors), _controller2.default[i]);
}

app.use.apply(app, ['/graphql'].concat(_toConsumableArray(_index.middleware.graphql), [(0, _graphqlServerExpress.graphqlExpress)({ schema: _schema2.default })]));

app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql',
  subscriptionEnpoint:
  process.env.NODE_ENV === 'development' ? 'ws://localhost:3001/subscriptions' : 'ws://https://baseserver.herokuapp.com/subscriptions' }));



_subscriptionsTransportWs.SubscriptionServer.create({
  execute: _graphql.execute,
  subscribe: _graphql.subscribe,
  schema: _schema2.default },
{
  server: wsServe,
  path: '/subscriptions' });

wsServe.listen(PORT, function () {
  console.log('*** started at ' + PORT + ' ***');
  console.log('+*******************************+');
});